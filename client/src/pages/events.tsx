import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Leaf, Zap, Wrench, Sun, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Events() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] dark:bg-background flex flex-col font-sans">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-green-200 text-green-700 bg-green-50 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
                        Our Activities
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif text-gray-900 dark:text-foreground tracking-tight">
                        Cultivating <span className="text-green-600 dark:text-green-500 italic">Knowledge</span> <br className="hidden md:block" />
                        & Building the Future.
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        From hands-on technical workshops to thought-provoking seminars, we provide the soil for your ideas to grow.
                    </p>
                </div>
            </section>

            <main className="flex-grow px-6 pb-24 max-w-7xl mx-auto w-full space-y-24">

                {/* Flagship Event: Green Shift */}
                <section className="relative group cursor-pointer" onClick={() => window.location.href = "/events/greenshift"}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-100/50 via-emerald-50/50 to-teal-100/30 dark:from-green-900/20 dark:via-emerald-900/10 dark:to-teal-900/10 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-white dark:bg-card border border-green-100 dark:border-green-900/50 rounded-3xl overflow-hidden shadow-2xl relative group-hover:scale-[1.01] transition-transform duration-300">
                        {/* Coming Soon/Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 text-sm shadow-lg animate-pulse">
                                Coming Soon
                            </Badge>
                        </div>

                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                                <Leaf className="w-32 h-32 text-green-50 dark:text-green-900/20 absolute -top-10 -left-10 transform rotate-12" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <Leaf className="w-6 h-6" />
                                        </span>
                                        <span className="text-green-700 dark:text-green-400 font-bold tracking-wider text-sm uppercase">Annual Flagship Workshop</span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-6 font-serif">
                                        GreenShift
                                    </h2>

                                    <p className="text-lg text-gray-600 dark:text-muted-foreground mb-8 leading-relaxed">
                                        Our annual flagship technical workshop designed as an immersive, hands-on learning experience focused on sustainability-driven engineering and technology.
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "Sustainable energy systems",
                                            "Electronics and applied technology",
                                            "Solutions for environmental challenges"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="inline-block p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30">
                                        <p className="text-sm font-medium text-green-800 dark:text-green-300 flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            Dates to be announced soon
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-full min-h-[300px] bg-gray-100 dark:bg-muted">
                                <img
                                    src="/hourglass.webp"
                                    alt="Green Shift Workshop"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 dark:to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Events Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Knowledge & Awareness */}
                    <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-border flex flex-col">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-3 font-serif">Knowledge & Awareness</h3>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wide">Talks • Seminars • Sessions</p>
                        <p className="text-gray-600 dark:text-muted-foreground mb-6 leading-relaxed flex-grow">
                            Spreading awareness and building foundational understanding of technology, sustainability, and responsible innovation through talks and seminars.
                        </p>
                        <ul className="space-y-2 mb-6 text-sm text-gray-500 dark:text-muted-foreground">
                            <li>• Educational seminars for beginners</li>
                            <li>• Talks on emerging technologies</li>
                            <li>• Societal impact discussions</li>
                        </ul>
                    </div>

                    {/* Technical Workshops */}
                    <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-border flex flex-col">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                            <Wrench className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-3 font-serif">Technical Workshops</h3>
                        <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-4 uppercase tracking-wide">Hands-On Learning</p>
                        <p className="text-gray-600 dark:text-muted-foreground mb-6 leading-relaxed flex-grow">
                            Focusing on building practical engineering and problem-solving skills through direct interaction with tools, components, and real-world use cases.
                        </p>
                        <ul className="space-y-2 mb-6 text-sm text-gray-500 dark:text-muted-foreground">
                            <li>• Electronics & Microcontrollers</li>
                            <li>• Sensors & Automation</li>
                            <li>• Prototyping & Design</li>
                        </ul>
                    </div>

                </div>

                {/* Merged CTA Section */}
                <section className="bg-gray-900 dark:bg-card rounded-3xl p-12 text-center relative overflow-hidden mt-20">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Want to Bring These Events to Life?</h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            We are looking for partners and alumni to sponsor venues, provide expertise, or fund workshops for our community.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/sponsors">
                                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8">
                                    Support Our Mission
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
