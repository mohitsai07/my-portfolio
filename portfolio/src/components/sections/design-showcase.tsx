import Image from "next/image";
import Link from "next/link";

const projectData = [
  {
    title: "RoadmapAI",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/images/PaUjllsnR97Wp8zYCDb8I5HZr4Y-7.png?",
    previewUrl: "https://develope-roadmap.vercel.app/",
    tags: ["Learning Platform", "Dark / Light Theme"],
    description: "A modern, interactive learning roadmap application with AI integration, mind maps, and gamification features.",
    alt: "RoadmapAI project preview",
  },
  {
    title: "Location Tracker",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/images/h6KjehvAu9WhlnUzr9PCGaceKzo-8.png?",
    previewUrl: "https://real-location-tracker.vercel.app/",
    tags: ["Location Tracker", "Futuristic Theme"],
    description: "Empowering fitness enthusiasts with an immersive online experience.",
    alt: "Location Tracker project preview",
  },
];

const DesignShowcase = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-20 flex flex-col items-center">
      <div className="w-full flex flex-col items-start mb-12">
        <div className="flex items-center gap-4">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/bt7ImlwoMxJGQa8Wl7k8EBUxoE-20.svg?"
            alt="Showcase Icon"
            width={28}
            height={28}
          />
          <h2 className="text-3xl font-semibold text-primary-text">
            Creative Design Showcase
          </h2>
        </div>
        <p className="text-base text-secondary-text mt-4 pl-11">
          Explore a collection of my most innovative and visually stunning works.
        </p>
      </div>

      <div className="w-full flex flex-col gap-8">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col lg:flex-row gap-8 p-8 bg-secondary-background border border-border rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 overflow-hidden"
            aria-label={`View ${project.title} project (opens in new tab)`}
          >
            {/* Background overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="w-full lg:w-[320px] h-[190px] rounded-lg overflow-hidden flex-shrink-0 relative z-10">
              <Image
                src={project.imageUrl}
                alt={project.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col flex-grow relative z-10">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold text-primary-text group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="w-10 h-10 flex items-center justify-center bg-tertiary-background border border-border rounded-lg group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/aT4CX06ATc3GC4ydIltoscU518-18.svg?"
                    alt=""
                    width={20}
                    height={20}
                    className="text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
              </div>
              
              <div className="flex items-center flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-tertiary-background border border-border rounded-md text-secondary-text text-sm group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-base text-secondary-text leading-relaxed group-hover:text-primary-text transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Subtle indicator that the card is clickable */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </a>
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/mohitsaipittu"
        className="w-full mt-12 py-4 px-8 flex items-center justify-center gap-2 bg-secondary-background border border-border rounded-xl text-primary-text text-sm font-medium tracking-[1px] uppercase hover:bg-hover-background transition-colors"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/4qFwXC9VZW75pyEBD3g08tIHI-22.svg?"
          alt="Arrow right"
          width={20}
          height={20}
        />
        <span className="animated-text">View All Projects</span>
      </a>
    </section>
  );
};

export default DesignShowcase;