'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, RefreshCw, X, ShieldAlert, User, ChevronDown } from 'lucide-react';
import { resetDemoData } from '@/lib/storage';

export default function PrototypeModeBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = () => {
    setIsResetting(true);
    resetDemoData();
    setTimeout(() => {
      setIsResetting(false);
      window.location.reload();
    }, 400);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-3 right-3 z-50 px-3 py-1.5 rounded-full bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/50 text-xs shadow-lg flex items-center gap-1.5 hover:bg-[#1B3B60]"
      >
        <Award className="w-3.5 h-3.5 text-[#D3AA5B]" />
        <span>Demo Controls</span>
      </button>
    );
  }

  return (
    <div className="bg-[#040D1A]/95 text-gray-300 border-b border-[#D3AA5B]/25 text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3AA5B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3AA5B]" />
          </span>
          <p className="text-gray-300 text-[11px] sm:text-xs">
            <strong className="text-[#F1DCAE]">Academic Prototype:</strong> Innovexa Event Management (Malabe, Sri Lanka).
            <span className="hidden md:inline text-gray-400 ml-1">
              Live functional demonstration for university entrepreneurship assessment.
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4 text-[11px]">
          <Link
            href="/portal"
            className="flex items-center gap-1 text-[#F1DCAE] hover:underline"
          >
            <User className="w-3 h-3 text-[#D3AA5B]" />
            <span>Client Portal</span>
          </Link>

          <Link
            href="/admin"
            className="flex items-center gap-1 text-[#F1DCAE] hover:underline"
          >
            <ShieldAlert className="w-3 h-3 text-[#D3AA5B]" />
            <span>Admin Demo</span>
          </Link>

          <button
            onClick={handleReset}
            disabled={isResetting}
            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            title="Reset mock records to original business plan seed data"
          >
            <RefreshCw className={`w-3 h-3 ${isResetting ? 'animate-spin text-[#D3AA5B]' : ''}`} />
            <span>{isResetting ? 'Resetting...' : 'Reset Demo'}</span>
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-300 ml-1"
            title="Dismiss top bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
