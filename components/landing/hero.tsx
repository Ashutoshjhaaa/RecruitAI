import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Phone, Users, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';

export async function Hero() {
  const { userId } = await auth();

  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl'></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>

          {/* Left Content */}
          <div className='space-y-8'>
            <div className='flex items-center gap-3'>
              <Badge variant='outline' className='px-3 py-1 text-xs uppercase tracking-widest font-medium border-primary/30 bg-primary/5 text-primary'>
                AI-Powered Recruitment
              </Badge>
              <div className='w-px h-6 bg-border'></div>
              <span className='text-sm text-muted-foreground'>Trusted by 1000+ recruiters</span>
            </div>

            <div className='space-y-6'>
              <h1 className='text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tighter'>
                Transform Your Hiring with
                <span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'> AI Voice Interviews</span>
              </h1>

              <p className='text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl'>
                Import candidate lists and let our intelligent voice agent conduct personalized
                screening interviews, evaluate skills, and schedule qualified candidates automatically.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              {userId ? (
                <Link href='/dashboard'>
                  <Button size='lg' className='bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105'>
                    Go to Dashboard
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href='/sign-up'>
                    <Button size='lg' className='bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105'>
                      Start Free Trial
                      <ArrowRight className='ml-2 h-5 w-5' />
                    </Button>
                  </Link>
                  <Button size='lg' variant='outline' className='border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 px-8 py-6 text-base font-semibold'>
                    Watch Demo
                  </Button>
                </>
              )}
            </div>

            {/* Social Proof */}
            <div className='flex items-center gap-8 pt-4'>
              <div className='flex -space-x-2'>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className='w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-primary'>
                    {i}
                  </div>
                ))}
              </div>
              <div className='text-sm text-muted-foreground'>
                <span className='font-semibold text-foreground'>500+</span> interviews conducted daily
              </div>
            </div>
          </div>

          {/* Right Content - Feature Showcase */}
          <div className='relative'>
            <div className='relative bg-card border border-border rounded-2xl p-8 shadow-xl'>
              {/* Feature Cards */}
              <div className='space-y-6'>
                <div className='flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10'>
                  <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center'>
                    <Phone className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-foreground'>AI Voice Interviews</h3>
                    <p className='text-sm text-muted-foreground'>Conversational screening with real-time analysis</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/20'>
                  <div className='w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center'>
                    <Users className='h-6 w-6 text-emerald-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-foreground'>Smart Assessment</h3>
                    <p className='text-sm text-muted-foreground'>Skill evaluation and cultural fit scoring</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/20'>
                  <div className='w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center'>
                    <Calendar className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-foreground'>Auto Scheduling</h3>
                    <p className='text-sm text-muted-foreground'>Seamless calendar integration</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl'></div>
              <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl'></div>
            </div>

            {/* Floating stats */}
            <div className='absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg'>
              <div className='text-2xl font-bold text-primary'>90%</div>
              <div className='text-xs text-muted-foreground'>Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

