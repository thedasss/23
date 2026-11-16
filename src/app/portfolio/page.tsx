'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Filter,
  Maximize2,
  Tag,
  AlertCircle,
  ArrowRight,
  Info,
} from 'lucide-react';
import { PORTFOLIO_CONCEPTS } from '@/data/innovexaData';
import { PortfolioItem } from '@/types';
import ImageLightbox from '@/components/ImageLightbox';

const CATEGORIES = [
  'All Concepts',
  'Weddings',
  'Corporate Events',
  'Birthdays',
  'Engagements',
  'Private Celebrations',
  'Decorations',
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Concepts');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All Concepts'
    ? PORTFOLIO_CONCEPTS
    : PORTFOLIO_CONCEPTS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#081930] text-[#F9F7F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B49] border border-[#D3AA5B]/40 text-xs text-[#F1DCAE] uppercase tracking-wider font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AA5B]" />
            <span>Creative Showcase Concepts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Event Inspiration & <span className="text-gold-gradient">Showcase Concepts</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#D3AA5B] mx-auto mb-6" />
          <p className="text-base text-gray-300 leading-relaxed">
            Curated design concepts and thematic blueprints illustrating the standard of luxury,
            elegance, and technical precision Innovexa delivers across Sri Lanka.
          </p>
        </div>

        {/* AUTHENTICITY NOTICE */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-[#102B49]/50 border border-[#D3AA5B]/30 rounded-xl p-4 text-xs text-gray-300 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#D3AA5B] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Academic Integrity Notice:</strong> Innovexa is an innovative proposed start-up.
              In accordance with academic standards, the images presented below serve as visual inspiration
              and design concepts rather than claimed past projects. Authentic client photography will be
              uploaded as events are conducted.
            </p>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D3AA5B] text-[#081930] shadow-gold-sm font-bold scale-105'
                  : 'bg-[#102B49]/70 text-gray-300 hover:text-white border border-[#D3AA5B]/20 hover:border-[#D3AA5B]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RESPONSIVE GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="navy-glass-card rounded-2xl overflow-hidden border border-[#D3AA5B]/20 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081930] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#081930]/90 text-[#F1DCAE] border border-[#D3AA5B]/40 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#D3AA5B]" />
                    {item.category}
                  </span>
                </div>

                {/* Hover zoom indicator */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#081930]/90 text-[#D3AA5B] border border-[#D3AA5B]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#F1DCAE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D3AA5B]/15 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#D3AA5B] font-semibold">
                    Concept Blueprint
                  </span>
                  <span className="text-gray-400 group-hover:text-white flex items-center gap-1 font-medium">
                    <span>Inspect Details</span>
                    <ArrowRight className="w-3 h-3 text-[#D3AA5B]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#102B49] via-[#081930] to-[#102B49] border border-[#D3AA5B]/30 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Have a Specific Theme or Vision in Mind?
          </h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our planning team translates your mood boards, Pinterest pins, and corporate identity guidelines
            into a functional event floor plan with vetted suppliers.
          </p>
          <Link
            href="/book"
            className="btn-gold px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-gold-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Submit Your Custom Theme Request</span>
          </Link>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <ImageLightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </div>
  );
}
