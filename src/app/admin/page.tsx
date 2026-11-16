'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldAlert,
  Users,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Send,
  Eye,
  RefreshCw,
  Search,
  Filter,
  Layers,
  ArrowRight,
  User,
  Sparkles,
} from 'lucide-react';
import {
  getStoredEnquiries,
  getStoredBooking,
  getStoredTasks,
  getStoredUpdates,
  updateEnquiryStatus,
  updateTaskStatus,
  addTask,
  saveUpdate,
  updateBookingStage,
  resetDemoData,
} from '@/lib/storage';
import { EventEnquiry, Booking, TaskItem, EventUpdate, StageNumber } from '@/types';

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<EventEnquiry[]>([]);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [updates, setUpdates] = useState<EventUpdate[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [activeTab, setActiveTab] = useState<'overview' | 'enquiries' | 'tasks' | 'updates'>('overview');

  // Form states for adding tasks & updates
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState<TaskItem['category']>('Venue');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [newTaskRole, setNewTaskRole] = useState('Operations (Perera R. P. N. D.)');

  const [newUpdateTitle, setNewUpdateTitle] = useState('');
  const [newUpdateDesc, setNewUpdateDesc] = useState('');
  const [newUpdateAuthor, setNewUpdateAuthor] = useState('Silva T. A. (CEO)');

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setEnquiries(getStoredEnquiries());
    setBooking(getStoredBooking());
    setTasks(getStoredTasks());
    setUpdates(getStoredUpdates());
  };

  const handleStatusChange = (id: string, status: EventEnquiry['status']) => {
    updateEnquiryStatus(id, status);
    refreshData();
  };

  const handleTaskStatus = (taskId: string, status: TaskItem['status']) => {
    updateTaskStatus(taskId, status);
    refreshData();
  };

  const handleStageChange = (newStage: StageNumber) => {
    updateBookingStage(newStage);
    refreshData();
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    addTask({
      bookingRef: booking?.referenceNo || 'INV-2026-7842',
      category: newTaskCategory,
      title: newTaskTitle,
      description: newTaskDesc || 'Task assigned by management team.',
      status: 'In Progress',
      dueDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      assignedRole: newTaskRole,
    });

    setNewTaskTitle('');
    setNewTaskDesc('');
    refreshData();
  };

  const handleCreateUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUpdateTitle.trim() || !newUpdateDesc.trim()) return;

    saveUpdate({
      id: `u-${Date.now()}`,
      bookingRef: booking?.referenceNo || 'INV-2026-7842',
      title: newUpdateTitle,
      description: newUpdateDesc,
      timestamp: new Date().toLocaleString(),
      author: newUpdateAuthor,
      isCustomerVisible: true,
    });

    setNewUpdateTitle('');
    setNewUpdateDesc('');
    refreshData();
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.referenceNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ADMIN HEADER */}
        <div className="navy-glass-card rounded-2xl p-6 sm:p-8 border border-[#D3AA5B]/40 mb-10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src="/innovexa-logo.png"
                alt="Innovexa Seal Emblem"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(211,170,91,0.5)]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Management Prototype Mode
                </span>
                <span className="text-xs text-gray-400">
                  Malabe Operations Center
                </span>
              </div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                Innovexa Internal Operations Dashboard
              </h1>
              <p className="text-xs text-gray-300 mt-0.5">
                Executive console for Silva T. A., Perera R. P. N. D., Fernando P. H. N., and Perera L. A. D. A. S.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <Link
              href="/portal"
              className="btn-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-gold-sm"
            >
              <User className="w-3.5 h-3.5" />
              <span>Open Client Portal</span>
            </Link>

            <button
              onClick={() => {
                resetDemoData();
                refreshData();
              }}
              className="btn-navy-outline px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
              title="Reset all demo records to initial business plan state"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#D3AA5B]" />
              <span>Reset Data</span>
            </button>
          </div>
        </div>

        {/* METRICS STATS OVERVIEW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
              Total Enquiries
            </span>
            <p className="font-serif text-3xl font-bold text-[#F1DCAE]">{enquiries.length}</p>
            <span className="text-[11px] text-gray-400 mt-1 block">Registered in Malabe Queue</span>
          </div>

          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
              Active In Planning
            </span>
            <p className="font-serif text-3xl font-bold text-amber-300">
              {enquiries.filter((e) => e.status !== 'Completed' && e.status !== 'Cancelled').length}
            </p>
            <span className="text-[11px] text-gray-400 mt-1 block">Pipeline Workflows</span>
          </div>

          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
              Operational Tasks
            </span>
            <p className="font-serif text-3xl font-bold text-white">{tasks.length}</p>
            <span className="text-[11px] text-gray-400 mt-1 block">
              {tasks.filter((t) => t.status === 'Completed').length} Completed
            </span>
          </div>

          <div className="bg-[#081930] p-5 rounded-xl border border-[#D3AA5B]/25">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
              Active Booking
            </span>
            <p className="font-serif text-xl font-bold text-emerald-400 mt-1">{booking?.referenceNo}</p>
            <span className="text-[11px] text-gray-400 mt-1 block">Stage {booking?.currentStage}: Preparation</span>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex border-b border-[#D3AA5B]/20 mb-8 overflow-x-auto gap-2 sm:gap-4">
          {[
            { id: 'overview', label: 'Operations Overview' },
            { id: 'enquiries', label: `Event Enquiries (${enquiries.length})` },
            { id: 'tasks', label: `Task Governance (${tasks.length})` },
            { id: 'updates', label: `Live Client Dispatches (${updates.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === tab.id
                  ? 'text-[#F1DCAE] border-b-2 border-[#D3AA5B]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Active Booking Stage Controller */}
            {booking && (
              <div className="navy-glass-card rounded-2xl p-6 sm:p-7 border border-[#D3AA5B]/30 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#D3AA5B]/20 pb-4 mb-6 gap-3">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                      Live Stage Controller
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                      {booking.eventName} ({booking.referenceNo})
                    </h3>
                  </div>

                  <span className="text-xs text-[#F1DCAE] px-3 py-1 rounded-md bg-[#102B49] border border-[#D3AA5B]/30 font-semibold">
                    Simulate Client Progress Bar
                  </span>
                </div>

                <p className="text-xs text-gray-300 mb-4">
                  Select a milestone below to immediately advance the client progress tracker on the Client Portal:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleStageChange(num as StageNumber)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                        booking.currentStage === num
                          ? 'bg-[#D3AA5B] text-[#081930] shadow-gold-sm scale-105'
                          : num < booking.currentStage
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40'
                          : 'bg-[#081930] text-gray-400 border-[#D3AA5B]/20 hover:text-white'
                      }`}
                    >
                      Stage {num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Dispatch & Task Creator Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Quick Add Task */}
              <div className="navy-glass-card rounded-2xl p-6 sm:p-7 border border-[#D3AA5B]/30 shadow-2xl">
                <h3 className="font-serif text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#D3AA5B]" />
                  <span>Assign New Event Task</span>
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Creates an operational milestone visible to coordinators and the client.
                </p>

                <form onSubmit={handleCreateTask} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      Task Title *
                    </label>
                    <input
                      type="text"
                      value={newTaskTitle}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      placeholder="e.g., Finalize floral arch sample with florist"
                      className="w-full px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                        Category
                      </label>
                      <select
                        value={newTaskCategory}
                        onChange={(e) => setNewTaskCategory(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                      >
                        <option value="Venue">Venue</option>
                        <option value="Catering">Catering</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Photography">Photography</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Technical arrangements">Technical arrangements</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                        Assigned Coordinator
                      </label>
                      <select
                        value={newTaskRole}
                        onChange={(e) => setNewTaskRole(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                      >
                        <option value="Operations (Perera R. P. N. D.)">Operations (Perera R. P. N. D.)</option>
                        <option value="Strategy (Silva T. A.)">Strategy (Silva T. A.)</option>
                        <option value="Marketing (Fernando P. H. N.)">Marketing (Fernando P. H. N.)</option>
                        <option value="Finance (Perera L. A. D. A. S.)">Finance (Perera L. A. D. A. S.)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      Task Specifications
                    </label>
                    <textarea
                      rows={2}
                      value={newTaskDesc}
                      onChange={(e) => setNewTaskDesc(e.target.value)}
                      placeholder="Requirements and supplier contacts..."
                      className="w-full px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Milestone Task</span>
                  </button>
                </form>
              </div>

              {/* Quick Post Update */}
              <div className="navy-glass-card rounded-2xl p-6 sm:p-7 border border-[#D3AA5B]/30 shadow-2xl">
                <h3 className="font-serif text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#D3AA5B]" />
                  <span>Dispatch Client Progress Update</span>
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Posts a real-time update notice to the Client Portal timeline.
                </p>

                <form onSubmit={handleCreateUpdate} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      Dispatch Title *
                    </label>
                    <input
                      type="text"
                      value={newUpdateTitle}
                      onChange={(e) => setNewUpdateTitle(e.target.value)}
                      placeholder="e.g., Acoustic Sound Check Completed"
                      className="w-full px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      Author / Department
                    </label>
                    <select
                      value={newUpdateAuthor}
                      onChange={(e) => setNewUpdateAuthor(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                    >
                      <option value="Silva T. A. (CEO)">Silva T. A. (CEO)</option>
                      <option value="Perera R. P. N. D. (Operations)">Perera R. P. N. D. (Operations)</option>
                      <option value="Fernando P. H. N. (Marketing)">Fernando P. H. N. (Marketing)</option>
                      <option value="Perera L. A. D. A. S. (Finance)">Perera L. A. D. A. S. (Finance)</option>
                      <option value="Innovexa Malabe Operations">Innovexa Malabe Operations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      Dispatch Notes for Customer
                    </label>
                    <textarea
                      rows={2}
                      value={newUpdateDesc}
                      onChange={(e) => setNewUpdateDesc(e.target.value)}
                      placeholder="Details of action taken and upcoming milestones..."
                      className="w-full px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Update to Portal</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ENQUIRIES LIST */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by event, client or ref..."
                  className="w-full px-3.5 py-2 pl-9 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-gray-400">Filter Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white text-xs focus:outline-none focus:border-[#D3AA5B]"
                >
                  <option value="All">All Statuses</option>
                  <option value="Received">Received</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Planning">Planning</option>
                  <option value="Preparation">Preparation</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Enquiries Table */}
            <div className="navy-glass-card rounded-2xl overflow-hidden border border-[#D3AA5B]/30 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#102B49] text-[#F1DCAE] uppercase tracking-wider text-[10px] border-b border-[#D3AA5B]/20">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Ref No</th>
                      <th className="py-3.5 px-4 font-bold">Event & Category</th>
                      <th className="py-3.5 px-4 font-bold">Client Contact</th>
                      <th className="py-3.5 px-4 font-bold">Target Date & Location</th>
                      <th className="py-3.5 px-4 font-bold">Budget Range</th>
                      <th className="py-3.5 px-4 font-bold">Status Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D3AA5B]/15">
                    {filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-[#102B49]/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#F1DCAE] whitespace-nowrap">
                          {enq.referenceNo}
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="font-serif font-bold text-white text-xs">{enq.eventName}</p>
                          <span className="text-[10px] text-gray-400 block mt-0.5">{enq.eventType} • {enq.guestCount} Guests</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="font-semibold text-white">{enq.customerName}</p>
                          <p className="text-[10px] text-gray-400">{enq.email}</p>
                          <p className="text-[10px] text-gray-400">{enq.phone}</p>
                        </td>
                        <td className="py-3.5 px-4 text-gray-300">
                          <p className="font-medium text-white">{enq.preferredDate}</p>
                          <p className="text-[10px] text-gray-400 truncate max-w-xs">{enq.location}</p>
                        </td>
                        <td className="py-3.5 px-4 text-[#D3AA5B] font-semibold whitespace-nowrap">
                          {enq.budgetRange}
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={enq.status}
                            onChange={(e) => handleStatusChange(enq.id, e.target.value as EventEnquiry['status'])}
                            className="bg-[#081930] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#D3AA5B]/40 text-[#F1DCAE] focus:outline-none cursor-pointer"
                          >
                            <option value="Received">Received</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Planning">Planning</option>
                            <option value="Preparation">Preparation</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TASKS LIST */}
        {activeTab === 'tasks' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-white">
                All Assigned Event Tasks ({tasks.length})
              </h3>
              <span className="text-xs text-gray-400">
                Synchronized with Client Portal Tracker
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-[#081930] border border-[#D3AA5B]/25 rounded-xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/30">
                        {task.category}
                      </span>
                      <select
                        value={task.status}
                        onChange={(e) => handleTaskStatus(task.id, e.target.value as TaskItem['status'])}
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                          task.status === 'Completed'
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                            : task.status === 'In Progress'
                            ? 'bg-amber-950 text-amber-300 border-amber-500'
                            : 'bg-gray-900 text-gray-400 border-gray-700'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <h4 className="font-serif font-bold text-white text-sm mb-1">{task.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">{task.description}</p>
                  </div>

                  <div className="pt-3 border-t border-[#D3AA5B]/15 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Assigned: <strong className="text-gray-300">{task.assignedRole}</strong></span>
                    <span>Due: <strong className="text-gray-300">{task.dueDate}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: UPDATES TIMELINE */}
        {activeTab === 'updates' && (
          <div className="space-y-4 animate-fadeIn max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-bold text-white">
                Client Dispatches & Team Timeline
              </h3>
            </div>

            <div className="space-y-3">
              {updates.map((u) => (
                <div key={u.id} className="bg-[#081930] p-4 rounded-xl border border-[#D3AA5B]/25">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span className="font-semibold text-[#D3AA5B]">{u.author}</span>
                    <span>{u.timestamp}</span>
                  </div>
                  <h4 className="font-serif font-bold text-white text-sm mb-1">{u.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
