import React from 'react';
import { Target, Cpu, TrendingUp } from 'lucide-react';

const steps = [
  {
    name: 'Tell us about your goals',
    description: 'Share your fitness objectives and preferences with us.',
    icon: Target,
  },
  {
    name: 'Get an AI-powered plan',
    description: 'Receive a personalized workout and nutrition plan.',
    icon: Cpu,
  },
  {
    name: 'Track your progress',
    description: 'Monitor your improvements and adjust your plan in real-time.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How FitHosh Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get started with FitHosh in three simple steps
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="flex flex-col items-center">
                <div className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-4 rounded-full bg-blue-600 p-3">
                      <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-xl">Step {index + 1}</span>
                    {step.name}
                  </dt>
                  <dd className="mt-4 text-center text-base leading-7 text-gray-600">
                    {step.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}