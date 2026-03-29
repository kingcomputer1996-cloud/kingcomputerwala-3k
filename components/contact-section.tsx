"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Have a question or need a quote? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>

            <div className="space-y-6">
              <a href="tel:8554088088" className="flex items-start gap-4 group p-4 rounded-xl bg-background border border-border hover:border-primary transition-colors">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-xl font-semibold text-primary mt-1">8554088088</p>
                  <p className="text-sm text-muted-foreground">Click to call</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground mt-1">kingcomputer1996@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground mt-1">1st floor, A/P-Siddhirajnath Complex ,Shop No, 02/03, Tal, Baramati, Someshwar Nagar, Maharashtra 412306</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Working Hours</h4>
                  <p className="text-muted-foreground mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918554088088"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl border border-border p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground">Thank you!</h4>
                <p className="text-muted-foreground mt-2">We&apos;ll get back to you shortly.</p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
