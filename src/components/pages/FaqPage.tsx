import React, { useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { ChevronDown, ChevronUp, Search, HelpCircle, Package, Truck, IndianRupee, Clock } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'product', name: 'Product', icon: <Package className="w-5 h-5" /> },
    { id: 'delivery', name: 'Delivery', icon: <Truck className="w-5 h-5" /> },
    { id: 'payment', name: 'Payment', icon: <IndianRupee className="w-5 h-5" /> },
    { id: 'orders', name: 'Orders', icon: <Clock className="w-5 h-5" /> },
  ];

  const faqs: FaqItem[] = [
    {
      question: "What exactly is a potato message?",
      answer: "A potato message is a unique gifting service where we carefully carve your personal message onto a premium quality potato. Each potato is hand-selected and your message is expertly carved to create a memorable and quirky gift that's sure to bring smiles.",
      category: "product"
    },
    {
      question: "How long does delivery take?",
      answer: "We offer 24-hour delivery across India. Once your order is confirmed, we carefully prepare your potato message and ensure it reaches the recipient within 24 hours through our express delivery service.",
      category: "delivery"
    },
    {
      question: "Is cash on delivery available?",
      answer: "Yes! We offer Cash on Delivery (COD) across India. You can pay when you receive your potato message. We also accept online payments through various methods for your convenience.",
      category: "payment"
    },
    {
      question: "How many characters can I include in my message?",
      answer: "You can include up to 100 characters in your potato message. This includes letters, numbers, and special characters. We recommend keeping messages concise for the best visual impact.",
      category: "product"
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order is confirmed, you'll receive a tracking number via SMS and email. You can use this to track your potato message's journey in real-time on our website.",
      category: "orders"
    },
    {
      question: "What if the potato is damaged during delivery?",
      answer: "We have a 100% satisfaction guarantee! If your potato message arrives damaged or you're not completely satisfied, we'll send a replacement free of charge or provide a full refund.",
      category: "delivery"
    },
    {
      question: "Do you deliver internationally?",
      answer: "Currently, we only deliver within India. However, we're working on expanding our services to international locations. Stay tuned for updates!",
      category: "delivery"
    },
    {
      question: "How do you ensure the quality of potatoes?",
      answer: "We carefully select premium quality potatoes for our messages. Each potato undergoes a quality check for size, shape, and freshness before being carved with your message.",
      category: "product"
    }
  ];

  const filteredFaqs = faqs
    .filter(faq => 
      (selectedCategory === 'all' || faq.category === selectedCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
       faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-amber-100 to-amber-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                Everything you need to know about our potato messages. Can't find what you're looking for? Feel free to contact us.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-amber-900 hover:bg-amber-100'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                >
                  <span className="font-medium text-amber-900">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-600" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4 text-amber-700 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12">
            <p className="text-amber-700 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300"
            >
              Contact Support
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}