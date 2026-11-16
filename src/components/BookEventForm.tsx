'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  Calendar,
  Users,
  MapPin,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertCircle,
  FileText,
  DollarSign,
  Phone,
  Mail,
  User,
  Building,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { EventType, BudgetRange, EventEnquiry } from '@/types';
import { saveEnquiry } from '@/lib/storage';

const EVENT_TYPES: EventType[] = [
  'Wedding',
  'Corporate Event',
  'Birthday',
  'Engagement',
  'Conference',
  'Seminar',
  'Private Party',
  'Educational / NGO',
  'Other',
];

const AVAILABLE_SERVICES = [
  { id: 'wedding-coord', label: 'Wedding Planning & Coordination', desc: 'Full/partial coordination & Nekath auspicious timing' },
  { id: 'corp-mgmt', label: 'Corporate Event Management', desc: 'Conferences, product launches & annual galas' },
  { id: 'decor-styling', label: 'Event Design & Décor', desc: 'Thematic florals, backdrops, stage & ambient lighting' },
  { id: 'catering-coord', label: 'Catering Coordination', desc: 'Curated menus, banquets, live stations & tastings' },
  { id: 'av-tech', label: 'Audio-Visual & Technical Production', desc: 'LED walls, sound systems, stage lighting & technicians' },
  { id: 'photo-video', label: 'Photography & Videography', desc: 'Cinematic coverage, drones & live event streaming' },
  { id: 'vendor-coord', label: 'Vendor Coordination & Booking', desc: 'Single point of governance across multiple suppliers' },
  { id: 'hybrid-virtual', label: 'Virtual & Hybrid Event Support', desc: 'Zoom/YouTube broadcasting & interactive attendee polling' },
  { id: 'private-birthday', label: 'Birthday & Private Milestone Planning', desc: 'Themes, entertainment, photo-booths & bespoke cakes' },
  { id: 'seminar-reg', label: 'Conference & Seminar Operations', desc: 'Registration desk, delegate packs & speaker protocols' },
];

const BUDGET_RANGES: { range: BudgetRange; label: string; desc: string }[] = [
  { range: 'LKR 50,000 – 100,000', label: 'LKR 50,000 – 100,000', desc: 'Intimate private parties, small birthdays, or partial coordination' },
  { range: 'LKR 100,000 – 200,000', label: 'LKR 100,000 – 200,000', desc: 'Milestone private celebrations or targeted educational workshops' },
  { range: 'LKR 200,000 – 500,000', label: 'LKR 200,000 – 500,000', desc: 'Mid-sized corporate conferences or boutique wedding coordination' },
  { range: 'LKR 500,000 – 1,000,000', label: 'LKR 500,000 – 1,000,000', desc: 'Grand corporate events or comprehensive full-scale wedding planning' },
  { range: 'Above LKR 1,000,000', label: 'Above LKR 1,000,000', desc: 'High-tier luxury weddings, multiday conferences & gala productions' },
  { range: 'Not decided yet', label: 'Not Decided Yet', desc: 'Request customized quotation and supplier package consultation' },
];

export default function BookEventForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<EventEnquiry | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    eventName: '',
    eventType: 'Corporate Event' as EventType,
    preferredDate: '',
    alternativeDate: '',
    location: '',
    guestCount: 100,
    selectedServices: ['Corporate Event Management', 'Audio-Visual & Technical Production'] as string[],
    budgetRange: 'LKR 200,000 – 500,000' as BudgetRange,
    customerName: '',
    email: '',
    phone: '',
    companyName: '',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleService = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceName);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, serviceName] };
      }
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.eventName.trim()) newErrors.eventName = 'Please enter an event name or occasion title.';
      if (!formData.preferredDate) newErrors.preferredDate = 'Please select your preferred event date.';
      if (!formData.location.trim()) newErrors.location = 'Please state preferred city or venue (e.g., Malabe, Colombo).';
      if (!formData.guestCount || formData.guestCount < 10) newErrors.guestCount = 'Please indicate expected guests (minimum 10).';
    }

    if (step === 2) {
      if (formData.selectedServices.length === 0) {
        newErrors.services = 'Please select at least one service you need Innovexa to coordinate.';
      }
    }

    if (step === 3) {
      if (!formData.budgetRange) {
        newErrors.budget = 'Please pick an estimated budget range.';
      }
    }

    if (step === 4) {
      if (!formData.customerName.trim()) newErrors.customerName = 'Please provide your full name.';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email address.';
      if (!formData.phone.trim() || formData.phone.length < 9) newErrors.phone = 'Please provide a valid contact telephone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setCurrentStep(4);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to client persistent storage
      const result = saveEnquiry({
        eventName: formData.eventName,
        eventType: formData.eventType,
        preferredDate: formData.preferredDate,
        alternativeDate: formData.alternativeDate || undefined,
        location: formData.location,
        guestCount: Number(formData.guestCount),
        selectedServices: formData.selectedServices,
        budgetRange: formData.budgetRange,
        customerName: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName || undefined,
        additionalRequirements: formData.additionalRequirements || undefined,
      });

      // Fire celebratory confetti for prototype presentation
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D3AA5B', '#F1DCAE', '#081930', '#102B49'],
        });
      } catch {
        // ignore if canvas not supported
      }

      setSubmittedEnquiry(result);
    } catch (err) {
      console.error('Error submitting enquiry:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION SCREEN
  if (submittedEnquiry) {
    return (
      <div className="navy-glass-card rounded-2xl p-8 sm:p-12 border-gold-glow max-w-3xl mx-auto text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D3AA5B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="inline-block px-3 py-1 bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/40 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          Enquiry Registered Successfully
        </span>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
          Thank you for contacting Innovexa
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
          Your event enquiry has been received. Our team will review your requirements and contact you regarding the next steps.
        </p>

        {/* Reference Box */}
        <div className="bg-[#081930] border border-[#D3AA5B]/40 rounded-xl p-5 mb-8 max-w-md mx-auto text-left space-y-2.5">
          <div className="flex items-center justify-between border-b border-[#D3AA5B]/20 pb-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Enquiry Reference No:</span>
            <span className="font-mono text-base font-bold text-[#F1DCAE] tracking-wider">
              {submittedEnquiry.referenceNo}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Event Title:</span>
            <span className="font-medium text-white">{submittedEnquiry.eventName}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Target Date:</span>
            <span className="font-medium text-white">{submittedEnquiry.preferredDate}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Budget Bracket:</span>
            <span className="font-medium text-[#D3AA5B]">{submittedEnquiry.budgetRange}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Initial Status:</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] bg-amber-500/20 text-amber-300 font-semibold">
              Pre-Sales Review
            </span>
          </div>
        </div>

        {/* Notice Requirement */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-xs text-amber-200/90 max-w-xl mx-auto mb-8 text-left flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Important Operational Notice:</strong> Submitting an enquiry does not automatically confirm a booking.
            Final event quotations are customized according to guest count, location, event type, selected services, and individual supplier schedules.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portal"
            className="w-full sm:w-auto btn-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>View Client Portal Prototype</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => {
              setSubmittedEnquiry(null);
              setCurrentStep(1);
            }}
            className="w-full sm:w-auto btn-navy-outline px-6 py-3 rounded-full text-xs font-semibold tracking-wider"
          >
            Submit Another Enquiry
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto text-xs text-gray-400 hover:text-white py-2"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="navy-glass-card rounded-2xl p-6 sm:p-10 border border-[#D3AA5B]/30 shadow-2xl relative">
      {/* 5-Step Stepper Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#102B49] -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-[#D3AA5B] -translate-y-1/2 transition-all duration-500 z-0"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          />

          {[
            { num: 1, label: 'Event Info' },
            { num: 2, label: 'Services' },
            { num: 3, label: 'Budget' },
            { num: 4, label: 'Contact' },
            { num: 5, label: 'Review' },
          ].map((item) => (
            <div key={item.num} className="relative z-10 flex flex-col items-center">
              <button
                type="button"
                onClick={() => {
                  if (item.num < currentStep) setCurrentStep(item.num);
                }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  item.num === currentStep
                    ? 'bg-[#D3AA5B] text-[#081930] shadow-[0_0_15px_rgba(211,170,91,0.6)] scale-110'
                    : item.num < currentStep
                    ? 'bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]'
                    : 'bg-[#081930] text-gray-500 border border-gray-700'
                }`}
              >
                {item.num < currentStep ? <Check className="w-4 h-4" /> : item.num}
              </button>
              <span className={`text-[11px] mt-2 font-medium hidden sm:block ${
                item.num === currentStep ? 'text-[#F1DCAE] font-semibold' : 'text-gray-400'
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: EVENT INFORMATION */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-[#D3AA5B]/20 pb-4">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#D3AA5B]" />
              Step 1: Event Information
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Specify your occasion concept, preferred dates in Sri Lanka, and estimated guest turnout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Event Name */}
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Event Name / Occasion Title *
              </label>
              <input
                type="text"
                value={formData.eventName}
                onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                placeholder="e.g., Annual Executive Gala, Royal Wedding Celebration, 50th Jubilee"
                className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B] transition-colors"
              />
              {errors.eventName && <p className="text-xs text-rose-400 mt-1">{errors.eventName}</p>}
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Event Category *
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value as EventType })}
                className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-sm focus:outline-none focus:border-[#D3AA5B] transition-colors"
              >
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-[#081930] text-white">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Expected Guest Count *
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="10"
                  max="5000"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-sm focus:outline-none focus:border-[#D3AA5B] pl-10"
                />
                <Users className="w-4 h-4 text-[#D3AA5B] absolute left-3.5 top-3.5" />
              </div>
              {errors.guestCount && <p className="text-xs text-rose-400 mt-1">{errors.guestCount}</p>}
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Preferred Event Date *
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-sm focus:outline-none focus:border-[#D3AA5B]"
              />
              {errors.preferredDate && <p className="text-xs text-rose-400 mt-1">{errors.preferredDate}</p>}
            </div>

            {/* Alternative Date */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Alternative Date <span className="text-gray-500 lowercase">(optional)</span>
              </label>
              <input
                type="date"
                value={formData.alternativeDate}
                onChange={(e) => setFormData({ ...formData, alternativeDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-sm focus:outline-none focus:border-[#D3AA5B]"
              />
            </div>

            {/* Event Location */}
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Preferred Location / City / Venue *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Malabe, Colombo Ballroom, Waters Edge Battaramulla, Galle Beachfront"
                  className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B] pl-10"
                />
                <MapPin className="w-4 h-4 text-[#D3AA5B] absolute left-3.5 top-3.5" />
              </div>
              {errors.location && <p className="text-xs text-rose-400 mt-1">{errors.location}</p>}
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: REQUIRED SERVICES */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-[#D3AA5B]/20 pb-4">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D3AA5B]" />
              Step 2: Required Services
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Select all elements you want Innovexa to coordinate. You may combine multiple services.
            </p>
          </div>

          {errors.services && (
            <p className="text-xs text-rose-400 bg-rose-500/10 p-3 rounded-lg border border-rose-500/30">
              {errors.services}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {AVAILABLE_SERVICES.map((s) => {
              const isSelected = formData.selectedServices.includes(s.label);
              return (
                <div
                  key={s.id}
                  onClick={() => toggleService(s.label)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-[#102B49] border-[#D3AA5B] shadow-gold-sm'
                      : 'bg-[#081930]/70 border-[#D3AA5B]/20 hover:border-[#D3AA5B]/50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                      isSelected
                        ? 'bg-[#D3AA5B] text-[#081930] border-[#D3AA5B]'
                        : 'border-gray-600 bg-[#081930]'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{s.label}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-xs text-gray-400 italic">
            Selected {formData.selectedServices.length} service(s). Innovexa handles vendor contracts and unified billing.
          </div>
        </div>
      )}

      {/* STEP 3: BUDGET INFORMATION */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-[#D3AA5B]/20 pb-4">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#D3AA5B]" />
              Step 3: Budget Information
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Select an indicative budget bracket based on our Annexure I business plan ranges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUDGET_RANGES.map((b) => {
              const isSelected = formData.budgetRange === b.range;
              return (
                <div
                  key={b.range}
                  onClick={() => setFormData({ ...formData, budgetRange: b.range })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#102B49] border-[#D3AA5B] shadow-gold-sm'
                      : 'bg-[#081930]/70 border-[#D3AA5B]/20 hover:border-[#D3AA5B]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif font-bold text-base text-[#F1DCAE]">{b.label}</span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-[#D3AA5B] bg-[#D3AA5B]' : 'border-gray-600'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#081930]" />}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-[#102B49]/50 border border-[#D3AA5B]/30 rounded-xl p-4 text-xs text-gray-300">
            <p className="font-semibold text-[#F1DCAE] mb-1">
              Annexure I Indicative Pricing Rule:
            </p>
            <p>
              These are indicative benchmark ranges from the Innovexa business plan. Final quotations are always customized according to exact guest count, location, selected vendors, and individual specifications.
            </p>
          </div>
        </div>
      )}

      {/* STEP 4: CUSTOMER INFORMATION */}
      {currentStep === 4 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-[#D3AA5B]/20 pb-4">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-[#D3AA5B]" />
              Step 4: Customer Contact Details
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Provide your direct contact details so our Malabe operations team can reach out for your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  placeholder="e.g., Dilshan Wickramasinghe"
                  className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B] pl-10"
                />
                <User className="w-4 h-4 text-[#D3AA5B] absolute left-3.5 top-3.5" />
              </div>
              {errors.customerName && <p className="text-xs text-rose-400 mt-1">{errors.customerName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g., dilshan@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B] pl-10"
                />
                <Mail className="w-4 h-4 text-[#D3AA5B] absolute left-3.5 top-3.5" />
              </div>
              {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Telephone / WhatsApp Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g., +94 77 123 4567"
                  className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B] pl-10"
                />
                <Phone className="w-4 h-4 text-[#D3AA5B] absolute left-3.5 top-3.5" />
              </div>
              {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Organization / Company <span className="text-gray-500 lowercase">(optional)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g., Sri Lanka Institute / Tech Corp"
                  className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B] pl-10"
                />
                <Building className="w-4 h-4 text-[#D3AA5B] absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                Additional Requirements / Special Notes
              </label>
              <textarea
                rows={3}
                value={formData.additionalRequirements}
                onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                placeholder="Mention any specific supplier preferences, dietary restrictions, Nekath auspicious times, or theme ideas..."
                className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B]"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: REVIEW & SUMMARY */}
      {currentStep === 5 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-[#D3AA5B]/20 pb-4">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D3AA5B]" />
              Step 5: Review & Submit Enquiry
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Please inspect your submitted specifications before sending to Innovexa’s planning desk.
            </p>
          </div>

          <div className="bg-[#081930] border border-[#D3AA5B]/30 rounded-xl p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400 block uppercase tracking-wider">Occasion:</span>
                <span className="text-white font-semibold text-sm">{formData.eventName}</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase tracking-wider">Category:</span>
                <span className="text-[#F1DCAE] font-medium">{formData.eventType}</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase tracking-wider">Preferred Date:</span>
                <span className="text-white font-medium">{formData.preferredDate}</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase tracking-wider">Estimated Guests:</span>
                <span className="text-white font-medium">{formData.guestCount} Attendees</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-400 block uppercase tracking-wider">Location:</span>
                <span className="text-white font-medium">{formData.location}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-400 block uppercase tracking-wider">Selected Services:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {formData.selectedServices.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded bg-[#102B49] text-[#F1DCAE] text-[11px] border border-[#D3AA5B]/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-400 block uppercase tracking-wider">Target Budget Bracket:</span>
                <span className="text-[#D3AA5B] font-bold text-sm">{formData.budgetRange}</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase tracking-wider">Customer Name:</span>
                <span className="text-white font-medium">{formData.customerName}</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase tracking-wider">Contact Info:</span>
                <span className="text-white font-medium">{formData.email} • {formData.phone}</span>
              </div>
              {formData.companyName && (
                <div className="sm:col-span-2">
                  <span className="text-gray-400 block uppercase tracking-wider">Organization:</span>
                  <span className="text-white font-medium">{formData.companyName}</span>
                </div>
              )}
              {formData.additionalRequirements && (
                <div className="sm:col-span-2 border-t border-[#D3AA5B]/20 pt-2">
                  <span className="text-gray-400 block uppercase tracking-wider">Notes:</span>
                  <p className="text-gray-300 italic">{formData.additionalRequirements}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#102B49]/40 border border-[#D3AA5B]/30 rounded-xl p-4 text-xs text-gray-300 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
            <p>
              By submitting this enquiry, you authorize the Innovexa management team to review supplier availability and prepare an indicative proposal. You are under no financial commitment until a formal service agreement is signed.
            </p>
          </div>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="mt-8 pt-6 border-t border-[#D3AA5B]/20 flex items-center justify-between">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handlePrev}
            className="btn-navy-outline px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
        ) : (
          <div />
        )}

        {currentStep < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="btn-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-gold-md disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Registering Enquiry...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Submit Event Enquiry</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
