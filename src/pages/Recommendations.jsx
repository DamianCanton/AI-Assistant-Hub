import React from "react";
import {
  Shield,
  User,
  Database,
  Ban,
  Layers,
  AlertTriangle,
  Terminal,
  ArrowLeft,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* BACKGROUND AMBIENT EFFECTS */}
      <div className="fixed top-0 right-0 w-[800px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="flex items-center justify-between mb-16 animate-fade-in">
          <Link
            to="/"
            className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <div className="p-2 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 group-hover:border-indigo-500/50 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Volver al Dashboard</span>
          </Link>
          <ThemeToggle />
        </header>

        <main className="flex-1 animate-fade-in-up">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-100 dark:border-emerald-500/20 mb-6">
              <Shield size={12} />
              <span>Protocolo de Seguridad IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Guía Maestra de Inteligencia
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Para obtener resultados de nivel "Ingeniería", debes operar la IA
              con precisión quirúrgica. Evita respuestas genéricas con estas
              reglas de oro.
            </p>
          </div>

          {/* SECTION 1: PROTOCOLO DE BLINDAJE */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-slate-100">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Shield size={24} />
              </span>
              Protocolo de "Blindaje"
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <User size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  1. Define el "Sombrero"
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Nunca empieces en frío. La IA necesita saber quién es para no
                  mezclar conceptos.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex gap-2 text-red-500/80">
                    <XCircle size={14} className="shrink-0 mt-0.5" />
                    <span>"Escribe un post de energía."</span>
                  </div>
                  <div className="flex gap-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
                    <span>
                      "Actúa como Directora de INTHER. Público: Gerentes. Tono:
                      Técnico."
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                  <Database size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  2. Ley del Input/Output
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Si le das basura, te devuelve basura (GIGO). Si le das oro, te
                  devuelve joyas.
                </p>
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 text-xs text-slate-600 dark:text-slate-300">
                  <strong>No subas:</strong> PDFs de 200 págs.
                  <br />
                  <strong>Sube:</strong> El párrafo exacto del manual o la
                  especificación técnica clave.
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                  <Ban size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">3. Filtro Antiventa</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Evita el tono de "vendedor desesperado". Somos ingenieros, no
                  un bazar.
                </p>
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-500/20 text-xs">
                  <span className="font-bold text-red-600 dark:text-red-400">
                    Prohibido:
                  </span>{" "}
                  "¡Oferta!", "¡Corre que se acaban!", "Preciazo".
                  <br />
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
                    Usar:
                  </span>{" "}
                  "Inversión", "Retorno", "Vida útil".
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: RECOMENDACIONES TÉCNICAS */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-slate-100">
              <span className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Terminal size={24} />
              </span>
              Manual de Operaciones
            </h2>

            <div className="space-y-4">
              {/* Row 1: Contexto & Alucinaciones (Stacked for better readability) */}
              <div className="grid grid-cols-1 gap-6">
                {/* Gestión de Contexto */}
                <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/20 flex gap-4 items-start relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors" />

                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 relative z-10">
                    <Layers size={20} />
                  </div>
                  <div className="relative z-10 w-full">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      Gestión de Contexto
                      <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-[10px] font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
                        Crítico
                      </span>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      La IA tiene una "ventana de atención" limitada. Si el chat
                      se hace eterno, olvidará las instrucciones iniciales.
                    </p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/20 p-2 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        Un Chat = Un Objetivo
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/20 p-2 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        Nuevo tema = Nuevo Chat
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/20 p-2 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        No mezclar CEMI/INTHER
                      </div>
                    </div>
                  </div>
                </div>

                {/* Límites y Alucinaciones */}
                <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-500/20 flex gap-4 items-start relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors" />

                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0 relative z-10">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="relative z-10 w-full">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      Límites y Alucinaciones
                      <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-500/20 text-[10px] font-bold text-orange-600 dark:text-orange-300 uppercase tracking-wide">
                        Peligro
                      </span>
                    </h4>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase mb-1">
                          ¿Qué es?
                        </h5>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Cuando la IA responde con total seguridad datos{" "}
                          <strong>falsos o inventados</strong> (precios, códigos
                          de error, leyes).
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase mb-1">
                          ¿Por qué pasa?
                        </h5>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          No es una base de datos, es un modelo predictivo. Si
                          no sabe algo, <strong>llena los huecos</strong> con lo
                          que parece plausible.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase mb-1">
                          Solución
                        </h5>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Úsala para redactar, no para consultar datos.{" "}
                          <strong>Verifica siempre</strong> los números con el
                          manual oficial.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Card: Prompt Structure */}
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                    <Terminal
                      size={20}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                    Fórmula de Prompting Maestra
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div className="p-5 rounded-xl bg-slate-50 dark:bg-black/40 border-2 border-slate-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-sm">
                      <div className="text-indigo-600 dark:text-indigo-400 font-extrabold mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Rol
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                        "¿Quién eres?"
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">
                        Ej: Directora de INTHER, Experta en HVAC.
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 dark:bg-black/40 border-2 border-slate-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-sm">
                      <div className="text-indigo-600 dark:text-indigo-400 font-extrabold mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Tarea
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                        "¿Qué hago?"
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">
                        Ej: Redactar correo de reclamo, Analizar PDF.
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 dark:bg-black/40 border-2 border-slate-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-sm">
                      <div className="text-indigo-600 dark:text-indigo-400 font-extrabold mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Contexto
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                        "Datos"
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">
                        Ej: Copiar/Pegar el manual o el correo recibido.
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 dark:bg-black/40 border-2 border-slate-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-sm">
                      <div className="text-indigo-600 dark:text-indigo-400 font-extrabold mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Restricción
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                        "Límites"
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">
                        Ej: Sin emojis, tono serio, máx. 200 palabras.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Recommendations;
