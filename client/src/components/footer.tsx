import { Heart } from "lucide-react";
import { useLocation } from "wouter";
import { SiLinkedin, SiInstagram, SiX, SiGithub } from "react-icons/si";
import { VisitorCounter } from "./VisitorCounter";
import { Badge } from "@/components/ui/badge";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

const footerLinks: Record<string, FooterLink[]> = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/our-team" },
    { label: "Structure", href: "/structure" },
    { label: "Membership", href: "/membership" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Experience SPC", href: "/under-construction", badge: "Experimental" }
  ],
  initiatives: [
    { label: "Scope", href: "/what-we-do" },
    { label: "Rover", href: "/projects/rover" },
    { label: "Magazine", href: "/projects/magazine" },
    { label: "Campus Survey", href: "/projects/survey" },
    { label: "Club Social Responsibility (CSR)", href: "/csr" }
  ],
  connect: [
    { label: "Sponsor Us", href: "/sponsors" },
    { label: "Support as Alumni", href: "/alumni" },
    { label: "FAQ", href: "/contact#faq-top" },
    { label: "Contact", href: "/contact" }
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
      "/membership": "membership-top",
      "/contact": "contact-main",
      "/alumni": "alumni-top"
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
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-emerald-950/5 to-blue-950/10 border-t border-border/40">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* Column 1: Brand (Span 4 columns) */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start">
            <a
              href="/"
              onClick={(e) => handleNavigate(e, "/")}
              className="flex items-center gap-3 mb-6 group"
            >
              <img src="/SPC_logo.png" alt="Solarpunk Corps Logo" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-xl tracking-tight">Solarpunk Corps</span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              <span className="text-base font-medium text-foreground/90">Where Technology, Nature, and People Meet.</span>
              <span className="block text-sm mt-1">Building a humane future, together. 🌱⚡</span>
            </p>
            <div className="flex gap-3">
              {[
                { icon: SiLinkedin, href: "https://www.linkedin.com/company/solarpunk-corps/", testId: "link-footer-linkedin", color: "hover:text-[#0077b5]" },
                { icon: SiX, href: "https://x.com/SolarpunkCorps", testId: "link-footer-x", color: "hover:text-foreground" },
                { icon: SiGithub, href: "https://github.com/SolarpunkCorps", testId: "link-footer-github", color: "hover:text-foreground" },
                { icon: SiInstagram, href: "https://www.instagram.com/we.the.spc/", testId: "link-footer-instagram", color: "hover:text-[#E4405F]" }
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover-elevate transition-all hover:scale-110 hover:bg-background ${social.color}`}
                  data-testid={social.testId}
                >
                  <social.icon className="h-4 w-4 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Organization (Span 2 columns) */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h3 className="font-bold mb-6 text-foreground">Organization</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigate(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex flex-col items-start gap-1 py-0.5"
                  >
                    <span>{link.label}</span>
                    {('badge' in link) && (
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 leading-none bg-amber-500/10 text-amber-500 border-amber-500/20 font-medium"
                      >
                        {link.badge}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Initiatives (Span 2 columns) */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold mb-6 text-foreground">Initiatives</h3>
            <ul className="space-y-3">
              {footerLinks.initiatives.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigate(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex flex-col items-start gap-1 py-0.5"
                  >
                    <span>{link.label}</span>
                    {('badge' in link) && (
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 leading-none bg-amber-500/10 text-amber-500 border-amber-500/20 font-medium"
                      >
                        {link.badge}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect (Span 2 columns) */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="font-bold mb-6 text-foreground">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigate(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 py-0.5"
                  >
                    {link.label}
                    {('badge' in link) && (
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 leading-none bg-amber-500/10 text-amber-500 border-amber-500/20 font-medium"
                      >
                        {link.badge}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="mailto:solarpunkcorps@gmail.com"
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                solarpunkcorps@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Solarpunk Corps • BIET Jhansi
          </p>

          <VisitorCounter />

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-rose-500 fill-current animate-pulse" /> for a sustainable future
            <a
              href="/hidden-egg"
              onClick={(e) => { e.preventDefault(); navigate('/hidden-egg'); }}
              className="inline-block ml-1 hover:text-yellow-400 transition-colors opacity-50 hover:opacity-100"
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
