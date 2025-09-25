import Image from "next/image";
import { Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hooked_boy_/",
    icon: {
      type: "image",
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/1DQ0w0a64EnOcuJlzs5PVdiwE-23.svg?",
      alt: "Instagram Logo",
      invert: false,
    },
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohitsaipittu",
    icon: {
      type: "lucide",
      Component: Linkedin,
    },
  },
  {
    name: "GitHub",
    href: "https://github.com/mohitsai07",
    icon: {
      type: "image",
      src: "https://framerusercontent.com/images/hNSwNcJ0bGgb2ApCmzJCGZA8IIU.webp?width=720&height=720",
      alt: "GitHub",
      invert: false,
    },
  },
];

const SidebarSocial = () => {
  return (
    <aside className="fixed top-1/2 right-10 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${link.name}`}
            className="group flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-border bg-card p-3 transition-colors hover:bg-hover-background"
          >
            {link.icon.type === "image" ? (
              <Image
                src={link.icon.src}
                alt={link.icon.alt}
                width={28}
                height={28}
                className={`h-7 w-7 object-contain transition-transform group-hover:scale-110 ${
                  link.icon.invert ? "brightness-0 invert" : ""
                }`}
              />
            ) : (
              <link.icon.Component className="h-7 w-7 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
            )}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSocial;