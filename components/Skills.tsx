'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiGithub,
  SiGit,
  SiFigma,
  SiPostman,
  SiDocker,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML & CSS', icon: null, color: '#FF5722' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#13AA52' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'REST APIs', icon: null, color: '#009688' },
      { name: 'Supabase', icon: null, color: '#3ECF8E' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Computer Vision', icon: null, color: '#7C3AED' },
      { name: 'Data Analysis', icon: null, color: '#F59E0B' },
      { name: 'NumPy & Pandas', icon: null, color: '#013243' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F1502F' },
      { name: 'GitHub', icon: SiGithub, color: '#000000' },
      { name: 'VS Code', icon: null, color: '#007ACC' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold">
              02 — SKILLS
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-font mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold mb-6 heading-font flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full" />
                  {group.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: groupIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl transition-all hover:shadow-lg"
                    >
                      {skill.icon ? (
                        <skill.icon
                          size={32}
                          style={{ color: skill.color }}
                          className="transition-transform"
                        />
                      ) : (
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
