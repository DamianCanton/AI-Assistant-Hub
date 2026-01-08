import React, { useState, useMemo, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Filter,
  Star,
  StarOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PROMPTS, CATEGORIES } from "../data/prompts";
import ThemeToggle from "../components/ThemeToggle";

const Prompts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedPrompt, setExpandedPrompt] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("promptFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("promptFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter((prompt) => {
      const matchesSearch =
        searchTerm === "" ||
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.template.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.blanks.some((b) =>
          b.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" ||
        selectedCategory === "favoritos" ||
        prompt.category === selectedCategory;

      const matchesFavorites =
        selectedCategory !== "favoritos" || favorites.includes(prompt.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [searchTerm, selectedCategory, favorites]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyFullPrompt = (prompt) => {
    const filledTemplate = prompt.template;
    handleCopy(filledTemplate, prompt.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        <header className="flex items-center justify-between mb-12 animate-fade-in">
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Biblioteca de Prompts
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Prompts de alto valor para optimizar tu flujo de trabajo con IA.
              Busca, filtra y personaliza.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Buscar prompts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter size={18} className="text-slate-400 shrink-0" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-indigo-600 text-white"
                      : "bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            {filteredPrompts.length} prompt
            {filteredPrompts.length !== 1 ? "s" : ""} encontrado
            {filteredPrompts.length !== 1 ? "s" : ""}
          </div>

          <div className="grid gap-4">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <button
                  onClick={() =>
                    setExpandedPrompt(
                      expandedPrompt === prompt.id ? null : prompt.id
                    )
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                        {
                          operacional:
                            "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                          marketing:
                            "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                          financiero:
                            "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                          investigacion:
                            "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
                          presentaciones:
                            "bg-pink-500/10 text-pink-600 dark:text-pink-400",
                          favoritos:
                            "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                          general:
                            "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                        }[prompt.category]
                      }`}
                    >
                      {prompt.category === "favoritos" ? (
                        <Star size={18} />
                      ) : (
                        prompt.category[0].toUpperCase()
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {prompt.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {prompt.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(prompt.id);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        favorites.includes(prompt.id)
                          ? "text-amber-500 hover:bg-amber-500/10"
                          : "text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-white/5"
                      }`}
                      aria-label={
                        favorites.includes(prompt.id)
                          ? "Quitar de favoritos"
                          : "Agregar a favoritos"
                      }
                    >
                      {favorites.includes(prompt.id) ? (
                        <Star size={20} fill="currentColor" />
                      ) : (
                        <StarOff size={20} />
                      )}
                    </button>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400">
                      {CATEGORIES.find((c) => c.id === prompt.category)?.label}
                    </span>
                    {expandedPrompt === prompt.id ? (
                      <ChevronUp size={20} className="text-slate-400" />
                    ) : (
                      <ChevronDown size={20} className="text-slate-400" />
                    )}
                  </div>
                </button>

                {expandedPrompt === prompt.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-200/50 dark:border-white/10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
                          Variables a completar
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {prompt.blanks.map((blank) => (
                            <span
                              key={blank}
                              className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-xs text-slate-600 dark:text-slate-300 font-mono"
                            >
                              [{blank}]{" "}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                            Template completo
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyFullPrompt(prompt);
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors"
                          >
                            {copiedId === prompt.id ? (
                              <>
                                <Check size={14} />
                                Copiado
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                Copiar
                              </>
                            )}
                          </button>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 text-sm text-slate-700 dark:text-slate-300 font-mono whitespace-pre-wrap max-h-80 overflow-y-auto">
                          {prompt.template}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filteredPrompts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 dark:text-slate-400">
                  No se encontraron prompts que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </div>
        </main>

        <footer className="text-center text-xs text-slate-400 dark:text-slate-600 py-6 mt-12">
          <p>VeroDashboard · Biblioteca de Prompts v1.0</p>
        </footer>
      </div>
    </div>
  );
};

export default Prompts;
