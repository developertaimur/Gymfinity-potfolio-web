
// import { useState } from 'react';
// import logo from '../Assets/logo.png';
// import { Link } from "react-router-dom"; 

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const navLinks = [
//         { name: 'Features', href: '#features' },
//         { name: 'Why Gymfinity', href: '#why-gymfinity' },
//         { name: 'Pricing', href: '#pricing' },
//         { name: 'Our Team', href: '#OurTeam' },
//         { name: 'Contact Us', href: '#contact' },
//     ];

//     return (
//         <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16 lg:h-20">
                    
//                     {/* ✅ Logo Section */}
//                     <a href="#" className="flex items-center gap-1">
//                         <img
//                             src={logo}
//                             alt="Gymfinity Logo"
//                             className="h-14 w-auto object-contain"
//                         />
//                         <span className="text-3xl font-bold text-gymfinity-400 tracking-tight">
//                             GymFinity
//                         </span>
//                     </a>

//                     {/* Desktop Nav Links */}
//                     <div className="hidden md:flex items-center gap-8">
//                         {navLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.href}
//                                 className="text-sm font-medium text-gymfinity-900 hover:text-gymfinity-400 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gymfinity-400 after:transition-all after:duration-300 hover:after:w-full"
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>

//                     {/* Login Button */}
//                     <div className="hidden md:flex items-center">
//                         <a
//                             href="https://app.thegymfinity.com/login"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="px-6 py-2.5 bg-gymfinity-400 text-white text-sm font-semibold rounded-full hover:bg-gymfinity-600 transition-all duration-300 shadow-md shadow-gymfinity-400/25 hover:shadow-lg hover:shadow-gymfinity-400/30 hover:-translate-y-0.5"
//                         >
//                             Log In
//                         </a>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         aria-label="Toggle menu"
//                     >
//                         <svg className="w-6 h-6 text-gymfinity-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             {isMenuOpen ? (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             ) : (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                             )}
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'}`}>
//                     <div className="flex flex-col gap-1 pt-2">
//                         {navLinks.map((link) =>
//   link.path ? (
//     <Link
//       key={link.name}
//       to={link.path}
//       className="text-sm font-medium text-gymfinity-900 hover:text-gymfinity-400 transition-colors"
//     >
//       {link.name}
//     </Link>
//   ) : (
//     <a
//       key={link.name}
//       href={link.href}
//       className="text-sm font-medium text-gymfinity-900 hover:text-gymfinity-400 transition-colors"
//     >
//       {link.name}
//     </a>
//   )
// )}

//                         <a
//                             href="https://app.thegymfinity.com/login"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="mx-4 mt-2 px-6 py-2.5 bg-gymfinity-400 text-white text-sm font-semibold rounded-full text-center hover:bg-gymfinity-600 transition-colors"
//                         >
//                             Log In
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


// import { useState } from "react";
// import logo from "../Assets/logo.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Features", href: "#features" },
//     { name: "Why Gymfinity", href: "#why-gymfinity" },
//     { name: "Pricing", href: "#pricing" },
//     { name: "Contact Us", href: "#contact" },
//     { name: "Our Team", href: "#OurTeam" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-20 lg:h-24">

//           {/* 🔥 Logo Section */}
//           <a href="#" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Gymfinity Logo"
//               className="h-14 lg:h-16 w-auto object-contain"
//             />
//             <span className="text-2xl lg:text-3xl font-extrabold text-gymfinity-400 tracking-tight">
//               Gymfinity
//             </span>
//           </a>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-10">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-base lg:text-lg font-semibold text-gymfinity-900 hover:text-gymfinity-400 transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gymfinity-400 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Login Button */}
//           <div className="hidden md:flex">
//             <a
//               href="https://app.thegymfinity.com/login"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-7 py-3 bg-gymfinity-400 text-white text-sm font-semibold rounded-full hover:bg-gymfinity-600 transition-all duration-300 shadow-md shadow-gymfinity-400/30 hover:shadow-lg hover:shadow-gymfinity-400/40 hover:-translate-y-1"
//             >
//               Log In
//             </a>
//           </div>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg
//               className="w-7 h-7 text-gymfinity-900"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden transition-all duration-300 overflow-hidden ${
//             isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
//           }`}
//         >
//           <div className="flex flex-col gap-4 pt-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-base font-semibold text-gymfinity-900 hover:text-gymfinity-400 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}

//             <a
//               href="https://app.thegymfinity.com/login"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-2 px-6 py-3 bg-gymfinity-400 text-white text-sm font-semibold rounded-full text-center hover:bg-gymfinity-600 transition-colors"
//             >
//               Log In
//             </a>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Why Gymfinity", href: "#why-gymfinity" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "#contact" },
    { name: "Our Team", href: "#OurTeam" },
  ];

  // 🔥 Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-22">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Gymfinity Logo"
              className="h-12 lg:h-14 w-auto object-contain transition-all duration-300"
            />
            <span className="text-xl lg:text-2xl font-bold text-gymfinity-400 tracking-tight transition-all duration-300">
              Gymfinity
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base font-medium text-gymfinity-900 hover:text-gymfinity-400 transition-all duration-300 relative group"
              >
                {link.name}

                {/* Underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gymfinity-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex">
            <a
              href="https://app.thegymfinity.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gymfinity-400 text-white text-sm font-semibold rounded-full hover:bg-gymfinity-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Log In
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gymfinity-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gymfinity-900 hover:text-gymfinity-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://app.thegymfinity.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2.5 bg-gymfinity-400 text-white text-sm font-semibold rounded-full text-center hover:bg-gymfinity-600 transition-colors"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
