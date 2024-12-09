const FLNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-gray-50 py-4 px-6 lg:px-12">
      <div className="text-xl font-bold"><a href="/">FLS</a></div>
      {/* <div className="hidden lg:flex space-x-6 items-end">
        <a href="#" className="hover:underline">
          About FLS
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
        <a href="#" className="hover:underline">
          Support
        </a>
      </div> */}
      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex space-x-6 items-end">
          <a href="#" className="hover:underline">
            About FLS
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
        </div>
        <button className="hidden lg:block bg-gray-700 px-4 py-2 rounded">
          My Account
        </button>
        <div className="bg-white text-gray-900 px-6 py-2 rounded-full border-2 border-white">
          Welcome, User
        </div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-6 rounded-full"
        />
      </div>
    </div>
  );
};

export default FLNavbar;


// const FLNavbar = () => {
//   return (
//     <div className="flex justify-between items-center bg-gray-800 py-4 px-6 lg:px-12 text-white">
//       {/* Logo */}
//       <div className="text-xl font-bold tracking-wide">FLS</div>

//       {/* Links */}
//       <div className="hidden lg:flex space-x-8 text-sm">
//         <a href="#" className="hover:text-gray-300">
//           About FLS
//         </a>
//         <a href="#" className="hover:text-gray-300">
//           Contact Us
//         </a>
//         <a href="#" className="hover:text-gray-300">
//           Support
//         </a>
//       </div>

//       {/* Account and Welcome Message */}
//       <div className="flex items-center space-x-6">
//         <button className="hidden lg:block text-sm bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
//           My Account
//         </button>
//         <div className="text-sm bg-gray-700 px-4 py-2 rounded-lg">
//           Welcome, Harshitha Dev
//         </div>
//         <button className="text-gray-400 hover:text-white lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FLNavbar;
