"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";

const faqs = [
{
  q: "Can you collaborate on hackathons/projects?",
  a: "Absolutely. I enjoy rapid prototyping and team collaboration. I can contribute across frontend, backend, and AI integration to ship a polished MVP quickly."
},
{
  q: "Do you take freelance/part-time work?",
  a: "Yes, I’m open to selected freelance and part‑time opportunities. Share your scope, timeline, and budget—I'll get back with a plan."
},
{
  q: "Can you build SaaS apps for startups?",
  a: "Yes. I build end‑to‑end SaaS with modern stacks (Next.js, Tailwind, PostgreSQL/Turso/Drizzle) including auth, payments, and dashboards."
},
{
  q: "Are you open to internships?",
  a: "Yes, I’m open to internships where I can contribute meaningfully while learning from the team."
},
{
  q: "What technologies do you work with?",
  a: "Primarily TypeScript, Next.js, Tailwind, Node.js, and databases (PostgreSQL/Turso). I also work with AI tooling and integrations."
},
{
  q: "How do you balance academics and projects?",
  a: "I follow a sprint‑based schedule with clear priorities and timeboxing, ensuring consistent progress without compromising academics."
}];


export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openIndex !== null && !contentRefs.current[openIndex]?.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openIndex]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20 relative">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-4">
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-3 bg-clip-text">
            FAQ / Common Queries
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto">
            Get answers to common queries. Your questions, addressed simply and clearly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
                ref={(el: HTMLDivElement | null) => {
                  contentRefs.current[index] = el;
                  return undefined;
                }}
              >
                <motion.div
                  className={`relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-secondary-background to-tertiary-background/50 backdrop-blur-sm shadow-sm transition-all duration-300 ${
                    isOpen ? 'ring-2 ring-primary/20' : 'hover:ring-1 hover:ring-border/50'
                  }`}
                  whileHover={!isOpen ? { y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' } : {}}
                >
                  <motion.button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex items-center justify-between p-6 text-left gap-4 transition-colors ${
                      isOpen ? 'bg-primary/5' : 'hover:bg-hover-background/50'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-primary-text">
                      {item.q}
                    </span>
                    <motion.span
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
                        isOpen 
                          ? 'bg-primary/10 text-primary rotate-180' 
                          : 'bg-tertiary-background text-secondary-text group-hover:bg-hover-background'
                      }`}
                      initial={false}
                      animate={{ 
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} className="transition-transform" />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { 
                            height: { duration: 0.3, ease: 'easeInOut' },
                            opacity: { duration: 0.2, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { 
                            height: { duration: 0.2 },
                            opacity: { duration: 0.1 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-secondary-text">
                          <div className="w-12 h-0.5 bg-gradient-to-r from-primary/20 to-transparent mb-4"></div>
                          <p>{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Glow effect when open */}
                {isOpen && (
                  <motion.div 
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

};

export default FAQSection;