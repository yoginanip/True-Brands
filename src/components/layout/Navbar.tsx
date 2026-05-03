"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home",      path: "/" },
  { name: "About",     path: "/about" },
  { name: "Services",  path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact",   path: "/contact" },
];

import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D141C]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-48 h-12 flex items-center">
            <Image
              src="/logo.jpg"
              alt="TrueBrands Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                pathname === link.path ? "text-accent" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary" size="sm">
            Free Audit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0D141C]/98 backdrop-blur-xl border-b border-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col items-center py-8 gap-5 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === link.path ? "text-accent" : "text-gray-200 hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="secondary" className="w-[200px] mt-2">
              Free Audit
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
