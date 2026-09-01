'use client';

import { motion } from 'framer-motion';
import { SportCard3D } from '@/components/animations/SportCard3D';
import { sports } from '@/data/turf';

export default function SportsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Sport</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our versatile turf is ready for your favorite sport. Pick one and book your slot!
          </p>
        </motion.div>

        {/* Sport Cards with 3D Effect and Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <SportCard3D key={sport.id} sport={sport} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
