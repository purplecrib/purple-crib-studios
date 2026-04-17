import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed scroll progress line at very top of viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
        }}
      />

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
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
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
            initial={prefersReduced ? false : { opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-foreground">Purple Crib</span>
            <br />
            <span className="text-gradient">Studios</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            By integrating tradition with innovative technology, we deliver
            world-class photography and business solutions that elevate brands
            across Nigeria and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={prefersReduced ? {} : { scale: 1.04 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
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
            </motion.div>
            <motion.div
              whileHover={prefersReduced ? {} : { scale: 1.04 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
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
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: EASE }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "500+", label: "Projects Done" },
              { value: "13+", label: "Years Active" },
              { value: "200+", label: "Happy Clients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={prefersReduced ? false : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.66 + i * 0.1,
                  ease: EASE,
                }}
                className="text-center"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Apple-quality scroll invitation bar */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
          className="absolute bottom-0 left-0 right-0 z-10"
          data-ocid="hero.scroll_bar"
        >
          <button
            type="button"
            onClick={scrollToServices}
            aria-label="Scroll to discover our services"
            data-ocid="hero.scroll_down_button"
            className="w-full group cursor-pointer"
          >
            {/* Frosted glass bar */}
            <div
              className="mx-4 md:mx-8 lg:mx-16 mb-6 rounded-2xl border border-white/10 px-6 md:px-10 py-4 flex items-center justify-between gap-6 transition-all duration-500 group-hover:border-white/20"
              style={{
                background: "oklch(0.1 0.02 280 / 0.65)",
                backdropFilter: "blur(20px) saturate(1.5)",
                WebkitBackdropFilter: "blur(20px) saturate(1.5)",
              }}
            >
              {/* Left — cascading chevrons */}
              <div
                className="flex flex-col items-center gap-0.5"
                aria-hidden="true"
              >
                <CascadingChevron delay={0} />
                <CascadingChevron delay={0.28} />
              </div>

              {/* Center — scroll invitation text */}
              <div className="flex-1 text-center">
                <p className="font-display text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Discover What We Create
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground/50 mt-0.5 tracking-wide group-hover:text-muted-foreground/70 transition-colors duration-300">
                  Photography · AI Marketing · ERP · 360° VR
                </p>
              </div>

              {/* Right — scroll progress line */}
              <ScrollProgressLine scrollYProgress={scrollYProgress} />
            </div>
          </button>
        </motion.div>
      </section>
    </>
  );
}

/** Single cascading chevron with staggered fade+drop animation */
function CascadingChevron({ delay }: { delay: number }) {
  return (
    <motion.div
      animate={{
        opacity: [0.15, 1, 0.15],
        y: [0, 5, 0],
      }}
      transition={{
        duration: 1.6,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        repeatDelay: 0.1,
      }}
    >
      <ChevronDown className="size-5 text-primary" strokeWidth={2} />
    </motion.div>
  );
}

/** Horizontal scroll progress bar (right side of scroll bar) */
function ScrollProgressLine({
  scrollYProgress,
}: { scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="hidden sm:flex flex-col items-end gap-1.5 min-w-[80px] md:min-w-[120px]">
      <span className="text-[9px] tracking-widest uppercase text-muted-foreground/50 font-medium">
        Scroll
      </span>
      <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width,
            background:
              "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
          }}
        />
      </div>
    </div>
  );
}
