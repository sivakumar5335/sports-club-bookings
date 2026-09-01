'use client';

import { motion } from 'framer-motion';
import { Calendar, Shield, Trophy, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const steps = [
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
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book your slot in just a few simple steps
          </p>
        </ScrollReveal>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.15}>
          {steps.map((item, index) => (
            <StaggerItem key={item.step} className="relative">
              {/* Connector Line */}
              {index < 3 && (
                <motion.div
                  className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                />
              )}

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-background border-border text-center h-full">
                  <CardContent className="pt-8 pb-6">
                    {/* Icon with pulse animation */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        <item.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                    </motion.div>

                    {/* Step number */}
                    <motion.span
                      className="text-primary/50 text-sm font-mono"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      Step {item.step}
                    </motion.span>

                    <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
