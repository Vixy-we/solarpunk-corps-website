import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Handshake, Mail } from "lucide-react";

export function SupportSection() {
    return (
        <section id="support" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">Get Involved</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Mission</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                        Whether you're an alumni looking to give back or a company wanting to foster innovation, there are many ways to support Solarpunk Corps.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Alumni Card */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all group">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">For Alumni</h3>
                        <p className="text-muted-foreground mb-6">
                            Share your industry experience, mentor current students, or provide financial support for specific projects.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Mentorship Programs
                            </li>
                            <li className="flex items-center gap-2 text-sm text-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Guest Lectures
                            </li>
                            <li className="flex items-center gap-2 text-sm text-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Project Funding
                            </li>
                        </ul>
                        <a href="/sponsors/alumni">
                            <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border-0">
                                Connect as Alumni
                            </Button>
                        </a>
                    </div>

                    {/* Corporate Partners Card */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all group">
                        <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Handshake className="h-6 w-6 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Corporate Partners</h3>
                        <p className="text-muted-foreground mb-6">
                            Collaborate on research, sponsor events, or provide tools and resources for our student builders.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                Joint Research
                            </li>
                            <li className="flex items-center gap-2 text-sm text-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                Event Sponsorship
                            </li>
                            <li className="flex items-center gap-2 text-sm text-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                Hardware & Tools
                            </li>
                        </ul>
                        <a href="/sponsors/partner">
                            <Button className="w-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border-0">
                                Partner With Us
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-6">
                        Looking for other ways to contribute?
                    </p>
                    <a href="/contact">
                        <Button variant="outline" className="gap-2">
                            <Mail className="h-4 w-4" />
                            Contact Us Directly
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
