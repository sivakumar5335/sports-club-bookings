'use client';

import { motion } from 'framer-motion';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { ScrollReveal } from '@/components/animations';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Players Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our community of players
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <TestimonialCarousel />
        </ScrollReveal>
      </div>
    </section>
  );
}
