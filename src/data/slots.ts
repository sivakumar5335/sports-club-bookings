export type SlotStatus = 'available' | 'booked' | 'blocked';

export interface TimeSlot {
  time: string;
  label: string;
  status: SlotStatus;
}

export interface DaySlots {
  sportId: string;
  date: string;
  slots: TimeSlot[];
}

// Generate time slots from 6 AM to 10 PM
export const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 6; hour <= 22; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return slots;
};

export const formatTime = (time: string): string => {
  const [hours] = time.split(':');
  const hour = parseInt(hours, 10);
  if (hour === 0) return '12:00 AM';
  if (hour === 12) return '12:00 PM';
  if (hour > 12) return `${hour - 12}:00 PM`;
  return `${hour}:00 AM`;
};

// Generate mock slot data for a sport and date
export const generateMockSlots = (sportId: string, date: string): TimeSlot[] => {
  const times = generateTimeSlots();

  // Create some randomized booking patterns
  const bookedSlots = new Set<string>();
  const blockedSlots = new Set<string>();

  // Randomly book 30-40% of slots
  times.forEach((time) => {
    const random = Math.random();
    if (random < 0.3) {
      bookedSlots.add(time);
    } else if (random < 0.35) {
      blockedSlots.add(time);
    }
  });

  // Peak hours (6-8 PM) are more likely to be booked
  ['18:00', '19:00', '20:00'].forEach((time) => {
    if (Math.random() < 0.6) {
      bookedSlots.add(time);
    }
  });

  return times.map((time) => ({
    time,
    label: formatTime(time),
    status: blockedSlots.has(time)
      ? 'blocked'
      : bookedSlots.has(time)
      ? 'booked'
      : 'available',
  }));
};

// Get next 14 days for date picker
export const getAvailableDates = (): Date[] => {
  const dates: Date[] = [];
  const today = new Date();

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  return dates;
};

export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const formatDateDisplay = (date: Date): string => {
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
};
