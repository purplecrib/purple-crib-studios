import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Box,
  CalendarCheck,
  Camera,
  Globe,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Animated stat counter
// ---------------------------------------------------------------------------
function CountUp({
  target,
  suffix = "",
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Individual bento card wrapper — entrance animation with stagger
// ---------------------------------------------------------------------------
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  "data-ocid"?: string;
}

function BentoCard({
  children,
  className = "",
  delay = 0,
  "data-ocid": dataOcid,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative overflow-hidden rounded-2xl border border-white/10
        dark:border-white/8 bg-card/60 backdrop-blur-sm
        shadow-[0_2px_16px_rgba(0,0,0,0.18)] group
        transition-shadow duration-300
        hover:shadow-[0_4px_32px_oklch(0.68_0.26_300_/_0.22)]
        ${className}
      `}
      data-ocid={dataOcid}
    >
      {/* Subtle glass inner border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section label pill
// ---------------------------------------------------------------------------
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// BentoSection
// ---------------------------------------------------------------------------
export function BentoSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="why-us"
      className="relative py-28 bg-muted/40 dark:bg-background overflow-hidden"
      data-ocid="bento.section"
    >
      {/* Decorative background orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.26 300), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-15 dark:opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.18 55), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <Pill>
            <Sparkles className="size-3" /> Our Edge
          </Pill>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 leading-tight">
            Why Choose <span className="text-gradient">Purple Crib</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg leading-relaxed">
            Where tradition meets innovation — a Mediatech studio built for
            Africa's boldest brands.
          </p>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* Bento grid — 4 cols desktop, 2 cols tablet, 1 col mobile         */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* ── CARD 1: Visual Storytelling — wide hero card ────────────── */}
          <BentoCard
            delay={0}
            className="lg:col-span-2 min-h-[280px]"
            data-ocid="bento.visual_storytelling.card"
          >
            {/* Animated gradient backdrop */}
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.15 0.04 300) 0%, oklch(0.22 0.06 300) 45%, oklch(0.18 0.05 280) 100%)",
              }}
            />
            {/* Animated shimmer orb */}
            <div
              className="absolute top-6 right-6 w-40 h-40 rounded-full opacity-30 blur-2xl orb-pulse"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.68 0.26 300), transparent 70%)",
              }}
            />
            <div className="relative z-10 p-7 flex flex-col justify-between h-full min-h-[280px]">
              <div>
                <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/30 w-fit mb-5">
                  <Camera className="size-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Visual Storytelling
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[26ch]">
                  Every frame we capture tells your story — from intimate
                  weddings to brand campaigns that stop the scroll.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary">
                Cinematic &bull; Candid &bull; Commercial
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 2: 500+ Events Captured — stat card ────────────────── */}
          <BentoCard
            delay={0.08}
            className="min-h-[200px]"
            data-ocid="bento.events_stat.card"
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.18 0.015 280) 0%, oklch(0.22 0.015 280) 100%)",
              }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[200px]">
              <CalendarCheck className="size-6 text-primary mb-2" />
              <div>
                <p className="font-display text-5xl font-bold text-foreground leading-none">
                  <CountUp target={500} suffix="+" />
                </p>
                <p className="text-muted-foreground text-sm mt-1.5 font-medium">
                  Events Captured
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Across Lagos & beyond
                </p>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 3: AI-Powered Marketing ────────────────────────────── */}
          <BentoCard
            delay={0.12}
            className="min-h-[200px]"
            data-ocid="bento.ai_marketing.card"
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.18 0.015 280) 0%, oklch(0.22 0.03 290) 100%)",
              }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[200px]">
              <div className="flex items-center justify-between mb-2">
                <Bot className="size-6 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-full px-2 py-0.5">
                  AI-Powered
                </span>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-foreground leading-none">
                  <CountUp target={3} suffix="×" duration={1200} />
                </p>
                <p className="text-muted-foreground text-sm mt-1.5 font-medium">
                  More Reach
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Data-driven social campaigns
                </p>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 4: 360° VR — medium card ───────────────────────────── */}
          <BentoCard
            delay={0.16}
            className="lg:col-span-2 min-h-[220px]"
            data-ocid="bento.vr.card"
          >
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.15 0.03 280) 0%, oklch(0.20 0.04 290) 100%)",
              }}
            />
            {/* Grid pattern decoration */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, oklch(0.9 0 0) 0px, oklch(0.9 0 0) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, oklch(0.9 0 0) 0px, oklch(0.9 0 0) 1px, transparent 1px, transparent 40px)",
              }}
            />
            <div className="relative z-10 p-7 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <div className="p-2.5 rounded-xl bg-primary/15 border border-primary/25 w-fit mb-5">
                  <Globe className="size-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  360° Virtual Reality Tours
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Immersive virtual experiences that transport your audience
                  anywhere. Perfect for real estate, venues, and hospitality.
                </p>
              </div>
              <div className="mt-5 flex gap-2 flex-wrap">
                {["Real Estate", "Venues", "Hospitality"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium bg-primary/10 border border-primary/20 text-primary rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 5: Lagos & Beyond ───────────────────────────────────── */}
          <BentoCard
            delay={0.2}
            className="min-h-[200px]"
            data-ocid="bento.location.card"
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.18 0.015 280) 0%, oklch(0.22 0.015 280) 100%)",
              }}
            />
            {/* Subtle dot grid map pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, oklch(0.68 0.26 300) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[200px]">
              <MapPin className="size-6 text-primary mb-2" />
              <div>
                <p className="font-display text-xl font-bold text-foreground leading-tight mb-1.5">
                  Lagos & Beyond
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Serving clients across Nigeria and Africa with a global
                  creative standard.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 6: ERP Solutions ────────────────────────────────────── */}
          <BentoCard
            delay={0.24}
            className="min-h-[200px]"
            data-ocid="bento.erp.card"
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.18 0.015 280) 0%, oklch(0.22 0.015 280) 100%)",
              }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[200px]">
              <Box className="size-6 text-accent mb-2" />
              <div>
                <p className="font-display text-xl font-bold text-foreground leading-tight mb-1.5">
                  ERP Solutions
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Streamline operations with custom resource planning built for
                  Nigeria's fastest-growing SMEs.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 7: Trusted by Brands ────────────────────────────────── */}
          <BentoCard
            delay={0.28}
            className="sm:col-span-2 lg:col-span-2 min-h-[200px]"
            data-ocid="bento.trust.card"
          >
            <div
              className="absolute inset-0 opacity-75"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.015 280) 0%, oklch(0.22 0.02 285) 100%)",
              }}
            />
            <div className="relative z-10 p-7 flex flex-col justify-between h-full min-h-[200px]">
              <ShieldCheck className="size-6 text-primary mb-4" />
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Trusted by Nigeria's Best Brands
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[36ch]">
                  From startups to established enterprises — Purple Crib Studios
                  has earned a reputation for excellence across Lagos.
                </p>
              </div>
              <div className="mt-5 flex gap-3 items-center">
                {["1st", "2nd", "3rd", "4th", "5th"].map((star, starIdx) => (
                  <motion.span
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.35 + starIdx * 0.07,
                      duration: 0.35,
                      ease: "backOut",
                    }}
                    className="text-accent text-lg leading-none"
                  >
                    ★
                  </motion.span>
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  5-star rated
                </span>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 8: Book a Session — CTA card ───────────────────────── */}
          <BentoCard
            delay={0.32}
            className="sm:col-span-2 lg:col-span-2 min-h-[200px]"
            data-ocid="bento.cta.card"
          >
            {/* Purple gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.42 0.22 300) 0%, oklch(0.55 0.28 300) 55%, oklch(0.48 0.24 290) 100%)",
              }}
            />
            {/* Shimmer overlay */}
            <div
              className="absolute inset-0 opacity-20 blur-2xl orb-pulse"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 20%, oklch(0.75 0.18 55), transparent 60%)",
              }}
            />
            <div className="relative z-10 p-7 flex flex-col justify-between h-full min-h-[200px]">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/70 mb-3">
                  Ready to create?
                </p>
                <h3 className="font-display text-2xl font-bold text-white leading-tight mb-2">
                  Book a Session
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Let's turn your vision into something extraordinary.
                </p>
              </div>
              <Button
                onClick={scrollToContact}
                className="mt-6 w-fit bg-white text-foreground hover:bg-white/90 font-semibold border-0 shadow-elevated transition-smooth group"
                data-ocid="bento.book_session.button"
              >
                Get Started
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
