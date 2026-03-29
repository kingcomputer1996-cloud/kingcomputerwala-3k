import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Laptop Sales & Service",
  "Desktop Solutions",
  "CCTV Installation",
  "Security Systems",
  "Inverter Setup",
  "Battery Solutions",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.jpg"
                alt="King Computer & CCTV Solutions"
                width={70}
                height={70}
                style={{ width: 'auto', height: 'auto' }}
                className="object-contain bg-background rounded-lg p-1 max-w-[70px] max-h-[70px]"
              />
              <div>
                <span className="text-lg font-bold text-background">KING COMPUTER</span>
                <span className="block text-xs text-primary">& CCTV SOLUTIONS</span>
              </div>
            </Link>
            <p className="mt-6 text-background/70 text-sm leading-relaxed">
              Your trusted partner for all technology solutions. Quality products, expert service, and dedicated support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:8554088088" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>8554088088</span>
              </a>
              <a href="mailto:kingcomputer1996@gmail.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>kingcomputer1996@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your Local Tech Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} King Computer & CCTV Solutions. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Your Trusted Technology Partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
