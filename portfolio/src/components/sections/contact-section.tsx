import Image from "next/image";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-[1200px] mx-auto px-4 py-24 w-full">
      {/* Header */}
      <div className="mb-8 border-b border-border pb-6">
        <div className="flex items-center gap-3">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/B7g8c9FeulixXicIZXyuEdt9g0-2.svg?"
            alt="Mail Icon"
            width={22}
            height={22}
          />
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-primary-text">Let's Connect!</h2>
        </div>
        <p className="mt-3 text-secondary-text">Connect with me today. Let's create something amazing together!</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="mailto:mohitsai109@gmail.com"
            className="flex items-center gap-2 rounded-xl border border-border bg-secondary-background px-4 py-2 text-sm font-medium hover:bg-hover-background"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/0aq2OH3TepHILcGfdA1T2tErCA-5.svg?"
              alt="Email icon"
              width={18}
              height={18}
            />
            <span className="animated-text">EMAIL ME</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mohitsaipittu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-border bg-secondary-background px-4 py-2 text-sm font-medium hover:bg-hover-background"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/images/J5RPM8b2QyhhB5TlJ6Qeo8Q3Sl4-3.jpg?"
              alt="LinkedIn icon"
              width={18}
              height={18}
              className="rounded-full"
            />
            <span className="animated-text">LINKEDIN</span>
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="w-full mt-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-secondary-text">Name</label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl bg-secondary-background border border-border/50 px-5 py-4 text-primary-text placeholder:text-muted-text/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 hover:border-primary/30"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-secondary-text">Email</label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl bg-secondary-background border border-border/50 px-5 py-4 text-primary-text placeholder:text-muted-text/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 hover:border-primary/30"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-secondary-text">Message</label>
            <div className="relative">
              <textarea
                id="message"
                rows={6}
                className="w-full rounded-xl bg-secondary-background border border-border/50 px-5 py-4 text-primary-text placeholder:text-muted-text/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 hover:border-primary/30 resize-none"
                placeholder="How can I help you?"
              />
              <div className="absolute bottom-3 right-3 text-xs text-muted-foreground/50">
                Press Enter to send
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-sm text-muted-foreground/70">
              I'll get back to you within 24 hours
            </p>
            <button 
              type="button" 
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-4 font-medium hover:opacity-90 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-base flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal">
                <path d="m3 3 3 9-3 9 19-9Z"/>
                <path d="M6 12h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactSection;