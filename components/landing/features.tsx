import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Phone, 
  Users, 
  Calendar, 
  Brain, 
  Shield, 
  BarChart3, 
  Zap, 
  Globe, 
  Clock, 
  MessageCircle,
  FileText 
} from "lucide-react";

export function Features() {
  const featureCategories = [
    {
      title: "AI Voice Interviews",
      description: "Intelligent, conversational screening that feels natural and professional.",
      features: [
        {
          icon: Phone,
          title: "Natural Voice Conversations",
          description: "Advanced AI that conducts realistic, engaging phone interviews with candidates.",
          metric: "95% candidate satisfaction"
        },
        {
          icon: Brain,
          title: "Smart Question Adaptation",
          description: "Questions dynamically adapt based on candidate responses and role requirements.",
          metric: "Personalized for each candidate"
        },
        {
          icon: MessageCircle,
          title: "Real-time Analysis",
          description: "Instant evaluation of responses with sentiment and competency analysis.",
          metric: "Sub-second processing"
        }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Assessment",
      description: "Comprehensive evaluation beyond just technical skills.",
      features: [
        {
          icon: Users,
          title: "Cultural Fit Scoring",
          description: "Assess alignment with company values and team dynamics.",
          metric: "85% retention correlation"
        },
        {
          icon: BarChart3,
          title: "Skill Proficiency Testing",
          description: "Evaluate technical abilities with role-specific questions.",
          metric: "90% accuracy rate"
        },
        {
          icon: Shield,
          title: "Bias-Free Evaluation",
          description: "Consistent, objective assessment without human bias.",
          metric: "100% standardized"
        }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Scheduling",
      description: "Seamless coordination that respects everyone's time.",
      features: [
        {
          icon: Calendar,
          title: "Smart Calendar Integration",
          description: "Connect with Google Calendar, Outlook, and other scheduling tools.",
          metric: "Instant sync"
        },
        {
          icon: Clock,
          title: "Availability Matching",
          description: "Find optimal times that work for both candidates and interviewers.",
          metric: "90% booking success"
        },
        {
          icon: Zap,
          title: "Auto-Reminders",
          description: "Send automated reminders to reduce no-shows and improve experience.",
          metric: "80% fewer cancellations"
        }
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Global Ready",
      description: "Support for international hiring with multilingual capabilities.",
      features: [
        {
          icon: Globe,
          title: "Multi-Language Support",
          description: "Conduct interviews in multiple languages with native fluency.",
          metric: "20+ languages supported"
        },
        {
          icon: FileText,
          title: "Document Processing",
          description: "Extract and analyze resumes, cover letters, and other documents.",
          metric: "Instant parsing"
        },
        {
          icon: Sparkles,
          title: "24/7 Operation",
          description: "Conduct interviews across time zones without limitations.",
          metric: "Always available"
        }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
            Feature Highlights
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
            Everything You Need for Modern Recruitment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intelligent voice interviews to automated scheduling, RecruitAI provides 
            a complete solution for efficient, bias-free hiring.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg shadow-primary/20`}>
                    {categoryIndex === 0 && <Phone className="h-8 w-8 text-white" />}
                    {categoryIndex === 1 && <Brain className="h-8 w-8 text-white" />}
                    {categoryIndex === 2 && <Calendar className="h-8 w-8 text-white" />}
                    {categoryIndex === 3 && <Globe className="h-8 w-8 text-white" />}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4 p-4 bg-gradient-to-r from-border/30 to-transparent rounded-xl border border-border/50 hover:border-border/70 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg shadow-primary/20`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {feature.metric}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Advanced Analytics",
              description: "Comprehensive insights into your hiring process with detailed reporting and metrics.",
              icon: BarChart3,
              color: "from-blue-500 to-indigo-500"
            },
            {
              title: "Integration Ready",
              description: "Seamlessly connect with your existing HR tools and applicant tracking systems.",
              icon: Zap,
              color: "from-purple-500 to-violet-500"
            },
            {
              title: "Security First",
              description: "Enterprise-grade security with data encryption and compliance certifications.",
              icon: Shield,
              color: "from-emerald-500 to-teal-500"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-border/30 to-transparent border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-primary/20`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Experience the Future of Hiring?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies who have transformed their recruitment process 
              with RecruitAI's intelligent voice agent technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}