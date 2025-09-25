import Image from "next/image";
import { ArrowDown } from "lucide-react";

type ExperienceItem = {
  iconUrl: string;
  iconAlt: string;
  iconSize: number;
  isIconRoundedFull?: boolean;
  title: string;
  tag?: string;
  tagType?: 'pill' | 'text';
  dateOrLabel: string;
  dateOrLabelStyle?: 'bold';
  link?: string;
  linkLabel?: string;
  role: string;
  description: string;
};

const experienceData: ExperienceItem[] = [
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/images/gH9gG7lZTsM04bUEF3AZcct1WwY-4.png?",
    iconAlt: "St. Ann's College Logo",
    iconSize: 28,
    isIconRoundedFull: true,
    title: "St. Ann's College, Chirala",
    tag: "College Student",
    tagType: 'text',
    dateOrLabel: "2022 – 2026",
    link: "https://sacet.ac.in/",
    linkLabel: "sacet.ac.in",
    role: "B.Tech CSE — Final Year",
    description: "Focused on Machine Learning, IoT, and Web Development.",
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/5fjqPKh1wCI2nslh2xMOBxfNdk-14.svg?",
    iconAlt: "Location Tracker Icon",
    iconSize: 24,
    title: "Real Time Location Tracker",
    tag: "Location Tracker",
    tagType: 'pill',
    dateOrLabel: "Personal Project",
    dateOrLabelStyle: 'bold',
    link: "https://real-location-tracker.vercel.app/",
    linkLabel: "https://real-location-tracker.vercel.app/",
    role: "Developer",
    description: "This innovative project enables users to monitor live locations on an interactive map with seamless updates.",
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/gx7FWTnUnLmteOgE8Pl9apbq9iQ-15.svg?",
    iconAlt: "RoadmapAI Icon",
    iconSize: 24,
    title: "RoadmapAI",
    tag: "Learning platform",
    tagType: 'pill',
    dateOrLabel: "Personal Project",
    dateOrLabelStyle: 'bold',
    link: "https://develope-roadmap.vercel.app/",
    linkLabel: "https://develope-roadmap.vercel.app/",
    role: "Real World Problem Slover",
    description: "Led UI/UX design projects from concept to delivery, conducted user testing, and iterated designs for optimal user experience.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full max-w-[718px] mx-auto px-4 py-20 sm:py-24">
      <div className="flex items-center gap-4">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/P0kH73jXcqY75XYvfxH3SwcHs-13.svg?" 
          alt="Experience Icon"
          width={28}
          height={28}
        />
        <h2 className="text-3xl font-semibold text-primary-text">My Experience</h2>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-5 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
        
        <div className="absolute left-5 top-0 -translate-x-1/2 -translate-y-full flex flex-col items-center gap-1">
          <p className="text-xs font-medium text-muted-text">Now</p>
          <ArrowDown className="w-4 h-4 text-muted-text" />
        </div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-[80px]">
              <div className="absolute left-[13px] top-[9px] h-3.5 w-3.5 rounded-full border-2 border-border bg-primary-background" />
              
              <div className="bg-secondary-background border border-border rounded-2xl p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-tertiary-background rounded-lg w-10 h-10 p-2 flex items-center justify-center border border-border">
                      <Image 
                        src={item.iconUrl} 
                        alt={item.iconAlt} 
                        width={item.iconSize} 
                        height={item.iconSize} 
                        className={item.isIconRoundedFull ? 'rounded-full' : ''}
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold text-primary-text text-base">{item.title}</h3>
                        {item.tag && (
                          <span className={`text-xs font-medium ${item.tagType === 'pill' ? 'bg-tertiary-background text-secondary-text px-2 py-0.5 rounded' : 'text-sm text-secondary-text'}`}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.linkLabel && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-text hover:text-accent-blue transition-colors mt-0.5">
                          {item.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                  <p className={`text-sm shrink-0 ${item.dateOrLabelStyle === 'bold' ? 'font-semibold text-primary-text' : 'font-medium text-secondary-text'}`}>
                    {item.dateOrLabel}
                  </p>
                </div>
                <hr className="border-border my-4" />
                <div>
                  <h4 className="font-semibold text-primary-text text-sm mb-1">{item.role}</h4>
                  <p className="text-secondary-text text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;