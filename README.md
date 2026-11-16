# INNOVEXA – Event Management & Planning
> *"Creating Memorable Experiences Through Innovation."*  
> **Main Message:** *"INNOVEXA – ONE PARTNER. EVERY DETAIL. A BETTER EVENT EXPERIENCE."*

A modern, responsive, full-stack business website and interactive software prototype developed for **Innovexa**, a proposed Sri Lankan event management and planning firm headquartered on New Kandy Road, Malabe, Sri Lanka.

Designed for an **Innovation Management and Entrepreneurship business pitch presentation**, this application demonstrates a luxury agency brand identity, comprehensive service catalogue, Annexure I indicative pricing, an interactive multi-step enquiry system, a functional Client Portal prototype, and an internal Operations Dashboard.

---

## 🏛️ Brand Identity & Design System

The application strictly adopts the official Innovexa circular seal logo (with transparent background) and the specified brand color palette:

- **Primary Navy:** `#081930`
- **Secondary Navy:** `#102B49`
- **Metallic Gold:** `#D3AA5B`
- **Champagne Gold:** `#F1DCAE`
- **White:** `#FFFFFF`
- **Ivory:** `#F9F7F1`

---

## 🚀 Key Website Pages & Features

### 1. Homepage (`/`)
- **Sticky Luxury Navigation Bar** with official transparent seal logo, page links, and quick CTAs.
- **Hero Section:** Full-width atmosphere with navy overlay, headline *"Every Occasion Deserves Something Extraordinary"*, subheadline, and primary/secondary CTAs.
- **Brand Value Banner:** Highlighting *"INNOVEXA – ONE PARTNER. EVERY DETAIL. A BETTER EVENT EXPERIENCE."*
- **Service Highlights:** 6 visual cards linking to signature capabilities.
- **Why Choose Innovexa:** The 6 core advantages (Personalized planning, transparent pricing, supplier coordination, dedicated event coordination, digital management, flexible packages).
- **Featured Customer Segments:** Corporate organizations, engaged couples, families, and educational institutions.
- **7-Stage Process Summary:** Overview of the lifecycle from inquiry to evaluation.

### 2. About Us (`/about`)
- **Proposed Company Background:** Location on New Kandy Road, Malabe, Sri Lanka; Year: 2026.
- **Our Story:** Addressing the problem of coordinating 8–15 fragmented suppliers independently.
- **Vision:** *"To be a leading event management service provider, creating memorable, innovative and well-organized events that bring people and communities together."*
- **Mission:** *"At Innovexa, we are dedicated to delivering professional, creative and reliable event management services that meet our clients' unique needs, exceed their expectations and create memorable experiences for every occasion."*
- **Core Values:** Customer satisfaction, creativity & innovation, professionalism, reliability, teamwork, affordable customized solutions, and high-quality service delivery.
- **Founding Team:** 4 profile cards with assigned portfolios and equal 25% ownership:
  - **Silva T. A.** – Chief Executive Officer (CEO)
  - **Perera R. P. N. D.** – Operations Manager
  - **Fernando P. H. N.** – Marketing Director
  - **Perera L. A. D. A. S.** – Finance Director

### 3. Services Catalogue (`/services`)
All 10 core event services from the business plan:
1. Wedding Planning & Coordination
2. Corporate Event Management
3. Birthday & Private Party Planning
4. Conference & Seminar Management
5. Vendor Coordination & Booking
6. Event Design & Décor
7. Audio-Visual & Technical Production
8. Catering Coordination
9. Photography & Videography Coordination
10. Virtual & Hybrid Event Management

### 4. Event Packages & Indicative Pricing (`/packages`)
Benchmarked against **Annexure I of the Innovexa Business Plan**:
- **Corporate Events:** LKR 150,000 – 500,000 per event
- **Wedding Events:** LKR 300,000 – 1,200,000 per wedding
- **Birthday & Private Events:** LKR 50,000 – 200,000 per event
- **Educational & NGO Events:** LKR 100,000 – 350,000 per event
- **Official Pricing Disclaimer:** *"Final event quotations are customized according to guest count, location, event type, selected services and individual requirements."*
- Includes *"Request Customized Quote"* buttons linking to the interactive enquiry wizard.

### 5. Event Inspiration & Showcase Concepts (`/portfolio`)
- Clearly designated as **Showcase Concepts** (respecting academic authenticity without fabricated client claims).
- Filterable gallery across: *Weddings, Corporate Events, Birthdays, Engagements, Private Celebrations, Decorations*.
- Interactive modal image lightbox with concept specifications.

### 6. How It Works (`/how-it-works`)
- **Triangular Collaboration Model:** Explaining how Customer, Innovexa Central Coordinator, and External Suppliers interact.
- **Interactive 7-Stage Stepper:**
  1. *Pre-Sales*
  2. *Confirmation*
  3. *Planning*
  4. *Preparation*
  5. *Execution*
  6. *Closure*
  7. *Evaluation*

### 7. Online Enquiry & Quotation System (`/book`)
A fully interactive 5-step wizard:
- **Step 1:** Event Information (Name, Category, Dates, Location, Guest Count).
- **Step 2:** Required Services (Multi-selection across 10 capabilities).
- **Step 3:** Budget Information (Sensible Annexure I brackets in LKR).
- **Step 4:** Customer Contact Details.
- **Step 5:** Summary Review & Submission.
- **Instant Result:** Generates reference number (e.g. `INV-2026-8492`), triggers celebratory confetti, records to persistent local database, and provides one-click navigation to the Client Portal.

### 8. Client Portal Prototype (`/portal`)
- **One-Click Demo Login:** Fast-track login for presentation demonstrations.
- **Event Overview:** Title, target date, venue, guest capacity, and reference number.
- **7-Stage Visual Progress Tracker:** Live progress indicators matching the current milestone.
- **Event Task Tracker:** Grouped by category (*Venue, Catering, Decoration, Photography, Entertainment, Technical*) with live status updates (*Pending, In Progress, Completed*).
- **Team Updates Dispatch:** Chronological updates from coordinators.
- **Document Repository:** Sample quotations, schedules, service agreements, and checklists.

### 9. Management Operations Dashboard (`/admin`)
- Prototype console for the Innovexa leadership team.
- **Stats Metrics:** Total enquiries, active planning pipelines, open tasks.
- **Live Stage Controller:** Advance the active client booking through Stages 1–7 to simulate real-time portal updates.
- **Enquiry Manager:** Filter and update enquiry statuses in real-time.
- **Task Creator & Assignee:** Assign tasks to Silva, Perera, Fernando, or Perera.
- **Dispatch Poster:** Publish client-facing updates directly to the portal.
- **One-Click Data Reset:** Instantly revert records to initial seed demo data.

### 10. Contact Us (`/contact`)
- Official Business Address: *Innovexa, New Kandy Road, Malabe, Sri Lanka*.
- Telephone: *+94 76 152 9914*.
- Email: *innovexa@gmail.com*.
- Proposed Domain: *www.innovexa.com*.
- WhatsApp direct chat button.
- Interactive contact message form with local storage persistence.
- Embedded Google Map showing Malabe, Sri Lanka.

### 11. FAQ Page (`/faq`)
- 10 accordion Q&As grounded strictly in the Innovexa business plan.

---

## 💻 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom luxury extensions
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **State & Data:** Client-side local storage persistence with Next.js REST API fallbacks (`/api/enquiries`, `/api/contact`)
- **SEO & Social:** OpenGraph metadata, `robots.txt`, and dynamic `sitemap.xml`

---

## 🛠️ Running the Application Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start the production server
npm run start -p 3000

# Or start in development mode
npm run dev
```

The application will be live at: **`http://localhost:3000`**
