import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

export function ContactSection() {
  useEffect(() => {
    const d = document, w = "https://tally.so/widgets/embed.js";
    const v = function () {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (e: any) {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  const handleSmartEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const email = "solarpunkcorps@gmail.com";
    const subject = encodeURIComponent("Hello Solarpunk Corps");
    const body = encodeURIComponent("Hi, I want to connect.");
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Open default mail app on mobile
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
      // Open Gmail compose in new tab on desktop
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailLink, "_blank");
    }
  };

  return (
    <section id="contact-main" className="py-20 md:py-32">
      <span id="contact" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-contact">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-contact-title">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" data-testid="text-contact-description">
            Have questions? Want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-0">
                <iframe
                  data-tally-src="https://tally.so/embed/VLGYNj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="678"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Send us a Message"
                ></iframe>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6" data-testid="text-contact-info-title">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground mb-3">solarpunkcorps@gmail.com</p>
                    <Button
                      onClick={(e) => handleSmartEmail(e)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md shadow-sm transition-colors"
                      data-testid="button-contact-email-smart"
                      aria-label="Email Solarpunk Corps"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3 8.5L12 13L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <span>Email Us</span>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground mb-3">
                      Bundelkhand Institute of Engineering & Technology<br />
                      Jhansi, Uttar Pradesh, India
                    </p>
                    <Button
                      onClick={() => window.open("https://maps.app.goo.gl/L6nDMgSCPwpDdvv97", "_blank")}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-sm transition-colors"
                      data-testid="button-contact-location-maps"
                      aria-label="Open location in maps"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Open Maps</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6" data-testid="text-follow-title">Our Socials</h3>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/solarpunk-corps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center hover-elevate transition-all"
                  data-testid="link-social-linkedin"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/we.the.spc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white flex items-center justify-center hover-elevate transition-all"
                  data-testid="link-social-instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Ready to Present</h4>
                <p className="text-sm text-muted-foreground">
                  We're ready to present our Roadmap to your team. <br />Let's build something future-proof together.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}