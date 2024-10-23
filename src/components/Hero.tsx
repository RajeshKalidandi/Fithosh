import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl">
          Your Journey to Health
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Starts with FitHosh</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Get personalized fitness and nutrition plans powered by AI. Transform your life with smart, 
          data-driven recommendations tailored just for you.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <button className="group inline-flex items-center justify-center rounded-full py-3 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-blue-600">
            Start Your Journey
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </button>
          <button className="group inline-flex items-center justify-center rounded-full py-3 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-gray-600">
            Watch Demo
          </button>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2">
            <img
              src="https://images.unsplash.com/photo-1594882645126-14020914d58d"
              alt="FitHosh AI Dashboard"
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}