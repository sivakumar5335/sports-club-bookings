import Link from 'next/link';
import { Check, Calendar, Star, Users, Clock, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { sports, turf } from '@/data/turf';

export const metadata = {
  title: 'Pricing',
  description: 'View our transparent pricing for Football, Cricket, and Badminton. Affordable hourly rates at our premium multisport turf.',
};

const membershipPlans = [
  {
    name: 'Pay Per Use',
    description: 'Book slots as you need them',
    price: 'Varies',
    priceNote: 'per sport',
    features: [
      'Book any sport anytime',
      'No commitment required',
      'Pay only when you play',
      'Online booking system',
    ],
    popular: false,
    cta: 'Book Now',
    href: '/book',
  },
  {
    name: 'Monthly Pass',
    description: 'Unlimited bookings for 30 days',
    price: '₹4,999',
    priceNote: 'per month',
    features: [
      'Unlimited slot bookings',
      'All sports included',
      'Priority access during peak hours',
      'Free equipment rental',
      'Guest passes (2/month)',
    ],
    popular: true,
    cta: 'Get Started',
    href: '/contact',
  },
  {
    name: 'Annual Membership',
    description: 'Best value for regular players',
    price: '₹39,999',
    priceNote: 'per year',
    features: [
      'Everything in Monthly Pass',
      '2 months free (save ₹10,000)',
      'Priority booking (48hr advance)',
      '20% off coaching sessions',
      'Free locker access',
      'Exclusive member events',
    ],
    popular: false,
    cta: 'Get Started',
    href: '/contact',
  },
];

const sportColors = {
  football: 'from-green-600/20 to-green-600/5 border-green-500/30',
  cricket: 'from-orange-600/20 to-orange-600/5 border-orange-500/30',
  badminton: 'from-blue-600/20 to-blue-600/5 border-blue-500/30',
};

export default function PricingPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No surprises. Just fair prices for premium sports experience.
          </p>
        </div>

        {/* Hourly Rates by Sport */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Hourly Rates</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sports.map((sport) => (
              <Card
                key={sport.id}
                className={`relative overflow-hidden border-2 ${sportColors[sport.id]}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sportColors[sport.id].split(' ').slice(0, 2).join(' ')}`} />
                <CardHeader className="relative text-center pb-2">
                  <div className="text-5xl mb-3">{sport.emoji}</div>
                  <CardTitle className="text-xl">{sport.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{sport.description}</p>
                </CardHeader>
                <CardContent className="relative text-center">
                  <div className="my-6">
                    <span className="text-4xl font-bold text-primary">
                      ₹{sport.pricePerHour.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">/hour</span>
                  </div>

                  <div className="space-y-2 text-left mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Up to {sport.maxPlayers} players
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{sport.duration}</span>
                    </div>
                    {sport.equipment.slice(0, 2).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/book?sport=${sport.id}`}>
                    <Button className="w-full">Book {sport.name}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Venue Info */}
        <section className="mb-20">
          <Card className="bg-card/50 border-border max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{turf.name}</h3>
                  <p className="text-muted-foreground text-sm">{turf.address}</p>
                  <p className="text-muted-foreground text-sm">
                    {turf.size} • {turf.surface} • Open {turf.timings}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Membership Plans */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Membership Plans
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Save more with our membership plans. Perfect for regular players.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-card border-border relative ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm block">{plan.priceNote}</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href}>
                    <Button
                      className="w-full"
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Peak Hours</h3>
              <p className="text-muted-foreground text-sm">
                6 PM - 9 PM on weekdays and weekends may have higher demand.
                Book early to secure your slot.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Group Discounts</h3>
              <p className="text-muted-foreground text-sm">
                Corporate bookings and team packages available.
                Contact us for custom quotes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Equipment Included</h3>
              <p className="text-muted-foreground text-sm">
                Balls and basic equipment are included in the booking.
                Premium equipment available for rent.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book your slot now and experience our premium multisport turf at fair prices.
          </p>
          <Link href="/book">
            <Button size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
