import { Menu, X } from "lucide-react";
import { useState } from "react";

// Added 'scrolled' prop to match your App.jsx layout
export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    // Fixed "top-" to "top-0". Tied background changes safely to the "scrolled" boolean.
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 border-b border-slate-900 shadow-lg"
          : "bg-slate-950/20"
      } backdrop-blur-sm`}
    >
      {/* Fixed typo "lg;px:8" to "lg:px-8" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              {/* REMOVED THE STRAY 's' ATTRIBUTE THAT TRIGGERED THE UNCAUGHT REACT WARNING */}
              <img
                src="/logo.png"
                alt="FlowCode"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Flow</span>
              <span className="text-blue-400">Code</span>
            </span>
          </div>

          {/* Nav links - Fixed typo "itemscenter" to "items-center" */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors"
            >
              Testimonials
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        // Fixed typo "border-t border-slte-800" to "border-slate-800"
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
