import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import ExcellenceStudyImg from '../assets/excellence-study.png';
import ChatifyImg from '../assets/chatify.png';
import DSPImg from '../assets/dsp.png';

export default function HomePage() {
  return (
      <div>
        <HeroSection />
        <SkillsSection />
        <section id="projects" className="py-16 bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-4">
            <center><h2 className="text-4xl font-bold mb-8">Projects</h2></center>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <ProjectCard
                title="Excellence Study"
                description="An all-in-one online learning platform"
                thumbnail={ExcellenceStudyImg}
                link="https://github.com/visheshraghuvanshi/excellence-study"
              />
              <ProjectCard
                title="Chatify"
                description="A real-time chat application"
                thumbnail={ChatifyImg}
                link="https://github.com/visheshraghuvanshi/chatify"
              />
              <ProjectCard
                title="Doubt Solving Portal"
                description="A web application for student-faculty interaction"
                thumbnail={DSPImg}
                link="https://github.com/visheshraghuvanshi/dsp"
              />
            </div>
          </div>
        </section>
        <ContactSection />
      </div>
  );
}