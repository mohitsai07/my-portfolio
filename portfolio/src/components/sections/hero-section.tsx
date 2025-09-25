"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24">
        {/* Left Side: Profile Image */}
        <motion.div 
          className="relative flex-shrink-0 group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:duration-200"></div>
          
          {/* Main image with border animation */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 p-1 bg-black">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/profile%20pic-1758793922439.jpg"
              alt="Mohit Sai profile picture"
              width={380}
              height={400}
              className="rounded-2xl object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
              priority
            />
            
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute -bottom-4 -right-4 bg-secondary-background text-primary-text text-sm font-medium px-4 py-2 rounded-full shadow-lg z-10 flex items-center gap-2 border border-border hover:bg-hover-background transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
          >
            <span className="text-base">👨‍💻</span> Vibe Coder
          </motion.div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-3 text-lg text-secondary-text">
            <motion.span
              role="img"
              aria-label="waving hand"
              className="h-6 w-6 select-none"
              style={{ display: 'inline-block', fontSize: '24px' }}
              animate={{ rotate: [0, 18, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            >
              👋
            </motion.span>
            <span>Hello I Am</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight text-primary-text">
            Mohit Sai
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-secondary-text">
            "Final-year CSE student and aspiring Full-Stack Developer, passionate about building SaaS apps, web solutions, and interactive digital experiences."
          </p>
          
          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a 
              href="mailto:mohitsai109@gmail.com" 
              className="flex items-center gap-3 rounded-xl border border-border bg-secondary-background px-6 py-3 font-medium text-primary-text transition-colors hover:bg-hover-background"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/0aq2OH3TepHILcGfdA1T2tErCA-5.svg?" 
                alt="Email icon"
                width={20}
                height={20}
              />
              <span className="animated-text">Email me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mohitsaipittu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 rounded-xl border border-border bg-secondary-background px-6 py-3 font-medium text-primary-text transition-colors hover:bg-hover-background"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/images/J5RPM8b2QyhhB5TlJ6Qeo8Q3Sl4-3.jpg?" 
                alt="LinkedIn icon"
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="animated-text">LINKEDIN</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;