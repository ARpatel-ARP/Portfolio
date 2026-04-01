import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-syne font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 font-dm text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-syne font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-400 font-dm mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:rautanky407@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-dark-lighter border border-white/10 rounded-lg flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                  <FiMail className="text-primary" size={20} />
                </div>
                <span className="font-dm">rautanky407@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/ARpatel-ARP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-lighter border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300 text-gray-400"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-raut-4a6900312"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-lighter border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300 text-gray-400"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 border border-primary/50 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiSend className="text-dark text-2xl" />
                </div>
                <h3 className="text-2xl font-syne font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-gray-300 font-dm">
                  Your message has been sent successfully. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form
                action="https://formspree.io/f/xaqlbjjr"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-dm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-dark-lighter border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white font-dm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-dm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-dark-lighter border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white font-dm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-dm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-lighter border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white font-dm resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-dark font-dm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 glow"
                >
                  Send Message
                  <FiSend />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
