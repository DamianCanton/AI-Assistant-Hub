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
import { GUIDE_CONTENT } from "../data/guide";

const iconMap = {
  Shield,
  User,
  Database,
  Ban,
  Layers,
  AlertTriangle,
  Terminal,
  CheckCircle2,
  XCircle,
};

const colorMap = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  red: "bg-red-500/10 text-red-600 dark:text-red-400",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

const Icon = ({ name, size = 24, className = "" }) => {
  const LucideIcon = iconMap[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Recommendations = () => {
  const { hero, shieldProtocol, opsManual, promptFormula } = GUIDE_CONTENT;

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
          {/* HERO SECTION */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-100 dark:border-emerald-500/20 mb-6">
              <Icon name={hero.badge.icon} size={12} />
              <span>{hero.badge.text}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              {hero.description}
            </p>
          </div>

          {/* SECTION 1: PROTOCOLO DE BLINDAJE */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-slate-100">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Icon name={shieldProtocol.icon} size={24} />
              </span>
              {shieldProtocol.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shieldProtocol.cards.map((card) => (
                <div
                  key={card.id}
                  className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      colorMap[card.iconColor]
                    }`}
                  >
                    <Icon name={card.icon} size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {card.description}
                  </p>

                  {/* Examples (Sombrero) */}
                  {card.examples && (
                    <div className="space-y-2 text-xs">
                      <div className="flex gap-2 text-red-500/80">
                        <Icon
                          name="XCircle"
                          size={14}
                          className="shrink-0 mt-0.5"
                        />
                        <span>"{card.examples.bad}"</span>
                      </div>
                      <div className="flex gap-2 text-emerald-600 dark:text-emerald-400">
                        <Icon
                          name="CheckCircle2"
                          size={14}
                          className="shrink-0 mt-0.5"
                        />
                        <span>"{card.examples.good}"</span>
                      </div>
                    </div>
                  )}

                  {/* Note (Input/Output) */}
                  {card.note && (
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 text-xs text-slate-600 dark:text-slate-300">
                      <strong>{card.note.label}</strong> {card.note.text}
                      <br />
                      <strong>{card.note.labelGood}</strong>{" "}
                      {card.note.textGood}
                    </div>
                  )}

                  {/* Filter (Antiventa) */}
                  {(card.forbidden || card.use) && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-500/20 text-xs">
                      <span className="font-bold text-red-600 dark:text-red-400">
                        Prohibido:
                      </span>{" "}
                      {card.forbidden.map((f, i) => (
                        <span key={f}>
                          "{f}"{i < card.forbidden.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      <br />
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
                        Usar:
                      </span>{" "}
                      {card.use.map((u, i) => (
                        <span key={u}>
                          "{u}"{i < card.use.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: RECOMENDACIONES TÉCNICAS */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-800 dark:text-slate-100">
              <span className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Icon name={opsManual.icon} size={24} />
              </span>
              {opsManual.title}
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-6">
                {opsManual.sections.map((section) => (
                  <div
                    key={section.id}
                    className={`p-6 rounded-2xl ${
                      section.id === "context"
                        ? "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-500/20"
                        : "bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-500/20"
                    } border flex gap-4 items-start relative overflow-hidden group`}
                  >
                    <div
                      className={`absolute -right-4 -top-4 w-24 h-24 ${
                        section.id === "context"
                          ? "bg-indigo-500/10 group-hover:bg-indigo-500/20"
                          : "bg-orange-500/10 group-hover:bg-orange-500/20"
                      } rounded-full blur-2xl transition-colors`}
                    />

                    <div
                      className={`p-2 rounded-lg ${
                        section.id === "context"
                          ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                          : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                      } shrink-0 relative z-10`}
                    >
                      <Icon name={section.icon} size={20} />
                    </div>
                    <div className="relative z-10 w-full">
                      <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {section.title}
                        <span
                          className={`px-2 py-0.5 rounded-full ${
                            section.id === "context"
                              ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300"
                              : "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300"
                          } text-[10px] font-bold uppercase tracking-wide`}
                        >
                          {section.badge}
                        </span>
                      </h4>
                      {section.description && (
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                          {section.description}
                        </p>
                      )}

                      {/* Info grid for hallucinations */}
                      {section.info && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                          {section.info.map((inf) => (
                            <div key={inf.label}>
                              <h5
                                className={`text-xs font-bold ${
                                  section.id === "context"
                                    ? "text-indigo-700 dark:text-indigo-300"
                                    : "text-orange-700 dark:text-orange-300"
                                } uppercase mb-1`}
                              >
                                {inf.label}
                              </h5>
                              <p className="text-sm text-slate-600 dark:text-slate-300">
                                {inf.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Items list for context */}
                      {section.items && (
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                          {section.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/20 p-2 rounded-lg"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  section.id === "context"
                                    ? "bg-indigo-500"
                                    : "bg-orange-500"
                                } shrink-0`}
                              />
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Big Card: Prompt Structure */}
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                    <Icon
                      name={promptFormula.icon}
                      size={20}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                    {promptFormula.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    {promptFormula.steps.map((step) => (
                      <div
                        key={step.label}
                        className="p-5 rounded-xl bg-slate-50 dark:bg-black/40 border-2 border-slate-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-sm"
                      >
                        <div className="text-indigo-600 dark:text-indigo-400 font-extrabold mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                          {step.label}
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                          "{step.question}"
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-xs">
                          {step.example}
                        </div>
                      </div>
                    ))}
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
