import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProblemSection from '@/components/sections/ProblemSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ModelsSection from '@/components/sections/ModelsSection';
import DemoSection from '@/components/sections/DemoSection';
import TeamSection from '@/components/sections/TeamSection';
import WaveDivider from '@/components/WaveDivider';

export default function Home() {
  const [activeSection, setActiveSection] = useState('problem');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create Intersection Observer for scroll-triggered animations and active section tracking
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class
            entry.target.classList.add('animate-fade-in-up');
            
            // Update active section based on which section is most visible
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f9fc] via-[#e0f7ff] to-[#f0f9fc]">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="pt-20">
        {/* Problem Section */}
        <section
          id="problem"
          data-section
          className="min-h-screen flex items-center justify-center py-20 px-4 opacity-0"
        >
          <ProblemSection />
        </section>

        <WaveDivider />

        {/* How It Works Section */}
        <section
          id="how-it-works"
          data-section
          className="min-h-screen flex items-center justify-center py-20 px-4 opacity-0 bg-white"
        >
          <HowItWorksSection />
        </section>

        <WaveDivider flip />

        {/* Models Section */}
        <section
          id="models"
          data-section
          className="min-h-screen flex items-center justify-center py-20 px-4 opacity-0"
        >
          <ModelsSection />
        </section>

        <WaveDivider />

        {/* Demo Section */}
        <section
          id="demo"
          data-section
          className="min-h-screen flex items-center justify-center py-20 px-4 opacity-0 bg-white"
        >
          <DemoSection />
        </section>

        <WaveDivider flip />

        {/* Team Section */}
        <section
          id="team"
          data-section
          className="min-h-screen flex items-center justify-center py-20 px-4 opacity-0"
        >
          <TeamSection />
        </section>
      </main>
    </div>
  );
}
