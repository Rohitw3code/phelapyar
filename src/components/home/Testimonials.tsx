import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  location: string;
  image: string;
  story: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <Quote className="w-8 h-8 text-amber-400 mb-4" />
      <p className="text-amber-800 mb-4 italic">{testimonial.text}</p>
      
      <div className="border-t border-amber-100 pt-4 mt-4">
        <div className="flex items-center gap-3 mb-3">
          <img 
            src={testimonial.image} 
            alt={testimonial.author} 
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
          />
          <div>
            <div className="font-medium text-amber-900">{testimonial.author}</div>
            <div className="text-sm text-amber-600">{testimonial.location}</div>
          </div>
        </div>
        <p className="text-sm text-amber-700 mt-2 line-clamp-3">{testimonial.story}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      text: "The most unique birthday surprise ever! My friend couldn't stop laughing when she received it.",
      author: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
      story: "I wanted to surprise my best friend on her birthday during lockdown. The potato message was delivered right to her doorstep, and she said it was the most memorable gift she's ever received!"
    },
    {
      text: "Used it to propose to my girlfriend in a funny way before the actual proposal. She loved it!",
      author: "Arjun Patel",
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
      story: "Before the actual ring proposal, I sent her a potato asking 'Will you marry me?' It broke the ice and made our special moment even more memorable."
    },
    {
      text: "Perfect way to apologize to my wife. The funny message on potato worked like magic!",
      author: "Rahul Verma",
      location: "Delhi, NCR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      story: "After a silly argument, I sent her a potato saying 'I yam sorry!' She couldn't stay mad after that. Now it's our inside joke!"
    }
  ];

  return (
    <div className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Real Stories, Real Smiles
          </h2>
          <p className="text-lg text-amber-700">
            Join thousands of happy customers who've made memories with PotatoMessage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}