"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(timeString);
    };

    updateClock();
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <p className="font-mono text-sm text-[var(--primary-text)] tracking-wider">{time}</p>;
};

type NavPillProps = {
  href: string;
  iconSrc: string;
  tooltipText: string;
  isActive?: boolean;
};

const NavPill = ({ href, iconSrc, tooltipText, isActive = false }: NavPillProps) => {
  return (
    <div className="relative group">
      <a
        href={href}
        className={`w-[60px] h-[60px] flex items-center justify-center p-[5px] bg-[#202021] rounded-full border transition-all duration-300 group-hover:border-[var(--accent-blue)] ${
          isActive ? "border-[var(--primary)]" : "border-transparent"
        }`}
      >
        <Image src={iconSrc} alt={`${tooltipText} icon`} width={28} height={28} />
      </a>
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-[#121212] rounded-md text-sm text-[var(--primary-text)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {tooltipText.toUpperCase()}
        <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-[#121212] rotate-45 -translate-x-1"></div>
      </div>
    </div>
  );
};

const NAV_ITEMS = [
  { href: "/", iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/sGPkH0sNOJxultuXvtJfz43YyQ-1.svg?", tooltipText: "HOME" },
  { href: "/services", iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/B7g8c9FeulixXicIZXyuEdt9g0-2.svg?", tooltipText: "services" },
  { href: "#contact", iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/Mp3b6jnRxdPY1kVkztOVvcJsJw-3.svg?", tooltipText: "contact" },
];

const GO_TOP_ITEM = {
  href: "#top",
  iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/ToN9KPdnSOfIXOu5yiaTqw9fFyM-4.svg?",
  tooltipText: "go top",
};

const SideNav = () => {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="h-[320px] flex flex-col justify-between items-center">
        <div className="flex flex-col items-center gap-4">
          {NAV_ITEMS.map((item, index) => (
            <NavPill key={item.href} {...item} isActive={index === 0} />
          ))}
        </div>
        <NavPill {...GO_TOP_ITEM} />
      </div>
    </aside>
  );
};

const TopBar = () => {
  return (
    <header className="fixed top-6 right-6 z-40 hidden lg:flex items-center gap-6">
      <div className="flex items-center gap-2 bg-[#202021] py-2 px-4 rounded-full border border-[var(--border)]">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
        </div>
        <p className="text-sm font-medium text-[var(--secondary-text)]">Available For Work</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-[var(--muted-text)]">Local Time ( IST )</p>
        <div className="bg-[#202021] py-2 px-4 rounded-full border border-[var(--border)]">
          <Clock />
        </div>
      </div>
    </header>
  );
};

export default function Navigation() {
  return (
    <>
      <TopBar />
      <SideNav />
    </>
  );
}