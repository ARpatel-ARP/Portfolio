import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 font-dm text-sm">
            <span className="font-syne font-bold text-white">Ankit Raut</span> © {currentYear}
          </div>

          <div className="flex items-center gap-2 text-gray-400 font-dm text-sm">
            Built with React & <FiHeart className="text-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
