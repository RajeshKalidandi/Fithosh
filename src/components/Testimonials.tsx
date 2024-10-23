import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "FitHosh transformed my approach to fitness. The AI-powered recommendations are spot-on!",
    author: "Sarah Johnson",
    role: "Lost 30 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    rating: 5
  },
  {
    content: "The personalized workout plans keep me motivated and accountable. Best fitness app I've used!",
    author: "Michael Chen",
    role: "Gained 15 lbs muscle mass",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    rating: 5
  },
  {
    content: "The nutrition guidance has helped me develop better eating habits. I feel healthier than ever!",
    author: "Emma Rodriguez",
    role: "Improved overall fitness",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by Our Community
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our users have to say about their FitHosh journey
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
                <div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="mt-6 text-lg leading-7 text-gray-600">
                    "{testimonial.content}"
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}