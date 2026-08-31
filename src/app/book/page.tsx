'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Check,
  CreditCard,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sports, turf, Sport, SportOption, getSportById } from '@/data/turf';
import { generateMockSlots, getAvailableDates, formatDate, formatDateDisplay, TimeSlot } from '@/data/slots';

type BookingStep = 'sport' | 'datetime' | 'details' | 'confirmation';

function BookingContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<BookingStep>('sport');
  const [selectedSport, setSelectedSport] = useState<SportOption | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<TimeSlot[]>([]);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '' });

  // Handle pre-selection from URL query param
  useEffect(() => {
    const sportParam = searchParams.get('sport') as Sport | null;
    if (sportParam) {
      const sport = getSportById(sportParam);
      if (sport) {
        setSelectedSport(sport);
      }
    }
  }, [searchParams]);

  const availableDates = getAvailableDates();

  const slots = useMemo(() => {
    if (selectedSport && selectedDate) {
      return generateMockSlots(selectedSport.id, formatDate(selectedDate));
    }
    return [];
  }, [selectedSport, selectedDate]);

  const totalAmount = selectedSlots.length * (selectedSport?.pricePerHour || 0);

  const handleSlotToggle = (slot: TimeSlot) => {
    if (slot.status !== 'available') return;

    setSelectedSlots((prev) => {
      const exists = prev.find((s) => s.time === slot.time);
      if (exists) {
        return prev.filter((s) => s.time !== slot.time);
      }
      return [...prev, slot];
    });
  };

  const handleNext = () => {
    if (step === 'sport' && selectedSport) {
      setStep('datetime');
    } else if (step === 'datetime' && selectedDate && selectedSlots.length > 0) {
      setStep('details');
    } else if (step === 'details' && customerInfo.name && customerInfo.phone) {
      setStep('confirmation');
    }
  };

  const handleBack = () => {
    if (step === 'datetime') {
      setStep('sport');
      setSelectedDate(null);
      setSelectedSlots([]);
    } else if (step === 'details') {
      setStep('datetime');
    } else if (step === 'confirmation') {
      setStep('details');
    }
  };

  const sportColors = {
    football: 'from-green-600/20 to-green-600/5 border-green-500/30 hover:border-green-500/60',
    cricket: 'from-orange-600/20 to-orange-600/5 border-orange-500/30 hover:border-orange-500/60',
    badminton: 'from-blue-600/20 to-blue-600/5 border-blue-500/30 hover:border-blue-500/60',
  };

  const sportSelectedColors = {
    football: 'ring-green-500 border-green-500',
    cricket: 'ring-orange-500 border-orange-500',
    badminton: 'ring-blue-500 border-blue-500',
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Book Your <span className="text-gradient">Slot</span>
          </h1>
          <p className="text-muted-foreground">
            Choose your sport, pick a time, and you&apos;re ready to play!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 md:gap-4">
            {[
              { key: 'sport', label: 'Sport' },
              { key: 'datetime', label: 'Date & Time' },
              { key: 'details', label: 'Details' },
              { key: 'confirmation', label: 'Confirm' },
            ].map((s, i) => (
              <div key={s.key} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step === s.key
                      ? 'bg-primary text-primary-foreground'
                      : ['sport', 'datetime', 'details', 'confirmation'].indexOf(step) >
                        ['sport', 'datetime', 'details', 'confirmation'].indexOf(s.key)
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {['sport', 'datetime', 'details', 'confirmation'].indexOf(step) >
                  ['sport', 'datetime', 'details', 'confirmation'].indexOf(s.key) ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="hidden md:block ml-2 text-sm text-muted-foreground">
                  {s.label}
                </span>
                {i < 3 && (
                  <div className="w-8 md:w-16 h-0.5 mx-2 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Select Sport */}
          {step === 'sport' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-2">What would you like to play?</h2>
                <p className="text-muted-foreground text-sm">
                  Select a sport and we&apos;ll show you available slots
                </p>
              </div>

              {/* Sports Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {sports.map((sport) => (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport)}
                    className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 text-left ${
                      selectedSport?.id === sport.id
                        ? `ring-2 ${sportSelectedColors[sport.id]}`
                        : sportColors[sport.id]
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${sportColors[sport.id].split(' ').slice(0, 2).join(' ')}`} />
                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-5xl">{sport.emoji}</span>
                        {selectedSport?.id === sport.id && (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-4 h-4 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {sport.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">
                          ₹{sport.pricePerHour.toLocaleString()}/hr
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Up to {sport.maxPlayers}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Venue Info */}
              <Card className="bg-card/50 border-border mb-8">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{turf.name}</h4>
                      <p className="text-muted-foreground text-sm">{turf.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button onClick={handleNext} disabled={!selectedSport}>
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 'datetime' && selectedSport && (
            <div>
              {/* Selected Sport Summary */}
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{selectedSport.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{selectedSport.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        ₹{selectedSport.pricePerHour.toLocaleString()}/hr • Up to {selectedSport.maxPlayers} players
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setStep('sport')}>
                      Change
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Date Picker */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Select Date
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {availableDates.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedSlots([]);
                      }}
                      className={`flex-shrink-0 p-3 rounded-xl border text-center min-w-[80px] transition-all ${
                        selectedDate && formatDate(selectedDate) === formatDate(date)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <p className="text-xs text-muted-foreground">
                        {date.toLocaleDateString('en-IN', { weekday: 'short' })}
                      </p>
                      <p className="text-lg font-bold">{date.getDate()}</p>
                      <p className="text-xs text-muted-foreground">
                        {date.toLocaleDateString('en-IN', { month: 'short' })}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Select Time Slots
                  </h3>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {slots.map((slot) => {
                      const isSelected = selectedSlots.some((s) => s.time === slot.time);
                      return (
                        <button
                          key={slot.time}
                          onClick={() => handleSlotToggle(slot)}
                          disabled={slot.status !== 'available'}
                          className={`p-3 rounded-lg text-center text-sm font-medium transition-all ${
                            slot.status === 'booked'
                              ? 'bg-red-500/10 text-red-400 cursor-not-allowed'
                              : slot.status === 'blocked'
                              ? 'bg-muted text-muted-foreground cursor-not-allowed'
                              : isSelected
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-card border border-border hover:border-primary'
                          }`}
                        >
                          {slot.label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded bg-primary" /> Selected
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded bg-card border border-border" /> Available
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded bg-red-500/20" /> Booked
                    </span>
                  </div>
                </div>
              )}

              {/* Summary */}
              {selectedSlots.length > 0 && (
                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {selectedSlots.length} slot(s) selected
                        </p>
                        <p className="text-sm">
                          {selectedSlots.map((s) => s.label).join(', ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="text-xl font-bold text-primary">
                          ₹{totalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedDate || selectedSlots.length === 0}
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Customer Details */}
          {step === 'details' && (
            <div>
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-6">Enter Your Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={customerInfo.name}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, name: e.target.value })
                        }
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={customerInfo.phone}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, phone: e.target.value })
                        }
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={customerInfo.email}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, email: e.target.value })
                        }
                        className="bg-background"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sport</span>
                      <span className="flex items-center gap-2">
                        <span>{selectedSport?.emoji}</span>
                        {selectedSport?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Venue</span>
                      <span>{turf.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date</span>
                      <span>{selectedDate && formatDateDisplay(selectedDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time</span>
                      <span>{selectedSlots.map((s) => s.label).join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span>{selectedSlots.length} hour(s)</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-semibold">
                      <span>Total Amount</span>
                      <span className="text-primary">₹{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!customerInfo.name || !customerInfo.phone}
                >
                  Confirm Booking
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 'confirmation' && (
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-8">
                Your booking has been successfully placed. Check your phone for confirmation.
              </p>

              <Card className="bg-card border-border text-left mb-8 max-w-md mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Booking Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <div className="text-2xl flex-shrink-0">{selectedSport?.emoji}</div>
                      <div>
                        <p className="font-medium">{selectedSport?.name}</p>
                        <p className="text-muted-foreground">Up to {selectedSport?.maxPlayers} players</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">{turf.name}</p>
                        <p className="text-muted-foreground">{turf.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          {selectedDate && formatDateDisplay(selectedDate)}
                        </p>
                        <p className="text-muted-foreground">
                          {selectedSlots.map((s) => s.label).join(', ')}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">{customerInfo.name}</p>
                        <p className="text-muted-foreground">{customerInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CreditCard className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">₹{totalAmount.toLocaleString()}</p>
                        <p className="text-muted-foreground">Pay at venue</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline">Back to Home</Button>
                </Link>
                <Button onClick={() => window.location.reload()}>
                  Book Another Slot
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function BookingLoading() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Book Your <span className="text-gradient">Slot</span>
          </h1>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingLoading />}>
      <BookingContent />
    </Suspense>
  );
}
