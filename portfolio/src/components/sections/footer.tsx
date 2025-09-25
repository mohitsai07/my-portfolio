import Image from "next/image";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-primary-background">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="border-t border-border py-7 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href="#top"
              className="w-[38px] h-[38px] bg-secondary rounded-full flex items-center justify-center hover:bg-hover-background transition-colors"
              aria-label="Go to top"
            >
              <ArrowUp className="w-4 h-4 text-secondary-foreground" />
            </a>
            <p className="text-sm font-medium text-muted-foreground">
              © 2025 Mohit Sai. All Rights Reserved.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/mohitsaipittu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary-text transition-colors"
          >
            Designed & Developed by Mohit Sai
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/hooked_boy_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="https://framerusercontent.com/images/1DQ0w0a64EnOcuJlzs5PVdiwE.svg?width=30&height=30"
                alt="Instagram Logo"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mohitsaipittu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="https://framerusercontent.com/images/J5RPM8b2QyhhB5TlJ6Qeo8Q3Sl4.jpg?width=512&height=512"
                alt="Dribbble Logo"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://github.com/mohitsai07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image
                src="https://framerusercontent.com/images/hNSwNcJ0bGgb2ApCmzJCGZA8IIU.webp?width=720&height=720"
                alt="X.com Logo"
                width={30}
                height={30}
                className="rounded-full opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;