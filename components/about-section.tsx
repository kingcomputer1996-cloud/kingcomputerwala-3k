import { Button } from "@/components/ui/button"
import { CheckCircle, Phone } from "lucide-react"

const highlights = [
  "Quality products from trusted brands",
  "Expert installation and setup",
  "Prompt and reliable service",
  "Competitive pricing",
  "After-sales support",
  "Experienced technicians",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Stats Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-primary-foreground">10+</div>
                <div className="text-primary-foreground/80 mt-2">Years Experience</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-foreground">500+</div>
                <div className="text-muted-foreground mt-2">Happy Customers</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-foreground">1000+</div>
                <div className="text-muted-foreground mt-2">Installations</div>
              </div>
              <div className="bg-foreground rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-background">24/7</div>
                <div className="text-background/70 mt-2">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              We are Best Computer & Security Solutions Provider
            </h2>
            <div className="w-20 h-1 bg-primary mt-4" />
            
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              King Computer & CCTV Solutions is a trusted technology company committed to providing 
              quality products and services. We offer complete solutions for all your computer and 
              security system needs.
            </p>
            
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Our team of experienced professionals ensures top-notch service every time. From 
              laptops and desktops to CCTV cameras and power backup solutions, we have got 
              everything covered.
            </p>
            
            {/* Highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-10">
              <Button size="lg" asChild>
                <a href="tel:8554088088" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us: 8554088088
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
