import React, { useState, useMemo, useEffect } from "react";
import { ArrowLeft, Search, Filter, History, Trash2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { PROMPTS, CATEGORIES } from "../data/prompts";
import ThemeToggle from "../components/ThemeToggle";
import PromptItem from "../components/PromptItem";
import Layout from "../components/Layout";

const Prompts = () => {
  const [viewMode, setViewMode] = useState("browse"); // 'browse' or 'history'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedPrompt, setExpandedPrompt] = useState(null);
  
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("promptFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("promptHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("promptFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("promptHistory", JSON.stringify(history));
  }, [history]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handlePromptCopy = (prompt, text, inputs) => {
    const newEntry = {
      id: Date.now().toString(), // Unique ID for history item
      promptId: prompt.id,
      title: prompt.title,
      category: prompt.category,
      text: text,
      inputs: inputs,
      timestamp: new Date().toISOString(),
    };
    
    // Add to history (newest first) and limit to 50 items
    setHistory(prev => [newEntry, ...prev].slice(0, 50));
  };

  const clearHistory = () => {
    if (window.confirm("¿Estás seguro de que deseas borrar todo el historial?")) {
      setHistory([]);
    }
  };

  const deleteHistoryItem = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
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

  const headerContent = (
    <>
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
    </>
  );

  return (
    <Layout
      header={headerContent}
      footerText="VeroDashboard · Biblioteca de Prompts v1.2"
    >
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

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("browse")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "browse"
                  ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Explorar
            </button>
            <button
              onClick={() => setViewMode("history")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                viewMode === "history"
                  ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <History size={16} />
              Historial
            </button>
          </div>
        </div>

        {viewMode === "browse" ? (
          <>
            <div className="flex flex-col gap-6 mb-8 max-w-3xl mx-auto">
              <div className="relative w-full">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Buscar prompts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-sm"
                />
              </div>
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
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

            <div className="mb-4 text-center text-sm text-slate-500 dark:text-slate-400">
              {filteredPrompts.length} prompt
              {filteredPrompts.length !== 1 ? "s" : ""} encontrado
              {filteredPrompts.length !== 1 ? "s" : ""}
            </div>

            <div className="grid gap-4">
              {filteredPrompts.map((prompt) => (
                <PromptItem
                  key={prompt.id}
                  prompt={prompt}
                  isExpanded={expandedPrompt === prompt.id}
                  onToggle={() =>
                    setExpandedPrompt(
                      expandedPrompt === prompt.id ? null : prompt.id
                    )
                  }
                  isFavorite={favorites.includes(prompt.id)}
                  onToggleFavorite={toggleFavorite}
                  onCopy={handlePromptCopy}
                />
              ))}

              {filteredPrompts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400">
                    No se encontraron prompts que coincidan con tu búsqueda.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* HISTORY VIEW */
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock size={20} className="text-indigo-500" />
                Historial de Generación
              </h2>
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="text-sm text-red-500 hover:text-red-600 dark:hover:text-red-400 font-medium flex items-center gap-1"
                >
                  <Trash2 size={14} />
                  Borrar todo
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <div className="text-center py-12 bg-white/30 dark:bg-white/5 rounded-2xl border border-dashed border-slate-300 dark:border-white/10">
                <History size={48} className="mx-auto text-slate-300 dark:text-slate-600 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  Tu historial está vacío
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Genera y copia prompts para verlos aquí.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-xl p-5 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            {CATEGORIES.find(c => c.id === item.category)?.label || item.category}
                          </span>
                          <span className="text-xs text-slate-400">
                            {new Date(item.timestamp).toLocaleDateString()} · {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => deleteHistoryItem(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        title="Eliminar del historial"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-black/20 rounded-lg p-3 text-sm text-slate-600 dark:text-slate-300 font-mono whitespace-pre-wrap mb-3 max-h-32 overflow-y-auto custom-scrollbar">
                      {item.text}
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(item.text);
                          // Optional: Show toast
                        }}
                        className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Copiar de nuevo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Prompts;
