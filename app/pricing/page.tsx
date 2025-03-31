'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { stripe } from "@/lib/stripe"

export default function PricingPage() {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
    router.push('/api/auth/signin')
    return null
  }

  const prices = {
    monthly: process.env.STRIPE_PRICE_ID_MONTHLY!,
    yearly: process.env.STRIPE_PRICE_ID_YEARLY!,
  }

  const handleCheckout = async (priceId: string) => {
    try {
      const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        customer_email: session.user?.email,
        metadata: {
          userId: session.user.id,
        },
        success_url: `${process.env.NEXTAUTH_URL}/subscription/success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/pricing`,
      })

      router.push(checkoutSession.url!)
    } catch (error) {
      console.error('Error creating checkout session:', error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Choose Your Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Plan
          </h2>
          <p className="text-4xl font-bold text-indigo-600 mb-6">
            $9.99 / month
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>Access to all premium content</li>
            <li>Unlimited article downloads</li>
            <li>Priority support</li>
          </ul>
          <Button
            onClick={() => handleCheckout(prices.monthly)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Subscribe Monthly
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Yearly Plan
          </h2>
          <p className="text-4xl font-bold text-indigo-600 mb-6">
            $99.99 / year
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>Access to all premium content</li>
            <li>Unlimited article downloads</li>
            <li>Priority support</li>
            <li>Save 20%</li>
          </ul>
          <Button
            onClick={() => handleCheckout(prices.yearly)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Subscribe Yearly
          </Button>
        </div>
      </div>
    </div>
  )
}
