'use client'

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  const prices = {
    monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY!,
    yearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY!,
  }

  const handleCheckout = async (priceId: string) => {
    if (!user) {
      router.push('/sign-in')
      return
    }

    try {
      const checkoutSession = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          userId: user.id,
          email: user.emailAddresses[0].emailAddress,
        }),
      }).then(res => res.json())

      if (checkoutSession.url) {
        router.push(checkoutSession.url)
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
    }
  }

  if (!isLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-100 h-96 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
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
