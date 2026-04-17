import { Badge } from "@/components/ui/badge";
import type { Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const PORTFOLIO_ITEMS = [
  {
    category: "Photography",
    title: "GTBank Executive Portraits",
    desc: "Full executive portrait series for GTBank's 2024 annual report.",
    tag: "Corporate",
    accent: "primary",
  },
  {
    category: "Business Solutions",
    title: "Flutterwave Brand Refresh",
    desc: "Complete brand identity overhaul and AI-driven social media strategy.",
    tag: "Branding",
    accent: "accent",
  },
  {
    category: "Photography",
    title: "Dangote Product Campaign",
    desc: "Commercial product photography for a national FMCG launch.",
    tag: "Commercial",
    accent: "primary",
  },
  {
    category: "Business Solutions",
    title: "Paystack Social Growth",
    desc: "12-month AI social media strategy delivering 340% engagement increase.",
    tag: "Digital",
    accent: "accent",
  },
  {
    category: "Photography",
    title: "Lagos Fashion Week 2024",
    desc: "Official event photography across all runway shows and afterparties.",
    tag: "Events",
    accent: "primary",
  },
  {
    category: "Photography",
    title: "360° VR Office Tour",
    desc: "Immersive virtual tour for a Fortune 500 Lagos headquarters.",
    tag: "VR Tours",
    accent: "primary",
  },
];

const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PortfolioSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="py-24 bg-background"
      data-ocid="portfolio.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-16"
        >
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-3"
          >
            Selected Work
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Our Lens, <span className="text-gradient">Your Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A curated selection of work across photography and business
            solutions for leading Nigerian brands.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          variants={prefersReduced ? {} : gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PORTFOLIO_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={prefersReduced ? {} : cardItem}
              whileHover={
                prefersReduced
                  ? {}
                  : {
                      y: -6,
                      scale: 1.015,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                      transition: { duration: 0.25, ease: EASE },
                    }
              }
              className="group bg-card rounded-2xl border border-border/60 overflow-hidden hover:border-primary/40 transition-smooth cursor-pointer"
              data-ocid={`portfolio.item.${i + 1}`}
            >
              {/* Visual */}
              <div
                className="h-44 relative overflow-hidden border-b border-border/40"
                style={{
                  background:
                    item.accent === "primary"
                      ? "linear-gradient(135deg, oklch(0.22 0.015 280) 0%, oklch(0.68 0.26 300 / 0.18) 100%)"
                      : "linear-gradient(135deg, oklch(0.22 0.015 280) 0%, oklch(0.75 0.18 55 / 0.18) 100%)",
                }}
              >
                {/* Decorative radial */}
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                  style={{
                    backgroundImage:
                      item.accent === "primary"
                        ? "radial-gradient(circle at 25% 50%, oklch(0.68 0.26 300) 0%, transparent 55%)"
                        : "radial-gradient(circle at 75% 50%, oklch(0.75 0.18 55) 0%, transparent 55%)",
                  }}
                />

                {/* Number watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="font-display text-7xl font-bold opacity-5 text-foreground select-none"
                    whileHover={{ opacity: 0.08, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <Badge
                    variant="secondary"
                    className="text-xs font-semibold bg-card/80 backdrop-blur-sm border-border/60"
                  >
                    {item.tag}
                  </Badge>
                </div>
                <div
                  className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color:
                      item.accent === "primary"
                        ? "oklch(0.68 0.26 300)"
                        : "oklch(0.75 0.18 55)",
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h4 className="font-display font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Interested in working with us?{" "}
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-primary font-semibold hover:underline underline-offset-2 cursor-pointer"
              data-ocid="portfolio.contact_link"
            >
              Let's talk →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
