import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Calendar,
  ShieldCheck,
  Phone,
  MessageCircle,
  Clock,
  Coins,
  CheckCircle2,
} from 'lucide-react';
import BookEventForm from '@/components/BookEventForm';
import { COMPANY_INFO } from '@/data/innovexaData';

export default function BookEventPage() {
  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Interactive Quotation Portal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Plan Your Event & <span className="text-gold-gradient">Request a Quote</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            Complete our 5-step digital event enquiry form to receive a customized quotation.
            Your specifications will be recorded directly into our management queue with a unique tracking reference.
          </p>
        </div>

        {/* 3 VALUE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-center text-xs">
          <div className="p-4 rounded-xl bg-[#102B49]/50 border border-[#D3AA5B]/25">
            <Coins className="w-5 h-5 text-[#D3AA5B] mx-auto mb-2" />
            <h4 className="font-bold text-white mb-1">Transparent Pricing</h4>
            <p className="text-gray-300">Grounded in Annexure I indicative business plan budgets.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#102B49]/50 border border-[#D3AA5B]/25">
            <ShieldCheck className="w-5 h-5 text-[#D3AA5B] mx-auto mb-2" />
            <h4 className="font-bold text-white mb-1">Single Point of Contact</h4>
            <p className="text-gray-300">Innovexa negotiates, manages, and executes all vendor contracts.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#102B49]/50 border border-[#D3AA5B]/25">
            <Clock className="w-5 h-5 text-[#D3AA5B] mx-auto mb-2" />
            <h4 className="font-bold text-white mb-1">Live Progress Tracking</h4>
            <p className="text-gray-300">Track tasks and updates through our interactive Client Portal.</p>
          </div>
        </div>

        {/* MAIN FORM */}
        <div className="max-w-4xl mx-auto mb-16">
          <BookEventForm />
        </div>

        {/* ASSISTANCE CONTACT BAR */}
        <div className="navy-glass-card rounded-2xl p-6 sm:p-8 border border-[#D3AA5B]/25 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/innovexa-logo.png"
                alt="Innovexa Seal Emblem"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-base">
                Prefer to Discuss Directly With Our Team?
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Visit our Malabe office or connect with our founders via phone or WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn-navy-outline px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D3AA5B]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
