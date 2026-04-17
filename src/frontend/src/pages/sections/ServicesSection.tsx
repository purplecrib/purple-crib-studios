import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Camera, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const PHOTOGRAPHY_FEATURES = [
  "Wedding Photography",
  "Corporate Headshots",
  "Product Shoots",
  "Model Shoots",
  "Events Coverage",
  "360° VR Tours",
];

const BUSINESS_FEATURES = [
  "AI Social Media Marketing",
  "Google My Business Setup",
  "WhatsApp Business Integration",
  "ERP for SMEs",
];

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ocidPrefix: string;
  reversed?: boolean;
}

function ServiceCard({
  icon,
  iconBg,
  title,
  tagline,
  description,
  features,
  ctaLabel,
  ocidPrefix,
  reversed,
}: ServiceCardProps) {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
      data-ocid={`${ocidPrefix}.card`}
    >
      {/* Visual panel */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-1/2 flex-shrink-0"
      >
        <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-elevated bg-card">
          {/* Service visual */}
          <div
            className="h-64 lg:h-80 relative flex items-center justify-center"
            style={{
              background: reversed
                ? "linear-gradient(135deg, oklch(0.18 0.015 280), oklch(0.75 0.18 55 / 0.15) 100%)"
                : "linear-gradient(135deg, oklch(0.18 0.015 280), oklch(0.68 0.26 300 / 0.2) 100%)",
            }}
          >
            {/* Feature chips grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6 items-center content-center">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 + 0.3 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 text-xs font-medium text-foreground flex items-center gap-2"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${reversed ? "bg-accent" : "bg-primary"}`}
                  />
                  <span className="truncate">{f}</span>
                </motion.div>
              ))}
            </div>

            {/* Icon badge */}
            <div
              className={`absolute top-4 right-4 p-3 rounded-xl ${iconBg} border border-white/10`}
            >
              {icon}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-1/2"
      >
        <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          {tagline}
        </div>
        <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-7 text-base">
          {description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <CheckCircle2
                className={`size-4 shrink-0 ${reversed ? "text-accent" : "text-primary"}`}
              />
              {f}
            </li>
          ))}
        </ul>

        <Button
          onClick={scrollToContact}
          className="gradient-accent text-accent-foreground font-semibold border-0 hover:opacity-90 transition-smooth"
          data-ocid={`${ocidPrefix}.cta_button`}
        >
          {ctaLabel}
          <ArrowRight className="size-4" />
        </Button>
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-background"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            What We Do
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Two Powerhouses, <span className="text-gradient">One Agency</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Whether you need stunning visuals or strategic business growth,
            Purple Crib delivers excellence with a perfect blend of tradition
            and technology.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="flex flex-col gap-24">
          <ServiceCard
            icon={<Camera className="size-6 text-primary" />}
            iconBg="bg-primary/20"
            title="Photography Services"
            tagline="Visual Excellence"
            description="We craft compelling visual narratives that capture the essence of your brand, your people, and your milestones. From intimate weddings to corporate headshots to immersive 360° VR tours."
            features={PHOTOGRAPHY_FEATURES}
            ctaLabel="Book a Shoot"
            ocidPrefix="services.photography"
          />
          <ServiceCard
            icon={<Briefcase className="size-6 text-accent" />}
            iconBg="bg-accent/20"
            title="Business Solutions"
            tagline="Strategic Growth"
            description="From AI-powered social media to WhatsApp Business setup and ERP systems, we equip growing Nigerian companies with the tools and strategies to dominate their markets."
            features={BUSINESS_FEATURES}
            ctaLabel="Grow Your Business"
            ocidPrefix="services.business"
            reversed
          />
        </div>
      </div>
    </section>
  );
}
