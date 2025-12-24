import React from "react";
import { ArrowUpRight } from "lucide-react";

const GemCard = ({ gem }) => {
  const { title, desc, url, icon: Icon, color, gradient, border } = gem;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative p-6 rounded-2xl transition-all duration-500
        bg-white/60 dark:bg-white/5 backdrop-blur-xl
        border border-gray-200/50 dark:border-white/10
        hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5
        hover:-translate-y-1
        ${border}
      `}
    >
      {/* Hover Gradient Background */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-xl bg-gray-50 dark:bg-white/5 ${color} group-hover:scale-110 transition-transform duration-500`}
          >
            {Icon && <Icon size={24} strokeWidth={1.5} />}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
          </div>
        </div>

        <div className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </a>
  );
};

export default GemCard;
