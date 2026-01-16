import React from "react";
import ThemeToggle from "./ThemeToggle";

const Layout = ({
  children,
  header,
  footerText = "VeroDashboard · Sistema Operativo v2.0",
  blobColors = {
    top: "bg-indigo-500/10 dark:bg-indigo-500/5",
    bottom: "bg-purple-500/10 dark:bg-purple-500/5",
  },
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      {/* BACKGROUND AMBIENT EFFECTS */}
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] ${blobColors.top} rounded-full blur-[120px] pointer-events-none`}
        aria-hidden="true"
      />
      <div
        className={`fixed bottom-0 right-0 w-[800px] h-[600px] ${blobColors.bottom} rounded-full blur-[100px] pointer-events-none`}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* HEADER */}
        {header && (
          <header className="flex items-center justify-between mb-12 animate-fade-in">
            {header}
          </header>
        )}

        {/* MAIN CONTENT */}
        <main id="main-content">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="text-center text-xs text-slate-400 dark:text-slate-600 py-6 mt-auto">
          <p>{footerText}</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
