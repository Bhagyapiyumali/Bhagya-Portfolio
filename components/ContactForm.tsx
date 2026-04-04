'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    alert(`Thank you ${form.name}! Your message has been sent successfully.`);
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold">
              05 — CONTACT
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-font mb-6">
                Let's build something amazing together
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                Whether you have a project in mind or just want to connect, I'm always excited to hear from you. Let's turn your ideas into reality!
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'bhagyapiyumali2001@gmail.com',
                    href: 'mailto:bhagyapiyumali2001@gmail.com',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Monaragala, Sri Lanka',
                    href: '#',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+94 71 371 8585',
                    href: 'tel:+94713718585',
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.label}</p>
                      <p className="font-semibold text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl shadow-xl"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl text-base focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl text-base focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl text-base focus:ring-2 focus:ring-emerald-500 outline-none resize-none transition-all"
                      placeholder="Tell me about your idea..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-2xl flex items-center justify-center gap-2 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
