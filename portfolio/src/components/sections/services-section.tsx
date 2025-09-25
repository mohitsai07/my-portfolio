import Image from "next/image";

const servicesData = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/StXzUA8GzzeKyZfJ4ZC9wttqCdQ-17.svg?",
    title: "SaaS Development",
    description: "Designing platforms for startups and businesses."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/NVKuZ36mKNWG9v95kAuX2ot8sFg-19.svg?",
    title: "Web Development",
    description: "Bringing ideas to life with robust and scalable web solutions."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/images/33Bw1I28hjMp1JxQj3tUX3cREM-5.png?",
    title: "AI + Web Integration",
    description: "Merging AI models with web apps for real-world solutions."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/images/ZqlLR5rk58VzhtLRaGQPyD5ooJA-6.png?",
    title: "IoT + ML Projects",
    description: "Prototyping and experimenting with intelligent systems"
  },
];

const sectionIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/xGWUUGtxS3Ktv9f6rPgbdrOA-16.svg?";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1024px] px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src={sectionIconUrl}
            alt="Services Icon"
            width={28}
            height={28}
            className="mb-6"
          />
          <h2 className="text-[32px] leading-tight font-semibold text-primary-text mb-4">
            My Services
          </h2>
          <p className="max-w-md text-secondary-text text-base">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:bg-hover-background transition-colors duration-300 h-full"
            >
              <div className="relative w-8 h-8 mb-6">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-text mb-2">
                {service.title}
              </h3>
              <p className="text-secondary-text text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;