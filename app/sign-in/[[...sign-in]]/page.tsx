import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0c] selection:bg-primary/20 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_65%)] opacity-[0.03] pointer-events-none" />
      
      <div className="w-full max-w-md z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              RecruitAI
            </h1>
          </Link>
          <p className="text-muted-foreground mt-2 text-sm italic">Welcome back, let's get you prepared.</p>
        </div>

        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-[#121215] border border-white/5 shadow-2xl rounded-2xl p-8 mx-auto",
              headerTitle: "text-2xl font-bold text-white tracking-tight",
              headerSubtitle: "text-gray-400 text-sm",
              socialButtonsBlockButton: "bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-200",
              socialButtonsBlockButtonText: "text-white font-medium",
              dividerLine: "bg-white/10",
              dividerText: "text-gray-500 text-xs uppercase tracking-widest",
              formFieldLabel: "text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5",
              formFieldInput: "bg-white/5 border-white/10 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl h-11 transition-all",
              formButtonPrimary: "bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl shadow-[0_4px_20px_rgba(var(--primary),0.3)] transition-all active:scale-[0.98]",
              footerActionLink: "text-primary hover:text-primary/80 font-semibold",
              footerActionText: "text-gray-400",
              identityPreviewText: "text-white",
              identityPreviewEditButtonIcon: "text-primary",
              formResendCodeLink: "text-primary",
              otpCodeFieldInput: "bg-white/5 border-white/10 text-white focus:border-primary/50 rounded-xl",
            },
            layout: {
              socialButtonsPlacement: "bottom",
              showOptionalFields: false,
            }
          }}
        />
        
        <div className="mt-8 text-center text-xs text-gray-500 tracking-wide uppercase">
          Protected by industry standard encryption
        </div>
      </div>
    </div>
  );
}