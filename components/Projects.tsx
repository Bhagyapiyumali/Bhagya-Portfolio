'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, MapPin, Camera, SquareCheck as CheckSquare } from 'lucide-react';

const projects = [
  {
    title: 'Sri Lanka Tourism Explorer',
    description:
      'A comprehensive tourism platform showcasing Sri Lankan districts with integrated weather data, interactive maps, and accommodation listings.',
    longDescription:
      'Full-featured web application built with Next.js, featuring real-time weather integration, Leaflet maps, and a responsive design optimized for mobile devices.',
    icon: MapPin,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Leaflet.js', 'Weather API'],
    gradient: 'from-blue-500 to-cyan-500',
    demo: '#',
    github: '#',
    image: '/projects/tourism.jpg',
  },
  {
    title: 'Malnutrition Detection System',
    description:
      'AI-powered computer vision application that detects signs of malnutrition in children using advanced image recognition.',
    longDescription:
      'Machine learning solution using TensorFlow and React, trained on medical datasets to provide early detection and recommendations for healthcare professionals.',
    icon: Camera,
    tech: ['Python', 'TensorFlow', 'React', 'Flask', 'Computer Vision'],
    gradient: 'from-purple-500 to-pink-500',
    demo: '#',
    github: '#',
    image: '/projects/malnutrition.jpg',
  },
  {
    title: 'Smart Task Manager',
    description:
      'Collaborative task management application with AI-powered priority suggestions and team collaboration features.',
    longDescription:
      'Modern full-stack app built with Next.js and Supabase, featuring real-time updates, AI task prioritization, and seamless team collaboration tools.',
    icon: CheckSquare,
    tech: ['Next.js', 'Supabase', 'TypeScript', 'OpenAI API', 'Prisma'],
    gradient: 'from-emerald-500 to-teal-500',
    demo: '#',
    github: '#',
    image: '/projects/tasks.jpg',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold">
              03 — PROJECTS
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-font mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl">
            A selection of projects that showcase my skills in full-stack development, AI integration, and modern web technologies.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-white"
                    >
                      <project.icon size={80} strokeWidth={1.5} />
                    </motion.div>

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 20,
                      }}
                      className="absolute bottom-4 left-4 right-4 flex gap-2"
                    >
                      <a
                        href={project.demo}
                        className="flex-1 px-4 py-2 bg-white text-slate-900 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 px-4 py-2 bg-slate-900 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Github size={16} /> Code
                      </a>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 heading-font group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
