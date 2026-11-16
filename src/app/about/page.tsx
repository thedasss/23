import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target,
  Eye,
  Award,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Briefcase,
  MapPin,
  Calendar,
  Layers,
} from 'lucide-react';
import { COMPANY_INFO, FOUNDERS } from '@/data/innovexaData';

const VALUES = [
  {
    title: 'Customer Satisfaction',
    desc: 'Centering client goals, family sentiments, and corporate objectives in every milestone decision.',
  },
  {
    title: 'Creativity & Innovation',
    desc: 'Crafting fresh themes, modern decorative concepts, and contemporary digital event solutions.',
  },
  {
    title: 'Professionalism',
    desc: 'Upholding strict contractual integrity, punctual schedules, and polished guest protocol.',
  },
  {
    title: 'Reliability',
    desc: 'Being dependable and proactive under pressure with clear contingency vendor protocols.',
  },
  {
    title: 'Teamwork',
    desc: 'Seamless collaborative coordination between coordinators, suppliers, and client organizers.',
  },
  {
    title: 'Affordable Customized Solutions',
    desc: 'Tailoring realistic, transparent price structures to diverse client budgets without compromising quality.',
  },
  {
    title: 'High-Quality Service Delivery',
    desc: 'Insisting upon premier acoustic fidelity, fresh floral artistry, and fine banquet presentation.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Proposed Enterprise Overview</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            About <span className="text-gold-gradient">Innovexa</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            A proposed event-management enterprise established on New Kandy Road, Malabe,
            committed to delivering reliable, creative, and affordable event coordination across Sri Lanka.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#102B49]/80 border border-[#D3AA5B]/30">
              <MapPin className="w-3.5 h-3.5 text-[#D3AA5B]" />
              New Kandy Road, Malabe, Sri Lanka
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#102B49]/80 border border-[#D3AA5B]/30">
              <Calendar className="w-3.5 h-3.5 text-[#D3AA5B]" />
              Proposed Establishment Year: 2026
            </span>
          </div>
        </div>

        {/* OUR STORY & THE CORE PROBLEM SOLVED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              <Layers className="w-4 h-4 text-[#D3AA5B]" />
              <span>Our Origin & Purpose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Why Innovexa Was Created
            </h2>
            <div className="w-16 h-0.5 bg-[#D3AA5B]" />

            <p className="text-sm text-gray-300 leading-relaxed">
              Organizing an event in Sri Lanka—whether a wedding, milestone celebration, or corporate summit—frequently
              forces customers to independently coordinate with 8 to 15 fragmented suppliers. Sourcing separate decorators,
              caterers, sound engineers, photographers, and venue personnel invariably results in communication breakdowns,
              conflicting timelines, unexpected budget escalation, and immense personal stress.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              <strong>Innovexa</strong> was developed to address this exact vulnerability. We provide professional,
              end-to-end event planning and coordination services for individuals, families, and businesses who desire
              a trusted, innovative, and cost-effective partner. Acting as a single accountable coordinator, we manage
              supplier negotiation, contractual governance, timeline choreography, and on-site execution—allowing our clients
              to truly immerse themselves in their milestone moments.
            </p>

            <div className="p-4 rounded-xl bg-[#102B49]/60 border-l-4 border-[#D3AA5B] text-xs text-[#F1DCAE] italic">
              &quot;One partner. Every detail. A better event experience.&quot;
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="navy-glass-card p-8 rounded-2xl border border-[#D3AA5B]/30 text-center relative shadow-2xl">
              <div className="relative w-36 h-36 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(211,170,91,0.5)]">
                <Image
                  src="/innovexa-logo.png"
                  alt="Innovexa Seal Emblem"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-white">
                INNOVEXA
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold mt-1 mb-4">
                Event Management & Planning
              </p>
              <p className="text-xs text-gray-300 leading-relaxed italic mb-6">
                &quot;{COMPANY_INFO.tagline}&quot;
              </p>

              <div className="pt-4 border-t border-[#D3AA5B]/20 text-[11px] text-gray-400">
                Operating as a Proposed Partnership • Four Equal 25% Shareholding Partners
              </div>
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="navy-glass-card p-8 rounded-2xl border border-[#D3AA5B]/30 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center mb-6 shadow-gold-sm">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                Strategic Aspiration
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-4">
                Our Vision
              </h3>
              <blockquote className="text-sm text-gray-200 leading-relaxed italic border-l-2 border-[#D3AA5B] pl-4">
                &quot;To be a leading event management service provider, creating memorable, innovative and well-organized events that bring people and communities together.&quot;
              </blockquote>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D3AA5B]/15 text-xs text-gray-400">
              Anchored in the official Innovexa Business Plan (Section 1.3).
            </div>
          </div>

          {/* Mission */}
          <div className="navy-glass-card p-8 rounded-2xl border border-[#D3AA5B]/30 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center mb-6 shadow-gold-sm">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                Operational Commitment
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-4">
                Our Mission
              </h3>
              <blockquote className="text-sm text-gray-200 leading-relaxed italic border-l-2 border-[#D3AA5B] pl-4">
                &quot;At Innovexa, we are dedicated to delivering professional, creative and reliable event management services that meet our clients&apos; unique needs, exceed their expectations and create memorable experiences for every occasion.&quot;
              </blockquote>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D3AA5B]/15 text-xs text-gray-400">
              Anchored in the official Innovexa Business Plan (Section 1.4).
            </div>
          </div>
        </div>

        {/* OUR CORE VALUES */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">
              Our Core Values
            </h2>
            <div className="w-20 h-0.5 bg-[#D3AA5B] mx-auto mt-4 mb-4" />
            <p className="text-sm text-gray-300">
              The seven operational values that direct our customer relationships, supplier conduct, and event execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#081930] border border-[#D3AA5B]/25 hover:border-[#D3AA5B]/60 transition-all flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-full bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOUNDING TEAM */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              Leadership & Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              The Founding Team
            </h2>
            <div className="w-20 h-0.5 bg-[#D3AA5B] mx-auto mt-4 mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Innovexa is governed by four co-founders with complementary management portfolios.
              Each founder maintains an equal 25% ownership stake in the enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((founder, index) => (
              <div
                key={index}
                className="navy-glass-card rounded-2xl p-6 border border-[#D3AA5B]/30 flex flex-col justify-between text-center relative group"
              >
                <div>
                  {/* Initials Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#102B49] to-[#081930] border-2 border-[#D3AA5B] flex items-center justify-center mx-auto mb-4 text-[#F1DCAE] font-serif text-2xl font-bold shadow-gold-sm group-hover:scale-105 transition-transform">
                    {founder.initials}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-[#D3AA5B] font-semibold uppercase tracking-wider mt-1 mb-2">
                    {founder.role}
                  </p>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/40 font-medium mb-4">
                    {founder.ownership}
                  </span>

                  <div className="text-left bg-[#081930] p-3.5 rounded-xl border border-[#D3AA5B]/20 mb-3">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      Key Portfolio:
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {founder.responsibilities}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D3AA5B]/15 text-[11px] text-gray-400 italic">
                  Equal Founding Partner
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-400 italic">
            * As per university academic business pitch guidelines, founder profiles reflect exact initials, assigned operational roles, and 25% equity distribution without fabricated external credentials.
          </div>
        </div>

        {/* CTA TO SERVICES / BOOK */}
        <div className="navy-glass-card rounded-2xl p-8 sm:p-12 border border-[#D3AA5B]/30 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Experience the Innovexa Difference
          </h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Ready to learn more about how we structure wedding timelines, corporate summits,
            and private celebrations? View our comprehensive service catalogue or request a quotation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto btn-gold px-8 py-3 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/packages"
              className="w-full sm:w-auto btn-navy-outline px-8 py-3 rounded-full text-xs font-semibold tracking-wider"
            >
              Inspect Indicative Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
