import React from 'react';
import { Brain, Activity, Utensils, MessageSquare } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Workouts',
    description: 'Personalized fitness plans that adapt to your progress and goals.',
    icon: Brain,
  },
  {
    name: 'Smart Nutrition',
    description: 'Custom meal plans and recipes based on your dietary preferences.',
    icon: Utensils,
  },
  {
    name: 'Progress Tracking',
    description: 'Real-time feedback and progress monitoring with computer vision.',
    icon: Activity,
  },
  {
    name: 'AI Chat Support',
    description: '24/7 intelligent assistance for all your health-related questions.',
    icon: MessageSquare,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Powered by AI</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your fitness journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform provides all the tools you need to achieve your health and fitness goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="group relative transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}