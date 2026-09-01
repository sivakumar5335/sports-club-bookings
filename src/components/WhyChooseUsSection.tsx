'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, MapPin, Shield, Star, Users } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { turf } from '@/data/turf';

const features = [
  { icon: Star, title: 'Premium Quality', desc: 'Top-tier turf and maintenance' },
  { icon: Clock, title: 'Flexible Timings', desc: `Open ${turf.timings}` },
  { icon: Shield, title: 'Instant Booking', desc: 'Real-time availability' },
  { icon: Users, title: 'All Skill Levels', desc: 'Beginners to pros welcome' },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">SportsClub</span>?
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <p className="text-muted-foreground mb-8">
                We provide the best-in-class sports experience with professional maintenance,
                modern amenities, and a seamless booking experience.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1} delay={0.2}>
              {features.map((item, index) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                    whileHover={{
                      scale: 1.02,
                      borderColor: 'rgba(34, 197, 94, 0.5)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Image Side */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={turf.images[2]}
                  alt="Sports facility"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass-card p-4 green-glow"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-lg">Prime Location</p>
                    <p className="text-muted-foreground text-sm">Easy to reach</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
