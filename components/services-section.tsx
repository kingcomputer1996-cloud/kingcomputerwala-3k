import { Laptop, Monitor, Camera, Shield, Zap, Battery, Wrench, Headphones } from "lucide-react"

const services = [
  {
    icon: Laptop,
    title: "Laptop Sales & Service",
    description: "Wide range of laptops from all major brands with expert repair and maintenance services.",
  },
  {
    icon: Monitor,
    title: "Desktop Solutions",
    description: "Custom-built desktops and branded systems for home, office, and gaming needs.",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional CCTV camera installation for homes, shops, offices, and industrial spaces.",
  },
  {
    icon: Shield,
    title: "Security Systems",
    description: "Complete security solutions including DVR/NVR systems, IP cameras, and remote monitoring.",
  },
  {
    icon: Zap,
    title: "Inverter Setup",
    description: "High-quality inverters for uninterrupted power supply for homes and businesses.",
  },
  {
    icon: Battery,
    title: "Battery Solutions",
    description: "Reliable battery backup systems with installation and maintenance support.",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Expert repair services for computers, laptops, and all electronic equipment.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Dedicated technical support team available for all your technology needs.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Services Truly Different
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Computer & Security Solutions
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
