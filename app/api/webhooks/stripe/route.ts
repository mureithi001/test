import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('STRIPE_WEBHOOK_SECRET is not set in environment variables')
}

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: Request) {
  try {
    const sig = request.headers.get('stripe-signature')
    const body = await request.text()

    if (!sig) {
      return new NextResponse('No signature found', { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return new NextResponse('Webhook Error', { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session

    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(session)
        break
      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription)
        break
      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(deletedSubscription)
        break
      default:
        console.log('Unhandled event type:', event.type)
        return new NextResponse('Unhandled event type', { status: 200 })
    }

    return new NextResponse('Webhook processed', { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const subscription = session.subscription as string
  const customerId = session.customer as string
  const userId = session.metadata?.userId as string

  // Fetch the subscription details to get the period end
  const subscriptionDetails = await stripe.subscriptions.retrieve(subscription)
  
  await prisma.subscription.create({
    data: {
      userId,
      customerId,
      subscriptionId: subscription,
      status: 'active',
      currentPeriodEnd: new Date(subscriptionDetails.current_period_end * 1000),
    },
  })
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string
  const userId = subscription.metadata?.userId as string

  await prisma.subscription.update({
    where: { userId },
    data: {
      customerId,
      subscriptionId: subscription.id,
      status: subscription.status === 'active' ? 'active' : 'past_due',
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
  })
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId as string

  await prisma.subscription.update({
    where: { userId },
    data: {
      status: 'canceled',
    },
  })
}
