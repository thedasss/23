'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  User,
  ShieldCheck,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Download,
  Eye,
  LogOut,
  Sparkles,
  ChevronRight,
  Filter,
  Check,
  Building,
  Layers,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import {
  getStoredBooking,
  getStoredTasks,
  getStoredUpdates,
  updateTaskStatus,
} from '@/lib/storage';
import { Booking, TaskItem, EventUpdate, StageNumber } from '@/types';

const STAGES: { num: StageNumber; name: string; desc: string }[] = [
  { num: 1, name: 'Enquiry Received', desc: 'Pre-sales review and initial feasibility' },
  { num: 2, name: 'Consultation', desc: 'Requirements review with lead coordinators' },
  { num: 3, name: 'Booking Confirmation', desc: 'Service agreement formalized & locked' },
  { num: 4, name: 'Event Planning', desc: 'Floor plans, venue contracts & vendor briefs' },
  { num: 5, name: 'Supplier Coordination', desc: 'Catering tastings, decor fabrication & AV checks' },
  { num: 6, name: 'Event Preparation', desc: 'Minute-by-minute run-sheets & technical rehearsals' },
  { num: 7, name: 'Event Completed', desc: 'Live day execution, teardown & feedback' },
];

const TASK_CATEGORIES = [
  'All Categories',
  'Venue',
  'Catering',
  'Decoration',
  'Photography',
  'Entertainment',
  'Technical arrangements',
];

const DEMO_DOCUMENTS = [
  {
    title: 'Innovexa Event Quotation (Corporate Gala)',
    category: 'Event Quotation',
    reference: 'INV-QT-2026-7842',
    date: '2026-10-18',
    status: 'Approved',
    fileSize: '245 KB PDF (Demo Prototype)',
  },
  {
    title: 'Innovexa Standard Service Agreement',
    category: 'Service Agreement',
    reference: 'INV-AGR-2026-004',
    date: '2026-10-22',
    status: 'Countersigned',
    fileSize: '380 KB PDF (Demo Prototype)',
  },
  {
    title: 'Ballroom Floor Plan & Seating Matrix (22 Tables)',
    category: 'Event Schedule',
    reference: 'INV-FP-7842-V2',
    date: '2026-11-05',
    status: 'Approved',
    fileSize: '1.2 MB PDF (Demo Prototype)',
  },
  {
    title: 'Comprehensive Event Day Master Run Sheet',
    category: 'Event Checklist',
    reference: 'INV-RS-7842-DRAFT',
    date: '2026-11-14',
    status: 'In Progress',
    fileSize: '180 KB PDF (Demo Prototype)',
  },
];

export default function ClientPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // default logged in for prototype presentation
  const [emailInput, setEmailInput] = useState('client@demo.com');
  const [passwordInput, setPasswordInput] = useState('••••••••');
  const [loginError, setLoginError] = useState('');

  // Live Dashboard State
  const [booking, setBooking] = useState<Booking | null>(null);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [updates, setUpdates] = useState<EventUpdate[]>([]);
  const [selectedTaskCategory, setSelectedTaskCategory] = useState('All Categories');
  const [selectedDocPreview, setSelectedDocPreview] = useState<string | null>(null);

  useEffect(() => {
    setBooking(getStoredBooking());
    setTasks(getStoredTasks());
    setUpdates(getStoredUpdates());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Please enter a valid client email.');
    }
  };

  const handleQuickDemoLogin = () => {
    setEmailInput('client@demo.com');
    setPasswordInput('demo1234');
    setIsAuthenticated(true);
    setLoginError('');
  };

  const handleTaskStatusChange = (taskId: string, newStatus: TaskItem['status']) => {
    updateTaskStatus(taskId, newStatus);
    setTasks(getStoredTasks());
  };

  const filteredTasks = selectedTaskCategory === 'All Categories'
    ? tasks
    : tasks.filter((t) => t.category === selectedTaskCategory);

  const completedCount = tasks.filter((t) => t.status === 'Completed').length;
  const inProgressCount = tasks.filter((t) => t.status === 'In Progress').length;
  const pendingCount = tasks.filter((t) => t.status === 'Pending').length;

  // LOGIN SCREEN (if logged out)
  if (!isAuthenticated) {
    return (
      <div className="bg-[#081930] text-[#F9F7F1] pt-32 pb-20 min-h-screen flex items-center justify-center px-4">
        <div className="navy-glass-card rounded-2xl p-8 sm:p-10 border border-[#D3AA5B]/40 max-w-md w-full shadow-2xl relative">
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(211,170,91,0.5)]">
              <Image
                src="/innovexa-logo.png"
                alt="Innovexa Official Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white">Client Portal Login</h2>
            <p className="text-xs text-[#D3AA5B] uppercase tracking-wider font-semibold mt-1">
              Innovexa Event Tracking System
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Access your live 7-stage event progress, task milestones, and vendor documents.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
                Client Email Address
              </label>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="client@demo.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-sm focus:outline-none focus:border-[#D3AA5B]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-sm focus:outline-none focus:border-[#D3AA5B]"
              />
            </div>

            {loginError && <p className="text-xs text-rose-400">{loginError}</p>}

            <button
              type="submit"
              className="btn-gold w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-gold-sm"
            >
              Sign In to Portal
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="mt-6 pt-6 border-t border-[#D3AA5B]/20 text-center space-y-3">
            <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
              University Prototype Fast-Access:
            </span>
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="w-full py-2.5 px-4 rounded-xl bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/50 text-xs font-semibold hover:bg-[#1B3B60] transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
              <span>One-Click Demo Client Login</span>
            </button>
            <p className="text-[10px] text-gray-400 italic">
              Demonstration session pre-seeded with sample records from the Innovexa Business Plan.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!booking) return null;

  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PORTAL TOP BAR */}
        <div className="navy-glass-card rounded-2xl p-6 sm:p-8 border border-[#D3AA5B]/30 mb-10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#102B49] to-[#081930] border-2 border-[#D3AA5B] flex items-center justify-center text-[#F1DCAE] font-serif font-bold text-xl flex-shrink-0 shadow-gold-sm">
              DW
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Client Portal Active
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/30">
                  Ref: {booking.referenceNo}
                </span>
              </div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                Welcome back, {booking.clientName}
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">
                Coordinated by Innovexa Malabe Operations Desk • {booking.clientEmail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <Link
              href="/admin"
              className="text-xs text-[#D3AA5B] hover:text-[#F1DCAE] border border-[#D3AA5B]/30 px-3 py-1.5 rounded-lg bg-[#081930]"
            >
              Switch to Admin View
            </Link>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-xs text-gray-400 hover:text-rose-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#081930] border border-gray-700 hover:border-rose-500/40"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* EVENT OVERVIEW SUMMARY CARD */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold mb-1">
              Event Title:
            </span>
            <h3 className="font-serif text-base font-bold text-white">{booking.eventName}</h3>
            <span className="text-xs text-[#D3AA5B] font-medium block mt-1">{booking.eventType}</span>
          </div>

          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold mb-1">
              Target Event Date:
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D3AA5B]" />
              <span className="font-semibold text-white text-sm">{booking.eventDate}</span>
            </div>
            <span className="text-xs text-gray-400 block mt-1">Countdown: Active Preparation</span>
          </div>

          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold mb-1">
              Confirmed Venue:
            </span>
            <div className="flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
              <span className="font-medium text-white text-xs leading-snug">{booking.location}</span>
            </div>
          </div>

          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold mb-1">
              Guest Capacity & Budget:
            </span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D3AA5B]" />
              <span className="font-semibold text-white text-sm">{booking.guestCount} Guests</span>
            </div>
            <span className="text-[11px] text-[#F1DCAE] block mt-1 truncate">{booking.estimatedCost}</span>
          </div>
        </div>

        {/* 1. SEVEN-STAGE EVENT PROGRESS TRACKER */}
        <div className="navy-glass-card rounded-2xl p-6 sm:p-8 border border-[#D3AA5B]/30 mb-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#D3AA5B]/20 pb-4 mb-8 gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                Milestone Pipeline
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                Seven-Stage Event Progress Tracker
              </h2>
            </div>
            <div className="px-3 py-1 rounded-full bg-[#102B49] text-[#F1DCAE] text-xs font-semibold border border-[#D3AA5B]/40">
              Current Status: Stage {booking.currentStage} – Event Planning & Coordination
            </div>
          </div>

          {/* Stepper Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {STAGES.map((s) => {
              const isPast = s.num < booking.currentStage;
              const isCurrent = s.num === booking.currentStage;
              const isFuture = s.num > booking.currentStage;

              return (
                <div
                  key={s.num}
                  className={`p-3.5 rounded-xl border text-center transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#102B49] border-[#D3AA5B] shadow-gold-md scale-105'
                      : isPast
                      ? 'bg-[#081930] border-emerald-500/40 text-emerald-300'
                      : 'bg-[#081930]/60 border-gray-800 text-gray-500'
                  }`}
                >
                  <div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold ${
                        isCurrent
                          ? 'bg-[#D3AA5B] text-[#081930] shadow-[0_0_12px_rgba(211,170,91,0.5)]'
                          : isPast
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500'
                          : 'bg-[#102B49]/40 text-gray-500 border border-gray-700'
                      }`}
                    >
                      {isPast ? <Check className="w-4 h-4 stroke-[3]" /> : s.num}
                    </div>

                    <h4 className={`font-serif text-xs font-bold mb-1 ${
                      isCurrent ? 'text-white' : isPast ? 'text-gray-200' : 'text-gray-500'
                    }`}>
                      {s.name}
                    </h4>

                    <p className="text-[10px] text-gray-400 leading-tight">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-800 text-[10px] font-semibold">
                    {isCurrent && <span className="text-[#F1DCAE] animate-pulse">● Active Stage</span>}
                    {isPast && <span className="text-emerald-400">✓ Completed</span>}
                    {isFuture && <span className="text-gray-600">Pending</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. EVENT TASK TRACKER & 3. UPDATES TIMELINE (TWO COLUMN LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* TASK TRACKER (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="navy-glass-card rounded-2xl p-6 sm:p-7 border border-[#D3AA5B]/30 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#D3AA5B]/20 pb-4 mb-6 gap-3">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                    Supplier Governance
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                    Event Task Tracker
                  </h3>
                </div>

                {/* Progress Mini Stats */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                    {completedCount} Done
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                    {inProgressCount} In Progress
                  </span>
                  <span className="px-2 py-0.5 rounded bg-gray-700 text-gray-300 font-semibold">
                    {pendingCount} Pending
                  </span>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                {TASK_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedTaskCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                      selectedTaskCategory === cat
                        ? 'bg-[#D3AA5B] text-[#081930]'
                        : 'bg-[#081930] text-gray-400 hover:text-white border border-[#D3AA5B]/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Task Items List */}
              <div className="space-y-3.5">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 rounded-xl bg-[#081930] border border-[#D3AA5B]/20 hover:border-[#D3AA5B]/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/30">
                          {task.category}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-white">
                          {task.title}
                        </h4>
                      </div>

                      {/* Status Dropdown/Selector for prototype testing */}
                      <select
                        value={task.status}
                        onChange={(e) => handleTaskStatusChange(task.id, e.target.value as TaskItem['status'])}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border focus:outline-none cursor-pointer ${
                          task.status === 'Completed'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600/50'
                            : task.status === 'In Progress'
                            ? 'bg-amber-950/80 text-amber-300 border-amber-600/50'
                            : 'bg-gray-900 text-gray-400 border-gray-700'
                        }`}
                      >
                        <option value="Pending" className="bg-[#081930] text-gray-300">Pending</option>
                        <option value="In Progress" className="bg-[#081930] text-amber-300">In Progress</option>
                        <option value="Completed" className="bg-[#081930] text-emerald-300">Completed</option>
                      </select>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      {task.description}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 border-t border-[#D3AA5B]/15 pt-2">
                      <span>Owner: <strong className="text-gray-300">{task.assignedRole}</strong></span>
                      <span>Target: <strong className="text-gray-300">{task.dueDate}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EVENT UPDATES TIMELINE (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="navy-glass-card rounded-2xl p-6 sm:p-7 border border-[#D3AA5B]/30 shadow-2xl">
              <div className="border-b border-[#D3AA5B]/20 pb-4 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                  Live Dispatch
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                  Coordination Updates
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Chronological dispatches posted by Silva, Perera, and the Malabe operations team.
                </p>
              </div>

              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#D3AA5B]/20">
                {updates.map((update, idx) => (
                  <div key={update.id} className="relative flex items-start gap-3 pl-1">
                    <div className="w-6 h-6 rounded-full bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/50 flex items-center justify-center flex-shrink-0 z-10 text-[10px] font-bold">
                      {idx + 1}
                    </div>
                    <div className="bg-[#081930] p-4 rounded-xl border border-[#D3AA5B]/20 flex-grow">
                      <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                        <span className="font-semibold text-[#D3AA5B]">{update.author}</span>
                        <span>{update.timestamp}</span>
                      </div>
                      <h4 className="font-serif text-xs font-bold text-white mb-1">
                        {update.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {update.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. DOCUMENT REPOSITORY SECTION */}
        <div className="navy-glass-card rounded-2xl p-6 sm:p-8 border border-[#D3AA5B]/30 mb-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#D3AA5B]/20 pb-4 mb-6 gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                Event Documentation
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                Official Event Documents & Agreements
              </h3>
            </div>
            <span className="text-xs text-gray-400 italic">
              Demonstration prototypes for student assessment
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DEMO_DOCUMENTS.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/20 flex items-start justify-between gap-4 hover:border-[#D3AA5B]/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D3AA5B] font-semibold">
                      {doc.category}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white mt-0.5">
                      {doc.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Ref: {doc.reference} • Generated: {doc.date}
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      Status: {doc.status}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDocPreview(doc.title)}
                  className="p-2 rounded-lg bg-[#102B49] text-[#F1DCAE] hover:text-white border border-[#D3AA5B]/30 flex-shrink-0"
                  title="View document prototype preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-[#102B49]/40 border border-[#D3AA5B]/20 text-xs text-gray-300">
            <strong>Prototype Compliance Note:</strong> As per prompt instructions, the above documents represent illustrative sample records for university demonstration. Fabricated signed contracts are strictly avoided.
          </div>
        </div>

        {/* DOCUMENT PREVIEW MODAL */}
        {selectedDocPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#081930] border border-[#D3AA5B] rounded-2xl p-6 sm:p-8 max-w-lg w-full text-center relative shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Document Prototype Preview
              </h3>
              <p className="text-sm font-semibold text-[#F1DCAE] mb-4">
                {selectedDocPreview}
              </p>
              <div className="p-4 rounded-xl bg-[#102B49]/50 border border-[#D3AA5B]/20 text-xs text-gray-300 text-left space-y-2 mb-6">
                <p>• <strong>Issuing Entity:</strong> Innovexa Event Management (Malabe, Sri Lanka)</p>
                <p>• <strong>Client Reference:</strong> {booking.referenceNo}</p>
                <p>• <strong>Scope:</strong> Stage 4 Master Run Sheet & Supplier Governance Schedule</p>
                <p>• <strong>Verification:</strong> Approved by Silva T. A. (CEO) & Perera R. P. N. D. (Operations)</p>
              </div>
              <button
                onClick={() => setSelectedDocPreview(null)}
                className="btn-gold px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
