"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    review: "Excellent service! King Computer provided us with top-quality CCTV installation. Very professional team.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    review: "Best place for laptop repairs. Quick turnaround and reasonable prices. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    review: "Got my office fully equipped with computers and security systems. Satisfaction guaranteed!",
    rating: 5,
  },
  {
    name: "Sunita Jadhav",
    review: "Very reliable inverter and battery setup. No more power issues at home. Thank you King Computer!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    review: "Professional and knowledgeable staff. They helped us choose the right security system for our shop.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4" />
        </div>
        
        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-lg border border-border">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                    {`"${testimonial.review}"`}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Google Rating Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">5.0 rating based on customer reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
