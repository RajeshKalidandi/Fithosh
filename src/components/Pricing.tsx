import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Basic workout plans',
      'Simple nutrition tracking',
      'Community support',
      'Progress tracking',
    ],
  },
  {
    name: 'Pro',
    price: '$15',
    description: 'Best for serious fitness enthusiasts',
    features: [
      'Advanced AI workout plans',
      'Personalized nutrition plans',
      'Priority support',
      'Video form analysis',
      'Custom meal recipes',
      'Progress analytics',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'All Pro features',
      'Custom branding',
      'API access',
      'Dedicated support',
      'Team analytics',
      'Bulk user management',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.featured ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                    : 'bg-gray-50 text-blue-600 hover:bg-gray-100'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}