import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Zap, 
  Target, 
  Shield, 
  Globe 
} from "lucide-react";

export function Benefits() {
  const stats = [
    {
      label: "Time Saved",
      value: "90%",
      description: "Reduce screening time from hours to minutes",
      icon: Clock,
      color: "from-blue-500 to-cyan-500"
    },
    {
      label: "Cost Reduction",
      value: "$2,000",
      description: "Save per hire on recruitment costs",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      label: "Interview Quality",
      value: "95%",
      description: "Candidate satisfaction with AI interviews",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      label: "Hiring Speed",
      value: "70%",
      description: "Faster time-to-hire with automated screening",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Scale Your Recruitment",
      description: "Handle hundreds of candidates simultaneously without increasing your team size. Our AI agent works 24/7, ensuring no qualified candidate slips through the cracks.",
      icon: Users,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Eliminate Bias",
      description: "Achieve fair and consistent evaluation across all candidates. Our AI follows standardized criteria, removing unconscious bias from the initial screening process.",
      icon: Shield,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Global Talent Access",
      description: "Conduct interviews in multiple languages and across time zones. Access the best talent worldwide without geographical limitations.",
      icon: Globe,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed hiring decisions based on comprehensive analytics and candidate scoring. Track performance metrics and optimize your recruitment strategy.",
      icon: TrendingUp,
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center space-y-6 mb-20">
          <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
            Proven Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
            Impact That Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Companies using RecruitAI see immediate improvements in their hiring process 
            efficiency and candidate quality.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-extrabold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Benefits List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Transform Your Hiring Process
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                RecruitAI doesn't just automate interviews—it revolutionizes your entire 
                recruitment strategy with intelligent, data-driven insights.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-border/30 to-transparent rounded-xl border border-border/50 hover:border-border/70 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-foreground mb-6">ROI Timeline</h4>
              
              {/* ROI Chart Visualization */}
              <div className="space-y-4">
                {[
                  { period: "Month 1", value: 40, label: "Setup & Training" },
                  { period: "Month 2", value: 120, label: "Initial Results" },
                  { period: "Month 3", value: 200, label: "Full Optimization" },
                  { period: "Month 6", value: 400, label: "Maximum ROI" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1 bg-border rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                    <div className="text-right min-w-24">
                      <div className="text-sm font-semibold text-foreground">{item.period}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-2xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Daily interviews conducted</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Companies transformed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Style Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Recruitment Team Efficiency",
              before: "Manual screening of 100 candidates: 40 hours",
              after: "AI screening of 100 candidates: 2 hours",
              improvement: "95% time reduction"
            },
            {
              title: "Candidate Experience",
              before: "Generic email responses, long wait times",
              after: "Personalized voice interviews, immediate feedback",
              improvement: "90% satisfaction increase"
            },
            {
              title: "Hiring Quality",
              before: "Subjective evaluations, inconsistent standards",
              after: "Data-driven scoring, standardized criteria",
              improvement: "80% better match quality"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-foreground text-lg mb-4">{stat.title}</h4>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <span className="text-sm text-muted-foreground">Before</span>
                  <span className="text-sm font-medium">{stat.before}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <span className="text-sm text-muted-foreground">After</span>
                  <span className="text-sm font-medium">{stat.after}</span>
                </div>
              </div>
              
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-600">
                  {stat.improvement}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to See These Results for Your Company?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the companies that have already transformed their recruitment process. 
              Experience the power of AI-driven hiring with our risk-free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}