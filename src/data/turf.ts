export type Sport = 'football' | 'cricket' | 'badminton';

export interface SportOption {
  id: Sport;
  name: string;
  emoji: string;
  description: string;
  pricePerHour: number;
  maxPlayers: number;
  duration: string;
  equipment: string[];
  rules: string[];
}

export interface TurfInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  timings: string;
  size: string;
  surface: string;
  images: string[];
  amenities: string[];
  features: string[];
}

export const turf: TurfInfo = {
  name: 'SportsClub Arena',
  tagline: 'Your Premium Multisport Turf',
  description: 'Experience the thrill of your favorite sports at our state-of-the-art indoor turf. Whether you want to play football with friends, practice cricket, or enjoy a game of badminton, our versatile turf is ready for you. Book your slot and play!',
  address: '123 Sports Avenue, Anna Nagar, Chennai - 600040',
  phone: '+91 98765 43210',
  email: 'info@sportsclub.com',
  timings: '6:00 AM - 10:00 PM',
  size: '100ft x 50ft',
  surface: 'Premium Artificial Turf',
  images: [
    'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200',
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800',
  ],
  amenities: [
    'Flood Lights',
    'Drinking Water',
    'Washrooms',
    'Change Room',
    'Parking',
    'Seating Area',
    'First Aid',
    'Warm Up Area',
  ],
  features: [
    'Premium artificial turf surface',
    'Professional-grade flood lights',
    'Climate-controlled environment',
    'Equipment available on request',
    'Spacious parking area',
    'Clean and hygienic facilities',
  ],
};

export const sports: SportOption[] = [
  {
    id: 'football',
    name: 'Football',
    emoji: '⚽',
    description: 'Play 5-a-side or 7-a-side football on our premium turf. Perfect for friendly matches, corporate games, or serious practice sessions.',
    pricePerHour: 1500,
    maxPlayers: 14,
    duration: '1 hour slots',
    equipment: ['Football provided', 'Bibs available'],
    rules: [
      'Sports shoes mandatory (no metal studs)',
      'Maximum 14 players allowed',
      'No sliding tackles',
      'Arrive 10 minutes before your slot',
    ],
  },
  {
    id: 'cricket',
    name: 'Turf Cricket',
    emoji: '🏏',
    description: 'Enjoy turf cricket with your team. Our turf is perfect for quick matches with modified rules that make the game fast and exciting.',
    pricePerHour: 1200,
    maxPlayers: 12,
    duration: '1 hour slots',
    equipment: ['Bat and ball provided', 'Stumps included', 'Protective gear available'],
    rules: [
      'Sports shoes mandatory (no barefoot)',
      'Maximum 12 players (6 per team)',
      'Modified turf cricket rules apply',
      'Equipment must be returned after use',
    ],
  },
  {
    id: 'badminton',
    name: 'Badminton',
    emoji: '🏸',
    description: 'Play badminton on our marked court area. Great for singles or doubles matches with proper net setup.',
    pricePerHour: 800,
    maxPlayers: 4,
    duration: '1 hour slots',
    equipment: ['Net setup provided', 'Rackets available for rent', 'Shuttlecocks available for purchase'],
    rules: [
      'Non-marking shoes mandatory',
      'Maximum 4 players per court',
      'Bring your own rackets (or rent)',
      'Respect other players - keep noise levels down',
    ],
  },
];

export const getSportById = (id: Sport): SportOption | undefined => {
  return sports.find((s) => s.id === id);
};

export const getSportLabel = (id: Sport): string => {
  const sport = getSportById(id);
  return sport?.name || id;
};
