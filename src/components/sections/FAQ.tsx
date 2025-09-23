'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "What countries do you ship to?",
      answer: "We ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping policy for more details."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary by location. Domestic orders typically arrive within 3-5 business days, while international orders may take 7-14 business days."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for your convenience."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email at support@alfe.com or through our contact form. We typically respond within 24 hours."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* FAQ Title */}
      <h2 className="font-serif italic text-[22px] font-medium text-black text-center mb-10">
        FAQ
      </h2>

      {/* Accordion Container */}
      <div className="w-[80%] max-w-[700px]">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">♡</span>
                <span className="font-sans text-base font-medium italic text-black">
                  {item.question}
                </span>
              </div>
              <span className="ml-4 flex-shrink-0">
                {openItems.includes(index) ? (
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                )}
              </span>
            </button>
            
            {openItems.includes(index) && (
              <div className="pb-4 pl-8">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;