import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/types";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/60 shadow-elevated">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2.5 group cursor-pointer"
          data-ocid="navbar.logo_link"
        >
          <img
            src="/assets/generated/purplecrib-logo-mark-transparent.dim_200x200.png"
            alt="Purple Crib"
            className="w-8 h-8 object-contain"
          />
          <span className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">Purple</span>
            <span className="text-foreground">Crib</span>
          </span>
        </button>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav
            className="flex items-center gap-1"
            data-ocid="navbar.desktop_nav"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/40 cursor-pointer"
                data-ocid={`navbar.nav_link.${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <Button
              asChild
              size="sm"
              className="gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-smooth border-0"
              data-ocid="navbar.phone_cta_button"
            >
              <a
                href="tel:+2348180002345"
                className="flex items-center gap-1.5"
              >
                <Phone className="size-3.5" />
                Call Us
              </a>
            </Button>
          )}
          {isMobile && (
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              data-ocid="navbar.hamburger_button"
            >
              {menuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            menuOpen ? "max-h-96 border-t border-border/60" : "max-h-0",
          )}
          data-ocid="navbar.mobile_menu"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-md transition-colors text-left cursor-pointer"
                data-ocid={`navbar.mobile_nav_link.${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              asChild
              className="gradient-accent text-accent-foreground font-semibold mt-2 border-0"
              data-ocid="navbar.mobile_phone_cta_button"
            >
              <a href="tel:+2348180002345" className="flex items-center gap-2">
                <Phone className="size-4" />
                +234 818 000 2345
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
