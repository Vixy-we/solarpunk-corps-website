import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: ""
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", category: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.category) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate(formData);
  };

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
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6" data-testid="text-form-title">Send us a Message</h3>
                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-900 font-medium mb-2">
                    📝 <span className="font-semibold">Feature Coming Soon</span>
                  </p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Our contact form is being set up. In the meantime, please <strong>email us</strong> or connect with us on <strong>social media</strong> to get in touch. We'll respond as soon as possible!
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 opacity-50 pointer-events-none">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      data-testid="input-contact-name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-testid="input-contact-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger data-testid="select-contact-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student Inquiry</SelectItem>
                        <SelectItem value="sponsor">Sponsorship</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full cursor-not-allowed" 
                    disabled={true}
                    data-testid="button-contact-submit"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
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
