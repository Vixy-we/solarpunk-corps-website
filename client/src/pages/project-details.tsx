
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ProjectDetails() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="flex-grow pt-16 flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-8xl mb-6">
                        COMING SOON
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        This project page is under construction. Stay tuned!
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
