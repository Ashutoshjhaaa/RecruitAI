import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small teams getting started with AI recruitment",
      features: [
        "Up to 100 interviews/month",
        "Basic AI voice interviews",
        "Standard scheduling",
        "Email support",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      description: "Ideal for growing teams with higher volume needs",
      features: [
        "Up to 500 interviews/month",
        "Advanced AI voice interviews",
        "Smart scheduling & reminders",
        "Priority email support",
        "Advanced analytics & reporting",
        "Up to 5 users"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex recruitment needs",
      features: [
        "Unlimited interviews",
        "Enterprise-grade AI interviews",
        "24/7 phone & email support",
        "Enterprise analytics suite",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-h2">Simple, Transparent Pricing</h2>
          <p className="text-body max-w-2xl mx-auto">
            Choose the plan that is right for your business. All plans include our core AI voice technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-bg2 p-8 rounded-2xl border ${plan.popular ? "border-white2 shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)]" : "border-border"} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-card-title mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-white2 text-sm">/month</span>}
                </div>
                <p className="text-small leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-white/10 rounded-full p-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[13px] text-white2">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "default" : "secondary"} 
                className="w-full font-bold py-6"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
