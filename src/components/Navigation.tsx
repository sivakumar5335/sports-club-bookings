'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/arena', label: 'Our Arena' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SC</span>
            </div>
            <span className="text-xl font-bold hidden sm:block">
              Sports<span className="text-primary">Club</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book Now Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link href="/book" className="hidden sm:flex">
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-border">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        pathname === link.href
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 px-4">
                    <Link href="/book" onClick={() => setIsOpen(false)} className="block">
                      <Button className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
