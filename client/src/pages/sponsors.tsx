import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { SupportSection } from "@/components/support-section";
import { Footer } from "@/components/footer";

export default function Sponsors() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//static.fliphtml5.com/web/js/plugin/LightBox/js/fliphtml5-light-box-api-min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-16">
        <SupportSection />

        {/* Sponsorship Proposal Flipbook */}
        <div className="text-center mb-8 px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3 text-foreground">Sponsorship Proposal</h2>
          <p className="text-muted-foreground text-lg animate-pulse">Click below to view the full proposal</p>
        </div>

        <div className="max-w-4xl mx-auto px-6 mb-24 flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="https://online.fliphtml5.com/hbowt/SPC-Proposal/files/shot.jpg"
              data-rel="fh5-light-box-demo"
              data-href="https://online.fliphtml5.com/hbowt/SPC-Proposal/"
              data-width="900"
              data-height="500"
              data-title="Solarpunk Corps Sponsorship Proposal"
              alt="Sponsorship Proposal"
              className="relative rounded-lg shadow-2xl border border-white/10 w-full max-w-lg hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium">
                Click to Read Proposal
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
