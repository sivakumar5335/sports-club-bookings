'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface SportCard3DProps {
  sport: {
    id: string;
    name: string;
    emoji: string;
    description: string;
    pricePerHour: number;
    maxPlayers: number;
  };
  index: number;
}

export function SportCard3D({ sport, index }: SportCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth animation
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position to -0.5 to 0.5
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Get sport-specific colors
  const getSportColor = (sportId: string) => {
    switch (sportId) {
      case 'football':
        return { gradient: 'from-green-600/20 to-green-600/5', glow: 'rgba(34, 197, 94, 0.4)', border: 'border-green-500/50' };
      case 'cricket':
        return { gradient: 'from-orange-600/20 to-orange-600/5', glow: 'rgba(249, 115, 22, 0.4)', border: 'border-orange-500/50' };
      case 'badminton':
        return { gradient: 'from-blue-600/20 to-blue-600/5', glow: 'rgba(59, 130, 246, 0.4)', border: 'border-blue-500/50' };
      default:
        return { gradient: 'from-primary/20 to-primary/5', glow: 'rgba(34, 197, 94, 0.4)', border: 'border-primary/50' };
    }
  };

  const colors = getSportColor(sport.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <Link href={`/book?sport=${sport.id}`}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className={`relative overflow-hidden rounded-2xl border border-border transition-colors duration-300 cursor-pointer ${
            isHovered ? colors.border : ''
          }`}
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${colors.glow}, transparent 70%)`,
              opacity: isHovered ? 0.6 : 0,
            }}
          />

          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`} />

          {/* Content */}
          <div
            className="relative p-8 text-center"
            style={{ transform: 'translateZ(50px)' }}
          >
            {/* Animated Emoji */}
            <motion.span
              className="text-6xl mb-4 block"
              animate={isHovered ? {
                scale: [1, 1.2, 1.1],
                rotate: [0, -10, 10, 0],
              } : { scale: 1, rotate: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              {sport.emoji}
            </motion.span>

            {/* Title */}
            <motion.h3
              className="text-2xl font-bold mb-2 transition-colors"
              style={{
                color: isHovered ? 'var(--primary)' : 'inherit',
              }}
            >
              {sport.name}
            </motion.h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4">{sport.description}</p>

            {/* Price and players */}
            <div className="flex items-center justify-center gap-4 text-sm">
              <motion.span
                className="font-bold"
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                style={{ color: 'var(--primary)' }}
              >
                ₹{sport.pricePerHour.toLocaleString()}/hr
              </motion.span>
              <span className="text-muted-foreground">Up to {sport.maxPlayers} players</span>
            </div>

            {/* Hover indicator */}
            <motion.div
              className="mt-4 text-primary text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              Click to book →
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
