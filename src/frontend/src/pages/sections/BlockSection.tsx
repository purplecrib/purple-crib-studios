import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Camera, Globe, Layers } from "lucide-react";
import type { Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const BLOCKS = [
  {
    icon: Camera,
    label: "Visual Storytelling",
    headline: "Every Frame Tells Your Story",
    body: "From intimate weddings to Fortune 500 campaigns — our photographers craft images that move people and build brands that endure.",
    stat: "500+",
    statLabel: "Shoots Delivered",
    accent: "primary",
  },
  {
    icon: BarChart3,
    label: "AI-Driven Growth",
    headline: "Intelligence Meets Strategy",
    body: "We deploy AI marketing systems that learn your audience, generate content at scale, and compound your digital presence month after month.",
    stat: "340%",
    statLabel: "Avg. Engagement Lift",
    accent: "accent",
  },
  {
    icon: Globe,
    label: "360° VR Experiences",
    headline: "Step Inside Your Space",
    body: "Immersive virtual tours bring your venue, office, or property to life for clients across the globe — before they ever walk through the door.",
    stat: "50+",
    statLabel: "VR Tours Created",
    accent: "primary",
  },
  {
    icon: Layers,
    label: "ERP for Business",
    headline: "Streamline. Scale. Succeed.",
    body: "Purpose-built ERP systems for Nigerian SMEs — inventory, HR, finance, and operations unified in one platform your team will actually use.",
    stat: "2×",
    statLabel: "Faster Operations",
    accent: "accent",
  },
];

const blockVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const blockItem: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function BlockSection() {
  const prefersReduced = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="capabilities"
      className="py-24 bg-muted/20 border-y border-border/40"
      data-ocid="block.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-3"
          >
            Capabilities
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Built for Brands That{" "}
            <span className="text-gradient">Mean Business.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Four focused disciplines. One agency. Infinite possibilities for
            your brand's growth.
          </p>
        </motion.div>

        {/* Block grid */}
        <motion.div
          variants={prefersReduced ? {} : blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {BLOCKS.map((block) => {
            const Icon = block.icon;
            const isPrimary = block.accent === "primary";

            return (
              <motion.div
                key={block.label}
                variants={prefersReduced ? {} : blockItem}
                whileHover={
                  prefersReduced
                    ? {}
                    : {
                        y: -6,
                        boxShadow: "0 24px 48px rgba(0,0,0,0.22)",
                        transition: { duration: 0.25, ease: EASE },
                      }
                }
                className="group relative bg-card rounded-2xl border border-border/60 hover:border-primary/30 overflow-hidden p-6 flex flex-col gap-5 transition-colors duration-300"
                data-ocid={`block.item.${block.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Subtle gradient top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: isPrimary
                      ? "linear-gradient(90deg, transparent, oklch(0.68 0.26 300), transparent)"
                      : "linear-gradient(90deg, transparent, oklch(0.75 0.18 55), transparent)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <motion.div
                  whileHover={prefersReduced ? {} : { rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isPrimary ? "bg-primary/15" : "bg-accent/15"
                  }`}
                >
                  <Icon
                    className={`size-5 ${isPrimary ? "text-primary" : "text-accent"}`}
                  />
                </motion.div>

                {/* Label */}
                <div
                  className={`text-[10px] font-bold tracking-[0.18em] uppercase ${
                    isPrimary ? "text-primary/70" : "text-accent/70"
                  }`}
                >
                  {block.label}
                </div>

                {/* Headline + body */}
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                    {block.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {block.body}
                  </p>
                </div>

                {/* Stat */}
                <div className="mt-auto pt-4 border-t border-border/40 flex items-end justify-between">
                  <div>
                    <div
                      className={`font-display text-2xl font-bold ${
                        isPrimary ? "text-primary" : "text-accent"
                      }`}
                    >
                      {block.stat}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5 font-medium">
                      {block.statLabel}
                    </div>
                  </div>
                  <motion.div
                    whileHover={prefersReduced ? {} : { x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowRight
                      className={`size-4 ${isPrimary ? "text-primary" : "text-accent"}`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-card border border-border/50"
        >
          <div>
            <p className="font-display font-semibold text-foreground text-base">
              Ready to transform your brand?
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Join 200+ businesses who trust Purple Crib Studios.
            </p>
          </div>
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.04 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
          >
            <Button
              onClick={scrollToContact}
              className="gradient-accent text-accent-foreground font-semibold border-0 hover:opacity-90 transition-smooth shrink-0"
              data-ocid="block.start_project_button"
            >
              Start a Project
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
