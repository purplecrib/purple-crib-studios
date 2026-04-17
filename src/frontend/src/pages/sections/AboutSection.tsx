import { Award, Sparkles, Target, Users } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const VALUES = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "Every deliverable meets the highest standard — from a passport portrait to a full brand campaign.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    desc: "We listen deeply, collaborate openly, and deliver results that exceed expectations every time.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Our work is measured by impact — increased visibility, better brand perception, and business growth.",
  },
  {
    icon: Sparkles,
    title: "Tradition Meets Tech",
    desc: "Integrating traditional craftsmanship with innovative technology for a distinctly modern output.",
  },
];

const MILESTONES = [
  { year: "2013", event: "Founded in Lagos, Nigeria" },
  { year: "2016", event: "Expanded to Business Solutions" },
  { year: "2020", event: "Launched 360° VR Tour service" },
  { year: "2024", event: "500+ projects delivered" },
];

export function AboutSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 bg-muted/30 border-y border-border/40"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="text-xs font-semibold tracking-widest uppercase text-primary mb-3"
            >
              About Purple Crib
            </motion.div>
            <motion.h2
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              More Than an Agency.{" "}
              <span className="text-gradient">A Creative Partner.</span>
            </motion.h2>
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="text-muted-foreground leading-relaxed mb-5 text-lg"
            >
              Founded in 2013, Purple Crib Studios was built on a simple belief:
              every Nigerian business deserves world-class creative services.
              Based in Chevron Estate, Lagos, we've grown from a photography
              studio into a full-service creative agency trusted by
              corporations, startups, and public figures.
            </motion.p>
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.33, ease: EASE }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              By integrating tradition with innovative technology, our team of
              visual storytellers, brand strategists, and digital experts
              deliver cohesive, high-impact work that moves the needle for every
              client we serve.
            </motion.p>

            {/* Quote */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="pl-5 border-l-2 border-primary/60 mb-10"
            >
              <p className="text-foreground font-medium italic text-lg leading-relaxed">
                "We don't just take photos or write strategies — we build the
                visual identity of your brand for decades to come."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — Creative Director, Purple Crib Studios
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
              className="flex flex-col gap-3"
            >
              {MILESTONES.map((m) => (
                <motion.div
                  key={m.year}
                  variants={{
                    hidden: { opacity: 0, x: -28 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: EASE },
                    },
                  }}
                  className="flex items-center gap-4 group"
                >
                  <span className="text-xs font-bold text-primary font-display w-10 shrink-0 group-hover:text-accent transition-colors duration-200">
                    {m.year}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {m.event}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right values grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:mt-2"
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.88, y: 24 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: EASE },
                  },
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
                }}
                transition={{ duration: 0.25 }}
                className="bg-card rounded-xl p-6 border border-border/60 hover:border-primary/30 hover:shadow-glow transition-smooth cursor-default"
                data-ocid={`about.value_card.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <v.icon className="size-5 text-accent-foreground" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2 text-sm leading-tight">
                  {v.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.88, y: 24 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE },
                },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="sm:col-span-2 bg-card rounded-xl p-6 border border-border/60 hover:border-primary/30 transition-smooth"
              data-ocid="about.location_card"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                  <span className="text-accent-foreground text-base">📍</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1 text-sm">
                    Our Studio
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Chevron Estate, Lagos, Nigeria
                    <br />
                    Open Monday – Saturday, 8am – 6pm WAT
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
