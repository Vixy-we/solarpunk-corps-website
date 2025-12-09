import { Leaf, Cog, Heart } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";

const footerLinks = {
  about: [
    { label: "About Us", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Vision", href: "#vision" },
    { label: "Leadership", href: "#leadership" }
  ],
  join: [
    { label: "Divisions", href: "#divisions" },
    { label: "Membership", href: "#membership" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  support: [
    { label: "Sponsor Us", href: "#sponsor" },
    { label: "Projects", href: "#projects" }
  ]
};

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, "#hero")}
              className="flex items-center gap-2 mb-4"
            >
              <div className="relative">
                <Leaf className="h-6 w-6 text-primary" />
                <Cog className="h-3 w-3 text-accent absolute -bottom-0.5 -right-0.5" />
              </div>
              <span className="font-bold text-lg">Solarpunk Corps</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Where Technology, Nature, and People Meet.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/solarpunk-corps/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/we.the.spc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Join</h3>
            <ul className="space-y-2">
              {footerLinks.join.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Email:<br />
                <a 
                  href="mailto:solarpunkcorps@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  solarpunkcorps@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Solarpunk Corps — Launched 2026 • BIET Jhansi
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary fill-current" /> for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
}
