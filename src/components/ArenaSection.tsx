'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations';
import { turf } from '@/data/turf';

export default function ArenaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              <motion.div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={turf.images[1]}
                  alt="Our turf arena"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass-card p-4 green-glow"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Zap className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-xl">{turf.size}</p>
                    <p className="text-muted-foreground text-sm">Playing Area</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div>
            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Premium <span className="text-gradient">Multisport Turf</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {turf.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {turf.amenities.slice(0, 6).map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="text-muted-foreground">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/arena">
                  <Button variant="outline" className="group">
                    View Full Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/book">
                  <Button className="group">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
