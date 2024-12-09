import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              {/* Logo Icon */}
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <span className="text-lg font-semibold">AIR</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center space-x-6 mt-4 md:mt-0 text-gray-400">
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="/locations" className="hover:text-white">About us</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Help Center</a>
            <a href="#" className="hover:text-white">Contact us</a>
            <a href="#" className="hover:text-white">FAQs</a>
            <a href="#" className="hover:text-white">Careers</a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <div className="flex items-center space-x-3">
            <select
              className="bg-gray-800 text-gray-400 text-sm px-3 py-2 rounded-md cursor-pointer outline-none"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <div className="text-gray-500 text-sm mt-4 md:mt-0">
            &copy; 2024 Brand, Inc. • <a href="#" className="hover:text-white">Privacy</a> • <a href="#" className="hover:text-white">Terms</a> • <a href="#" className="hover:text-white">Sitemap</a>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              {/* Twitter Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M24 4.56c-.89.39-1.85.66-2.86.78a4.94 4.94 0 002.15-2.72 9.91 9.91 0 01-3.13 1.2A4.92 4.92 0 0016.62 3a4.92 4.92 0 00-4.92 4.92c0 .39.04.76.12 1.12A13.95 13.95 0 011.64 3.16 4.92 4.92 0 003.2 9.86a4.93 4.93 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.22.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 19.54a13.93 13.93 0 007.55 2.21c9.06 0 14.01-7.51 14.01-14.01 0-.21 0-.42-.02-.63a10 10 0 002.46-2.55z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24H12V14.69H9.63v-3.25H12V8.13c0-2.39 1.45-3.7 3.57-3.7 1.02 0 1.9.08 2.16.11v2.5h-1.48c-1.17 0-1.4.56-1.4 1.37v1.8h2.8l-.36 3.25h-2.43V24h4.77c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.88 3.85 6 2.49 6S0 4.88 0 3.5 1.13 1 2.49 1 4.98 2.12 4.98 3.5zM.13 24h4.73V8.68H.13V24zM8.09 8.68v15.32h4.73V15c0-2.15.88-4.07 3.04-4.07 2.16 0 2.16 2.39 2.16 4.2V24h4.73v-9.68c0-5.8-2.92-8.5-6.82-8.5-2.15 0-4.11.98-5.32 2.52v-2.12H8.09z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {/* YouTube Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M23.49 6.65a3.06 3.06 0 00-2.16-2.17C19.37 4 12 4 12 4s-7.37 0-9.33.48A3.06 3.06 0 00.51 6.65C0 8.7 0 12 0 12s0 3.3.51 5.35a3.06 3.06 0 002.16 2.17C4.63 20 12 20 12 20s7.37 0 9.33-.48a3.06 3.06 0 002.16-2.17c.51-2.05.51-5.35.51-5.35s0-3.3-.51-5.35zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;