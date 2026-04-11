'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, MapPin, Camera, SquareCheck as CheckSquare } from 'lucide-react';

const projects = [
  {
    title: 'E commerce Platform⁠',
    description:
      'A comprehensive e-commerce platform for buying products online.',
    longDescription:
      'A full-stack web application that enables customers and sellers to connect, browse, and trade products through an intuitive online marketplace. The platform includes user authentication, product listings, shopping cart and order management, secure transactions, and an admin dashboard, with a focus on scalability, user experience, and efficient e-commerce operations.',
    icon: MapPin,
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    gradient: 'from-blue-500 to-cyan-500',
    demo: '#',
    github: 'https://github.com/Bhagyapiyumali/e-commerce-platform',
    image: '/projects/tourism.jpg',
  },
  {
    title: 'CeylonConnect Tourism Web Platform',
    description:
      'A comprehensive tourism platform showcasing Sri Lankan districts with integrated weather data, interactive maps, and accommodation listings.',
    longDescription:
      'A full-stack tour booking platform for Sri Lanka that connects tourists with local guides. Tourists can discover and book tours, guides can create and manage listings, request verification badges, and interact with customers, while admins manage the entire system through a dedicated dashboard.',
    icon: Camera,
    tech: ['React Vite', 'Tailwind CSS', 'Node.js', 'Express 5', 'MySQL', 'JWT', 'Pusher'],
    gradient: 'from-purple-500 to-pink-500',
    demo: '#',
    github: 'https://github.com/CeylonConnect/ceyclon-connect',
    image: '/projects/malnutrition.jpg',
  },
  {
    title: 'Paddy Buying and Selling Platform',
    description:
      'A platform for buying and selling paddy, connecting farmers with buyers and facilitating transactions.',
    longDescription:
      'A full-stack web application that allows farmers and buyers to connect, chat, and trade agricultural products like paddy and related goods. The platform supports user authentication, real-time chat, gig/​shop listings, blog posts, and an AI-powered agricultural chatbot.',
    icon: CheckSquare,
    tech: ['Next.js', 'Supabase', 'TypeScript', 'OpenAI API', 'Prisma'],
    gradient: 'from-emerald-500 to-teal-500',
    demo: '#',
    github: 'https://github.com/SE4106-Web-Project-Team/Paddy-buying-and-selling-Platform?tab=readme-ov-file#-paddy-buying-and-selling-platform',
    image: '/projects/tasks.jpg',
  },
  {
    title: 'Blood Bank Management System',
    description:
      'A platform for managing blood donations and distributions, connecting donors with recipients and healthcare facilities.',
    longDescription:
      'Full-stack Blood Bank Management System develop to digitize donor registration, blood stock management, and campaign coordination. Features real-time updates, automated donor scheduling, and notifications to improve efficiency and emergency response in hospital operations.',
    icon: CheckSquare,
    tech: ['Next.js', 'Supabase', 'TypeScript', 'OpenAI API', 'Prisma'],
    gradient: 'from-emerald-500 to-teal-500',
    demo: '#',
    github: 'https://github.com/SE4106-Web-Project-Team/Paddy-buying-and-selling-Platform?tab=readme-ov-file#-paddy-buying-and-selling-platform',
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-slate-900 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
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
              href="https://github.com/Bhagyapiyumali"
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
