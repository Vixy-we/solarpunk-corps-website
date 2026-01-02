import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ChevronDown, Rocket, Heart, Users, Network, GraduationCap, Handshake } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about the Solarpunk Corps mission and vision.",
  },
  {
    title: "Our Team",
    href: "/our-team",
    description: "Meet the student leadership and faculty mentors.",
  },
  {
    title: "Structure",
    href: "/structure",
    description: "Understand how our divisions and hierarchy work.",
  },
];

const workLinks = [
  {
    title: "What We Do",
    href: "/what-we-do",
    description: "Explore our workshops, events, and initiatives.",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "See the sustainable tech we are building.",
  },
  {
    title: "CSR",
    href: "/csr",
    description: "Club Social Responsibility",
  },
];

const partnerLinks = [
  {
    title: "Sponsors",
    href: "/sponsors",
    description: "Our current supporters and how to join them.",
  },
  {
    title: "Alumni Network",
    href: "/sponsors/alumni",
    description: "Connect with former students and mentors.",
  },
  {
    title: "Corporate Partners",
    href: "/sponsors/partner",
    description: "Collaborate with us on projects and research.",
  },
];


export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open

    if (href === "/" || href === "") {
      navigate("/");
      window.dispatchEvent(new Event("scrollToTop"));
      return;
    }

    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isAboutActive = ["/about", "/our-team", "/structure"].includes(location);
  const isWorkActive = ["/what-we-do", "/projects"].includes(location);
  const isPartnersActive = ["/sponsors", "/sponsors/alumni", "/sponsors/partner"].includes(location);
  const isContactActive = location === "/contact";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              window.dispatchEvent(new Event("scrollToTop"));
            }}
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <img src="/SPC_logo.png" alt="Solarpunk Corps Logo" className="h-8 w-8" />
            <span className="font-bold text-lg hidden sm:inline-block">Solarpunk Corps</span>
            <span className="font-bold text-lg sm:hidden">SPC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>

                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isAboutActive && "bg-[#FD8F36] text-accent-foreground")}>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-0 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground transition-colors group overflow-hidden relative min-h-[280px]"
                            href="/about"
                            onClick={(e) => handleNavigate(e, "/about")}
                          >
                            <img
                              src="/world pic.webp"
                              alt="World Pic"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="relative z-10 p-6">
                              <div className="mb-2 text-lg font-medium text-white">
                                <span className="font-bold block mb-1">Who are we?</span>
                                We are Solarpunk Corps
                              </div>
                              <p className="text-sm leading-tight text-white font-medium">
                                Technology with purpose. <br /> Nature in mind. <br /> People at heart.
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="flex flex-col gap-3 h-full">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex flex-col justify-center rounded-md bg-muted/50 p-4 no-underline outline-none hover:bg-accent hover:text-accent-foreground transition-colors group flex-1"
                            href="/our-team"
                            onClick={(e) => handleNavigate(e, "/our-team")}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-2 bg-emerald-500/10 rounded-md">
                                <Users className="h-4 w-4 text-emerald-500" />
                              </div>
                              <div className="text-base font-semibold">Our Team</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground/90">
                              Meet the people behind the movement.
                            </p>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            className="flex flex-col justify-center rounded-md bg-muted/50 p-4 no-underline outline-none hover:bg-accent hover:text-accent-foreground transition-colors group flex-1"
                            href="/structure"
                            onClick={(e) => handleNavigate(e, "/structure")}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-2 bg-orange-500/10 rounded-md">
                                <Network className="h-4 w-4 text-orange-500" />
                              </div>
                              <div className="text-base font-semibold">Structure</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground/90">
                              How we are organized.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>

                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Work Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isWorkActive && "bg-[#FD8F36] text-accent-foreground")}>Work</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-0 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground transition-colors group overflow-hidden relative min-h-[280px]"
                            href="/what-we-do"
                            onClick={(e) => handleNavigate(e, "/what-we-do")}
                          >
                            <img
                              src="/work-cover.webp"
                              alt="Work Cover"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="relative z-10 p-6">
                              <div className="mb-2 text-lg font-bold text-white">
                                What We Do
                              </div>
                              <p className="text-sm leading-tight text-white font-medium">
                                Explore our workshops, events, and initiatives.
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="flex flex-col gap-3 h-full">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex flex-col justify-center rounded-md bg-muted/50 p-4 no-underline outline-none hover:bg-accent hover:text-accent-foreground transition-colors group flex-1"
                            href="/projects"
                            onClick={(e) => handleNavigate(e, "/projects")}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-2 bg-blue-500/10 rounded-md">
                                <Rocket className="h-4 w-4 text-blue-500" />
                              </div>
                              <div className="text-base font-semibold">Projects</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground">
                              See the projects we are working on.
                            </p>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            className="flex flex-col justify-center rounded-md bg-muted/50 p-4 no-underline outline-none hover:bg-accent hover:text-accent-foreground transition-colors group flex-1"
                            href="/csr"
                            onClick={(e) => handleNavigate(e, "/csr")}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-2 bg-rose-500/10 rounded-md">
                                <Heart className="h-4 w-4 text-rose-500" />
                              </div>
                              <div className="text-base font-semibold">CSR</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground">
                              Club Social Responsibility
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Partners Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isPartnersActive && "bg-[#FD8F36] text-accent-foreground")}>Sponsor Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-0 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground transition-colors group overflow-hidden relative min-h-[280px]"
                            href="/sponsors"
                            onClick={(e) => handleNavigate(e, "/sponsors")}
                          >
                            <img
                              src="/sponser pic.webp"
                              alt="Sponsor Pic"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="relative z-10 p-6">
                              <div className="mb-2 text-lg font-medium text-white">
                                Sponsors
                              </div>
                              <p className="text-sm leading-tight text-white font-medium">
                                See how you can support our mission and help us grow.
                                <br /> <br />
                                Let us create a Humane Future, Together 🌱
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="flex flex-col gap-3 h-full">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex flex-col justify-center rounded-md bg-muted/50 p-4 no-underline outline-none hover:bg-accent hover:text-accent-foreground transition-colors group flex-1"
                            href="/sponsors/alumni"
                            onClick={(e) => handleNavigate(e, "/sponsors/alumni")}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-2 bg-purple-500/10 rounded-md">
                                <GraduationCap className="h-4 w-4 text-purple-500" />
                              </div>
                              <div className="text-base font-semibold">Alumni Network</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground/90">
                              For college alumni to connect back and mentor us.
                            </p>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            className="flex flex-col justify-center rounded-md bg-muted/50 p-4 no-underline outline-none hover:bg-accent hover:text-accent-foreground transition-colors group flex-1"
                            href="/sponsors/partner"
                            onClick={(e) => handleNavigate(e, "/sponsors/partner")}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-2 bg-indigo-500/10 rounded-md">
                                <Handshake className="h-4 w-4 text-indigo-500" />
                              </div>
                              <div className="text-base font-semibold">Corporate Partners</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground/90">
                              Collaborate via Projects, CSR, or Research.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Link */}
                <NavigationMenuItem>
                  <Link href="/contact" onClick={(e) => handleNavigate(e, "/contact")}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isContactActive && "bg-[#FD8F36] text-accent-foreground")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="/structure" onClick={(e) => handleNavigate(e, "/structure")}>
              <Button className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white">
                Join Us
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              <div className="px-2">
                <h4 className="mb-2 px-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">About</h4>
                {components.map((item) => (
                  <MobileLink key={item.href} href={item.href} onClick={(e) => handleNavigate(e, item.href)}>
                    {item.title}
                  </MobileLink>
                ))}
              </div>

              <div className="px-2">
                <h4 className="mb-2 px-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Work</h4>
                {workLinks.map((item) => (
                  <MobileLink key={item.href} href={item.href} onClick={(e) => handleNavigate(e, item.href)}>
                    {item.title}
                  </MobileLink>
                ))}
              </div>

              <div className="px-2">
                <h4 className="mb-2 px-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Sponsor Us</h4>
                {partnerLinks.map((item) => (
                  <MobileLink key={item.href} href={item.href} onClick={(e) => handleNavigate(e, item.href)}>
                    {item.title}
                  </MobileLink>
                ))}
              </div>

              <div className="px-2">
                <MobileLink href="/contact" onClick={(e) => handleNavigate(e, "/contact")}>
                  Contact Us
                </MobileLink>
              </div>

              <div className="px-4 mt-2">
                <a href="/structure" onClick={(e) => handleNavigate(e, "/structure")}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Become a Member
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground group-focus:text-accent-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MobileLink({ children, href, onClick, className }: { children: React.ReactNode; href: string; onClick: (e: any) => void; className?: string }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn("block px-4 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors", className)}
    >
      {children}
    </a>
  )
}
