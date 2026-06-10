import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiTailwindcss,
} from 'react-icons/si';
import { FiServer } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#888888' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'REST APIs', icon: FiServer, color: '#00f5ff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  ];

  const stats: { label: string; value: number; suffix: string }[] = [
    { label: 'Fresher', value: 0, suffix: '' },
    { label: 'Projects Built', value: 4, suffix: '+' },
    { label: 'Cups of Coffee', value: 500, suffix: '+' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-syne font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-dm">
              I'm a passionate Full Stack Developer with a strong focus on building modern web applications
              that deliver exceptional user experiences. With expertise in both frontend and backend technologies,
              I create scalable solutions that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-dm">
              Currently pursuing my B.Tech in Computer Science Engineering, I combine academic knowledge with
              hands-on experience to stay at the forefront of web development trends. I'm constantly learning
              and experimenting with new technologies to enhance my skills and deliver better solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.2}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-syne font-bold text-center mb-8">
            Skills & <span className="text-gradient">Technologies</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-dark-lighter border border-white/10 rounded-lg p-4 flex flex-col items-center gap-3 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `${skill.color}20` }}
                />
                <skill.icon className="text-3xl relative z-10" style={{ color: skill.color }} />
                <span className="text-sm font-dm text-gray-300 relative z-10">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const StatCounter = ({
  value,
  suffix,
  label,
  delay,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
      className="bg-dark border border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-3xl sm:text-4xl font-syne font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 font-dm">{label}</div>
    </motion.div>
  );
};

export default About;
