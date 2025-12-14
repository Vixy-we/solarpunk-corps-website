import { Heart } from "lucide-react";
import { useLocation } from "wouter";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { VisitorCounter } from "./VisitorCounter";

const footerLinks = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Our Team", href: "/our-team" },
    { label: "Structure", href: "/structure" }
  ],
  join: [
    { label: "Structure", href: "/structure" },
    { label: "Membership", href: "/membership" },
    { label: "FAQ", href: "/contact#faq-top" },
    { label: "Contact", href: "/contact#contact-main" }
  ],
  support: [
    { label: "Sponsor Us", href: "/sponsors" },
    { label: "Projects", href: "/projects" }
  ]
};

export function Footer() {
  const [location, navigate] = useLocation();

  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split("#");
    const defaultAnchors: Record<string, string> = {
      "/about": "about-top",
      "/what-we-do": "activities-top",
      "/our-team": "team-top",
      "/structure": "structure-top",
      "/sponsors": "sponsor-top",
      "/projects": "projects-top",
      "/membership": "membership-top"
    };

    if (path === "/" || path === "") {
      navigate("/");
      window.dispatchEvent(new Event("scrollToTop"));
      return;
    }

    if (path && path !== location) {
      navigate(path);
      let attempts = 0;
      const tryScroll = () => {
        attempts += 1;
        const targetHash = hash || defaultAnchors[path];
        if (!targetHash) return;
        const el = document.getElementById(targetHash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else if (attempts < 20) setTimeout(tryScroll, 100);
      };
      setTimeout(tryScroll, 120);
    } else {
      const targetHash = hash || defaultAnchors[location];
      if (targetHash) {
        const el = document.getElementById(targetHash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              onClick={(e) => handleNavigate(e, "/")}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <img src="/SPC_logo.png" alt="Solarpunk Corps Logo" className="h-8 w-8 object-contain" />
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
                    onClick={(e) => handleNavigate(e, link.href)}
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
                    onClick={(e) => handleNavigate(e, link.href)}
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
                    onClick={(e) => handleNavigate(e, link.href)}
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
            Solarpunk Corps — Launching 2026 • BIET Jhansi
          </p>

          <VisitorCounter />

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary fill-current" /> for a sustainable future
            <a
              href="/hidden-egg"
              onClick={(e) => { e.preventDefault(); navigate('/hidden-egg'); }}
              className="inline-block ml-1 hover:text-yellow-400 transition-colors"
              aria-label="Star"
            >
              ★
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
