'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
                I'm a passionate <strong className="text-slate-900 dark:text-white">Software Engineering student</strong> from Negombo, Sri Lanka, driven by a deep love for technology and innovation.
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
              className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-3xl text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-purple-100">Monaragala, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-purple-100">BSc. Software Engineering</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">Interests</p>
                    <p className="text-purple-100">Web Dev, AI/ML, System Design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">Status</p>
                    <p className="text-purple-100">Available for internships</p>
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
