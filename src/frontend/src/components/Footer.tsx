import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import type { Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const colVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const colItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Footer() {
  const year = new Date().getFullYear();
  const prefersReduced = useReducedMotion();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "purplecrib.ng";
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="bg-card border-t border-border/60"
      data-ocid="footer.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer grid */}
        <motion.div
          variants={prefersReduced ? {} : colVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <motion.div
            variants={prefersReduced ? {} : colItem}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/generated/purplecrib-logo-mark-transparent.dim_200x200.png"
                alt="Purple Crib Studios"
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-base">
                <span className="text-gradient">Purple Crib</span>
                <span className="text-foreground"> Studios</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              By integrating tradition with innovative technology — Lagos'
              premier creative agency since 2013.
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  href: "https://instagram.com/purplecrib.ng",
                  label: "Instagram",
                  icon: Instagram,
                  ocid: "footer.instagram_link",
                },
                {
                  href: "https://facebook.com/purplecrib",
                  label: "Facebook",
                  icon: Facebook,
                  ocid: "footer.facebook_link",
                },
                {
                  href: "https://youtube.com/@purplecrib",
                  label: "YouTube",
                  icon: Youtube,
                  ocid: "footer.youtube_link",
                },
              ].map(({ href, label, icon: Icon, ocid }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid={ocid}
                  whileHover={prefersReduced ? {} : { scale: 1.15, y: -2 }}
                  whileTap={prefersReduced ? {} : { scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-lg bg-muted/40 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-smooth"
                >
                  <Icon className="size-3.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Photography services */}
          <motion.div variants={prefersReduced ? {} : colItem}>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">
              Photography
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Wedding Photography",
                "Corporate Headshots",
                "Product Shoots",
                "Model Shoots",
                "Events Coverage",
                "360° VR Tours",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollTo("services")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business solutions */}
          <motion.div variants={prefersReduced ? {} : colItem}>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">
              Business Solutions
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "AI Social Media Marketing",
                "Google My Business",
                "WhatsApp Business",
                "ERP for SMEs",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollTo("services")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={prefersReduced ? {} : colItem}>
            <h4 className="font-display font-semibold text-foreground text-sm mb-4">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Phone className="size-3.5 text-primary mt-0.5 shrink-0" />
                <a
                  href="tel:+2348180002345"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-ocid="footer.phone_link"
                >
                  +234 818 000 2345
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Chevron Estate,
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
              data-ocid="footer.contact_cta_button"
            >
              Get In Touch →
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="py-5 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-muted-foreground">
            © {year} Purple Crib Studios. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
