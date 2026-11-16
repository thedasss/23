'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Share2,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/innovexaData';
import { saveContactMessage } from '@/lib/storage';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message before submitting.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      saveContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
      });

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErrorMsg('An error occurred while saving your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Connect With Our Malabe Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Contact <span className="text-gold-gradient">Innovexa</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            Have questions about planning a wedding, corporate conference, or private milestone?
            Our event planning directors are ready to assist you.
          </p>
        </div>

        {/* 4 CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Address */}
          <div className="navy-glass-card p-6 rounded-2xl border border-[#D3AA5B]/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center mb-4 shadow-gold-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-1">
                Headquarters
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {COMPANY_INFO.address}
              </p>
            </div>
            <span className="text-[10px] text-[#D3AA5B] font-semibold mt-4 block">
              Western Province, Sri Lanka
            </span>
          </div>

          {/* Card 2: Telephone */}
          <div className="navy-glass-card p-6 rounded-2xl border border-[#D3AA5B]/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center mb-4 shadow-gold-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-1">
                Official Telephone
              </h3>
              <p className="text-sm font-semibold text-[#F1DCAE] mt-1">
                {COMPANY_INFO.phone}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Monday to Saturday: 8:30 AM – 6:30 PM
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-xs text-[#D3AA5B] hover:text-white font-semibold mt-4 inline-block"
            >
              Call Directly →
            </a>
          </div>

          {/* Card 3: WhatsApp Direct */}
          <div className="navy-glass-card p-6 rounded-2xl border border-[#D3AA5B]/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-1">
                WhatsApp Desk
              </h3>
              <p className="text-sm font-semibold text-emerald-300 mt-1">
                +94 76 152 9914
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Instant messaging & document inquiries
              </p>
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold mt-4 inline-block"
            >
              Launch WhatsApp Chat →
            </a>
          </div>

          {/* Card 4: Email & Domain */}
          <div className="navy-glass-card p-6 rounded-2xl border border-[#D3AA5B]/25 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102B49] text-[#D3AA5B] border border-[#D3AA5B]/40 flex items-center justify-center mb-4 shadow-gold-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-1">
                Official Email
              </h3>
              <p className="text-sm font-semibold text-[#F1DCAE] mt-1">
                {COMPANY_INFO.email}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Web: {COMPANY_INFO.proposedWebsite}{' '}
                <span className="text-[10px] text-[#D3AA5B]">(Proposed Domain)</span>
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-xs text-[#D3AA5B] hover:text-white font-semibold mt-4 inline-block"
            >
              Send Email Inquiry →
            </a>
          </div>
        </div>

        {/* 2 COLUMNS: INTERACTIVE FORM & MALABE MAP LOCATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="navy-glass-card rounded-2xl p-7 sm:p-10 border border-[#D3AA5B]/30 shadow-2xl">
              <h2 className="text-2xl font-serif font-bold text-white mb-1">
                Send Us a Direct Message
              </h2>
              <p className="text-xs text-gray-300 mb-6">
                Our management directors will review your enquiry and get back to you within 24 hours.
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-lg">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out. Your message has been logged in our Malabe operations system.
                    Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn-gold px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Shamila Rathnayake"
                        className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., shamila@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Wedding Planning in Malabe or Corporate Conference Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 font-medium mb-1.5">
                      Your Message / Event Inquiry Details *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your event date, expected guest count, and specific questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#081930] border border-[#D3AA5B]/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D3AA5B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Innovexa</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Section & Office Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="navy-glass-card rounded-2xl p-6 sm:p-7 border border-[#D3AA5B]/30 shadow-2xl">
              <div className="border-b border-[#D3AA5B]/20 pb-4 mb-4">
                <span className="text-xs uppercase tracking-widest text-[#D3AA5B] font-semibold">
                  Geographic Location
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                  Malabe, Sri Lanka Operations
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Centrally situated on New Kandy Road, offering rapid event liaison to Colombo, Battaramulla, Kaduwela, and the Western Province.
                </p>
              </div>

              {/* Embedded Google Map */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-[#D3AA5B]/30 shadow-inner mb-4">
                <iframe
                  title="Innovexa Location - Malabe Sri Lanka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.787728472937!2d79.95355607593683!3d6.915967018476839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256d56a73a621%3A0xb35a09d6f6e56fa5!2sMalabe%20Clock%20Tower%2C%20New%20Kandy%20Rd%2C%20Malabe!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Editable Social Media Channels */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F1DCAE] flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-[#D3AA5B]" />
                  <span>Proposed Social Channels:</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#081930] border border-[#D3AA5B]/20 text-gray-300 hover:text-white hover:border-[#D3AA5B] text-center"
                  >
                    Facebook Page
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#081930] border border-[#D3AA5B]/20 text-gray-300 hover:text-white hover:border-[#D3AA5B] text-center"
                  >
                    Instagram Feed
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#081930] border border-[#D3AA5B]/20 text-gray-300 hover:text-white hover:border-[#D3AA5B] text-center"
                  >
                    LinkedIn Enterprise
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#081930] border border-[#D3AA5B]/20 text-gray-300 hover:text-white hover:border-[#D3AA5B] text-center"
                  >
                    TikTok Highlights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
