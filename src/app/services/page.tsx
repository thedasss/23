import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
  Phone,
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '@/data/innovexaData';

export default function ServicesPage() {
  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Comprehensive Event Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Our 10 Core <span className="text-gold-gradient">Event Services</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            As documented in the Innovexa Business Plan, we provide ten synchronized service modules.
            Whether you require end-to-end full management or individual technical and decor coordination,
            our team ensures flawless execution.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="navy-glass-card rounded-2xl overflow-hidden border border-[#D3AA5B]/25 p-6 sm:p-10 shadow-2xl scroll-mt-28"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative h-72 sm:h-80 lg:h-96 w-full rounded-xl overflow-hidden border border-[#D3AA5B]/30 shadow-lg group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081930]/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#081930]/90 text-[#D3AA5B] font-bold text-xs flex items-center justify-center border border-[#D3AA5B]/50">
                          {service.id}
                        </span>
                        {service.badge && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#102B49]/90 text-[#F1DCAE] border border-[#D3AA5B]/50">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                        Service #{service.id}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                      {service.fullDescription}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F1DCAE]">
                        Key Service Deliverables:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.keyFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-[#D3AA5B]/20 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/book?service=${encodeURIComponent(service.title)}`}
                        className="btn-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-2 shadow-gold-sm"
                      >
                        <span>Request a Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/packages"
                        className="btn-navy-outline px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider"
                      >
                        View Indicative Packages
                      </Link>

                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-300 hover:text-[#F1DCAE] flex items-center gap-1.5 ml-auto"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Inquire via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM BANNER */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#102B49] via-[#081930] to-[#102B49] border border-[#D3AA5B]/30 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Looking for a Customized Event Combination?
          </h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            All ten services can be flexibly bundled or booked on an à la carte basis.
            Use our interactive enquiry tool to tailor the exact combination your celebration demands.
          </p>
          <Link
            href="/book"
            className="btn-gold px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-gold-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Customize Your Event Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
