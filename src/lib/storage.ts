import { EventEnquiry, Booking, TaskItem, EventUpdate, ContactMessage } from '@/types';

const STORAGE_KEYS = {
  ENQUIRIES: 'innovexa_enquiries_v1',
  BOOKINGS: 'innovexa_bookings_v1',
  TASKS: 'innovexa_tasks_v1',
  UPDATES: 'innovexa_updates_v1',
  MESSAGES: 'innovexa_messages_v1',
  CURRENT_CLIENT: 'innovexa_current_client_v1',
  IS_ADMIN: 'innovexa_is_admin_v1',
};

// Initial Seed Demo Data (Grounded in Business Plan - labeled as sample/demo data)
export const INITIAL_DEMO_BOOKING: Booking = {
  id: 'b-001',
  referenceNo: 'INV-2026-7842',
  eventName: 'Colombo FinTech Annual Gala & Awards',
  eventType: 'Corporate Event',
  eventDate: '2026-12-18',
  location: 'Cinnamon Grand Ballroom, Colombo (Coordinated from Malabe HQ)',
  guestCount: 220,
  clientName: 'Dilshan Wickramasinghe',
  clientEmail: 'client@demo.com',
  clientPhone: '+94 77 482 1190',
  currentStage: 4, // Preparation Stage
  status: 'Active',
  estimatedCost: 'LKR 450,000 (Within Annexure I Corporate Range)',
  createdAt: '2026-10-12T09:30:00Z',
};

export const INITIAL_DEMO_TASKS: TaskItem[] = [
  {
    id: 't-1',
    bookingRef: 'INV-2026-7842',
    category: 'Venue',
    title: 'Ballroom Floor Plan & VIP Stage Approval',
    description: 'Finalize seating arrangement of 22 round tables and ensure 12ft clearance for main LED screen.',
    status: 'Completed',
    dueDate: '2026-11-05',
    assignedRole: 'Operations (Perera R. P. N. D.)',
  },
  {
    id: 't-2',
    bookingRef: 'INV-2026-7842',
    category: 'Catering',
    title: 'Executive Buffet & Canapé Tasting Session',
    description: 'Coordinate five-course corporate menu tasting with head chef, including vegetarian & gluten-free options.',
    status: 'Completed',
    dueDate: '2026-11-14',
    assignedRole: 'Operations (Perera R. P. N. D.)',
  },
  {
    id: 't-3',
    bookingRef: 'INV-2026-7842',
    category: 'Decoration',
    title: 'Branded Stage Backdrop & Entrance Arch Fabrication',
    description: 'Fabricate navy and champagne gold acrylic awards backdrop with metallic crest accents.',
    status: 'In Progress',
    dueDate: '2026-11-28',
    assignedRole: 'Event Design & Décor Specialist',
  },
  {
    id: 't-4',
    bookingRef: 'INV-2026-7842',
    category: 'Technical arrangements',
    title: 'Curved P2.9 LED Wall & Line-Array Audio Rigging',
    description: 'Confirm sound engineering team, 4 wireless handheld mics, dynamic stage spotlights, and backup generator.',
    status: 'In Progress',
    dueDate: '2026-12-02',
    assignedRole: 'AV Technical Coordinator',
  },
  {
    id: 't-5',
    bookingRef: 'INV-2026-7842',
    category: 'Photography',
    title: 'Briefing Visual Production Team & Drone Clearance',
    description: 'Arrange 2 candid photographers, 1 cinematic videographer, and step-and-repeat photo wall photographer.',
    status: 'In Progress',
    dueDate: '2026-12-05',
    assignedRole: 'Marketing (Fernando P. H. N.)',
  },
  {
    id: 't-6',
    bookingRef: 'INV-2026-7842',
    category: 'Entertainment',
    title: 'Jazz Quartet & Keynote Emcee Run-Through',
    description: 'Schedule pre-event rehearsal for awards host and 45-minute dinner jazz performance set.',
    status: 'Pending',
    dueDate: '2026-12-10',
    assignedRole: 'Operations (Perera R. P. N. D.)',
  },
];

export const INITIAL_DEMO_UPDATES: EventUpdate[] = [
  {
    id: 'u-1',
    bookingRef: 'INV-2026-7842',
    title: 'Event Enquiry Received & Recorded',
    description: 'Client submitted online enquiry for corporate annual gala for 220 guests. Requirements registered in Malabe operational queue.',
    timestamp: '2026-10-12 10:15 AM',
    author: 'Innovexa Automated System',
    isCustomerVisible: true,
  },
  {
    id: 'u-2',
    bookingRef: 'INV-2026-7842',
    title: 'Initial Consultation Completed',
    description: 'CEO Silva T. A. and Operations Manager Perera R. P. N. D. conducted requirements walkthrough with client representative.',
    timestamp: '2026-10-15 03:00 PM',
    author: 'Silva T. A. (CEO)',
    isCustomerVisible: true,
  },
  {
    id: 'u-3',
    bookingRef: 'INV-2026-7842',
    title: 'Service Agreement Confirmed & Booked',
    description: 'Milestone scope and indicative corporate event budget agreed. Formal service agreement counter-signed.',
    timestamp: '2026-10-22 11:45 AM',
    author: 'Perera L. A. D. A. S. (Finance)',
    isCustomerVisible: true,
  },
  {
    id: 'u-4',
    bookingRef: 'INV-2026-7842',
    title: 'Venue Site Inspection & Floorplan Ratified',
    description: 'Ballroom acoustics verified and supplier load-in logistics schedule confirmed with hotel banquet management.',
    timestamp: '2026-11-05 04:30 PM',
    author: 'Perera R. P. N. D. (Operations)',
    isCustomerVisible: true,
  },
  {
    id: 'u-5',
    bookingRef: 'INV-2026-7842',
    title: 'Menu Tasting Approved by Client',
    description: 'Client sampled canapés and main dinner stations. Special dietary allocations logged.',
    timestamp: '2026-11-14 02:15 PM',
    author: 'Perera R. P. N. D. (Operations)',
    isCustomerVisible: true,
  },
];

export const INITIAL_DEMO_ENQUIRIES: EventEnquiry[] = [
  {
    id: 'enq-001',
    referenceNo: 'INV-2026-7842',
    eventName: 'Colombo FinTech Annual Gala & Awards',
    eventType: 'Corporate Event',
    preferredDate: '2026-12-18',
    location: 'Cinnamon Grand Ballroom, Colombo',
    guestCount: 220,
    selectedServices: [
      'Corporate Event Management',
      'Venue Coordination & Booking',
      'Audio-Visual & Technical Production',
      'Catering Coordination',
      'Photography & Videography Coordination',
    ],
    budgetRange: 'LKR 200,000 – 500,000',
    customerName: 'Dilshan Wickramasinghe',
    email: 'client@demo.com',
    phone: '+94 77 482 1190',
    companyName: 'FinTech Solutions PLC',
    additionalRequirements: 'Require dual language host and 4K livestreaming to overseas regional branches.',
    status: 'Preparation',
    createdAt: '2026-10-12T09:30:00Z',
  },
  {
    id: 'enq-002',
    referenceNo: 'INV-2026-8910',
    eventName: 'Senanayake & Jayawardena Traditional Wedding',
    eventType: 'Wedding',
    preferredDate: '2027-02-14',
    alternativeDate: '2027-02-21',
    location: 'Waters Edge Grand Kristie, Battaramulla',
    guestCount: 350,
    selectedServices: [
      'Wedding Planning & Coordination',
      'Event Design & Décor',
      'Photography & Videography Coordination',
      'Catering Coordination',
    ],
    budgetRange: 'LKR 500,000 – 1,000,000',
    customerName: 'Kavindi Senanayake',
    email: 'kavindi.s@example.com',
    phone: '+94 71 889 4432',
    additionalRequirements: 'Need traditional Magul Bera drummers and auspicious Nekath timing alignment.',
    status: 'Consultation',
    createdAt: '2026-11-01T14:20:00Z',
  },
  {
    id: 'enq-003',
    referenceNo: 'INV-2026-9214',
    eventName: 'Little Princess 1st Birthday Celebration',
    eventType: 'Birthday',
    preferredDate: '2026-12-05',
    location: 'Private Garden Residence, Malabe',
    guestCount: 60,
    selectedServices: [
      'Birthday & Private Party Planning',
      'Event Design & Décor',
      'Catering Coordination',
    ],
    budgetRange: 'LKR 50,000 – 100,000',
    customerName: 'Ruchira Mendis',
    email: 'ruchira.mendis@example.com',
    phone: '+94 76 901 2234',
    additionalRequirements: 'Pastel unicorn theme with candy cart and bubble entertainer.',
    status: 'Received',
    createdAt: '2026-11-10T11:00:00Z',
  },
  {
    id: 'enq-004',
    referenceNo: 'INV-2026-9430',
    eventName: 'Annual Innovation & Tech Symposium',
    eventType: 'Educational / NGO',
    preferredDate: '2027-03-25',
    location: 'University Auditorium, Malabe',
    guestCount: 180,
    selectedServices: [
      'Conference & Seminar Management',
      'Audio-Visual & Technical Production',
      'Virtual & Hybrid Event Management',
    ],
    budgetRange: 'LKR 100,000 – 200,000',
    customerName: 'Dr. Anura Jayasundara',
    email: 'a.jayasundara@university.lk',
    phone: '+94 70 334 5567',
    companyName: 'Faculty of Computing',
    additionalRequirements: 'Require online badge registration and Zoom hybrid streaming for international keynote speaker.',
    status: 'Received',
    createdAt: '2026-11-14T16:45:00Z',
  },
];

export const INITIAL_DEMO_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-01',
    name: 'Shamila Rathnayake',
    email: 'shamila.r@gmail.com',
    subject: 'Inquiry regarding corporate annual dinner planning in Malabe area',
    message: 'Hello Innovexa team, we are planning our end-of-year company gathering in late December for about 120 staff. Would love to discuss indicative pricing and available venues in Malabe or Battaramulla.',
    createdAt: '2026-11-15T08:10:00Z',
    status: 'Unread',
  },
];

// Helper to safely access browser localStorage
function isClient(): boolean {
  return typeof window !== 'undefined';
}

export function getStoredEnquiries(): EventEnquiry[] {
  if (!isClient()) return INITIAL_DEMO_ENQUIRIES;
  const data = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_DEMO_ENQUIRIES));
    return INITIAL_DEMO_ENQUIRIES;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_DEMO_ENQUIRIES;
  }
}

export function saveEnquiry(enquiry: Omit<EventEnquiry, 'id' | 'referenceNo' | 'status' | 'createdAt'>): EventEnquiry {
  const existing = getStoredEnquiries();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newEnquiry: EventEnquiry = {
    ...enquiry,
    id: `enq-${Date.now()}`,
    referenceNo: `INV-2026-${randomSuffix}`,
    status: 'Received',
    createdAt: new Date().toISOString(),
  };

  const updated = [newEnquiry, ...existing];
  if (isClient()) {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));

    // Also create a linked update record
    const updates = getStoredUpdates();
    const newUpdate: EventUpdate = {
      id: `u-${Date.now()}`,
      bookingRef: newEnquiry.referenceNo,
      title: 'Event Enquiry Submitted Online',
      description: `New customized quotation request received for ${newEnquiry.eventName} (${newEnquiry.eventType}, ${newEnquiry.guestCount} guests). Assigned to Innovexa Pre-Sales.`,
      timestamp: new Date().toLocaleString(),
      author: 'Innovexa Client Portal',
      isCustomerVisible: true,
    };
    saveUpdate(newUpdate);
  }
  return newEnquiry;
}

export function updateEnquiryStatus(id: string, status: EventEnquiry['status']): void {
  const list = getStoredEnquiries();
  const index = list.findIndex((e) => e.id === id);
  if (index !== -1) {
    list[index].status = status;
    if (isClient()) {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(list));
    }
  }
}

export function getStoredBooking(): Booking {
  if (!isClient()) return INITIAL_DEMO_BOOKING;
  const data = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(INITIAL_DEMO_BOOKING));
    return INITIAL_DEMO_BOOKING;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_DEMO_BOOKING;
  }
}

export function updateBookingStage(stage: Booking['currentStage']): void {
  const current = getStoredBooking();
  current.currentStage = stage;
  if (isClient()) {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(current));
  }
}

export function getStoredTasks(): TaskItem[] {
  if (!isClient()) return INITIAL_DEMO_TASKS;
  const data = localStorage.getItem(STORAGE_KEYS.TASKS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(INITIAL_DEMO_TASKS));
    return INITIAL_DEMO_TASKS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_DEMO_TASKS;
  }
}

export function updateTaskStatus(taskId: string, status: TaskItem['status']): void {
  const tasks = getStoredTasks();
  const idx = tasks.findIndex((t) => t.id === taskId);
  if (idx !== -1) {
    tasks[idx].status = status;
    if (isClient()) {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    }
  }
}

export function addTask(task: Omit<TaskItem, 'id'>): TaskItem {
  const tasks = getStoredTasks();
  const newTask: TaskItem = {
    ...task,
    id: `t-${Date.now()}`,
  };
  const updated = [...tasks, newTask];
  if (isClient()) {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(updated));
  }
  return newTask;
}

export function getStoredUpdates(): EventUpdate[] {
  if (!isClient()) return INITIAL_DEMO_UPDATES;
  const data = localStorage.getItem(STORAGE_KEYS.UPDATES);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(INITIAL_DEMO_UPDATES));
    return INITIAL_DEMO_UPDATES;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_DEMO_UPDATES;
  }
}

export function saveUpdate(update: EventUpdate): void {
  const list = getStoredUpdates();
  const updated = [update, ...list];
  if (isClient()) {
    localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(updated));
  }
}

export function getStoredMessages(): ContactMessage[] {
  if (!isClient()) return INITIAL_DEMO_MESSAGES;
  const data = localStorage.getItem(STORAGE_KEYS.MESSAGES);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(INITIAL_DEMO_MESSAGES));
    return INITIAL_DEMO_MESSAGES;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_DEMO_MESSAGES;
  }
}

export function saveContactMessage(msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): ContactMessage {
  const existing = getStoredMessages();
  const newMsg: ContactMessage = {
    ...msg,
    id: `msg-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'Unread',
  };
  const updated = [newMsg, ...existing];
  if (isClient()) {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
  }
  return newMsg;
}

export function resetDemoData(): void {
  if (!isClient()) return;
  localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_DEMO_ENQUIRIES));
  localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(INITIAL_DEMO_BOOKING));
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(INITIAL_DEMO_TASKS));
  localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(INITIAL_DEMO_UPDATES));
  localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(INITIAL_DEMO_MESSAGES));
}
