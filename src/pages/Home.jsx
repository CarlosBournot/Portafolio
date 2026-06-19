const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import StackSection from '../components/portfolio/StackSection';
import AboutSection from '../components/portfolio/AboutSection';
import EducationSection from '../components/portfolio/EducationSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

import Project1 from '../images/Project1.PNG';
import Project2 from '../images/Project2.PNG';  

const HERO_IMAGE = 'https://media.db.com/images/public/6a218e78cff096ac3b689926/3131dd0c5_generated_image.png';
const ABOUT_IMAGE = 'https://media.db.com/images/public/6a218e78cff096ac3b689926/bbf5191a9_generated_85343257.png';

const PROJECTS = [
  {
    id: 'PRJ_001',
    title: 'Interactive Board',
    description: 'Pizarra interactiva con herramientas de dibujo y colaboración en tiempo real.',
    tech: 'HTML // Javascript',
    year: '2024',
    image: Project1,
    github: 'https://github.com/CarlosBournot/Pizarra_Interactiva',
    live: 'https://interactive-board.netlify.app/',
    stackDetails: ['HTML5','JavaScript', 'Netlify'],
  },
  {
    id: 'PRJ_002',
    title: 'App Restaurant',
    description: 'Aplicación para gestión de un restaurante con menú digital y sistema de pedidos.',
    tech: 'react.js // tailwind // typescript // vite',
    year: '2026',
    image: Project2,
    github: 'https://github.com/CarlosBournot/Restaurante-App',
    live: 'https://hcrestaurant-app.netlify.app/',
    stackDetails: ['HTML5', 'CSS3', 'JavaScript ES6', 'Typescript', 'React.js v18', 'Vite', 'Tailwind CSS', 'Netlify'],
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0A1628' }} className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ProjectsSection projects={PROJECTS} />
      <StackSection />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}