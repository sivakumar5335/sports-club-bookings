export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  sport: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Football Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    content: 'Best turf in the city! The quality of the grass is amazing and the lighting is perfect for evening matches. Been playing here every weekend for the past year.',
    rating: 5,
    sport: 'Football',
  },
  {
    id: '2',
    name: 'Priya Menon',
    role: 'Badminton Player',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    content: 'The indoor badminton courts are world-class. Proper wooden flooring, excellent lighting, and the air conditioning makes it comfortable to play anytime.',
    rating: 5,
    sport: 'Badminton',
  },
  {
    id: '3',
    name: 'Arjun Nair',
    role: 'Cricket Coach',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    content: 'I bring my academy students here for practice sessions. The bowling machines are well-maintained and the nets are of professional quality.',
    rating: 5,
    sport: 'Cricket',
  },
  {
    id: '4',
    name: 'Sneha Patel',
    role: 'Corporate Team Lead',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    content: 'We organize our office football tournaments here. The booking process is seamless and the staff is always helpful. Highly recommend!',
    rating: 4,
    sport: 'Football',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'Weekend Warrior',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    content: 'Great facilities at reasonable prices. The 5-a-side pitch is perfect for our group of friends. Easy online booking saves so much time.',
    rating: 5,
    sport: 'Football',
  },
  {
    id: '6',
    name: 'Ananya Rao',
    role: 'State-level Badminton Player',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    content: 'Finally, a venue with Olympic-grade courts! The flooring quality is excellent for competitive play. This is now my regular training spot.',
    rating: 5,
    sport: 'Badminton',
  },
];
