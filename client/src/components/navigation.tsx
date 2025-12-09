import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/structure", label: "Structure" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/projects", label: "Projects" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const isActive = (href: string) => location === href.split("#")[0];
  const defaultAnchors: Record<string, string> = {
    "/about": "about-top",
    "/what-we-do": "activities-top",
    "/our-team": "team-top",
    "/contact": "contact-main",
    "/structure": "structure-top",
    "/sponsors": "sponsor-top",
    "/projects": "projects-top",
    "/membership": "membership-top"
  };

  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split("#");

    // Special handling for landing page - always scroll to top
    if (path === "/" || path === "") {
      navigate("/");
      // Dispatch custom event to trigger scroll to top even if already on landing page
      window.dispatchEvent(new Event("scrollToTop"));
      setIsMenuOpen(false);
      return;
    }

    // navigate to the target path first
    if (path && path !== location) {
      navigate(path);

      // try scrolling to the anchor after the new page renders
      let attempts = 0;
      const tryScroll = () => {
        attempts += 1;
        const targetHash = hash || defaultAnchors[path];
        if (!targetHash) return;
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 20) {
          setTimeout(tryScroll, 100);
        }
      };

      setTimeout(tryScroll, 120);
    } else {
      // already on the page, just scroll
      const targetHash = hash || defaultAnchors[location];
      if (targetHash) {
        const el = document.getElementById(targetHash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              // Dispatch custom event to trigger scroll to top even if already on landing page
              window.dispatchEvent(new Event("scrollToTop"));
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            data-testid="link-logo"
          >
            <img src="/SPC_logo.png" alt="Solarpunk Corps Logo" className="h-8 w-8" />
            <span className="font-bold text-lg">Solarpunk Corps</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigate(e, link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="/structure" onClick={(e) => handleNavigate(e, "/structure")}>
              <Button data-testid="button-become-member" className="hidden sm:inline-flex">
                Become a Member
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavigate(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="/structure" onClick={(e) => handleNavigate(e, "/structure")} className="mt-2">
                <Button className="w-full" data-testid="button-mobile-become-member">
                  Become a Member
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
