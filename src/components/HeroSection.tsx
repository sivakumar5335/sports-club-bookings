'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/animations';
import { AnimatedCounter } from '@/components/animations';
import { turf } from '@/data/turf';

export default function HeroSection() {
  return (
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
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="text-primary text-sm font-medium">Now accepting online bookings</span>
          </motion.div>

          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <AnimatedText text="One Turf," delay={0.2} />
            <span className="text-gradient block">
              <AnimatedText text="Multiple Sports" delay={0.5} />
            </span>
          </h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Play Football, Cricket, or Badminton at our premium multisport turf.
            Check real-time availability and book your slot in seconds.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/book">
              <Button size="lg" className="text-base w-full sm:w-auto group">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Slot
                <motion.span
                  className="inline-block ml-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <Link href="/arena">
              <Button size="lg" variant="outline" className="text-base w-full sm:w-auto group">
                Explore Our Arena
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Animated Stats with Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
          >
            <div>
              <p className="text-3xl font-bold text-primary">
                <AnimatedCounter value={3} duration={1.5} />
              </p>
              <p className="text-muted-foreground text-sm">Sports Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                <AnimatedCounter value={10} suffix="K+" duration={2} />
              </p>
              <p className="text-muted-foreground text-sm">Happy Players</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                <AnimatedCounter value={4} suffix=".9" duration={1.5} />
              </p>
              <p className="text-muted-foreground text-sm">Average Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
