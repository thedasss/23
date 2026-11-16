'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageCircle,
  FileQuestion,
} from 'lucide-react';
import { FAQS, COMPANY_INFO } from '@/data/innovexaData';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Got Questions About <span className="text-gold-gradient">Innovexa</span>?
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            Find answers to frequently asked questions regarding our services, indicative pricing guidelines,
            supplier coordination process, and digital event tracking portal.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="navy-glass-card rounded-2xl overflow-hidden border border-[#D3AA5B]/25 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#102B49] text-[#D3AA5B] font-bold text-xs flex items-center justify-center flex-shrink-0 border border-[#D3AA5B]/30">
                      {index + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-[#081930] border border-[#D3AA5B]/30 flex items-center justify-center text-[#D3AA5B] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#102B49]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#D3AA5B]/15 text-xs sm:text-sm text-gray-300 leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM CONTACT BAR */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#040D1A] border border-[#D3AA5B]/30 text-center shadow-2xl">
          <FileQuestion className="w-10 h-10 text-[#D3AA5B] mx-auto mb-3" />
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            Have a Question Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6">
            Our Malabe management team is available to assist you with tailored inquiries,
            supplier recommendations, and venue bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Contact Malabe Office
            </Link>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-navy-outline px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
