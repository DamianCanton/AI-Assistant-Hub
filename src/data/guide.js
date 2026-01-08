export const GUIDE_CONTENT = {
  hero: {
    badge: {
      text: "Protocolo de Seguridad IA",
      icon: "Shield",
    },
    title: "Guía Maestra de Inteligencia",
    description:
      'Para obtener resultados de nivel "Ingeniería", debes operar la IA con precisión quirúrgica. Evita respuestas genéricas con estas reglas de oro.',
  },
  shieldProtocol: {
    title: 'Protocolo de "Blindaje"',
    icon: "Shield",
    cards: [
      {
        id: 1,
        title: '1. Define el "Sombrero"',
        description:
          "Nunca empieces en frío. La IA necesita saber quién es para no mezclar conceptos.",
        icon: "User",
        iconColor: "blue",
        examples: {
          bad: "Escribe un post de energía.",
          good: "Actúa como Directora de INTHER. Público: Gerentes. Tono: Técnico.",
        },
      },
      {
        id: 2,
        title: "2. Ley del Input/Output",
        description:
          "Si le das basura, te devuelve basura (GIGO). Si le das oro, te devuelve joyas.",
        icon: "Database",
        iconColor: "amber",
        note: {
          label: "No subas:",
          text: "PDFs de 200 págs.",
          labelGood: "Sube:",
          textGood:
            "El párrafo exacto del manual o la especificación técnica clave.",
        },
      },
      {
        id: 3,
        title: "3. Filtro Antiventa",
        description:
          'Evita el tono de "vendedor desesperado". Somos ingenieros, no un bazar.',
        icon: "Ban",
        iconColor: "red",
        forbidden: ["¡Oferta!", "¡Corre que se acaba!", "Preciazo"],
        use: ["Inversión", "Retorno", "Vida útil"],
      },
    ],
  },
  opsManual: {
    title: "Manual de Operaciones",
    icon: "Terminal",
    sections: [
      {
        id: "context",
        title: "Gestión de Contexto",
        badge: "Crítico",
        icon: "Layers",
        color: "indigo",
        description:
          'La IA tiene una "ventana de atención" limitada. Si el chat se hace eterno, olvidará las instrucciones iniciales.',
        items: [
          "Un Chat = Un Objetivo",
          "Nuevo tema = Nuevo Chat",
          "No mezclar CEMI/INTHER",
        ],
      },
      {
        id: "hallucinations",
        title: "Límites y Alucinaciones",
        badge: "Peligro",
        icon: "AlertTriangle",
        color: "orange",
        info: [
          {
            label: "¿Qué es?",
            text: "Cuando la IA responde con total seguridad datos falsos o inventados (precios, códigos de error, leyes).",
          },
          {
            label: "¿Por qué pasa?",
            text: "No es una base de datos, es un modelo predictivo. Si no sabe algo, llena los huecos con lo que parece plausible.",
          },
          {
            label: "Solución",
            text: "Úsala para redactar, no para consultar datos. Verifica siempre los números con el manual oficial.",
          },
        ],
      },
    ],
  },
  promptFormula: {
    title: "Fórmula de Prompting Maestra",
    icon: "Terminal",
    steps: [
      {
        label: "Rol",
        question: "¿Quién eres?",
        example: "Ej: Directora de INTHER, Experta en HVAC.",
      },
      {
        label: "Tarea",
        question: "¿Qué hago?",
        example: "Ej: Redactar correo de reclamo, Analizar PDF.",
      },
      {
        label: "Contexto",
        question: "Datos",
        example: "Ej: Copiar/Pegar el manual o el correo recibido.",
      },
      {
        label: "Restricción",
        question: "Límites",
        example: "Ej: Sin emojis, tono serio, máx. 200 palabras.",
      },
    ],
  },
  toolsSection: {
    title: "Herramientas de Investigación y Diseño",
    icon: "Search",
    tools: [
      {
        id: "perplexity",
        name: "Perplexity",
        description: "Motor de búsqueda conversacional con fuentes citadas. Ideal para investigar rápido con referencias verificables.",
        useCases: ["Investigar temas técnicos", "Comparar productos", "Resumir noticias"],
        recommendations: [
          "Usa 'Focus' para especificar tipo de fuente (academic, web, youtube)",
          "Pide siempre las fuentes para verificar información",
          "Ideal para investigar antes de preguntar a Gemini"
        ],
        color: "cyan"
      },
      {
        id: "gamma",
        name: "Gamma",
        description: "Crea presentaciones profesionales con IA. Genera slides, estructura y diseño automáticamente.",
        useCases: ["Presentaciones de ventas", "Informes ejecutivos", "Capacitaciones"],
        recommendations: [
          "Start with a clear outline - Gamma expands it into slides",
          "Use 'Assemble' mode for best control over structure",
          "Export to PDF or PowerPoint for final edits"
        ],
        color: "pink"
      }
    ]
  }
};
