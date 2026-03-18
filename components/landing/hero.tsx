import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Phone, Users, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';

export async function Hero() {
  const { userId } = await auth();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-[56px]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 z-0"></div>
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 w-full text-center py-[100px]">
        <div className="flex flex-col items-center gap-8 max-w-[900px] mx-auto">
          <div className="flex flex-col items-center gap-4">
            <span className="text-eyebrow mb-2">AI-Powered Recruitment</span>
            <h1 className="text-hero mb-6">
              Transform Your Hiring with <br />
              <span className="text-white3">AI Voice Interviews</span>
            </h1>

            <p className="text-body max-w-[600px] mx-auto text-[18px]">
              Import candidate lists and let our intelligent voice agent conduct personalized
              screening interviews, evaluate skills, and schedule qualified candidates automatically.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {userId ? (
              <Link href="/dashboard">
                <Button size="lg" className="px-8 py-3 text-[14px] font-medium">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/sign-up">
                  <Button size="lg" className="px-8 py-3 text-[14px] font-medium">
                    Start Free Trial
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="px-8 py-3 text-[14px] font-medium">
                  Watch Demo
                </Button>
              </>
            )}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 mt-12 bg-bg3 border border-border2 px-4 py-2 rounded-full">
            <div className="status-indicator"></div>
            <span className="text-mono text-[12px] uppercase tracking-wider text-white2">Live: 1,248 interviews today</span>
          </div>
        </div>
      </div>
    </section>
  );
}

