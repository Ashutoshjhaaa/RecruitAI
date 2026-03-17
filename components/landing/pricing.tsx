import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap, Users, Calendar, Shield, Globe } from "lucide-react";
import React from "react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with AI recruitment",
      features: [
        { name: "Up to 100 interviews/month", included: true },
        { name: "Basic AI voice interviews", included: true },
        { name: "Standard scheduling", included: true },
        { name: "Email support", included: true },
        { name: "Basic analytics", included: true },
        { name: "Single user", included: true },
        { name: "Standard integrations", included: true },
        { name: "24/7 availability", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false }
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing teams with higher volume needs",
      features: [
        { name: "Up to 500 interviews/month", included: true },
        { name: "Advanced AI voice interviews", included: true },
        { name: "Smart scheduling & reminders", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced analytics & reporting", included: true },
        { name: "Up to 5 users", included: true },
        { name: "Premium integrations", included: true },
        { name: "24/7 availability", included: true },
        { name: "Custom interview scripts", included: true },
        { name: "Dedicated account manager", included: false }
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex recruitment needs",
      features: [
        { name: "Unlimited interviews", included: true },
        { name: "Enterprise-grade AI interviews", included: true },
        { name: "Advanced scheduling & coordination", included: true },
        { name: "24/7 phone & email support", included: true },
        { name: "Enterprise analytics suite", included: true },
        { name: "Unlimited users", included: true },
        { name: "Custom integrations", included: true },
        { name: "24/7 availability", included: true },
        { name: "Custom AI models", included: true },
        { name: "Dedicated account manager", included: true }
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-emerald-500 to-green-500"
    }
  ];

  const featureCategories = [
    {
      category: "Core Features",
      features: [
        "AI Voice Interviews",
        "Candidate Assessment",
        "Smart Scheduling",
        "Calendar Integration"
      ]
    },
    {
      category: "Analytics & Reporting",
      features: [
        "Interview Analytics",
        "Candidate Scoring",
        "Hiring Funnel Reports",
        "ROI Tracking"
      ]
    },
    {
      category: "Integrations",
      features: [
        "ATS Integration",
        "Calendar Sync",
        "CRM Integration",
        "HRIS Integration"
      ]
    },
    {
      category: "Security & Compliance",
      features: [
        "Data Encryption",
        "GDPR Compliance",
        "SOC 2 Certified",
        "Role-based Access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary">
            Flexible Plans
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your team size and hiring needs. All plans include 
            a 14-day free trial with no credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary/30' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={`bg-gradient-to-r ${plan.color} text-white px-4 py-1 text-xs font-semibold`}>
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center shadow-lg shadow-primary/20`}>
                    {index === 0 && <Zap className="h-6 w-6 text-white" />}
                    {index === 1 && <Star className="h-6 w-6 text-white" />}
                    {index === 2 && <Crown className="h-6 w-6 text-white" />}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-extrabold text-foreground">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>

                <Button 
                  size="lg" 
                  className={`w-full ${plan.popular ? `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white shadow-lg shadow-primary/30` : 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg shadow-primary/30'}`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 border border-border rounded flex-shrink-0"></div>
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Feature Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-4 text-foreground font-semibold">Features</th>
                  <th className="text-center pb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Starter</span>
                  </th>
                  <th className="text-center pb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">Professional</span>
                  </th>
                  <th className="text-center pb-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Enterprise</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="border-b border-border">
                      <td colSpan={4} className="py-4 font-semibold text-foreground">{category.category}</td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="py-3 text-foreground">{feature}</td>
                        <td className="py-3 text-center">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                        <td className="py-3 text-center">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                        <td className="py-3 text-center">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              title: "No Setup Fees",
              description: "Get started immediately with zero upfront costs",
              icon: Zap,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Cancel Anytime",
              description: "Flexible plans with no long-term commitments",
              icon: Users,
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Free Migration",
              description: "We'll help you migrate from your current system",
              icon: Calendar,
              color: "from-emerald-500 to-green-500"
            },
            {
              title: "99.9% Uptime",
              description: "Enterprise-grade reliability you can count on",
              icon: Shield,
              color: "from-orange-500 to-red-500"
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

        {/* Enterprise CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              For enterprises with unique requirements, custom integrations, or higher volume needs, 
              we offer tailored solutions designed specifically for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30">
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-3 text-base font-semibold">
                Request Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}