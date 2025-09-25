import Image from "next/image";

const LOGOS = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/7wAZJGWCBioEg37bROiHpyDQPuA-6.svg?", alt: "React" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/huw175xWveIcdZeU1dBh8Wys-7.svg?", alt: "Node.js" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/UdbiS3tDM333AXZG0ineh95v4-8.svg?", alt: "MongoDB" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/QeYCb3E8jUydHcUe79ZOBHP0Qb8-9.svg?", alt: "Express" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/3Z3CcdQ8VZwPePQoipsJe76tkE-10.svg?", alt: "JavaScript" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/Q7jndL1WNZEBxI1f06dOtC1EPEU-11.svg?", alt: "TypeScript" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b6220e68-22b4-46e5-8fd1-718c0d2b080e-mohitsai-framer-website/assets/svgs/Mf11Uag4ADiuh7RQMzm6403Tdc-12.svg?", alt: "Framer" },
];

const TechCarousel = () => {
  // Duplicating the logos is necessary for a seamless infinite scroll effect with CSS.
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section>
      <div className="w-full overflow-hidden">
        {/* 
          The 'animate-infinite-scroll' class is expected to be defined in tailwind.config.js or a global CSS file.
          Example animation definition:
          animation: { 'infinite-scroll': 'infinite-scroll 56s linear infinite' }
          keyframes: { 'infinite-scroll': { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } } }
        */}
        <ul className="flex items-center w-max animate-infinite-scroll">
          {duplicatedLogos.map((logo, index) => (
            <li key={index} className="flex-shrink-0 px-5">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={113}
                height={45}
                className="max-w-none object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechCarousel;