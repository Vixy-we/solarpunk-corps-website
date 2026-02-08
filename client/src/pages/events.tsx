import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar } from "lucide-react";

export default function Events() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="flex-grow pt-24 px-6 max-w-7xl mx-auto w-full">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                        Upcoming <span className="text-primary">Events</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join us for workshops, seminars, and hands-on sessions to build the future.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Placeholder Card */}
                    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow hover:shadow-lg transition-all">
                        <div className="p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Calendar className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">More Events Coming Soon</h3>
                            <p className="text-muted-foreground">
                                We are planning exciting new events. Check back later for updates!
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
