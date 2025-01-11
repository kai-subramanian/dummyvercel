// const FLNavbar = () => {
//   return (
//     <div className="flex justify-between items-center bg-gray-900 text-gray-50 py-4 px-6 lg:px-12">
//       <div className="text-xl font-bold"><a href="/">FLS</a></div>
//       <div className="flex items-center space-x-4">
//         <div className="hidden lg:flex space-x-6 items-end">
//           <a href="#" className="hover:underline">
//             About FLS
//           </a>
//           <a href="#" className="hover:underline">
//             Contact Us
//           </a>
//           <a href="#" className="hover:underline">
//             Support
//           </a>
//         </div>
//         <button className="hidden lg:block bg-gray-700 px-4 py-2 rounded">
//           My Account
//         </button>
//         <div className="bg-white text-gray-900 px-6 py-2 rounded-full border-2 border-white">
//           Welcome, User
//         </div>
//         <img
//           alt=""
//           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//           className="size-6 rounded-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default FLNavbar;

import React, { useState } from "react";

const FLNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:bg-gray-900 dark:text-gray-50 bg-gray-50 text-gray-900">
      <div className="flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">FLS</a>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex space-x-6 items-end">
            <a href="/reportview" className="hover:underline">
              About FLS
            </a>
            <a href="/control" className="hover:underline">
              Robots
            </a>
            <a href="/control" className="hover:underline">
              Support
            </a>
          </div>
          <a href="/account">
            <button className="dark:bg-gray-700 bg-gray-200 px-4 py-2 rounded" >
              My Account
            </button>
          </a>
          <div className="dark:bg-white dark:text-gray-900 bg-blue-500 text-gray-50 px-6 py-2 rounded-full border-2 border-white">
            Welcome, John Doe
          </div>
          <img
            alt="User Avatar"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-6 rounded-full"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 px-6 pb-4">
          <a href="/reportview" className="hover:underline">
              About FLS
            </a>
            <a href="/control" className="hover:underline">
              Robots
            </a>
            <a href="/control" className="hover:underline">
              Support
            </a>
          <div className="flex flex-row justify-evenly">
            <div className=" bg-white text-gray-900 px-6 py-2 rounded-full border-2 border-white">
              Welcome, John Doe
            </div>

            <img
              alt="User Avatar"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-6 rounded-full"
            />
          </div>

        </div>
      )}
    </nav>
  );
};

export default FLNavbar;