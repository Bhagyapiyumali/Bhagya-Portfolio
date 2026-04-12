'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code2, Briefcase } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold">
              01 — ABOUT ME
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-font mb-8">
            Building the future, one line at a time
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-slate-600 dark:text-slate-400"
            >
              <p>
                I'm a passionate <strong className="text-slate-900 dark:text-white">Software Engineering student</strong> from Monaragala, Sri Lanka, driven by a deep love for technology and innovation.
              </p>
              <p>
                My journey in software development began with curiosity and has evolved into a commitment to creating impactful solutions. I specialize in <strong className="text-slate-900 dark:text-white">full-stack development</strong> and have a growing interest in <strong className="text-slate-900 dark:text-white">artificial intelligence</strong>.
              </p>
              <p>
                Beyond coding, I'm committed to continuous learning and staying updated with the latest industry trends. My goal is to leverage technology to solve real-world problems and make a meaningful impact in Sri Lanka and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Developer Profile
              </h3>

              <div className="space-y-6 text-sm">

                {/* Location */}
                <div className="flex items-center gap-4">
                  <MapPin className="text-purple-400 w-5 h-5" />
                  <div>
                    <p className="text-slate-400 text-xs">Location</p>
                    <p className="font-semibold text-white">
                      Monaragala, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-center gap-4">
                  <GraduationCap className="text-blue-400 w-5 h-5" />
                  <div>
                    <p className="text-slate-400 text-xs">Education</p>
                    <p className="font-semibold text-white">
                      BSc Software Engineering
                    </p>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="flex items-center gap-4">
                  <Code2 className="text-indigo-400 w-5 h-5" />
                  <div>
                    <p className="text-slate-400 text-xs">Focus Areas</p>
                    <p className="font-semibold text-white">
                      Full-Stack • AI/ML • System Design
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-4">
                  <Briefcase className="text-green-400 w-5 h-5" />
                  <div>
                    <p className="text-slate-400 text-xs">Availability</p>
                    <p className="font-semibold text-green-400">
                      Open for Internships
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
