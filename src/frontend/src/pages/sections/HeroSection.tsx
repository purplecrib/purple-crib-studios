import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 hero-gradient-bg"
        aria-hidden="true"
      />

      {/* Mesh overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.68 0.26 300 / 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/5 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none orb-pulse"
        style={{ background: "oklch(0.68 0.26 300 / 0.12)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-[360px] h-[360px] rounded-full blur-3xl pointer-events-none orb-pulse-delayed"
        style={{ background: "oklch(0.75 0.18 55 / 0.10)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Lagos' Premier Creative Agency · Since 2013
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-foreground">Purple Crib</span>
          <br />
          <span className="text-gradient">Studios</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          By integrating tradition with innovative technology, we deliver
          world-class photography and business solutions that elevate brands
          across Nigeria and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="gradient-accent text-accent-foreground font-semibold px-8 h-12 text-base shadow-glow border-0 hover:opacity-90 transition-smooth"
            data-ocid="hero.primary_cta_button"
          >
            Get In Touch
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="px-8 h-12 text-base border-border/60 hover:bg-muted/40 transition-smooth"
            data-ocid="hero.secondary_cta_button"
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "500+", label: "Projects Done" },
            { value: "13+", label: "Years Active" },
            { value: "200+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label="Scroll to services"
        data-ocid="hero.scroll_down_button"
      >
        <span className="text-xs font-medium tracking-wider uppercase">
          Scroll
        </span>
        <ChevronDown className="size-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
