"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="z-10"
    >
      <Link href="/blog/introducing-acme-ai">
        <div className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}>
          <AnimatedShinyText 
            className="inline-flex items-center justify-center px-3 py-1 transition ease-out text-sm font-medium hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" 
            shimmerWidth={200}
            shimmerColor="rgba(59, 130, 246, 0.7)"
            duration="2.5s"
          >
            <span>✨ Introducing vennsend.mail</span>
            <ArrowRightIcon className="ml-1.5 size-3.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </Link>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-3xl flex-col space-y-3 overflow-hidden pt-6">
      <motion.h1
        className="text-center text-3xl font-medium leading-[1.3] pb-1 bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400 sm:text-4xl md:text-5xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {["Your", "AI-Native", "Inbox", "with", "Memory,", "Reasoning,", "Privacy"].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-1 py-0.5 text-balance font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.div
        className="mx-auto max-w-xl text-center space-y-[2px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        <p className="text-base leading-[1.1] text-muted-foreground/90 sm:text-lg">
          Email sucks. We check it constantly, waste hours sorting it, and still miss important messages.
        </p>
        <p className="text-base leading-[1.1] text-muted-foreground sm:text-lg">
          Venn fixes this with an AI brain that reads your emails, tells you what matters, and remembers everything important.
        </p>
      </motion.div>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link href="/signup" className="w-full sm:w-auto">
          <RainbowButton>
            Get started for free
          </RainbowButton>
        </Link>
      </motion.div>
      <motion.div
        className="mt-4 flex flex-col items-center space-y-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <AnimatedShinyText 
          className="text-sm font-medium"
          shimmerWidth={120}
          shimmerColor="rgba(59, 130, 246, 0.5)"
          duration="3s"
        >
          Local-first privacy mode available
        </AnimatedShinyText>
        <span className="text-xs text-muted-foreground">
          Keep your data secure with on-device processing
        </span>
      </motion.div>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="border rounded-lg shadow-lg max-w-screen-lg mt-16"
      />
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <FlickeringGrid 
            squareSize={3}
            gridGap={8}
            flickerChance={0.1}
            color="rgb(0, 0, 0)"
            maxOpacity={0.15}
            className="h-full w-full dark:opacity-100 dark:[&_canvas]:invert"
          />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-[50vh] bg-gradient-to-b from-background via-background/80 to-transparent"></div>
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  );
}
