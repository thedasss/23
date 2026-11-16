import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrototypeModeBanner from '@/components/PrototypeModeBanner';

export const metadata: Metadata = {
  title: 'INNOVEXA | Event Management & Planning Sri Lanka (Malabe)',
  description:
    'Innovexa is a premier proposed Sri Lankan event management and planning firm headquartered on New Kandy Road, Malabe. Creating memorable experiences through innovation for weddings, corporate galas, conferences, and milestone celebrations.',
  keywords: [
    'Event Management Sri Lanka',
    'Event Planners Malabe',
    'Wedding Planning Sri Lanka',
    'Corporate Event Management Colombo',
    'Birthday Party Planning Malabe',
    'Event Decoration Sri Lanka',
    'Conference Organizers Colombo',
    'Audio Visual Sri Lanka',
  ],
  authors: [{ name: 'Innovexa Founding Team' }],
  metadataBase: new URL('https://www.innovexa.com'),
  openGraph: {
    title: 'INNOVEXA – Event Management & Planning | Sri Lanka',
    description:
      'One Partner. Every Detail. A Better Event Experience. Creating memorable experiences through innovation.',
    url: 'https://www.innovexa.com',
    siteName: 'Innovexa Event Management',
    images: [
      {
        url: '/innovexa-logo.png',
        width: 691,
        height: 684,
        alt: 'Innovexa Event Management Logo',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/innovexa-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#081930] text-[#F9F7F1] min-h-screen flex flex-col selection:bg-[#D3AA5B] selection:text-[#081930]">
        <PrototypeModeBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
