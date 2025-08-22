/**
 * Nothelm Consultancy - Main Application Component
 * Developer: Samuel Arthur
 * Description: Main React application with routing, lazy loading, and performance optimizations
 */

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

import NavBar from "./components/home/navigation/NavBar";
import SubpageNavBar from "./components/home/navigation/SubpageNavBar";
import Footer from "./components/home/footer/Footer";
import PerformanceOptimizer from "./components/common/PerformanceOptimizer";

// Direct imports for instant loading
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import InsightsReports from "./pages/InsightsReports";
import Highlights from "./pages/Highlights";
import Reports from "./pages/Reports";
import Compliance from "./pages/Compliance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    // Optimize scroll listener with throttling
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Determine which navigation to show based on current route
  const isHomePage = location.pathname === "/";
  const NavigationComponent = isHomePage ? NavBar : SubpageNavBar;

  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceOptimizer />
      <NavigationComponent />
      <main className="flex-1 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/insights-reports" element={<InsightsReports />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />

      {/* Enhanced Mobile-Friendly Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 bg-[#202962] hover:bg-[#1a2252] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#202962] focus:ring-offset-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}
