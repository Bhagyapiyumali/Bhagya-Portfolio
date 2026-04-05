'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Award, Linkedin } from 'lucide-react';

interface VolunteeringExperience {
  id: string;
  title: string;
  organization: string;
  description: string;
  image: string;
  start_date: string;
  end_date: string | null;
  skills: string[];
}

// ✅ STATIC DATA (EDIT HERE)
const experiences: VolunteeringExperience[] = [
  {
    id: "1",
    title: "IEEE Student Branch SUSL",
    organization: "Secretary, IEEE Student Branch SUSL",
    description: "Leading and coordinating student branch activities, organizing technical events, and managing operations within the IEEE community.",
    image: "/volunteering/event01.png",
    start_date: "2025-08-16",
    end_date: "2026-08-15",
    skills: ["Leadership", "Event Management", "Team Management", "Event Coordination"]
  },
  {
    id: "2",
    title: "HOPE 2.0 IEEE WIE",
    organization: "Vice Chairperson, HOPE 2.0 IEEE WIE Affinity Group",
    description: "Contributed to organizing and leading the HOPE 2.0 initiative, empowering women in engineering through impactful programs and events.",
    image: "/volunteering/event02.jpg",
    start_date: "2025-06-01",
    end_date: "2026-06-01",
    skills: ["Leadership", "Public Speaking", "Project Management", "Communication", "Coordination"]
  },
  {
    id: "3",
    title: "ICARC 2026",
    organization: "Volunteering,ICARC 2026 International Conference",
    description: "Assisted in organizing the ICARC 2026 conference, supporting event logistics, coordination, and participant engagement.",
    image: "/volunteering/event03.jpg",
    start_date: "2026-02-18",
    end_date: "2026-02-19",
    skills: ["Communication", "Coordination"]
  },
  {
    id: "4",
    title: "ICARC 2025",
    organization: "Volunteering, ICARC 2025 International Conference",
    description: "Actively participated in conference activities, ensuring smooth execution of sessions and assisting attendees.",
    image: "/volunteering/event04.jpg",
    start_date: "2025-02-18",
    end_date: "2025-02-19",
    skills: ["Communication", "Coordination"]
  }

];

export default function Volunteering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section
      id="volunteering"
      className="py-24 bg-slate-50 dark:bg-slate-900"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold">
              04 — VOLUNTEERING
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Community Impact
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl">
            Contributing to society through volunteer work and community engagement.
          </p>

          {/* Experiences */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-5 gap-8"
              >
                {/* Image */}
                <div className="md:col-span-2 h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
                    {exp.organization}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Calendar size={16} />
                    <span>
                      {formatDate(exp.start_date)} -{" "}
                      {exp.end_date ? formatDate(exp.end_date) : "Present"}
                    </span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-16 text-center">
            <a
              href="https://www.linkedin.com/in/bhagya-piyumali-senevirathna/"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition"
            >
              <Linkedin size={20} />
              View More on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}