import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Coins,
  FileCheck,
  Building,
  Heart,
  Cake,
  GraduationCap,
} from 'lucide-react';
import { PACKAGES } from '@/data/innovexaData';

const PACKAGE_ICONS: Record<string, React.ElementType> = {
  'corporate-events': Building,
  'wedding-events': Heart,
  'birthday-private-events': Cake,
  'educational-ngo-events': GraduationCap,
};

export default function PackagesPage() {
  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <Coins className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Annexure I Indicative Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Event Packages & <span className="text-gold-gradient">Pricing Ranges</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            Transparent, benchmarked pricing structures derived directly from Annexure I of the Innovexa Business Plan.
            We provide realistic investment brackets across all key celebration and corporate categories.
          </p>
        </div>

        {/* MANDATORY PRICING RULE DISCLAIMER */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="bg-gradient-to-r from-[#102B49] to-[#081930] border-2 border-[#D3AA5B]/40 rounded-2xl p-6 sm:p-7 shadow-lg flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#F1DCAE] mb-1">
                Official Pricing Policy & Quotation Ground Rules
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                &quot;Final event quotations are customized according to guest count, location, event type, selected services and individual requirements.&quot;
              </p>
              <p className="text-xs text-gray-400 mt-2">
                The figures below represent indicative price ranges from Annexure I of our business proposal.
                They serve as initial budgetary guidelines, not locked fixed packages.
              </p>
            </div>
          </div>
        </div>

        {/* 4 PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PACKAGES.map((pkg) => {
            const Icon = PACKAGE_ICONS[pkg.id] || Sparkles;
            return (
              <div
                key={pkg.id}
                className="navy-glass-card rounded-2xl p-7 sm:p-9 border border-[#D3AA5B]/30 flex flex-col justify-between shadow-2xl relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#102B49] border border-[#D3AA5B]/40 flex items-center justify-center text-[#D3AA5B] shadow-gold-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    {pkg.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/50">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-white mb-2">
                    {pkg.title}
                  </h2>

                  {/* Indicative Range Box */}
                  <div className="bg-[#081930] border border-[#D3AA5B]/30 rounded-xl p-4 my-4">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                      Indicative Price Range (Annexure I):
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#F1DCAE] block mt-0.5">
                      {pkg.indicativeRange}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-light">
                    {pkg.description}
                  </p>

                  {/* Potential Services */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#D3AA5B]">
                      Includes Potential Services:
                    </h4>
                    <div className="space-y-2">
                      {pkg.potentialServices.map((service, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="p-3.5 rounded-xl bg-[#102B49]/40 border border-[#D3AA5B]/20 text-xs text-gray-300 mb-6">
                    <strong className="text-white block mb-0.5">Ideal For:</strong>
                    {pkg.bestSuitedFor}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-[#D3AA5B]/20">
                  <Link
                    href={`/book?package=${encodeURIComponent(pkg.title)}`}
                    className="btn-gold w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-gold-sm"
                  >
                    <span>Request Customized Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* COST TRANSPARENCY NOTICE */}
        <div className="p-8 rounded-2xl bg-[#081930] border border-[#D3AA5B]/25 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-10 h-10 rounded-full bg-[#102B49] text-[#D3AA5B] flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-sm font-bold text-white mb-1">
              Zero Hidden Charges
            </h4>
            <p className="text-xs text-gray-400">
              Clear milestone schedules and transparent breakdown of supplier costs vs coordination fees.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-[#102B49] text-[#D3AA5B] flex items-center justify-center mx-auto mb-3">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-sm font-bold text-white mb-1">
              Written Service Agreements
            </h4>
            <p className="text-xs text-gray-400">
              Every confirmed package is formalized under an agreed service contract signed at Stage 2.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-[#102B49] text-[#D3AA5B] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-sm font-bold text-white mb-1">
              Flexible Customization
            </h4>
            <p className="text-xs text-gray-400">
              Add or remove catering, drone cinematography, or LED staging according to your priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
