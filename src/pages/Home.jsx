import React from "react";
import {
  BrainCircuit,
  Megaphone,
  TrendingUp,
  Coins,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import GemCard from "../components/GemCard";
import { GEMS } from "../data/gems";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* BACKGROUND AMBIENT EFFECTS (Subtle & Futuristic) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* HEADER: Minimalist & Floating */}
        <header className="flex items-center justify-between mb-20 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                VeroDashboard
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">
                Hub Operativo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                VZ
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Veronica Zuain
              </span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* MAIN CONTENT: Centered Hub */}
        <main className="flex-1 flex flex-col justify-center pb-20">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-100 dark:border-indigo-500/20">
              <Sparkles size={12} />
              <span>Bienvenida de nuevo</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tu Centro de Comando
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Accede a tus agentes de inteligencia artificial y herramientas de
              automatización desde un único lugar.
            </p>

            <div className="pt-4">
              <Link
                to="/recommendations"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <BookOpen size={16} />
                <span>Ver Guía Maestra de IA</span>
              </Link>
            </div>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GEMS.map((gem) => (
              <GemCard key={gem.id} gem={gem} />
            ))}
          </div>
        </main>

        {/* FOOTER: Minimal */}
        <footer className="text-center text-xs text-slate-400 dark:text-slate-600 py-6">
          <p>Sistema Operativo v2.0 · Designed for Veronica Zuain</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
