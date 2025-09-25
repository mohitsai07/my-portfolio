import type { LucideProps } from "lucide-react";
import { Instagram, Code2, Twitter } from "lucide-react";
import React from "react";

interface SocialLink {
  name: string;
  Icon: React.ComponentType<LucideProps>;
  href: string;
}

const socialLinksData: SocialLink[] = [
  { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/hooked_boy_/" },
  { name: "DEV.TO", Icon: Code2, href: "https://dev.to/mohitsai" },
  { name: "X", Icon: Twitter, href: "https://x.com/Mohit5517032420" },
];

const SocialLinks = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {socialLinksData.map(({ name, Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-background shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-base font-medium tracking-wide bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                {name}
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/20 group-hover:scale-105 transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;