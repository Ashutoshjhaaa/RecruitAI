import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Monitor, Smartphone, Headphones, MessageCircle, Video } from "lucide-react";

export function Demo() {
  return (
    <section id="demo" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
            See It in Action
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
            Experience RecruitAI Live
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch our AI voice agent in action and see how it transforms the candidate screening process.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="relative mb-20">
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Play className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Product Demo Video</h3>
                  <p className="text-muted-foreground">Watch our 3-minute walkthrough</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
          </div>

          {/* Video Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
              <Video className="mr-2 h-5 w-5" />
              Live Demo
            </Button>
          </div>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Candidate View",
              description: "See how candidates experience our AI voice interviews from their perspective.",
              icon: Smartphone,
              color: "from-blue-500 to-cyan-500",
              features: [
                "Natural voice conversation",
                "Real-time feedback",
                "Professional experience"
              ]
            },
            {
              title: "Recruiter Dashboard",
              description: "Explore the powerful analytics and management tools available to recruiters.",
              icon: Monitor,
              color: "from-purple-500 to-pink-500",
              features: [
                "Live interview monitoring",
                "Candidate scoring dashboard",
                "Scheduling automation"
              ]
            },
            {
              title: "Admin Analytics",
              description: "Access comprehensive reports and insights to optimize your hiring strategy.",
              icon: MessageCircle,
              color: "from-emerald-500 to-green-500",
              features: [
                "Hiring funnel analytics",
                "Time-to-hire metrics",
                "Quality-of-hire reports"
              ]
            }
          ].map((view, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${view.color} rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300`}>
                  <view.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{view.title}</h3>
                  <p className="text-sm text-muted-foreground">{view.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {view.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className={`w-2 h-2 bg-gradient-to-br ${view.color} rounded-full`}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-br from-border/30 to-transparent border border-border rounded-2xl p-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Try Our Interactive Demo</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience RecruitAI firsthand with our interactive demo. Upload a sample 
                candidate list and see how our AI agent conducts interviews and provides 
                detailed assessments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Upload sample candidate data
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Watch AI conduct mock interviews
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Review assessment results
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Explore scheduling automation
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
                  Launch Demo
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
                  Request Custom Demo
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Interactive Demo Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
                Trusted by Industry Leaders
              </Badge>
            </div>
            <blockquote className="text-xl lg:text-2xl font-semibold text-foreground mb-6 italic">
              "RecruitAI has completely transformed our hiring process. We're now able to screen 
              hundreds of candidates in the time it used to take to interview just a few."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Jane Doe</div>
                <div className="text-sm text-muted-foreground">Head of Talent Acquisition, TechCorp</div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
                Schedule Personal Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}