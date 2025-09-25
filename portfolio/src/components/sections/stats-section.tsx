import React from 'react';

const statsData = [
  { number: '10', text: 'Academic & Personal Projects' },
  { number: '3', text: 'Hackathon Participations' },
  { number: '5', text: 'Technical Certifications' },
  { number: '4', text: 'Internships / Trainings' },
];

const StatsSection = () => {
  return (
    <section className="bg-primary-background py-10 border-t border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {statsData.map((stat) => (
            <div key={stat.text} className="flex flex-col items-center text-center">
              <div className="flex items-baseline">
                <span className="text-7xl font-bold text-primary-text">{stat.number}</span>
                <span className="text-5xl font-bold text-primary-text">+</span>
              </div>
              <p className="mt-2 text-sm text-secondary-text max-w-[160px] leading-snug">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;