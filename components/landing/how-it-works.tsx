import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileUp, Phone, Calendar, Users, CheckCircle, Clock, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: FileUp,
      title: "Import Candidate Content",
      description: "Upload CSV, Excel, or PDF files with candidate information. Our system automatically extracts and processes all relevant data.",
      features: [
        "CSV, Excel, PDF support",
        "Automatic data extraction",
        "Bulk candidate processing",
        "Data validation & cleanup"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      icon: Phone,
      title: "AI Agent Conducts Interviews",
      description: "Our intelligent voice agent calls each candidate with personalized questions based on their profile and role requirements.",
      features: [
        "Personalized interview scripts",
        "Real-time voice analysis",
        "Skill assessment scoring",
        "Behavioral evaluation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      icon: Calendar,
      title: "Schedule & Follow Up",
      description: "Qualified candidates are automatically scheduled for next steps, with seamless calendar integration and follow-up management.",
      features: [
        "Smart calendar integration",
        "Candidate availability matching",
        "Automated follow-ups",
        "Status tracking dashboard"
      ],
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
            Simple 3-Step Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
            How RecruitAI Transforms Your Hiring
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From candidate import to interview scheduling, our AI voice agent handles the entire initial screening process automatically.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-border to-border -ml-4"></div>
                )}
                
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 lg:mt-24">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/50"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'lg:ml-24' : 'lg:mr-24 lg:ml-auto'}`}>
                  <div className="flex items-center gap-6">
                    {index % 2 === 0 ? (
                      <>
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg shadow-primary/30`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="bg-card border border-border rounded-xl p-6 flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-card border border-border rounded-xl p-6 flex-1 text-right">
                          <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg shadow-primary/30`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute top-8 ${index % 2 === 0 ? 'lg:left-8' : 'lg:right-8'} w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Ready to Transform Your Hiring?</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Start Your Free Trial Today
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the power of AI voice interviews with our 14-day free trial. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}