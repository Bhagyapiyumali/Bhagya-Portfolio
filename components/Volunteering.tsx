'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface VolunteeringExperience {
  id: string;
  title: string;
  organization: string;
  description: string;
  image_url: string | null;
  start_date: string;
  end_date: string | null;
  skills: string[];
  display_order: number;
}

export default function Volunteering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [experiences, setExperiences] = useState<VolunteeringExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteeringData = async () => {
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
          console.error('Supabase credentials not found');
          setLoading(false);
          return;
        }

        const supabase = createClient(supabaseUrl, supabaseKey);
        const { data, error } = await supabase
          .from('volunteering_experiences')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching volunteering data:', error);
          setExperiences([]);
        } else {
          setExperiences(data || []);
        }
      } catch (error) {
        console.error('Failed to fetch volunteering experiences:', error);
        setExperiences([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteeringData();
  }, []);

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
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold">
              04 — VOLUNTEERING
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-font mb-4">
            Community Impact
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-3xl">
            Contributing to society through volunteer work and community engagement.
          </p>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-pulse text-slate-500">Loading experiences...</div>
            </div>
          ) : experiences.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400">
                No volunteering experiences found. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid md:grid-cols-5 gap-8 items-start"
                >
                  {/* Image Section */}
                  <motion.div
                    className="md:col-span-2 relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    {exp.image_url ? (
                      <>
                        <img
                          src={exp.image_url}
                          alt={exp.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <Award size={48} className="text-white opacity-50" />
                      </div>
                    )}
                  </motion.div>

                  {/* Content Section */}
                  <div className="md:col-span-3 flex flex-col justify-start">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold heading-font mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-4">
                        {exp.organization}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>
                            {formatDate(exp.start_date)}
                            {exp.end_date ? ` - ${formatDate(exp.end_date)}` : ' - Present'}
                          </span>
                        </div>
                      </div>

                      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                        {exp.description}
                      </p>

                      {exp.skills && exp.skills.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                            Skills & Impact
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                  delay: index * 0.1 + skillIndex * 0.05,
                                }}
                                className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
