import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
                Get in Touch
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team is ready to help you implement RecruitAI and start seeing results 
                in your recruitment process. Contact us today to get started.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email Us</h4>
                      <p className="text-sm text-muted-foreground">Get a response within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-primary font-medium">hello@recruitai.com</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Call Us</h4>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                  <p className="text-emerald-600 font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Schedule Demo</h4>
                      <p className="text-sm text-muted-foreground">Book a personalized walkthrough</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                    Book Demo
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Live Chat</h4>
                      <p className="text-sm text-muted-foreground">Connect with our team instantly</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-gradient-to-br from-border/30 to-transparent border border-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center shadow-lg shadow-gray-500/20">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Our Office</h4>
                  <p className="text-sm text-muted-foreground">Visit us in person</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                123 Tech Avenue, Suite 456<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-border/30 to-transparent border border-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">When we're available</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                    placeholder="Tell us about your recruitment needs..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
                    Schedule Call
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
                Limited Time Offer
              </Badge>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Start Your Free Trial Today
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the power of AI-driven recruitment with our 14-day free trial. 
              No credit card required. Cancel anytime.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8 text-center">
              {[
                { label: "No Credit Card Required", icon: "💳" },
                { label: "14-Day Free Trial", icon: "📅" },
                { label: "Cancel Anytime", icon: "🔄" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-4 text-base font-semibold shadow-lg shadow-primary/30 text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-10 py-4 text-base font-semibold text-lg">
                Schedule Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>✓ 500+ companies trust RecruitAI</span>
              <span>✓ 95% candidate satisfaction rate</span>
              <span>✓ 90% time savings on screening</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}