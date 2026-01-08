# VeroDashboard IA Hub

<div align="center">

![VeroDashboard Banner](./docs/banner.svg)

**Tu Centro de Comando Inteligente para Operaciones, Marketing y Finanzas**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

</div>

---

## Que es VeroDashboard?

VeroDashboard es un **hub operativo centralizado** diseñado para maximizar la productividad de profesionales que trabajan con inteligencia artificial. Consolida herramientas de IA, protocolos de uso y una biblioteca de prompts en una interfaz moderna e intuitiva.

### Caracteristicas Principales

| Caracteristica | Descripcion |
|----------------|-------------|
| **Dashboard Central** | Acceso rapido a 6 agentes de IA especializados |
| **Guia Maestra de IA** | Protocolos y mejores practices para usar IA profesionalmente |
| **Biblioteca de Prompts** | 50+ prompts de alto valor categorizados por area |
| **Modo Oscuro/Luz** | Theme toggle con persistencia local |
| **Diseno Responsivo** | Funciona perfectamente en desktop y mobile |
| **Efectos Visuales** | Animaciones fluidas y efectos glassmorphism |

---

## Estructura del Proyecto

```
vero-s-HUB-IA/
├── src/
│   ├── components/
│   │   ├── GemCard.jsx       # Tarjetas de agentes IA
│   │   └── ThemeToggle.jsx   # Conmutador de tema
│   ├── data/
│   │   ├── gems.js           # Configuracion de agentes
│   │   ├── guide.js          # Contenido de la guia maestra
│   │   └── prompts.js        # Biblioteca de prompts (50+)
│   ├── pages/
│   │   ├── Home.jsx          # Dashboard principal
│   │   ├── Recommendations.jsx # Guia Maestra de IA
│   │   └── Prompts.jsx       # Biblioteca de prompts
│   ├── App.jsx               # Enrutamiento principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos y animaciones
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

---

## Agentes de IA Disponibles

| Agente | Icono | Proposito | Enlace |
|--------|-------|-----------|--------|
| **Aliado Operacional** | BrainCircuit | Gestion inteligente para CEMI e INTHER | [Gemini](https://gemini.google.com/gem/1jipP1cDZY-MtikXvGOqAbwgGgG0H7jmk) |
| **Marketing Creativo** | Megaphone | Estrategias y contenido viral | [Gemini](https://gemini.google.com/gem/1QdKcF9U5Xhp2ocj2cbp0X-tNTtcCw5ov) |
| **CFO Estrategico** | TrendingUp | Analisis financiero y estrategia | [Gemini](https://gemini.google.com/gem/1HY5X7OedwhaebhFGCjnTx7sven9Kffub) |
| **Inversionista** | Coins | Gestion de inversiones IA | [Gemini](https://gemini.google.com/gem/1xYky3kI74iDQZlDiAuw-5yqxXLz3XzJj) |
| **Investigador** | Search | Motor de busqueda con respuestas citadas | [Perplexity](https://www.perplexity.ai) |
| **Presentador** | Presentation | Presentaciones IA en segundos | [Gamma](https://gamma.app) |

---

## Categorias de Prompts

La biblioteca incluye **50+ prompts** estructurados en 5 categorias principales:

### Operacional (7 prompts)
- Analisis de averia
- Especificacion tecnica
- Respuesta a reclamo
- Manual de procedimientos
- Informe de mantenimiento
- Propuesta tecnica comercial
- Comparativa de soluciones

### Marketing (7 prompts)
- Post LinkedIn profesional
- Email de nurturing
- Contenido para redes sociales
- Landing page copy
- Script video corto
- Comunicacion de crisis
- Case study format

### Financiero (7 prompts)
- Analisis de ROI
- Informe ejecutivo financiero
- Comparativa de presupuestos
- Proyeccion de ventas
- Analisis de riesgo financiero
- Justificacion de inversion
- Dashboard de metricas

### Investigacion (7 prompts)
- Comparativa de productos
- Resumen de tema tecnico
- Verificacion de datos
- Estado del arte
- Busqueda de competidores
- Revision de literatura
- Analisis de tendencias

### Presentaciones (7 prompts)
- Pitch deck inversores
- Informe ejecutivo slides
- Capacitacion interna
- Presentacion de producto
- Propuesta comercial
- Webinar/conferencia
- Demo de producto

---

## Instalacion y Uso

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalacion

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/vero-s-HUB-IA.git

# Entrar al directorio
cd vero-s-HUB-IA

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para produccion
npm run build

# Previsualizar construccion
npm run preview
```

### Configuracion de Variables de Entorno

No se requieren variables de entorno para el funcionamiento basico del proyecto.

---

## Stack Tecnologico

| Tecnologia | Version | Proposito |
|------------|---------|-----------|
| React | 18.2.0 | Framework de interfaz de usuario |
| Vite | 4.4.5 | Herramienta de construccion rapida |
| Tailwind CSS | 3.3.3 | Framework de estilos utility-first |
| React Router | 7.9.6 | Enrutamiento de pagina simple |
| Lucide React | 0.263.1 | Iconos SVG |
| Firebase | 12.6.0 | (Reservado para futuras features) |

---

## Diseno y UX

### Filosofia de Diseno
- **Glassmorphism**: Efectos de desenfoque y transparencia
- **Animaciones**: Transiciones suaves y elementos que aparecen progresivamente
- **Dark Mode**: Soporte completo para temas claro y oscuro
- **Responsive**: Diseño adaptativo para todos los tamanios de pantalla
- **Minimalismo**: Interfaz limpia sin desorden visual

### Paleta de Colores
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#a855f7)
- **Background Light**: Gray 50 (#f9fafb)
- **Background Dark**: #0a0a0a
- **Text Primary**: Slate 900 (#0f172a)
- **Text Secondary**: Slate 500 (#64748b)

---

## Protocolo de "Blindaje" para IA

VeroDashboard implementa un protocolo de tres pilares para maximizar la efectividad de las interacciones con IA:

### 1. Define el "Sombrero"
La IA necesita saber **quien es** para no mezclar conceptos.

```markdown
MAL:  "Escribe un post de energia."
BIEN: "Actua como Director de INTHER. Publico: Gerentes. Tono: Tecnico."
```

### 2. Ley del Input/Output (GIGO)
**Si le das basura, te devuelve basura.** Si le das oro, te devuelve joyas.

| No subir | Subir |
|----------|-------|
| PDFs de 200 paginas | El parrafo exacto del manual |
| Documentos completos | La especificacion tecnica clave |

### 3. Filtro Antiventa
Evita el tono de "vendedor desesperado". Somos profesionales.

| Prohibido | Usar |
|-----------|------|
| "¡Oferta!" | "Inversion" |
| "¡Corre que se acaba!" | "Retorno" |
| "Preciazo" | "Vida util" |

---

## Roadmap

- [ ] **v2.0**: Integracion con APIs de IA (OpenAI, Anthropic)
- [ ] **v2.1**: Sistema de favoritos sincronizado con cloud
- [ ] **v2.2**: Exportacion de prompts a diferentes formatos
- [ ] **v3.0**: Modo offline con PWA
- [ ] **v3.1**: Multi-idioma (English support)

---

## Contribuir

Las contribuciones son bienvenidas. Por favor lee [CONTRIBUTING.md](./CONTRIBUTING.md) para detalles sobre nuestro codigo de conducta y el proceso para enviar pull requests.

---

## Licencia

Este proyecto esta bajo la Licencia MIT - ve el archivo [LICENSE](./LICENSE) para detalles.

---

## Contacto

**Veronica Zuain** - Creador y Maintainer

- GitHub: [@verozuain](https://github.com/verozuain)
- LinkedIn: [Veronica Zuain](https://linkedin.com/in/verozuain)

---

<div align="center">

**Construido con precision y pasion para profesionales que lideran con IA**

⭐ Si este proyecto te es util, considera darle una estrella en GitHub.

</div>
