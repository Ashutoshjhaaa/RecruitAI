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
  const allFeatures = [
    {
      icon: Phone,
      title: "Natural Voice Conversations",
      description: "Advanced AI that conducts realistic, engaging phone interviews with candidates."
    },
    {
      icon: Brain,
      title: "Smart Question Adaptation",
      description: "Questions dynamically adapt based on candidate responses and role requirements."
    },
    {
      icon: MessageCircle,
      title: "Real-time Analysis",
      description: "Instant evaluation of responses with sentiment and competency analysis."
    },
    {
      icon: Users,
      title: "Cultural Fit Scoring",
      description: "Assess alignment with company values and team dynamics."
    },
    {
      icon: BarChart3,
      title: "Skill Proficiency Testing",
      description: "Evaluate technical abilities with role-specific questions."
    },
    {
      icon: Shield,
      title: "Bias-Free Evaluation",
      description: "Consistent, objective assessment without human bias."
    },
  ];

  return (
    <section id="features" className="py-[100px] bg-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <span className="text-eyebrow">Platform Capabilities</span>
          <h2 className="text-h2 mt-4 max-w-[600px]">
            The most advanced AI recruiter <span className="text-white3">ever built.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border rounded-xl overflow-hidden">
          {allFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-10 border-r border-b border-border hover:bg-bg3 transition-colors last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0"
            >
              <div className="w-10 h-10 rounded-md bg-bg4 border border-border2 flex items-center justify-center mb-6">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-card-title mb-3">{feature.title}</h3>
              <p className="text-body text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}