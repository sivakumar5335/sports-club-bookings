import HeroSection from '@/components/HeroSection';
import SportsSection from '@/components/SportsSection';
import ArenaSection from '@/components/ArenaSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Animated Hero Section */}
      <HeroSection />

      {/* Animated Sports Selection */}
      <SportsSection />

      {/* Animated Arena Section */}
      <ArenaSection />

      {/* Animated How It Works */}
      <HowItWorksSection />

      {/* Animated Why Choose Us */}
      <WhyChooseUsSection />

      {/* Animated Testimonials */}
      <TestimonialsSection />

      {/* Animated CTA Section */}
      <CTASection />
    </div>
  );
}
