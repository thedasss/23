'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquareText,
  CheckCircle2,
  CalendarClock,
  Wrench,
  Sparkles,
  DoorClosed,
  Award,
  ArrowRight,
  ShieldCheck,
  Users,
  Building,
  ChevronRight,
  Workflow,
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/data/innovexaData';

const STAGE_DETAILS = [
  {
    stage: 1,
    name: 'Pre-Sales',
    title: 'Enquiry & Vision Gathering',
    clientAction: 'Client outlines event type, date, guest count, location, and budget expectation via digital booking form or Malabe desk.',
    innovexaAction: 'Innovexa checks date viability, prepares preliminary cost scenarios, and assigns a dedicated event coordinator.',
    supplierAction: 'Preliminary supplier availability queried without customer commitment.',
    keyDeliverable: 'Event Concept Brief & Initial Estimate',
  },
  {
    stage: 2,
    name: 'Confirmation',
    title: 'Consultation & Service Agreement',
    clientAction: 'Reviews proposed scope options, clarifies bespoke requirements, and approves indicative budget parameters.',
    innovexaAction: 'Conducts formal consultation, establishes milestone deliverables, and drafts standard Innovexa Service Agreement.',
    supplierAction: 'Supplier provisional holds secured; rate cards locked.',
    keyDeliverable: 'Countersigned Service Agreement & Milestone Schedule',
  },
  {
    stage: 3,
    name: 'Planning',
    title: 'Budgets, Venues & Supplier Blueprints',
    clientAction: 'Participates in venue walkthroughs, selects preferred décor mood boards, and approves menu direction.',
    innovexaAction: 'Finalizes itemized line-item budget, locks venue contracts, creates master timeline, and reserves key vendors.',
    supplierAction: 'Suppliers provide exact floor requirements, electrical loads, and catering staffing schedules.',
    keyDeliverable: 'Event Master Plan & Vendor Contracts',
  },
  {
    stage: 4,
    name: 'Preparation',
    title: 'Logistics, Rehearsals & Fabrication',
    clientAction: 'Attends catering menu tastings, confirms final seating plan, and completes VIP attendee run-through.',
    innovexaAction: 'Conducts vendor coordination briefings, inspects backdrop fabrication, tests AV equipment, and prepares minute-by-minute cue sheets.',
    supplierAction: 'Decorators assemble structures; AV teams test acoustics; caterers prep raw provisions.',
    keyDeliverable: 'Minute-by-Minute Run Sheet & Technical Checklist',
  },
  {
    stage: 5,
    name: 'Execution',
    title: 'Flawless Event Day Coordination',
    clientAction: 'Enjoys the celebration with family or attends to corporate guests without operational anxiety.',
    innovexaAction: 'On-site lead coordinators direct supplier load-in, coordinate Nekath / stage cues, manage guest flow, and resolve contingencies.',
    supplierAction: 'Suppliers perform specialized responsibilities under Innovexa stage manager direction.',
    keyDeliverable: 'Flawless Live Event Execution & Crisis Management',
  },
  {
    stage: 6,
    name: 'Closure',
    title: 'Teardown & Operational Handover',
    clientAction: 'Receives personal event keepsakes, guestbooks, and verified supplier accounts.',
    innovexaAction: 'Supervises safe venue teardown, audits rental equipment, reconciles final supplier payments, and secures venue bond return.',
    supplierAction: 'Load-out completed according to venue curfew regulations.',
    keyDeliverable: 'Clearance Certificates & Financial Reconciliation',
  },
  {
    stage: 7,
    name: 'Evaluation',
    title: 'Feedback & Continuous Refinement',
    clientAction: 'Completes structured evaluation questionnaire and provides service rating.',
    innovexaAction: 'Debriefs with core team (Silva, Perera, Fernando, Perera), evaluates supplier performance metrics, and logs learnings.',
    supplierAction: 'Supplier quality scores updated in Innovexa vendor database.',
    keyDeliverable: 'Client Satisfaction Index & Operational Review',
  },
];

export default function HowItWorksPage() {
  const [activeStage, setActiveStage] = useState(1);

  const selectedStage = STAGE_DETAILS.find((s) => s.stage === activeStage) || STAGE_DETAILS[0];

  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Structured Event Management Lifecycle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            How Innovexa <span className="text-gold-gradient">Works</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            Our comprehensive seven-stage process documented in the Innovexa Business Plan.
            We replace uncoordinated chaos with a disciplined, transparent event planning pipeline.
          </p>
        </div>

        {/* TRIANGULAR COLLABORATION MODEL EXPLAINER */}
        <div className="navy-glass-card rounded-2xl p-6 sm:p-8 border border-[#D3AA5B]/30 mb-16 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
              The Innovexa Governance Model
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              How Customers, Coordinators & Suppliers Interact
            </h3>
            <p className="text-xs text-gray-300 mt-2">
              Instead of the client communicating directly with multiple independent contractors,
              Innovexa acts as the strategic central hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/20 text-center">
              <div className="w-12 h-12 rounded-full bg-[#102B49] text-[#D3AA5B] flex items-center justify-center mx-auto mb-3 shadow-gold-sm">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-white text-base mb-1">
                The Customer
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Communicates vision, approves budgets, attends key tastings, and enjoys the event without operational burden.
              </p>
            </div>

            <div className="bg-[#102B49]/80 p-5 rounded-xl border-2 border-[#D3AA5B] text-center shadow-gold-md relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D3AA5B] text-[#081930] uppercase tracking-wider">
                Single Point of Contact
              </span>
              <div className="w-12 h-12 rounded-full bg-[#081930] text-[#F1DCAE] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-[#D3AA5B]" />
              </div>
              <h4 className="font-serif font-bold text-[#F1DCAE] text-base mb-1">
                Innovexa Management
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Governs schedules, enforces service agreements, reconciles invoices, conducts technical checks, and leads on-site execution.
              </p>
            </div>

            <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/20 text-center">
              <div className="w-12 h-12 rounded-full bg-[#102B49] text-[#D3AA5B] flex items-center justify-center mx-auto mb-3 shadow-gold-sm">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-white text-base mb-1">
                External Suppliers
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Venues, caterers, florists, sound engineers, and photographers receive clear run-sheets and deliver high-standard services.
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE 7-STAGE STEPPER */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-white">
              Interactive Stage Explorer
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Click any stage below to inspect client actions, Innovexa management actions, and key deliverables.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {HOW_IT_WORKS_STEPS.map((s) => {
              const isSelected = activeStage === s.step;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStage(s.step)}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                    isSelected
                      ? 'bg-[#102B49] border-[#D3AA5B] shadow-gold-md scale-105'
                      : 'bg-[#081930] border-[#D3AA5B]/20 text-gray-400 hover:text-white hover:border-[#D3AA5B]/40'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center mb-1.5 ${
                    isSelected ? 'bg-[#D3AA5B] text-[#081930]' : 'bg-[#102B49] text-gray-300'
                  }`}>
                    {s.step}
                  </span>
                  <span className={`text-xs font-serif font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {s.title}
                  </span>
                  <span className="text-[10px] text-[#D3AA5B] block mt-0.5 truncate w-full">
                    Stage {s.step}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Card */}
          <div className="navy-glass-card rounded-2xl p-7 sm:p-10 border border-[#D3AA5B]/30 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#D3AA5B]/20 pb-4 mb-6 gap-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                  Stage {selectedStage.stage} of 7 • Process Blueprint
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedStage.name}: {selectedStage.title}
                </h3>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-[#081930] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D3AA5B]" />
                <span>Deliverable: {selectedStage.keyDeliverable}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Client Action */}
              <div className="p-5 rounded-xl bg-[#081930] border border-[#D3AA5B]/20">
                <span className="text-[10px] uppercase tracking-wider text-[#D3AA5B] font-bold block mb-1">
                  1. Customer Role
                </span>
                <h4 className="font-serif text-sm font-bold text-white mb-2">
                  Client Participation
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedStage.clientAction}
                </p>
              </div>

              {/* Innovexa Action */}
              <div className="p-5 rounded-xl bg-[#102B49]/60 border border-[#D3AA5B]/40 shadow-gold-sm">
                <span className="text-[10px] uppercase tracking-wider text-[#F1DCAE] font-bold block mb-1">
                  2. Innovexa Management
                </span>
                <h4 className="font-serif text-sm font-bold text-white mb-2">
                  Coordination Responsibility
                </h4>
                <p className="text-xs text-gray-200 leading-relaxed font-medium">
                  {selectedStage.innovexaAction}
                </p>
              </div>

              {/* Supplier Action */}
              <div className="p-5 rounded-xl bg-[#081930] border border-[#D3AA5B]/20">
                <span className="text-[10px] uppercase tracking-wider text-[#D3AA5B] font-bold block mb-1">
                  3. External Suppliers
                </span>
                <h4 className="font-serif text-sm font-bold text-white mb-2">
                  Supplier Alignment
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedStage.supplierAction}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FULL TIMELINE VIEW */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-8">
            Complete Seven-Stage Event Timeline
          </h3>

          <div className="space-y-4 max-w-4xl mx-auto">
            {STAGE_DETAILS.map((stage) => (
              <div
                key={stage.stage}
                className="bg-[#081930] border border-[#D3AA5B]/25 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#D3AA5B] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {stage.stage}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">
                      Stage {stage.stage}: {stage.name} – {stage.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {stage.innovexaAction}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 text-left md:text-right">
                  <span className="text-[11px] text-[#F1DCAE] bg-[#102B49] px-2.5 py-1 rounded-md border border-[#D3AA5B]/30 block md:inline-block">
                    {stage.keyDeliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="navy-glass-card rounded-2xl p-8 sm:p-10 border border-[#D3AA5B]/30 text-center max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Ready to Initiate Stage 1?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-6">
            Begin with a customized Pre-Sales enquiry. Our Malabe event team will respond promptly to guide you into Stage 2.
          </p>
          <Link
            href="/book"
            className="btn-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-gold-sm"
          >
            <span>Submit Your Stage 1 Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
