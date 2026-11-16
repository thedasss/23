'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, User, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Packages', href: '/packages' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081930]/95 backdrop-blur-md py-2.5 shadow-xl border-b border-[#D3AA5B]/20'
            : 'bg-gradient-to-b from-[#081930]/95 via-[#081930]/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/innovexa-logo.png"
                  alt="Innovexa Official Logo"
                  fill
                  sizes="44px"
                  className="object-contain drop-shadow-[0_0_12px_rgba(211,170,91,0.4)]"
                  priority
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-[#F1DCAE] transition-colors leading-tight">
                  INNOVEXA
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#D3AA5B] font-medium hidden sm:block">
                  Event Management & Planning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Clean single-line layout with no awkward text wrapping */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 flex-shrink-0">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs xl:text-sm font-medium tracking-wide whitespace-nowrap transition-all relative py-1.5 ${
                      isActive
                        ? 'text-[#F1DCAE] font-semibold'
                        : 'text-gray-300 hover:text-[#D3AA5B]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D3AA5B] to-transparent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <Link
                href="/portal"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border whitespace-nowrap transition-all ${
                  pathname === '/portal'
                    ? 'bg-[#102B49] text-[#F1DCAE] border-[#D3AA5B]'
                    : 'bg-[#102B49]/70 text-gray-200 border-[#D3AA5B]/40 hover:border-[#D3AA5B] hover:text-[#F1DCAE]'
                }`}
                title="Client Portal Prototype"
              >
                <User className="w-3.5 h-3.5 text-[#D3AA5B] flex-shrink-0" />
                <span className="whitespace-nowrap">Client Portal</span>
              </Link>

              <Link
                href="/admin"
                className={`p-1.5 rounded-full text-xs font-medium border border-[#D3AA5B]/20 transition-all ${
                  pathname === '/admin'
                    ? 'text-[#D3AA5B] bg-[#102B49] border-[#D3AA5B]'
                    : 'text-gray-400 hover:text-[#F1DCAE] hover:bg-[#102B49]/50'
                }`}
                title="Admin Management Console"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#D3AA5B]" />
              </Link>

              <Link
                href="/book"
                className="btn-gold flex items-center gap-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold shadow-gold-sm whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Book an Event</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/book"
                className="btn-gold px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#102B49] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#D3AA5B]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#081930] border-l border-[#D3AA5B]/30 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D3AA5B]/20">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/innovexa-logo.png"
                      alt="Innovexa Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-white font-bold">INNOVEXA</h3>
                    <p className="text-[10px] text-[#D3AA5B]">Malabe, Sri Lanka</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-[#102B49] text-[#F1DCAE] font-semibold border-l-4 border-[#D3AA5B]'
                          : 'text-gray-300 hover:bg-[#102B49]/60 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-[#D3AA5B]/60" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#D3AA5B]/20 space-y-3">
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#102B49] text-[#F1DCAE] border border-[#D3AA5B]/40 text-sm font-medium whitespace-nowrap"
              >
                <User className="w-4 h-4 text-[#D3AA5B]" />
                <span>Client Portal (Demo)</span>
              </Link>

              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#102B49]/40 text-gray-300 text-xs hover:text-white whitespace-nowrap"
              >
                <ShieldAlert className="w-4 h-4 text-[#D3AA5B]" />
                <span>Admin Management Prototype</span>
              </Link>

              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-gold flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#081930] whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span>Plan Your Event</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
