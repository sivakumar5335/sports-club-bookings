import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  Check,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { turf, sports } from '@/data/turf';

export const metadata = {
  title: 'Our Arena',
  description: 'Explore our premium multisport turf. Play Football, Cricket, or Badminton at our state-of-the-art facility with modern amenities.',
};

const sportColors = {
  football: 'from-green-600/20 to-green-600/5 border-green-500/30',
  cricket: 'from-orange-600/20 to-orange-600/5 border-orange-500/30',
  badminton: 'from-blue-600/20 to-blue-600/5 border-blue-500/30',
};

export default function ArenaPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {turf.name}
            </h1>
            <p className="text-primary font-medium text-lg mb-4">{turf.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {turf.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/book">
                <Button size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{turf.size}</p>
                  <p className="text-muted-foreground text-xs">Playing Area</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{turf.timings}</p>
                  <p className="text-muted-foreground text-xs">Open Hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={turf.images[0]}
                alt={turf.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card p-4 green-glow">
              <p className="font-bold text-lg">{turf.surface}</p>
              <p className="text-muted-foreground text-sm">Premium Quality</p>
            </div>
          </div>
        </div>

        {/* Sports Available */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Sports Available
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sports.map((sport) => (
              <Card
                key={sport.id}
                className={`relative overflow-hidden border-2 ${sportColors[sport.id]}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sportColors[sport.id].split(' ').slice(0, 2).join(' ')}`} />
                <CardContent className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{sport.emoji}</span>
                    <span className="text-primary font-bold text-lg">
                      ₹{sport.pricePerHour.toLocaleString()}/hr
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {sport.description}
                  </p>

                  <div className="space-y-2 mb-4">
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
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Equipment Included:</p>
                    {sport.equipment.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/book?sport=${sport.id}`} className="block mt-6">
                    <Button className="w-full">Book {sport.name}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Facility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {turf.images.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden ${
                  index === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'
                }`}
              >
                <Image
                  src={image}
                  alt={`${turf.name} view ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Amenities & Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Amenities */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {turf.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Features</h3>
                <div className="space-y-4">
                  {turf.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rules */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            General Rules
          </h2>
          <Card className="bg-card border-border max-w-3xl mx-auto">
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span className="text-muted-foreground">
                    Arrive at least 10 minutes before your booking time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span className="text-muted-foreground">
                    Appropriate sports attire and footwear are mandatory
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span className="text-muted-foreground">
                    No metal studs allowed on the turf
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span className="text-muted-foreground">
                    Food and beverages are not allowed on the playing area
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">5.</span>
                  <span className="text-muted-foreground">
                    Please respect other players and maintain sportsmanship
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">6.</span>
                  <span className="text-muted-foreground">
                    Cancellations must be made at least 2 hours before booking time
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Info */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">{turf.address}</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">{turf.phone}</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">{turf.email}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/20 max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Play?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Book your slot now and experience the best multisport turf in town.
              </p>
              <Link href="/book">
                <Button size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Slot
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
