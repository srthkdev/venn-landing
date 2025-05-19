import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Ready to get started?"
      subtitle="Start your free trial today."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link href="/signup" className="w-full sm:w-auto">
          <RainbowButton>
            Get started for free
          </RainbowButton>
        </Link>
      </div>
    </Section>
  );
}
