import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiBriefcase, FiBook, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      year: '2023 – 2027',
      title: 'B.Tech in Computer Science Engineering',
      place: 'RKGITM, Ghaziabad',
      description: 'Pursuing Bachelor\'s in Computer Science Engineering with a focus on full stack web development',
      icon: FiBook,
      color: 'from-blue-500 to-cyan-500',
      link: null,
    },
    {
      year: '2024',
      title: 'AI-ML Intern',
      place: 'IBM',
      description: 'Worked on machine learning models and AI-based solutions during internship training at IBM',
      icon: FiBriefcase,
      color: 'from-primary to-secondary',
      link: null,
    },
    {
      year: '2024',
      title: 'AI-ML Certificate',
      place: 'Google',
      description: 'Completed a certified course in Artificial Intelligence and Machine Learning issued by Google',
      icon: FiAward,
      color: 'from-green-500 to-emerald-500',
      link: 'https://drive.google.com/file/d/1J10NqWET2t9n4P3WG98M0tpdQA93jf9_/view',
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-syne font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-primary to-secondary"
            ></motion.div>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-dark-lighter border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
                    <div className={`inline-block px-4 py-1 bg-gradient-to-r ${item.color} rounded-full text-white text-sm font-dm font-semibold mb-4`}>
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-syne font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-primary font-dm font-semibold mb-3">
                      {item.place}
                    </p>
                    <p className="text-gray-400 font-dm mb-3">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-dm text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        View Certificate
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-4 border-dark`}
                  >
                    <item.icon className="text-white text-2xl" />
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
