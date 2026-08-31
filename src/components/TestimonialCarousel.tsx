'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/testimonials';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Show 3 testimonials on desktop, 1 on mobile
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div className="relative">
      {/* Desktop View - 3 cards */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Mobile View - 1 card */}
      <div className="md:hidden">
        <TestimonialCard testimonial={testimonials[currentIndex]} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-border hover:border-primary hover:bg-primary/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-border hover:border-primary hover:bg-primary/10"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="bg-card border-border h-full">
      <CardContent className="p-6">
        <Quote className="w-8 h-8 text-primary/30 mb-4" />
        <p className="text-muted-foreground mb-6 leading-relaxed">
          &ldquo;{testimonial.content}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-muted-foreground text-sm">{testimonial.role}</p>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
