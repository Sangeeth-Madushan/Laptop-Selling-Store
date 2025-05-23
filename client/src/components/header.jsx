import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-100 w-full h-[80px] flex items-center shadow-xl fixed ">
      {/* Logo */}

      <Link to="/">
        <img
          src="/Logo.png"
          alt="Logo"
          className="h-[80px] w-[100px] object-cover m-2"
        />
      </Link>

      {/* Center section - fills remaining space */}
      <div className="flex-1 h-[80px] flex justify-center items-center ">
        <Link to="/" className="mx-20 text-[18px] font-semibold">
          Home
        </Link>
        <Link to="/products" className="mx-20 text-[18px] font-semibold">
          Product
        </Link>
        <Link to="/about" className="mx-20 text-[18px] font-semibold">
          About
        </Link>
        <Link to="/help" className="mx-20 text-[18px] font-semibold">
          Help
        </Link>
      </div>

      {/* Right section - fixed width */}
      <div className="h-[80px] w-[100px]  flex justify-center items-center">
        <Link to="/login" className="text-xl font-bold">
          Login
        </Link>
      </div>
    </div>
  );
}


// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FiUser } from "react-icons/fi";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full shadow-md bg-white sticky top-0 z-50 transition-all duration-300 ${
//         scrolled ? "h-19 bg-white/95 backdrop-blur-sm shadow-lg" : "h-30"
//       }`}
//       style={{
//         transform: scrolled ? "translateY(-8px)" : "translateY(0)",
//         boxShadow: scrolled
//           ? "0 2px 12px 0 rgba(0,0,0,0.08)"
//           : "0 4px 24px 0 rgba(0,0,0,0.04)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex items-center h-full px-4 transition-all duration-300">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src="/Logo.png"
//             alt="Logo"
//             className={`object-contain transition-all duration-300 ${
//               scrolled ? "h-20" : "h-24"
//             }`}
//           />
//         </Link>

//         {/* Navigation Links */}
//         <nav className="flex-1 flex justify-center items-center space-x-8">
//           <Link
//             to="/"
//             className={`text-base font-semibold hover:text-orange-600 transition ${
//               location.pathname === "/" ? "text-orange-600" : "text-gray-700"
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/products"
//             className={`text-base font-semibold hover:text-orange-600 transition ${
//               location.pathname.startsWith("/products")
//                 ? "text-orange-600"
//                 : "text-gray-700"
//             }`}
//           >
//             Products
//           </Link>
//           <Link
//             to="/about"
//             className={`text-base font-semibold hover:text-orange-600 transition ${
//               location.pathname === "/about" ? "text-orange-600" : "text-gray-700"
//             }`}
//           >
//             About
//           </Link>
//           <Link
//             to="/help"
//             className={`text-base font-semibold hover:text-orange-600 transition ${
//               location.pathname === "/help" ? "text-orange-600" : "text-gray-700"
//             }`}
//           >
//             Help
//           </Link>
//         </nav>

//         {/* Auth Buttons */}
//         <div className="flex items-center space-x-4 ml-4">
//           <Link
//             to="/login"
//             className="flex items-center px-4 py-2 border border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition"
//           >
//             <FiUser className="mr-2" />
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
//           >
//             <FiUser className="mr-2" />
//             Signup
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
