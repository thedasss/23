import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Award,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/innovexaData';

export default function Footer() {
  return (
    <footer className="bg-[#040D1A] text-gray-300 border-t border-[#D3AA5B]/25 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Glow Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D3AA5B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#102B49]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Branding Banner */}
        <div className="bg-gradient-to-r from-[#102B49]/80 via-[#081930] to-[#102B49]/80 border border-[#D3AA5B]/30 rounded-2xl p-6 sm:p-8 mb-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-navy-card">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/innovexa-logo.png"
                alt="Innovexa Seal Emblem"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(211,170,91,0.5)]"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                Strategic Event Delivery
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                {COMPANY_INFO.mainMessage}
              </h3>
            </div>
          </div>
          <Link
            href="/book"
            className="btn-gold flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold shadow-gold-sm hover:shadow-gold-md whitespace-nowrap"
          >
            <span>Start Planning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/innovexa-logo.png"
                  alt="Innovexa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                  INNOVEXA
                </h4>
                <p className="text-[10px] text-[#D3AA5B] tracking-wider uppercase font-medium">
                  Event Management & Planning
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic">
              &quot;{COMPANY_INFO.tagline}&quot;
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              A proposed Sri Lankan event management enterprise delivering transparent,
              reliable, and creative coordination for weddings, corporate gatherings, and private milestones.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/40 font-medium">
                <Sparkles className="w-3 h-3 text-[#D3AA5B] mr-1.5" />
                Est. 2026 • Malabe, LK
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#D3AA5B] rounded-full" />
              Company Navigation
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#F1DCAE] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D3AA5B]" /> About Innovexa & Founders
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F1DCAE] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D3AA5B]" /> 10 Core Event Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#F1DCAE] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D3AA5B]" /> Event Packages & Pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#F1DCAE] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D3AA5B]" /> Inspiration Concepts
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#F1DCAE] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D3AA5B]" /> 7-Stage Event Blueprint
                </Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-[#F1DCAE] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D3AA5B]" /> Client Progress Portal
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#F1DCAE] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D3AA5B]" /> Management Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div>
            <h5 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#D3AA5B] rounded-full" />
              Featured Capabilities
            </h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services#wedding-planning-coordination" className="hover:text-[#F1DCAE] transition-colors">
                  Wedding Planning & Coordination
                </Link>
              </li>
              <li>
                <Link href="/services#corporate-event-management" className="hover:text-[#F1DCAE] transition-colors">
                  Corporate Event Management
                </Link>
              </li>
              <li>
                <Link href="/services#birthday-private-party-planning" className="hover:text-[#F1DCAE] transition-colors">
                  Birthday & Private Party Planning
                </Link>
              </li>
              <li>
                <Link href="/services#conference-seminar-management" className="hover:text-[#F1DCAE] transition-colors">
                  Conferences & Seminars
                </Link>
              </li>
              <li>
                <Link href="/services#event-design-decor" className="hover:text-[#F1DCAE] transition-colors">
                  Luxury Design & Thematic Décor
                </Link>
              </li>
              <li>
                <Link href="/services#audio-visual-technical-production" className="hover:text-[#F1DCAE] transition-colors">
                  Audio-Visual & Stage Production
                </Link>
              </li>
              <li>
                <Link href="/services#virtual-hybrid-event-management" className="hover:text-[#F1DCAE] transition-colors">
                  Virtual & Hybrid Event Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-4">
            <h5 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#D3AA5B] rounded-full" />
              Malabe Operations Office
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D3AA5B] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#F1DCAE]">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D3AA5B] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#F1DCAE]">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D3AA5B] flex-shrink-0" />
                <span className="text-gray-400">
                  {COMPANY_INFO.proposedWebsite} <span className="text-[10px] text-[#D3AA5B]">(Proposed Domain)</span>
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +94 76 152 9914</span>
              </a>
            </div>
          </div>
        </div>

        {/* Academic Prototype Notice & Copyright */}
        <div className="pt-8 mt-8 border-t border-[#D3AA5B]/20 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p>
              © {COMPANY_INFO.year} <strong className="text-white">INNOVEXA – Event Management & Planning</strong>. All rights reserved.
            </p>
            <p className="text-gray-400">
              Four equal partners: Silva T. A. (CEO), Perera R. P. N. D. (Operations), Fernando P. H. N. (Marketing), Perera L. A. D. A. S. (Finance).
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#102B49]/80 border border-[#D3AA5B]/30 text-[11px] text-[#F1DCAE]">
            <Award className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Academic Prototype • Innovation Management & Entrepreneurship</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
