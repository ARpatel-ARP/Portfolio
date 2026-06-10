import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiLock, FiMessageSquare, FiBook } from 'react-icons/fi';
import { MdMovie } from 'react-icons/md';
import { IconType } from 'react-icons';

interface Project {
  name: string;
  description: string;
  tech: string[];
  liveDemo: string;
  github: string;
  gradient: string;
  icon: IconType;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects: Project[] = [
    {
      name: 'LMS — Online Learning Platform',
      description: 'A full-stack Learning Management System with course management, user authentication, and role-based access for students and instructors.',
      tech: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveDemo: 'https://lmsonlinelearning.vercel.app',
      github: 'https://github.com/ARpatel-ARP/LMS---learning-platform',
      gradient: 'from-purple-500/20 to-pink-500/20',
      icon: FiBook,
    },
    {
      name: 'Movie-Hunt: Movies Overviewing Website',
      description: 'Movie Hunt is a movies overviewing website with an interface similar to Netflix',
      tech: ['React', 'Tailwind CSS', 'MongoDB Atlas', 'API Calls', 'Auth'],
      liveDemo: 'https://movie-hunt-89nk.onrender.com',
      github: 'https://github.com/ARpatel-ARP/Movie-hunt',
      gradient: 'from-red-500/20 to-orange-500/20',
      icon: MdMovie,
    },
    {
      name: 'Voxly: ConvoHub',
      description: 'ConvoHub is a chat application where users can register and chat with other registered users in real time',
      tech: ['MERN Stack', 'Socket.io'],
      liveDemo: 'https://convohub-ju3o.onrender.com',
      github: 'https://github.com/ARpatel-ARP/Chat-app',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      icon: FiMessageSquare,
    },
    {
      name: 'Pass-Op',
      description: "A password manager site to manage all your different sites' passwords in one place",
      tech: ['React', 'Tailwind CSS'],
      liveDemo: 'https://pass-ops.vercel.app',
      github: 'https://github.com/ARpatel-ARP/Pass-ops',
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: FiLock,
    },
    
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-syne font-bold mb-4">
            Things I've <span className="text-gradient">Built</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-lighter border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 p-6">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center`}>
                  <project.icon size={72} className="text-white/40" />
                </div>

                <h3 className="text-xl font-syne font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-400 font-dm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-dm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-dark font-dm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    Live Demo
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-primary text-primary font-dm font-semibold rounded-lg hover:bg-primary hover:text-dark transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    GitHub
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300 pointer-events-none glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
