import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ChevronDown } from "lucide-react";
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
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground transition-colors group"
                            href="/about"
                            onClick={(e) => handleNavigate(e, "/about")}
                          >
                            <div className="mb-2 text-lg font-medium">
                              <span className="font-bold block mb-1">Who are we?</span>
                              We are Solarpunk Corps
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground group-hover:text-accent-foreground/90">
                              Technology with purpose. <br /> Nature in mind. <br /> People at heart.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/our-team" title="Our Team" onClick={(e) => handleNavigate(e, "/our-team")}>
                        Meet the people behind the movement.
                      </ListItem>
                      <ListItem href="/structure" title="Structure" onClick={(e) => handleNavigate(e, "/structure")}>
                        How we are organized.
                      </ListItem>

                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Work Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isWorkActive && "bg-[#FD8F36] text-accent-foreground")}>Work</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-0 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground transition-colors group overflow-hidden relative"
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
                                Work
                              </div>
                              <p className="text-sm leading-tight text-white font-bold">
                                Innovation in Action
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/what-we-do" title="What We Do" onClick={(e) => handleNavigate(e, "/what-we-do")}>
                        Explore our workshops, events, and initiatives.
                      </ListItem>
                      <ListItem href="/projects" title="Projects" onClick={(e) => handleNavigate(e, "/projects")}>
                        See the sustainable tech we are building.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Partners Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isPartnersActive && "bg-[#FD8F36] text-accent-foreground")}>Sponsor Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground transition-colors group"
                            href="/sponsors"
                            onClick={(e) => handleNavigate(e, "/sponsors")}
                          >
                            <div className="mb-2 text-lg font-medium">
                              Sponsors
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground group-hover:text-accent-foreground/90">
                              See how you can support our mission and help us grow.
                              <br /> <br />
                              Let us create a Humane Future, Together 🌱
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/sponsors/alumni" title="Alumni Network" onClick={(e) => handleNavigate(e, "/sponsors/alumni")}>
                        For college alumni to connect back and mentor us.
                      </ListItem>
                      <ListItem href="/sponsors/partner" title="Corporate Partners" onClick={(e) => handleNavigate(e, "/sponsors/partner")}>
                        Collaborate via Projects, CSR, or Research.
                      </ListItem>
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
