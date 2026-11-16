'use client';

import React from 'react';
import Image from 'next/image';
import { X, Sparkles, Tag, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '@/types';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function ImageLightbox({ item, onClose }: LightboxProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-4xl w-full bg-[#081930] border border-[#D3AA5B]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#081930]/80 text-[#D3AA5B] hover:text-white border border-[#D3AA5B]/40 flex items-center justify-center transition-colors"
          aria-label="Close image showcase"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative w-full md:w-3/5 h-72 sm:h-96 md:h-[480px] bg-black">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#081930]/90 text-[#F1DCAE] border border-[#D3AA5B]/50 flex items-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
              Event Inspiration Concept
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-3.5 h-3.5 text-[#D3AA5B]" />
              <span className="text-xs uppercase tracking-wider text-[#D3AA5B] font-semibold">
                {item.category}
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F1DCAE]">
                Concept & Coordination Blueprint:
              </h4>
              <ul className="space-y-1.5">
                {item.conceptNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D3AA5B]/20">
            <p className="text-[11px] text-gray-400 italic mb-4">
              * Curated showcase concept. Innovexa customizes layout, florist sourcing, and stage equipment to client venue dimensions.
            </p>
            <a
              href="/book"
              className="btn-gold w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-sm"
            >
              <span>Request Quote for This Concept</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
