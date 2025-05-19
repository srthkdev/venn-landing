import type React from "react";

// Assuming Icons might still be used for generic purposes or can be adapted.
// If Icons.logo is specific to the old template, it might need to be replaced or removed.
// For now, we'll remove specific icon instantiations if they don't fit Venn.
// import { Icons } from "@/components/icons"; 
// import { FaTwitter, FaYoutube } from "react-icons/fa"; // Removing social icons for now
// import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Venn",
  description: "Venn: Your AI-Native Inbox With Memory, Reasoning, and Privacy.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://vennsend.mail",
  keywords: [
    "AI Email",
    "Intelligent Inbox",
    "Email Client",
    "Productivity",
    "Privacy",
    "Email Management",
    "AI Assistant",
    "Memory",
    "Reasoning",
  ],
  links: {
    email: "support@vennsend.mail",
    // twitter: "#", // Placeholder or remove
    // discord: "#", // Placeholder or remove
    // github: "#", // Placeholder or remove
    // instagram: "#", // Placeholder or remove
  },
  header: [
    {
      trigger: "How It Works",
      content: {
        // main: { // Optional main feature block for dropdown
        //   icon: <Icons.logo className="h-6 w-6" />, // Replace with Venn's icon if available
        //   title: "Understand Venn's Flow",
        //   description: "See how Venn transforms your email experience from login to insights.",
        //   href: "#how-it-works-overview",
        // },
        items: [
          {
            href: "#how-it-works-login",
            title: "Login & Privacy Choice",
            description: "Choose Cloud mode (24/7 analysis) or Privacy mode (local AI).",
          },
          {
            href: "#how-it-works-onboarding",
            title: "Personalized Onboarding",
            description: "Tell Venn what matters or configure preferences anytime.",
          },
          {
            href: "#how-it-works-home",
            title: "Clean Home Page",
            description: "View summaries, action items, and links to important emails.",
          },
          {
            href: "#how-it-works-agents",
            title: "Background AI Agents",
            description: "Cloud agents work 24/7; Privacy mode for manual analysis.",
          },
          {
            href: "#how-it-works-insights",
            title: "Organized Insights",
            description: "Wake up to categorized insights based on your daily checks.",
          },
          {
            href: "#how-it-works-ask",
            title: "Ask Agent & AI Chat",
            description: "Research emails, get summaries, and chat (Cmd+/) about your inbox.",
          },
        ],
      },
    },
    {
      trigger: "Features",
      content: {
        // main: {  // Optional main feature block for dropdown
        //   icon: <Icons.logo className="h-6 w-6" />, // Replace with Venn's icon
        //   title: "Venn's Core Capabilities",
        //   description: "Explore the powerful features that make Venn unique.",
        //   href: "#features-overview",
        // },
        items: [
          {
            href: "#features-standard-email",
            title: "Standard Email Client",
            description: "Full read, send, reply, and email management functionalities.",
          },
          {
            href: "#features-ai-agents",
            title: "AI Background Agents",
            description: "Intelligent agents (Agno & Mem0) work while you're away.",
          },
          {
            href: "#features-actionable-home",
            title: "Actionable Home Page",
            description: "Focus on summaries and tasks, not an overwhelming raw inbox.",
          },
          {
            href: "#features-auto-action-items",
            title: "Automatic Action Items",
            description: "AI finds and extracts actionable tasks from your emails.",
          },
          {
            href: "#features-ask-agent",
            title: "Ask Agent (Research)",
            description: "Perform specific email research and data extraction on demand.",
          },
          {
            href: "#features-ai-chat",
            title: "Conversational AI Chat",
            description: "Full AI chat (Cmd+/) with memory of past emails and context.",
          },
          {
            href: "#features-follow-up",
            title: "Follow-Up Tracking",
            description: "Never miss a beat with intelligent follow-up reminders.",
          },
          {
            href: "#features-reports",
            title: "Summarization Reports",
            description: "Get concise reports summarizing multiple emails or threads.",
          },
           {
            href: "#features-multimodal",
            title: "Multimodal Elements",
            description: "Advanced text processing with simple visual reports.",
          },
        ],
      },
    },
    {
      href: "#pricing", // Updated from /blog
      label: "Pricing",
    },
    {
      href: "#privacy", // New item
      label: "Privacy",
    },
  ],
  pricing: [
    {
      name: "Privacy Mode",
      href: "#privacy-mode-signup", // Link to sign-up or learn more
      price: "Free", // Illustrative
      period: "local",
      yearlyPrice: "", // Not applicable if free or one-time
      features: [
        "Runs entirely on your computer",
        "Local AI processing (on-device)",
        "User-initiated manual analysis",
        "Full data control and ownership",
        "Standard email functionalities",
      ],
      description: "Maximum privacy with AI running locally on your device.",
      buttonText: "Use Privacy Mode",
      isPopular: false,
    },
    {
      name: "Cloud Mode",
      href: "#cloud-mode-signup", // Link to sign-up or learn more
      price: "$10", // Illustrative
      period: "month",
      yearlyPrice: "$96", // Illustrative (e.g., $8/month if paid annually)
      features: [
        "Powerful 24/7 background analysis",
        "AI agents work even when offline",
        "Always up-to-date insights & summaries",
        "Enhanced AI capabilities (Agno & Mem0 cloud)",
        "Continuous learning and improvement",
        "Daily summaries of what matters",
      ],
      description: "Unlock the full power of Venn with continuous, cloud-based AI.",
      buttonText: "Choose Cloud Mode",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "What is Venn?",
      answer: (
        <span>
          Venn is an AI-native email client designed to reduce email stress. It
          reads your emails, tells you what matters, and remembers everything
          important using AI agents.
        </span>
      ),
    },
    {
      question: "How does Venn's AI work?",
      answer: (
        <span>
          Venn utilizes AI agents (powered by technologies like Agno for task
          chains and Mem0 for memory) to perform background analysis, summarize
          emails, extract action items, and help you research your inbox.
        </span>
      ),
    },
    {
      question: "What are Venn's privacy options?",
      answer: (
        <span>
          Venn offers two modes: <strong>Cloud mode</strong> for powerful 24/7
          analysis with background agents, and <strong>Privacy mode</strong> which
          runs AI locally on your computer using local AI models for maximum data control.
        </span>
      ),
    },
    {
      question: "Can I use Venn with my existing email (e.g., Gmail, Outlook)?",
      answer: (
        <span>
          Yes, Venn is built to work with standard email protocols, allowing
          you to connect your existing accounts like Gmail, Outlook, and others.
        </span>
      ),
    },
    {
      question: "What kind of tasks can the 'Ask agent' perform?",
      answer: (
        <span>
          The Ask agent can help you find specific information, like: &ldquo;Make a
          table of all job applicants with their contact info,&rdquo; &ldquo;Summarize
          customer issues from March,&rdquo; or &ldquo;Show me emails I haven&apos;t replied to
          yet.&rdquo; You can also initiate a full AI chat (Cmd+/) about your emails.
        </span>
      ),
    },
    {
      question: "How does Venn ensure my data is remembered privately?",
      answer: (
        <span>
          Venn uses Mem0 for its memory capabilities. In Privacy Mode, this memory
          and all AI processing occur locally. In Cloud Mode, we employ robust
          security measures to protect your data while providing advanced features.
          You can always refer to our detailed privacy policy.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#features", text: "Features" },
        { href: "#pricing", text: "Pricing" },
        { href: "#how-it-works", text: "How It Works" },
        { href: "#privacy", text: "Privacy" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#about", text: "About Us" }, // Placeholder
        // { href: "#careers", text: "Careers" }, // Placeholder
        { href: "mailto:support@vennsend.mail", text: "Contact Us" },
      ],
    },
    {
      title: "Resources",
      links: [
        // { href: "#community", text: "Community" }, // Placeholder
        { href: "#support", text: "Support" }, // Placeholder
        { href: "#terms", text: "Terms of Service" }, // Placeholder
        { href: "#privacy-policy", text: "Privacy Policy" }, // Placeholder
      ],
    },
    // Social section removed for now as no Venn-specific links were provided
    // {
    //   title: "Social",
    //   links: [
    //     { href: "#", text: "Twitter", icon: <FaTwitter /> },
    //     { href: "#", text: "Instagram", icon: <RiInstagramFill /> },
    //     { href: "#", text: "Youtube", icon: <FaYoutube /> },
    //   ],
    // },
  ],
};

export type SiteConfig = typeof siteConfig;
