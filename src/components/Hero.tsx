import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-secondary/10 animate-gradient"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-dm mb-4">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-syne font-bold mb-6"
          >
            <span className="text-white">Ankit</span>{' '}
            <span className="text-gradient">Raut</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-syne font-semibold mb-6 text-gray-300"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-dm"
          >
            Building fast, scalable, and beautiful web experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-primary text-dark font-dm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 glow"
            >
              View My Work
              <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="https://drive.google.com/file/d/1wb0rrTtFfgKs2vt6JfoCYjabzP_TbSmz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary font-dm font-semibold rounded-lg hover:bg-primary hover:text-dark transition-all duration-300 flex items-center gap-2"
            >
              Download Resume
              <FiDownload />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/ARpatel-ARP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-raut-4a6900312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FiLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary"
          >
            <FiArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-dark-lighter/50 backdrop-blur-lg border border-primary/20 rounded-lg p-4 font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400">
            <span className="text-secondary">const</span>{' '}
            <span className="text-primary">developer</span> = {'{'}<br />
            <span className="ml-4">name: <span className="text-yellow-400">'Ankit Raut'</span>,</span><br />
            <span className="ml-4">role: <span className="text-yellow-400">'Full Stack'</span>,</span><br />
            <span className="ml-4">passion: <span className="text-yellow-400">'Building'</span></span><br />
            {'}'};
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
