import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  title: "RecruitAI - AI Voice Agent for Automated Recruitment",
  description: "Transform your hiring process with AI-powered voice interviews. Import candidate lists and let our intelligent agent conduct personalized screening interviews, evaluate skills, and schedule qualified candidates automatically.",
  keywords: [
    "AI recruitment",
    "voice interviews",
    "automated hiring",
    "AI recruiter",
    "candidate screening",
    "recruitment automation",
    "AI voice agent",
    "hiring technology"
  ],
  authors: [{ name: "RecruitAI Team" }],
  creator: "RecruitAI",
  publisher: "RecruitAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://recruitai.com",
    title: "RecruitAI - AI Voice Agent for Automated Recruitment",
    description: "Transform your hiring process with AI-powered voice interviews. Import candidate lists and let our intelligent agent conduct personalized screening interviews, evaluate skills, and schedule qualified candidates automatically.",
    siteName: "RecruitAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RecruitAI - AI Voice Agent for Automated Recruitment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RecruitAI - AI Voice Agent for Automated Recruitment",
    description: "Transform your hiring process with AI-powered voice interviews. Import candidate lists and let our intelligent agent conduct personalized screening interviews, evaluate skills, and schedule qualified candidates automatically.",
    images: ["/og-image.jpg"],
    creator: "@RecruitAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://recruitai.com",
  },
};