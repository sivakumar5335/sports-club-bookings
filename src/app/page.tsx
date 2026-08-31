import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Shield, Star, Users, Trophy, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { turf, sports } from '@/data/turf';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={turf.images[0]}
            alt="Sports turf"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Now accepting online bookings</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              One Turf,
              <span className="text-gradient block">Multiple Sports</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Play Football, Cricket, or Badminton at our premium multisport turf.
              Check real-time availability and book your slot in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="text-base w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Slot
                </Button>
              </Link>
              <Link href="/arena">
                <Button size="lg" variant="outline" className="text-base w-full sm:w-auto">
                  Explore Our Arena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-muted-foreground text-sm">Sports Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-muted-foreground text-sm">Happy Players</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.9</p>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Sport */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Sport</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our versatile turf is ready for your favorite sport. Pick one and book your slot!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sports.map((sport) => (
              <Link
                key={sport.id}
                href={`/book?sport=${sport.id}`}
                className={`group relative overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  sport.id === 'football' ? 'from-green-600/20 to-green-600/5' :
                  sport.id === 'cricket' ? 'from-orange-600/20 to-orange-600/5' :
                  'from-blue-600/20 to-blue-600/5'
                }`} />
                <div className="relative p-8 text-center">
                  <span className="text-6xl mb-4 block">{sport.emoji}</span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {sport.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{sport.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <span className="text-primary font-bold">₹{sport.pricePerHour.toLocaleString()}/hr</span>
                    <span className="text-muted-foreground">Up to {sport.maxPlayers} players</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Arena */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={turf.images[1]}
                  alt="Our turf arena"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-4 green-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">{turf.size}</p>
                    <p className="text-muted-foreground text-sm">Playing Area</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Premium <span className="text-gradient">Multisport Turf</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {turf.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {turf.amenities.slice(0, 6).map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/arena">
                  <Button variant="outline">
                    View Full Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/book">
                  <Button>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book your slot in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: Trophy,
                title: 'Choose Sport',
                description: 'Select from Football, Cricket, or Badminton',
              },
              {
                step: '02',
                icon: Calendar,
                title: 'Pick Date & Time',
                description: 'Check availability and choose your preferred slot',
              },
              {
                step: '03',
                icon: Shield,
                title: 'Confirm Booking',
                description: 'Enter your details and confirm instantly',
              },
              {
                step: '04',
                icon: Zap,
                title: 'Play & Enjoy',
                description: 'Show up and enjoy your game!',
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <Card className="bg-background border-border text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-primary/50 text-sm font-mono">Step {item.step}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">SportsClub</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                We provide the best-in-class sports experience with professional maintenance,
                modern amenities, and a seamless booking experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Star, title: 'Premium Quality', desc: 'Top-tier turf and maintenance' },
                  { icon: Clock, title: 'Flexible Timings', desc: `Open ${turf.timings}` },
                  { icon: Shield, title: 'Instant Booking', desc: 'Real-time availability' },
                  { icon: Users, title: 'All Skill Levels', desc: 'Beginners to pros welcome' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={turf.images[2]}
                  alt="Sports facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 green-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Prime Location</p>
                    <p className="text-muted-foreground text-sm">Easy to reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Players Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our community of players
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Play?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Book your slot now and experience the best multisport turf in town.
                Football, Cricket, or Badminton - the choice is yours!
              </p>
              <Link href="/book">
                <Button size="lg" className="text-base">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Slot Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
