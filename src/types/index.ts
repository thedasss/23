export type EventType =
  | 'Wedding'
  | 'Engagement'
  | 'Birthday'
  | 'Corporate Event'
  | 'Conference'
  | 'Seminar'
  | 'Private Party'
  | 'Educational / NGO'
  | 'Other';

export type BudgetRange =
  | 'LKR 50,000 – 100,000'
  | 'LKR 100,000 – 200,000'
  | 'LKR 200,000 – 500,000'
  | 'LKR 500,000 – 1,000,000'
  | 'Above LKR 1,000,000'
  | 'Not decided yet';

export type EnquiryStatus =
  | 'Received'
  | 'Consultation'
  | 'Confirmed'
  | 'Planning'
  | 'Preparation'
  | 'Completed'
  | 'Cancelled';

export type StageNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface EventEnquiry {
  id: string;
  referenceNo: string;
  eventName: string;
  eventType: EventType;
  preferredDate: string;
  alternativeDate?: string;
  location: string;
  guestCount: number;
  selectedServices: string[];
  budgetRange: BudgetRange;
  customerName: string;
  email: string;
  phone: string;
  companyName?: string;
  additionalRequirements?: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface TaskItem {
  id: string;
  bookingRef: string;
  category: 'Venue' | 'Catering' | 'Decoration' | 'Photography' | 'Entertainment' | 'Technical arrangements';
  title: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  dueDate: string;
  assignedRole: string;
}

export interface EventUpdate {
  id: string;
  bookingRef: string;
  title: string;
  description: string;
  timestamp: string;
  author: string;
  isCustomerVisible: boolean;
}

export interface Booking {
  id: string;
  referenceNo: string;
  eventName: string;
  eventType: EventType;
  eventDate: string;
  location: string;
  guestCount: number;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  currentStage: StageNumber;
  status: 'Active' | 'Completed' | 'Pending Review';
  estimatedCost: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Replied';
}

export interface Founder {
  name: string;
  role: string;
  initials: string;
  responsibilities: string;
  ownership: string;
  bio?: string;
  description?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  image: string;
  badge?: string;
}

export interface PackageItem {
  id: string;
  title: string;
  indicativeRange: string;
  description: string;
  potentialServices: string[];
  bestSuitedFor: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate Events' | 'Birthdays' | 'Engagements' | 'Private Celebrations' | 'Decorations';
  image: string;
  description: string;
  conceptNotes: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
