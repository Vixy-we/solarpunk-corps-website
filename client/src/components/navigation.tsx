import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, Leaf, Cog } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#divisions", label: "Divisions" },
  { href: "#projects", label: "Projects" },
  { href: "#sponsor", label: "Sponsor" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="relative">
              <Leaf className="h-6 w-6 text-primary" />
              <Cog className="h-3 w-3 text-accent absolute -bottom-0.5 -right-0.5" />
            </div>
            <span className="font-bold text-lg">Solarpunk Corps</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover-elevate rounded-md transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#membership" onClick={(e) => scrollToSection(e, "#membership")}>
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
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover-elevate rounded-md"
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#membership" onClick={(e) => scrollToSection(e, "#membership")} className="mt-2">
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
