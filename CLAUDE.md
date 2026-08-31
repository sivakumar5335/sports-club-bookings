# Sports Club Bookings - Project Documentation

@AGENTS.md

## Project Overview

A demo-ready sports club/turf booking website built with Next.js 16, featuring a premium dark UI with electric green accents. The site allows customers to book slots for Football, Cricket, or Badminton at a single multisport turf venue.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (with Radix UI primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State**: React useState/useContext

---

## Business Model

**Single Turf with Multiple Sports**
- One venue: SportsClub Arena (100ft x 50ft)
- Three sports available:
  - Football: ₹1,500/hr (up to 14 players)
  - Turf Cricket: ₹1,200/hr (up to 12 players)
  - Badminton: ₹800/hr (up to 4 players)
- Operating hours: 6:00 AM - 10:00 PM
- Booking flow: Select Sport → Select Date/Time → Enter Details → Confirm

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles, CSS variables
│   ├── about/page.tsx       # About page
│   ├── arena/page.tsx       # Venue details (single turf)
│   ├── book/page.tsx        # 4-step booking wizard
│   ├── contact/page.tsx     # Contact form & info
│   └── pricing/page.tsx     # Sport pricing & membership plans
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   └── badge.tsx
│   ├── Navigation.tsx       # Header with mobile menu
│   ├── Footer.tsx           # Footer with links
│   └── TestimonialCarousel.tsx
├── data/
│   ├── turf.ts              # Venue & sport data
│   ├── slots.ts             # Time slot utilities
│   └── testimonials.ts      # Customer reviews
└── lib/
    └── utils.ts             # Tailwind merge utility
```

---

## Key Features Implemented

### Public Pages
1. **Homepage** (`/`)
   - Hero section with CTA
   - Sport selection cards linking to booking
   - "Our Arena" section
   - How it works steps
   - Testimonials carousel
   - Stats: 3 Sports, 10K+ Players, 4.9 Rating

2. **Arena Page** (`/arena`)
   - Venue details and images
   - Sports available with pricing
   - Amenities and features list
   - General rules
   - Contact information

3. **Booking Page** (`/book`)
   - 4-step wizard: Sport → Date/Time → Details → Confirmation
   - Accepts `?sport=` query parameter for pre-selection
   - Color-coded time slots (available/booked/blocked)
   - Real-time price calculation

4. **Pricing Page** (`/pricing`)
   - Per-sport pricing cards
   - Membership plans (Pay Per Use, Monthly, Annual)
   - Additional info section

5. **About Page** (`/about`)
   - Company story
   - Stats and achievements
   - Team section

6. **Contact Page** (`/contact`)
   - Contact form
   - Location map
   - Contact details

---

## Data Models

### Sport (turf.ts)
```typescript
interface SportOption {
  id: 'football' | 'cricket' | 'badminton';
  name: string;
  emoji: string;
  description: string;
  pricePerHour: number;
  maxPlayers: number;
  duration: string;
  equipment: string[];
  rules: string[];
}
```

### TimeSlot (slots.ts)
```typescript
interface TimeSlot {
  time: string;
  label: string;
  status: 'available' | 'booked' | 'blocked';
}
```

---

## Design System

### Theme: Floodlight Night - Turf Edition
- **Background**: Deep Black/Green (`#07110C`)
- **Primary**: Turf Green (`#22C55E`)
- **Secondary**: Emerald (`#16A34A`)
- **Highlight/Accent**: Lime (`#A3E635`)
- **Foreground**: Crisp White (`#F8FAFC`)
- **Cards**: Dark Green (`#0F1F16`)
- **Borders**: Green-tinted (`#1A3D2A`)
- **Muted Text**: Slate Gray (`#94A3B8`)

### Sport Colors
- Football: `green-500` (#22C55E)
- Cricket: `orange-500` (#F97316)
- Badminton: `blue-500` (#3B82F6)

### UI Patterns
- Glassmorphism cards
- Color-coded slot availability
- Mobile-first responsive design
- Smooth transitions and hover effects

---

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/arena` | Venue details |
| `/book` | Booking wizard |
| `/book?sport=football` | Pre-select football |
| `/pricing` | Pricing & plans |
| `/about` | About us |
| `/contact` | Contact page |

---

## Known Issues & Notes

1. **useSearchParams Suspense**: The booking page wraps `useSearchParams()` in a Suspense boundary for Next.js compatibility.

2. **Mock Data**: All booking data is procedurally generated - no real backend. Data is consistent due to seeded random generation.

3. **Images**: Using Unsplash URLs for demo images. Some may return 404.

---

## Change History

### Session 1: Initial Build
- Set up Next.js project with Tailwind CSS and shadcn/ui
- Created all public pages (Home, About, Facilities, Pricing, Contact, Book)
- Built 4-step booking wizard
- Fixed hydration errors (nested buttons in SheetTrigger)
- Fixed button component for asChild support

### Session 2: Single Turf Restructure
- Changed from "multiple facilities" to "single turf with multiple sports"
- Created `turf.ts` data file with sport options
- Updated homepage with "One Turf, Multiple Sports" messaging
- Changed booking flow from "Select Facility" to "Select Sport"
- Created new Arena page (replaced Facilities)
- Updated navigation and footer links
- Renamed "Box Cricket" to "Turf Cricket"

### Session 3: Theme Update
- Applied "Floodlight Night - Turf Edition" color palette
- Green-tinted dark backgrounds for authentic turf feel
- Updated CSS custom properties in globals.css
- Colors: Deep Black/Green background, Turf Green primary, Lime accents
