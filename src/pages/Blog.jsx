import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

export default function Blog() {
  // Ensure page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#2A394A]">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pt-32 pb-24">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#509AAF] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#436A75] rounded-full blur-[120px] opacity-30 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Pill Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#509AAF] animate-pulse" />
            <span className="text-[#D6DBC7] text-sm font-medium tracking-wide uppercase">Coming Soon</span>
          </div>

          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-normal text-white leading-[1.1] tracking-tight mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6DBC7] to-[#509AAF]">Blog</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="/contact"
              className="inline-flex h-[48px] px-8 justify-center items-center gap-2 rounded-full bg-[#509AAF] text-white text-[15px] font-medium transition-all hover:bg-[#436A75] hover:shadow-lg hover:shadow-[#509AAF]/20"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="inline-flex h-[48px] px-8 justify-center items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-transparent text-white text-[15px] font-medium transition-all hover:bg-[rgba(255,255,255,0.05)]"
            >
              Back to Home
            </a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
