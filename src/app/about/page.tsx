import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, Trophy, Target, Award, Clock, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'About Us',
  description: 'Learn about SportsClub - our story, mission, and commitment to providing premium sports facilities.',
};

const stats = [
  { value: '5+', label: 'Years of Excellence', icon: Trophy },
  { value: '10K+', label: 'Happy Players', icon: Users },
  { value: '6', label: 'Premium Facilities', icon: Target },
  { value: '50K+', label: 'Bookings Made', icon: Calendar },
];

const values = [
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We maintain the highest standards in facility quality and customer service.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a vibrant community of sports enthusiasts and athletes.',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Transparent pricing, reliable bookings, and safe playing environments.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Driven by our love for sports and commitment to your game.',
  },
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    bio: 'Former state-level football player with 15+ years in sports management.',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    bio: 'Ensures smooth operations and excellent customer experience.',
  },
  {
    name: 'Arun Menon',
    role: 'Head Coach',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    bio: 'Certified coach with experience training professional athletes.',
  },
];

const amenities = [
  'Changing Rooms',
  'Hot Showers',
  'Secure Lockers',
  'Free Parking',
  'Cafeteria',
  'Pro Shop',
  'First Aid',
  'Free WiFi',
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920"
            alt="Sports facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story of <span className="text-gradient">Passion for Sports</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2021, SportsClub began with a simple mission: to provide
              world-class sports facilities accessible to everyone. What started as
              a single football turf has grown into a comprehensive sports complex
              serving thousands of players every month.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe everyone deserves access to quality sports facilities.
                Our mission is to make booking sports venues as easy as booking a movie ticket,
                while ensuring every facility meets the highest standards of quality and safety.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From amateur players to professional teams, we cater to all skill levels.
                Our state-of-the-art facilities, combined with our passion for sports,
                create the perfect environment for you to play, train, and excel.
              </p>

              <div className="flex flex-wrap gap-3">
                {amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"
                  alt="Football turf"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-5 green-glow">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Open Daily</p>
                    <p className="text-muted-foreground text-sm">6 AM - 11 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-background border-border text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind SportsClub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="bg-card border-border overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Best?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of satisfied players who have made SportsClub their home for sports.
            </p>
            <Link href="/book">
              <Button size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your First Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
