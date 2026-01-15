import React from "react";
import {
  Sparkles,
  BookOpen,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import GemCard from "../components/GemCard";
import Layout from "../components/Layout";
import { GEMS } from "../data/gems";

function Home() {
  const headerContent = (
    <>
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
    </>
  );

  return (
    <Layout
      header={headerContent}
      footerText="Sistema Operativo v2.0 · Designed for Veronica Zuain"
    >
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

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/recommendations"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <BookOpen size={16} />
              <span>Ver Guía Maestra de IA</span>
            </Link>
            <Link
              to="/prompts"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FileText size={16} />
              <span>Biblioteca de Prompts</span>
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
    </Layout>
  );
}

export default Home;
