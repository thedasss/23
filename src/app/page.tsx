import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Coins,
  Laptop,
  CheckCircle2,
  Calendar,
  Building2,
  Heart,
  GraduationCap,
  Users2,
  ChevronRight,
  Compass,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, HOW_IT_WORKS_STEPS } from '@/data/innovexaData';

const FEATURED_SERVICES = [
  {
    title: 'Wedding Planning',
    desc: 'Bespoke ceremonies, Poruwa rituals, romantic floral styling, and full day-of coordination.',
    image: '/images/wedding.jpg',
    slug: 'wedding-planning-coordination',
  },
  {
    title: 'Corporate Events',
    desc: 'Executive galas, product reveals, stakeholder conferences, and high-impact corporate functions.',
    image: '/images/corporate.jpg',
    slug: 'corporate-event-management',
  },
  {
    title: 'Birthday Celebrations',
    desc: 'Milestone 21st, 50th, and themed children parties with customized backdrops and live entertainment.',
    image: '/images/birthday.jpg',
    slug: 'birthday-private-party-planning',
  },
  {
    title: 'Engagement Events',
    desc: 'Romantic ring ceremonies, private beachfront setups, and celebratory family banquet styling.',
    image: '/images/engagement.jpg',
    slug: 'wedding-planning-coordination',
  },
  {
    title: 'Conferences & Seminars',
    desc: 'Keynote logistics, multi-room AV, digital badge registration, and speaker protocol coordination.',
    image: '/images/conference.jpg',
    slug: 'conference-seminar-management',
  },
  {
    title: 'Event Decoration',
    desc: 'Fresh botanical florals, illuminated stage structures, custom fairy lights, and luxury linen styling.',
    image: '/images/decor.jpg',
    slug: 'event-design-decor',
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    icon: Sparkles,
    title: 'Personalized Event Planning',
    desc: 'Every event concept is custom-tailored to client style, aesthetic preferences, and unique cultural traditions.',
  },
  {
    icon: Coins,
    title: 'Competitive & Transparent Pricing',
    desc: 'No hidden markup or ambiguous charges. Clear indicative budget ranges with itemized supplier contracts.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Supplier Coordination',
    desc: 'We manage and govern all external caterers, decorators, audio-visual specialists, and venue managers as a unified unit.',
  },
  {
    icon: Clock,
    title: 'Dedicated Event Coordination',
    desc: 'On-site coordinators present from dawn to completion, ensuring flawless minute-by-minute execution.',
  },
  {
    icon: Laptop,
    title: 'Digital Event Management',
    desc: 'Modern online enquiry workflow, interactive client progress tracking portal, and milestone task transparency.',
  },
  {
    icon: Compass,
    title: 'Flexible Event Packages',
    desc: 'Modular service tiers designed to accommodate diverse guest counts from intimate gatherings to 1,000+ delegate galas.',
  },
];

const CUSTOMER_SEGMENTS = [
  {
    icon: Building2,
    title: 'Corporate Organizations',
    desc: 'Commercial banks, tech innovators, conglomerates, and growing businesses needing professional corporate presence.',
    tag: 'Enterprise & SMEs',
  },
  {
    icon: Heart,
    title: 'Engaged Couples',
    desc: 'Couples and families looking for a stress-free wedding journey from traditional Poruwa to western banquet.',
    tag: 'Weddings & Engagements',
  },
  {
    icon: Users2,
    title: 'Families & Private Hosts',
    desc: 'Individuals celebrating milestone birthdays, golden anniversaries, and memorable family reunions.',
    tag: 'Private Milestone Celebrations',
  },
  {
    icon: GraduationCap,
    title: 'Educational Institutions & NGOs',
    desc: 'Universities, academic faculties, and non-profits planning symposiums, workshops, and student exhibitions.',
    tag: 'Academic & Non-Profit',
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#081930] text-[#F9F7F1]">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image with Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wedding.jpg"
            alt="Luxury Event Atmosphere"
            fill
            priority
            className="object-cover object-center scale-105 transform animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081930]/90 via-[#081930]/80 to-[#081930]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081930]/95 via-transparent to-[#081930]/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Official Logo Display */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 drop-shadow-[0_0_25px_rgba(211,170,91,0.6)]">
              <Image
                src="/innovexa-logo.png"
                alt="Innovexa Official Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49]/80 border border-[#D3AA5B]/50 text-xs text-[#F1DCAE] tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
              <span>Event Management & Planning • Malabe, Sri Lanka</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
            Every Occasion Deserves <br />
            <span className="text-gold-gradient">Something Extraordinary.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            From unforgettable weddings to professional corporate gatherings,{' '}
            <strong className="font-semibold text-white">Innovexa</strong> transforms your vision
            into beautifully planned experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto btn-gold px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-md"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto btn-navy-outline px-8 py-4 rounded-full text-sm font-semibold tracking-wider flex items-center justify-center gap-2"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-[#D3AA5B]" />
            </Link>
          </div>

          {/* Highlight Metrics */}
          <div className="mt-16 pt-8 border-t border-[#D3AA5B]/20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#F1DCAE]">10+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Core Services</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#F1DCAE]">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Vendor Accountability</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#F1DCAE]">7-Stage</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Planning Blueprint</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#F1DCAE]">Digital</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Client Portal Tracker</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE PROPOSITION BANNER */}
      <section className="bg-[#102B49]/40 border-y border-[#D3AA5B]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold mb-2">
            The Innovexa Solution
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
            {COMPANY_INFO.mainMessage}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Eliminating the complexity of contacting multiple uncoordinated vendors independently.
            We provide a single dedicated point of coordination from initial budget blueprint to day-of event execution.
          </p>
        </div>
      </section>

      {/* HOMEPAGE SERVICE HIGHLIGHTS */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              Tailored Event Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              Our Core Event Services
            </h2>
            <div className="w-20 h-0.5 bg-[#D3AA5B] mx-auto mt-4 mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              From grand cultural nuptials to executive corporate summits, our full spectrum of services
              ensures every logistical and decorative detail is flawlessly managed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_SERVICES.map((service, index) => (
              <div
                key={index}
                className="navy-glass-card rounded-2xl overflow-hidden group border border-[#D3AA5B]/20 flex flex-col justify-between"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081930] via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#081930]/90 text-[#F1DCAE] border border-[#D3AA5B]/40">
                    Innovexa Service
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#F1DCAE] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D3AA5B]/15 flex items-center justify-between">
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-xs font-bold text-[#D3AA5B] hover:text-[#F1DCAE] flex items-center gap-1 group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/book"
                      className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-md bg-[#102B49] hover:bg-[#1B3B60] text-gray-200"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-navy-outline inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold"
            >
              <span>Explore All 10 Event Services</span>
              <ChevronRight className="w-4 h-4 text-[#D3AA5B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE INNOVEXA */}
      <section className="py-20 bg-gradient-to-b from-[#081930] via-[#102B49]/50 to-[#081930] border-y border-[#D3AA5B]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              The Innovexa Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              Why Partner With Innovexa?
            </h2>
            <div className="w-20 h-0.5 bg-[#D3AA5B] mx-auto mt-4 mb-4" />
            <p className="text-sm text-gray-300">
              Coordinating multiple independent suppliers often results in communication breakdowns,
              unforeseen budget escalations, and day-of timing stress. Innovexa solves this comprehensively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#081930]/80 border border-[#D3AA5B]/25 hover:border-[#D3AA5B]/60 transition-all shadow-navy-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#102B49] border border-[#D3AA5B]/40 flex items-center justify-center text-[#D3AA5B] mb-5 shadow-gold-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED CUSTOMER SEGMENTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              Serving Sri Lanka
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              Who We Serve
            </h2>
            <div className="w-20 h-0.5 bg-[#D3AA5B] mx-auto mt-4 mb-4" />
            <p className="text-sm text-gray-300">
              Our service packages are customized to the specific goals, protocol standards,
              and budget realities of four distinct customer segments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_SEGMENTS.map((seg, index) => {
              const Icon = seg.icon;
              return (
                <div
                  key={index}
                  className="navy-glass-card rounded-2xl p-6 text-center flex flex-col justify-between border border-[#D3AA5B]/20"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 flex items-center justify-center text-[#D3AA5B] mx-auto mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#102B49] text-[#F1DCAE] uppercase tracking-wider mb-2">
                      {seg.tag}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">
                      {seg.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {seg.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D3AA5B]/15">
                    <Link
                      href="/packages"
                      className="text-xs text-[#D3AA5B] hover:text-[#F1DCAE] font-semibold inline-flex items-center gap-1"
                    >
                      <span>View Segment Packages</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS – 7-STEP BLUEPRINT SUMMARY */}
      <section className="py-20 bg-[#040D1A] border-t border-[#D3AA5B]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              Systematic Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              Our Seven-Stage Event Process
            </h2>
            <div className="w-20 h-0.5 bg-[#D3AA5B] mx-auto mt-4 mb-4" />
            <p className="text-sm text-gray-300">
              Innovexa operates using a disciplined stage-gate workflow to guarantee that every
              specification is planned, confirmed, rehearsed, and evaluated with rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#081930] border border-[#D3AA5B]/25 rounded-xl p-4 text-center relative group hover:border-[#D3AA5B] transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 font-bold text-xs flex items-center justify-center mx-auto mb-3 shadow-gold-sm">
                  {step.step}
                </div>
                <h3 className="font-serif text-sm font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#F1DCAE] font-medium mb-2">
                  {step.subtitle}
                </p>
                <p className="text-[11px] text-gray-400 leading-tight">
                  {step.deliverable}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="btn-navy-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold"
            >
              <span>Explore Detailed 7-Stage Workflow</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D3AA5B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOMEPAGE CALL TO ACTION BANNER */}
      <section className="py-20 relative bg-gradient-to-r from-[#081930] via-[#102B49] to-[#081930] border-t border-[#D3AA5B]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative w-20 h-20 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(211,170,91,0.5)]">
            <Image
              src="/innovexa-logo.png"
              alt="Innovexa Seal Emblem"
              fill
              className="object-contain"
            />
          </div>

          <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
            Ready to Begin?
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2 mb-4">
            Let&apos;s Create Something Memorable Together.
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Submit your event enquiry through our interactive quotation portal or connect directly
            with our Malabe coordination desk. We will handle every detail with creative excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto btn-gold px-9 py-4 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Planning Your Event</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto btn-navy-outline px-8 py-4 rounded-full text-sm font-semibold tracking-wider"
            >
              Contact Malabe Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
