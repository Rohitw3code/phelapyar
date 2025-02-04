import React from 'react';
import { Camera, Mail, Heart, Star, ArrowRight } from 'lucide-react';

export function UserReactions() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <Camera className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold">Share Your Joy</span>
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Show Us Your Reaction!
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Did our potato message make someone smile? Share their reaction with us and spread the joy!
          </p>
        </div>

        {/* Email CTA Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-100">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-amber-600" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-amber-900">
                  Email Us Your Reactions
                </h3>
                <p className="text-amber-700">
                  Send us your potato message reaction photos and we'll feature the best ones on our website!
                </p>
                <div className="flex items-center justify-center gap-2 text-amber-600">
                  <Star className="w-5 h-5" />
                  <span className="text-sm font-medium">Best reactions get special discounts on next order</span>
                </div>
              </div>

              <a
                href="mailto:reactions@phelapyar.com"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Your Reaction
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="text-sm text-amber-600">
                Email your photos to: reactions@phelapyar.com
              </div>
            </div>
          </div>

          {/* Featured Reactions */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-amber-900 mb-6 text-center">
              Featured Customer Reactions
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative group">
                  <div className="aspect-square rounded-lg overflow-hidden bg-amber-50">
                    <img
                      src={`https://images.unsplash.com/photo-${item === 1 ? '1531747056595-07f6cbbe10ad' : item === 2 ? '1545231027-4db644e69a5d' : '1519710164239-da123dc03ef4'}?auto=format&fit=crop&w=300&h=300`}
                      alt={`Happy Customer ${item}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="w-full text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">@happy_customer{item}</span>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-xs">{Math.floor(Math.random() * 100) + 50}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-100">
            <h4 className="font-semibold text-amber-900 mb-3">Submission Guidelines:</h4>
            <ul className="space-y-2 text-amber-700">
              <li>• Include your order number in the email</li>
              <li>• Photos should clearly show the potato message and reaction</li>
              <li>• By submitting, you agree to let us feature your photo on our website</li>
              <li>• Selected submissions will receive a discount code for their next order</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}