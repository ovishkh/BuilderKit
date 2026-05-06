import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: '$19',
    description: 'Perfect for side projects and individual developers.',
    features: ['5 Projects', 'Basic Analytics', 'Community Support', '100 AI Credits'],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    price: '$49',
    description: 'The standard for growing startups and professional builders.',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '1000 AI Credits', 'Custom Domains'],
    featured: true,
  },
];

export const Pricing = () => {
  return (
    <div className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-slate-800 xl:p-10 ${
                tier.featured ? 'bg-slate-900/50 ring-2 ring-blue-500' : ''
              }`}
            >
              <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-slate-400">/month</span>
              </p>
              <button
                className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600 shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Buy plan
              </button>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
