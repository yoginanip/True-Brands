import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "SEO Optimization",   href: "/services#seo" },
  { label: "Performance Ads",    href: "/services#performance" },
  { label: "Web Development",    href: "/services#web" },
  { label: "Social Media",       href: "/services#social" },
  { label: "Branding & Design",  href: "/services#branding" },
];

const company = [
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact",   href: "/contact" },
];

const contact = [
  { icon: Mail,    label: "truebrands@gmail.com", href: "mailto:truebrands@gmail.com" },
  { icon: Phone,   label: "+91 91549 50171",          href: "tel:+919154950171" },
  { icon: MapPin,  label: "Hyderabad, India",         href: "#" },
];

const socials = [
  {
    label: "X / Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    )
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#060C12] text-white border-t border-white/5">
      <div className="container mx-auto px-6">

        {/* Main grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-12 gap-8">

          {/* Brand — wider col */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-5">
            <Link href="/" className="block">
              <div className="relative w-32 h-9">
                <Image src="/logo.jpg" alt="TrueBrands Logo" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              We build and scale digital brands through performance marketing, SEO, and stunning design — ROI first, always.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ svg, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Services */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-gray-500 hover:text-white transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Company</p>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs text-gray-500 hover:text-white transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Get In Touch</p>
            <ul className="space-y-3">
              {contact.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-2.5 text-xs text-gray-500 hover:text-white transition-colors duration-150"
                  >
                    <span className="w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-200 shrink-0">
                      <Icon className="w-3 h-3 group-hover:text-accent transition-colors" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600">
            &copy; {new Date().getFullYear()} TrueBrands Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[11px] text-gray-600 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-[11px] text-gray-600 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
