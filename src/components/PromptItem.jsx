import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Star,
  StarOff,
} from "lucide-react";
import { CATEGORIES } from "../data/prompts";

const PromptItem = ({
  prompt,
  isExpanded,
  onToggle,
  isFavorite,
  onToggleFavorite,
  onCopy,
}) => {
  const [inputs, setInputs] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (Object.keys(inputs).length === 0 && prompt.blanks) {
      const initialInputs = {};
      prompt.blanks.forEach((b) => (initialInputs[b] = ""));
      setInputs(initialInputs);
    }
  }, [prompt.blanks]);

  const handleInputChange = (blank, value) => {
    setInputs((prev) => ({ ...prev, [blank]: value }));
  };

  const getFilledTemplate = () => {
    let text = prompt.template;
    if (!prompt.blanks) return text;
    
    prompt.blanks.forEach((blank) => {
      const val = inputs[blank];
      const replacement = val && val.trim() !== "" ? val : `[${blank}]`;
      text = text.split(`[${blank}]`).join(replacement);
    });
    return text;
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    const textToCopy = getFilledTemplate();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    if (onCopy) {
      onCopy(prompt, textToCopy, inputs);
    }
  };

  const categoryLabel =
    CATEGORIES.find((c) => c.id === prompt.category)?.label || prompt.category;

  const categoryColor = {
    operacional: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    marketing: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    financiero: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    investigacion: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    presentaciones: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    favoritos: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    general: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  }[prompt.category];

  return (
    <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/5">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${categoryColor}`}
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
              onToggleFavorite(prompt.id);
            }}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite
                ? "text-amber-500 hover:bg-amber-500/10"
                : "text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-white/5"
            }`}
            aria-label={
              isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
            }
          >
            {isFavorite ? (
              <Star size={20} fill="currentColor" />
            ) : (
              <StarOff size={20} />
            )}
          </button>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 hidden sm:inline-block">
            {categoryLabel}
          </span>
          {isExpanded ? (
            <ChevronUp size={20} className="text-slate-400" />
          ) : (
            <ChevronDown size={20} className="text-slate-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-200/50 dark:border-white/10">
          <div className="grid md:grid-cols-12 gap-6">
            {/* Input Section - 5 cols */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                Personalizar Prompt
              </h4>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {prompt.blanks.map((blank) => (
                  <div key={blank}>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      {blank.replace(/_/g, " ")}
                    </label>
                    <input
                      type="text"
                      value={inputs[blank] || ""}
                      onChange={(e) => handleInputChange(blank, e.target.value)}
                      placeholder={`[${blank}]`}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Preview Section - 7 cols */}
            <div className="md:col-span-7 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                  Resultado
                </h4>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copiar Resultado
                    </>
                  )}
                </button>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-slate-50 dark:bg-white/5 text-sm text-slate-700 dark:text-slate-300 font-mono whitespace-pre-wrap max-h-[400px] overflow-y-auto border border-gray-100 dark:border-white/5">
                {getFilledTemplate()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptItem;
