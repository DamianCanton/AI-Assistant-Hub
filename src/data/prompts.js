export const PROMPTS = [
  {
    id: "op_1",
    category: "operacional",
    title: "Análisis de avería",
    description:
      "Diagnóstico estructurado para identificar causas raíz de problemas técnicos.",
    template: `Actúa como Experto Técnico en [type_of_equipment].

Contexto: Estamos experimentando los siguientes síntomas:
[symptom_description]

Historial relevante:
[relevant_history]

Tu tarea:
1. Identifica las posibles causas raíz
2. Ordena por probabilidad (mayor a menor)
3. Para cada causa, indica:
   - Probabilidad
   - Pasos de verificación
   - Solución propuesta

Formato respuesta:
| Causa | Probabilidad | Verificación | Solución |
|------|--------------|--------------|----------|
| ...  | ...          | ...          | ...     

Limitaciones: [specific_constraints]`,
    blanks: [
      "tipo_equipo",
      "descripcion_sintoma",
      "historial_relevante",
      "restricciones_especificas",
    ],
    example: `type_of_equipment: Chiller Carrier 19DV
symptom_description: Alarma de alta presión de refrigeración
relevant_history: Filtro de agua limpio, condensador limpiado hace 3 meses
specific_constraints: Sin acceso a datos del BMS por ahora`,
  },
  {
    id: "op_2",
    category: "operacional",
    title: "Especificación técnica",
    description:
      "Crear specs técnicas claras para requerimientos de compra o proyectos.",
    template: `Eres Especialista Técnico en [product_category].

Necesito redactar una especificación técnica para:
[product_or_service]

Requisitos técnicos obligatorios:
[technical_requirements]

Restricciones:
[constraints]

Formato:
1. Introducción y alcance
2. Especificaciones generales
3. Requisitos específicos
4. Criterios de aceptación
5. Documentación requerida

Sé técnico pero conciso.`,
    blanks: [
      "categoria_producto",
      "producto_servicio",
      "requisitos_tecnicos",
      "restricciones",
    ],
    example: `product_category: Sistemas de HVAC
product_or_service: Chiller de absorción para proceso industrial
technical_requirements: Capacidad 500 TR, COP > 1.2, agua caliente 90°C
constraints: Presupuesto máximo $800,000 USD`,
  },
  {
    id: "op_3",
    category: "operacional",
    title: "Respuesta a reclamo",
    description: "Redactar respuestas profesionales a quejas de clientes.",
    template: `Actúa como [your_role] de [company_name].

Reclamo del cliente:
[customer_complaint]

Política de la empresa relevante:
[company_policy]

Historial del cliente:
[customer_history]

Objetivo: [response_objective]

Tono: [desired_tone]

Estructura de respuesta:
1. Reconocimiento del problema
2. Explicación (si aplica)
3. Acción propuesta
4. Compensación (si aplica)
5. Cierre positivo

Máximo [word_limit] palabras.`,
    blanks: [
      "tu_rol",
      "nombre_empresa",
      "reclamo_cliente",
      "politica_empresa",
      "historial_cliente",
      "objetivo_respuesta",
      "tono_deseado",
      "limite_palabras",
    ],
    example: `your_role: Gerente de Servicio al Cliente
company_name: INTHER
customer_complaint: Instalación retrasada 2 semanas sin comunicación
company_policy: Compensación por retrasos > 5 días hábiles
customer_history: Cliente VIP, 3 proyectos anteriores
response_objective: Mantener relación, ofrecer compensación
desired_tone: Empático pero profesional
word_limit: 150`,
  },
  {
    id: "op_4",
    category: "operacional",
    title: "Manual de procedimientos",
    description: "Crear SOPs claros y accionables para operaciones.",
    template: `Redacta un Procedimiento Estándar de Operación (SOP) para:

Tarea: [task_name]

Paso a paso:
[steps_description]

Notas de seguridad:
[safety_notes]

Puntos críticos de calidad:
[quality_checkpoints]

Formato requerido:
- Título claro
- Alcance y propósito
- Responsables
- Equipos/materiales necesarios
- Procedimiento numerado
- Control de calidad
- Referencias

Usa lenguaje imperativo y claro.`,
    blanks: [
      "nombre_tarea",
      "descripcion_pasos",
      "notas_seguridad",
      "puntos_control_calidad",
    ],
    example: `task_name: Arranque de chillers en temporada
steps_description: 1. Verificar agua, 2. Encender bombas, 3. Chillers uno por uno
safety_notes: Usar EPI, verificar presiones antes de arrancar
quality_checkpoints: Temperatura de salida de agua entre 6-8°C`,
  },
  {
    id: "op_5",
    category: "operacional",
    title: "Informe de mantenimiento",
    description: "Generar reportes técnicos de intervenciones.",
    template: `Genera un Informe Técnico de Mantenimiento para:

Equipo: [equipment_name]
Ubicación: [location]
Fecha: [date]
Técnico: [technician_name]

Hallazgos:
[findings_description]

Trabajos realizados:
[work_done]

Repuestos utilizados:
[parts_used]

Recomendaciones:
[recommendations]

Próxima intervención sugerida:
[next_intervention]

Formato profesional con firma del técnico.`,
    blanks: [
      "nombre_equipo",
      "ubicacion",
      "fecha",
      "nombre_tecnico",
      "descripcion_hallazgos",
      "trabajos_realizados",
      "repuestos_usados",
      "recomendaciones",
      "proxima_intervencion",
    ],
    example: `equipment_name: Chiller York YT-1200
location: Planta CEMI - Sala de Máquinas
date: 2024-01-15
technician_name: Juan Pérez
findings_description: Filtro de suction obstruido 40%, correas en buen estado
work_done: Limpieza de filtro, ajuste de tensiones
parts_used: Filtro nuevo G-4567
recommendations: Revisar en 3 meses, considerar reemplazo de aislamiento
next_intervention: Mantenimiento programado mayo 2024`,
  },
  {
    id: "op_6",
    category: "operacional",
    title: "Propuesta técnica comercial",
    description: "Redactar propuestas técnicas que soldifiquen la solución.",
    template: `Elabora una Propuesta Técnica Comercial para:

Cliente: [client_name]
Proyecto: [project_name]

Necesidad del cliente:
[client_need]

Solución propuesta:
[solution_description]

Propuesta de valor:
[value_proposition]

Alcance incluido:
[included_scope]

Fuera de alcance:
[out_of_scope]

Garantía:
[warranty_terms]

Válido hasta: [validity_date]

Incluye:
- Portada profesional
- Resumen ejecutivo
- Alcance técnico
- Cronograma
- Inversión
- Términos y condiciones`,
    blanks: [
      "nombre_cliente",
      "nombre_proyecto",
      "necesidad_cliente",
      "descripcion_solucion",
      "propuesta_valor",
      "alcance_incluido",
      "fuera_alcance",
      "terminos_garantia",
      "fecha_validez",
    ],
    example: `client_name: Hotel Continental
project_name: Modernización de HVAC Lobby
client_need: Reducir consumo energético en 30%
solution_description: VRV con recuperación de calor
value_proposition: ROI de 2.5 años con ahorro garantizado
included_scope: Equipamiento, instalación, puesta en marcha
out_of_scope: Obras civiles, permisos municipales
warranty_terms: 3 años piezas y mano de obra
validity_date: 30 días naturales`,
  },
  {
    id: "op_7",
    category: "operacional",
    title: "Comparativa de soluciones",
    description:
      "Analizar y comparar opciones técnicas para toma de decisiones.",
    template: `Realiza un análisis comparativo de soluciones para:

 Problema/Necesidad: [problem_statement]

Opciones a evaluar:
[option_1] - [description_1]
[option_2] - [description_2]
[option_3] - [description_3]

Criterios de evaluación (peso):
[criterion_1] - [weight_1]
[criterion_2] - [weight_2]
[criterion_3] - [weight_3]
[criterion_4] - [weight_4]

Para cada opción, evalúa de 1-10 en cada criterio y justifica.

Conclusión: Recomendación final con justificación.`,
    blanks: [
      "declaracion_problema",
      "opcion_1",
      "descripcion_1",
      "opcion_2",
      "descripcion_2",
      "opcion_3",
      "descripcion_3",
      "criterio_1",
      "peso_1",
      "criterio_2",
      "peso_2",
      "criterio_3",
      "peso_3",
      "criterio_4",
      "peso_4",
    ],
    example: `problem_statement: Sistema de climatización para laboratorio
option_1: VRV estándar
description_1: Sistema modular inverter
option_2: Chiller + Fan Coils
description_2: Sistema centralizado tradicional
option_3: Expansión directa comercial
description_3: Sistema split grande
criterion_1: Eficiencia energética - 35%
criterion_2: Costo inicial - 25%
criterion_3: Flexibilidad - 20%
criterion_4: Mantenimiento - 20%`,
  },
  {
    id: "mk_1",
    category: "marketing",
    title: "Post LinkedIn profesional",
    description:
      "Crear contenido de valor para LinkedIn que posicione expertise.",
    template: `Crea un post para LinkedIn sobre:

Tema: [topic]
Audiencia objetivo: [audience]
Tono: [tone]

Estructura:
1. Gancho inicial (pregunta o dato impactante)
2. Desarrollo (3-4 puntos clave)
3. Llamada a la acción

Requisitos:
- Máxima [word_limit] palabras
- Incluir [number] hashtags relevantes
- Incluir [cta_type]
- No usar emojis excesivos

Formato listo para publicar.`,
    blanks: ["tema", "audiencia", "tono", "limite_palabras", "numero", "tipo_cta"],
    example: `topic: Errores comunes en mantenimiento de chillers
audience: Gerentes de Facilities, Ingenieros Mecánicos
tone: Profesional pero accesible
word_limit: 300
number: 5
cta_type: Pregunta para generar engagement`,
  },
  {
    id: "mk_2",
    category: "marketing",
    title: "Email de nurturing",
    description:
      "Secuencias de email para leads en diferentes etapas del embudo.",
    template: `Redacta un email de nurturing para:

Etapa del embudo: [funnel_stage]
Producto/Servicio: [product_or_service]

Perfil del destinatario: [recipient_profile]
Dolor principal: [pain_point]

Objetivo del email: [email_objective]

Tono: [tone]

Estructura:
1. Asunto pegadizo (máx 50 caracteres)
2. Saludo personalizado
3. Gancho
4. Desarrollo del valor
5. Social proof
6. CTA claro

Firma: [sender_info]`,
    blanks: [
      "etapa_embudo",
      "producto_servicio",
      "perfil_destinatario",
      "dolor_principal",
      "objetivo_email",
      "tono",
      "info_remitente",
    ],
    example: `funnel_stage: middle-of-funnel
product_or_service: Mantenimiento Predictivo
recipient_profile: Gerentes de Operaciones en manufactura
pain_point: Averías no programadas que detienen producción
email_objective: Agendar llamada de demostración
tone: Consultivo, cercano
sender_info: María González, Especialista en Soluciones Industriales`,
  },
  {
    id: "mk_3",
    category: "marketing",
    title: "Contenido para redes sociales",
    description: "Adaptar mensajes clave para diferentes plataformas.",
    template: `Adapta este contenido para [platform]:

Mensaje original:
[original_message]

Objetivo: [objective]
Tono: [tone]
Audience: [audience]

Para [platform], necesito:
- Caption (máx [char_limit] caracteres)
- [number] hashtags estratégicos
- 1 variation con ángulo diferente
- Suggestion de mejor horario para publicar

Platform guidelines a considerar:
[platform_guidelines]`,
    blanks: [
      "plataforma",
      "mensaje_original",
      "objetivo",
      "tono",
      "audiencia",
      "limite_caracteres",
      "numero",
      "guia_plataforma",
    ],
    example: `platform: Instagram
original_message: Nuevo servicio de mantenimiento predictivo reduce paradas no programadas hasta 70%
objective: Generar leads del sector industrial
tone: Profesional pero moderno
audience: Gerentes de mantenimiento, directores de planta
char_limit: 2200
number: 8
platform_guidelines: Priorizar stories, usar carousel para detalles técnicos`,
  },
  {
    id: "mk_4",
    category: "marketing",
    title: "Landing page copy",
    description: "Crear copy persuasivo para páginas de conversión.",
    template: `Crea copy para landing page de [product_or_service]:

Target audience: [audience]
Problema que resuelve: [problem_solved]
Beneficio principal: [main_benefit]

Secciones necesarias:
1. Hero section (título + subtítulo + CTA)
2. Problema/Agitación (3 bullets)
3. Solución (cómo funciona)
4. Beneficios (6 bullets)
5. Social proof (testimonios/casos)
6. FAQ (3 preguntas frecuentes)
7. CTA final

Tono: [tone]
PALabras clave SEO: [keywords]`,
    blanks: [
      "producto_servicio",
      "audiencia",
      "problema_resuelto",
      "beneficio_principal",
      "tono",
      "palabras_clave",
    ],
    example: `product_or_service: Auditoría Energética Industrial
audience: Gerentes de planta, directores de operaciones
problem_solved: Alto consumo energético sin visibilidad de causas
main_benefit: Identificamos hasta 30% de ahorros en 30 días
tone: Técnico pero accesible, confianza profesional
keywords: auditoría energética, ahorro de energía industrial, eficiencia energética`,
  },
  {
    id: "mk_5",
    category: "marketing",
    title: "Script video corto",
    description: "Guiones para videos de 30-60 segundos en redes.",
    template: `Crea un script para video de [duration] segundos sobre:

Tema: [topic]
Objetivo: [objective]
Audience: [audience]
Tono: [tone]

Estructura:
- Gancho (0-3 seg): [hook]
- Problema/Introducción (3-10 seg): [intro]
- Contenido valor (10-40 seg): [content]
- CTA (40-60 seg): [cta]

Specs técnicas:
- Formato vertical 9:16
- Incluir sugerencia de visual/overlay
- Incluir música sugerida`,
    blanks: [
      "duracion",
      "tema",
      "objetivo",
      "audiencia",
      "tono",
      "gancho",
      "intro",
      "contenido",
      "cta",
    ],
    example: `duration: 45
topic: 3 señales de que tu chiller necesita mantenimiento
objective: Generar leads para servicio de mantenimiento
audience: Gerentes de Facilities
tone: Directo, informativo
hook: Tu chiller te está pidiendo ayuda
intro: Estos 3 síntomas indican que viene una avería
content: 1. Ruidos extraños, 2. Aumento de consumo, 3. Temperatura inestable
cta: Descarga nuestra checklist de diagnóstico gratuito`,
  },
  {
    id: "mk_6",
    category: "marketing",
    title: "Comunicación de crisis",
    description: "Redactar mensajes para situaciones de crisis o controversia.",
    template: `Prepara comunicación para situación de crisis:

Tipo de crisis: [crisis_type]
Severity: [severity_level]
Stakeholders afectados: [stakeholders]

Mensaje clave a comunicar:
[main_message]

Hechos verificados:
[verified_facts]
Aún sin confirmar:
[unconfirmed_info]

Acciones tomadas:
[actions_taken]

Tono requerido: [tone]
Canal: [channel]

Estructura:
1. Título urgente pero calmado
2. Qué sabemos (confirmado)
3. Qué estamos haciendo
4. Próximos pasos
5. Contacto para dudas`,
    blanks: [
      "tipo_crisis",
      "nivel_severidad",
      "stakeholders",
      "mensaje_principal",
      "hechos_verificados",
      "info_no_confirmada",
      "acciones_tomadas",
      "tono",
      "canal",
    ],
    example: `crisis_type: Demora en entrega de proyecto
severity_level: Media - requiere comunicación proactiva
stakeholders: Cliente directo, equipo interno, proveedores
main_message: Reconocemos el retraso y estamos tomando acciones correctivas
verified_facts: Demora de 2 semanas por retraso de importador
unconfirmed_info: Nueva fecha de entrega tentativa
actions_today: Reclamación formal a proveedor, reprogramación
tone: Transparente, responsable, proactivo
channel: Email directo + llamada telefónica`,
  },
  {
    id: "mk_7",
    category: "marketing",
    title: "Case study format",
    description: "Estructurar casos de éxito de forma persuasiva.",
    template: `Redacta un case study para:

Cliente: [client_name]
Industria: [industry]
Proyecto: [project_type]

Desafío inicial:
[challenge]

Solución implementada:
[solution]

Resultados (con métricas):
[results]

Testimonio del cliente:
[testimonial_quote]

Otros beneficios secundarios:
[secondary_benefits]

Formato:
1. Título吸引人 (gancho)
2. Perfil del cliente (contexto)
3. El desafío
4. La solución
5. Los resultados (con números)
6. El cliente dice
7. Por qué funcionó (lecciones)

Incluye: Infografía sugerida de resultados`,
    blanks: [
      "nombre_cliente",
      "industria",
      "tipo_proyecto",
      "desafio",
      "solucion",
      "resultados",
      "cita_testimonio",
      "beneficios_secundarios",
    ],
    example: `client_name: Hotel Grand Plaza
industry: Hotelería 5 estrellas
project_type: Sistema de climatización centralizado
challenge: Sistema obsoleto, costos energéticos 40% sobre presupuesto
solution: Retrofit completo con chillers de alta eficiencia
results: Ahorro energético 35%, payback en 2.5 años, comfort guest +25%
testimonial_quote: "La diferencia en consumo es notable desde el primer mes"
secondary_benefits: Reducción de ruido, mantenimiento simplificado`,
  },
  {
    id: "fi_1",
    category: "financiero",
    title: "Análisis de ROI",
    description: "Calcular y presentar retorno de inversión de forma clara.",
    template: `Realiza un análisis de ROI para:

Inversión inicial: [initial_investment]
Retornos proyectados (mensuales/anuales): [projected_returns]
Plazo de análisis: [timeframe]
Tasa de descuento: [discount_rate]

Gastos operativos adicionales:
[additional_opex]

Ahorros/Costos evitados:
[cost_savings]

Calcula:
1. VAN (Valor Actual Neto)
2. TIR (Tasa Interna de Retorno)
3. Payback simple
4. Payback descontado
5. ROI total

Presenta en tabla y gráfica sugerida.
Conclusión con recomendación.`,
    blanks: [
      "inversion_inicial",
      "retornos_proyectados",
      "plazo_analisis",
      "tasa_descuento",
      "opex_adicional",
      "ahorros_costos",
    ],
    example: `initial_investment: $150,000 USD
projected_returns: $8,000 USD/mes ahorros + $5,000 USD/mes ingresos adicionales
timeframe: 5 años
discount_rate: 12% anual
additional_opex: $500 USD/mes mantenimiento extra
cost_savings: $25,000 USD/año en energéticos evitados`,
  },
  {
    id: "fi_2",
    category: "financiero",
    title: "Informe ejecutivo financiero",
    description:
      "Resumir estados financieros para toma de decisiones directivas.",
    template: `Genera un Informe Ejecutivo Financiero para:

Período: [period]
Unidad de negocio: [business_unit]
Audiencia: [audience]

Highlights principales:
[highlights]

Indicadores clave:
[metrics_with_values]

Comparación vs período anterior:
[variance_analysis]

Concerns/Riesgos identificados:
[concerns]

Recomendaciones:
[recommendations]

Formato:
- 1 página máximo
- Gráficos sugeridos
- Semáforos (verde/amarillo/rojo) por indicador`,
    blanks: [
      "periodo",
      "unidad_negocio",
      "audiencia",
      "highlights",
      "metricas_valores",
      "analisis_varianza",
      "concerns",
      "recomendaciones",
    ],
    example: `period: Q4 2024
business_unit: INTHER - División Servicios
audience: Director General y Consejo Directivo
highlights: Crecimiento 18% vs Q3, margen bruto estable en 42%
metrics_with_values: Ingresos $1.2M, EBITDA $180K, FCF $95K
variance_analysis: Ingresos +12% vs presupuesto, OPEX +5%
concerns: Margen de servicios instalados decreciendo
recommendations: Revisión de pricing, automatización de reportes`,
  },
  {
    id: "fi_3",
    category: "financiero",
    title: "Comparativa de presupuestos",
    description:
      "Evaluar opciones de inversión o proveedores por criterios financieros.",
    template: `Compara las siguientes opciones de presupuesto:

Opción A: [option_a]
Costo: [cost_a]
Condiciones: [terms_a]

Opción B: [option_b]
Costo: [cost_b]
Condiciones: [terms_b]

Opción C: [option_c]
Costo: [cost_c]
Condiciones: [terms_c]

Criterios de evaluación:
[criterion_1] (peso [weight_1]%)
[criterion_2] (peso [weight_2]%)
[criterion_3] (peso [weight_3]%)

Análisis:
- Tabla comparativa por criterio
- Puntuación ponderada
- Recomendación con justificación
- Análisis de riesgos por opción`,
    blanks: [
      "opcion_a",
      "costo_a",
      "condiciones_a",
      "opcion_b",
      "costo_b",
      "condiciones_b",
      "opcion_c",
      "costo_c",
      "condiciones_c",
      "criterio_1",
      "peso_1",
      "criterio_2",
      "peso_2",
      "criterio_3",
      "peso_3",
    ],
    example: `option_a: Proveedor A - Equipo premium
cost_a: $95,000 USD
terms_a: Pago contado 2% descuento
option_b: Proveedor B - Equipo estándar
cost_b: $72,000 USD
terms_b: 50% anticipo, 50% entrega
option_c: Alquiler con opción a compra
cost_c: $3,500 USD/mes x 24 meses
terms_c: Opción de compra 30% del valor
criterion_1: Costo total - 40%
criterion_2: Calidad/Confiabilidad - 35%
criterion_3: Flexibilidad financiera - 25%`,
  },
  {
    id: "fi_4",
    category: "financiero",
    title: "Proyección de ventas",
    description: "Crear forecast de ingresos basado en supuestos claros.",
    template: `Genera proyección de ventas para:

Producto/Servicio: [product_or_service]
Período: [time_period]
Mercado objetivo: [target_market]

Supuestos base:
[assumptions]

Historico disponible:
[historical_data]

Precios:
[pricing_info]

Capacidad de entrega:
[capacity_info]

Entregable:
- Proyección mensual/trimestral
- Escenarios: conservador, base, optimista
- Sensibilidad a variables clave
- Gráficos de tendencia
- Supuestos explicados`,
    blanks: [
      "producto_servicio",
      "periodo_tiempo",
      "mercado_objetivo",
      "supuestos",
      "datos_historicos",
      "info_precios",
      "info_capacidad",
    ],
    example: `product_or_service: Contratos de mantenimiento
time_period: 12 meses
target_market: Industriales zona metropolitana
assumptions: Captación 5% del mercado objetivo, ticket promedio $12,000/año
historical_data: 15 contratos actuales, tasa renovación 85%
pricing_info: Paquete básico $8,400, premium $18,000
capacity_info: 30 técnicos disponibles,利用率 75%`,
  },
  {
    id: "fi_5",
    category: "financiero",
    title: "Análisis de riesgo financiero",
    description: "Identificar y mitigar riesgos financieros de proyectos.",
    template: `Realiza análisis de riesgos para:

Proyecto: [project_name]
Inversión total: [total_investment]
Plazo: [timeline]

Variables de riesgo:
[risk_variable_1] - Probabilidad: [prob_1], Impacto: [impact_1]
[risk_variable_2] - Probabilidad: [prob_2], Impacto: [impact_2]
[risk_variable_3] - Probabilidad: [prob_3], Impacto: [impact_3]

Análisis:
1. Matriz de riesgos (probabilidad vs impacto)
2. Valor en riesgo (VaR) estimado
3. Mitigaciones propuestas
4. Contingencias financieras
5. Score de riesgo total (1-10)

Recomendación: Proceder / Condicionado / Cancelar`,
    blanks: [
      "nombre_proyecto",
      "inversion_total",
      "plazo",
      "variable_riesgo_1",
      "prob_1",
      "impacto_1",
      "variable_riesgo_2",
      "prob_2",
      "impacto_2",
      "variable_riesgo_3",
      "prob_3",
      "impacto_3",
    ],
    example: `project_name: Expansión a nueva sucursal
total_investment: $450,000 USD
timeline: 18 meses
risk_variable_1: Demora en permisos - Prob: 40%, Impacto: Alto
risk_variable_2: Incremento costos construcción - Prob: 60%, Impacto: Medio
risk_variable_3: Demanda menor a esperada - Prob: 30%, Impacto: Alto`,
  },
  {
    id: "fi_6",
    category: "financiero",
    title: "Justificación de inversión",
    description: "Documento de negocio para solicitar aprobación de capital.",
    template: `Prepara Justificación de Inversión para:

Proyecto: [project_name]
Monto solicitado: [amount]
Departamento: [department]

Objetivo del proyecto:
[project_objective]

Análisis costo-beneficio:
[benefits_quantified]

Análisis de alternativas:
[alternatives]

Riesgos y mitigaciones:
[risks_mitigations]

Impacto en indicadores:
[impact_metrics]

Cronograma de implementación:
[timeline]

Solicitud: Aprobación de inversión por [amount]

Documento de máximo 2 páginas.`,
    blanks: [
      "nombre_proyecto",
      "monto",
      "departamento",
      "objetivo_proyecto",
      "beneficios_cuantificados",
      "alternativas",
      "riesgos_mitigaciones",
      "impacto_metricas",
      "cronograma",
    ],
    example: `project_name: Sistema de gestión de mantenimiento (CMMS)
amount: $35,000 USD
department: Operaciones
project_objective: Digitalizar gestión de activos, reducir tiempo de inactividad 25%
benefits_quantified: Ahorro $48,000/año en mantenimiento correctivo
alternativas: Excel compartido (gratis), papel (no viable)
risks_mitigations: Capacitación previa, fase piloto 3 meses
impact_metrics: Uptime de equipos, costo de mantenimiento/activo
timeline: Implementación 4 meses, ROI esperado 8 meses`,
  },
  {
    id: "fi_7",
    category: "financiero",
    title: "Dashboard de métricas",
    description: "Definir y presentar KPIs financieros relevantes.",
    template: `Diseña dashboard financiero para:

Organización/Área: [organization]
Período: [period]
Audience: [audience]

KPIs a incluir:
[kpi_1] - Meta: [target_1]
[kpi_2] - Meta: [target_2]
[kpi_3] - Meta: [target_3]
[kpi_4] - Meta: [target_4]
[kpi_5] - Meta: [target_5]

Para cada KPI:
- Definición y fórmula
- Valor actual
- Vs meta
- Vs período anterior
- Tendencia (gráfico sugerido)
- Acciones recomendadas si está fuera de meta

Formas de presentación: Tablero mensual para dirección.`,
    blanks: [
      "organizacion",
      "periodo",
      "audiencia",
      "kpi_1",
      "meta_1",
      "kpi_2",
      "meta_2",
      "kpi_3",
      "meta_3",
      "kpi_4",
      "meta_4",
      "kpi_5",
      "meta_5",
    ],
    example: `organization: CEMI - División Servicios
period: Mensual 2024
audience: Director de División
kpi_1: Ingresos - Meta: $180K
kpi_2: Margen bruto - Meta: 42%
kpi_3: DSO (días venta) - Meta: <45 días
kpi_4: Tasa de renovación - Meta: 88%
kpi_5: Churn rate - Meta: <5%`,
  },
  {
    id: "re_1",
    category: "investigacion",
    title: "Comparativa de productos",
    description:
      "Usar Perplexity para comparar opciones de compra con fuentes.",
    template: `Compara [product_or_category] usando Perplexity Focus: [source_type].

Criterios de comparación:
[comparison_criteria]

Productos a comparar:
1. [product_1]
2. [product_2]
3. [product_3]

Para cada producto, encuentra:
- Especificaciones técnicas clave
- Precio aproximado en [market]
- Fortalezas y debilidades
- Opiniones de usuarios
- Disponibilidad en [market]

Resume en tabla comparativa y recomienda la mejor opción para [use_case].`,
    blanks: [
      "producto_categoria",
      "tipo_fuente",
      "criterios_comparacion",
      "producto_1",
      "producto_2",
      "producto_3",
      "mercado",
      "caso_uso",
    ],
    example: `product_or_category: Chillers de absorción para procesos industriales
source_type: academic + web
comparison_criteria: COP, temperatura de entrada, costo operativo, mantenimiento
product_1: Trane Absorption AXC
product_2: Carrier AquaEdge 23XRV
product_3: York YIA
market: México y USA
use_case: Planta de procesamiento con calor residual disponible`,
  },
  {
    id: "re_2",
    category: "investigacion",
    title: "Resumen de tema técnico",
    description: "Obtener resúmenes ejecutivos de temas técnicos complejos.",
    template: `Investiga exhaustivamente [technical_topic] usando Perplexity.

Profundidad requerida: [depth_level]

Áreas de enfoque específicas:
[focus_areas]

Preguntas clave a responder:
1. [question_1]
2. [question_2]
3. [question_3]

Usa fuentes académicas y técnicas. Incluye referencias verificables.

Resume en:
- Resumen ejecutivo (200 palabras)
- Puntos clave (5-7 bullets)
- Tendencias actuales
- Fuentes principales consultadas`,
    blanks: [
      "tema_tecnico",
      "nivel_profundidad",
      "areas_enfoque",
      "pregunta_1",
      "pregunta_2",
      "pregunta_3",
    ],
    example: `technical_topic: Refrigerantes de bajo GWP para sistemas comerciales
depth_level: Profundo - necesito saber para especificación
focus_areas: Regulaciones, opciones disponibles, rendimiento, disponibilidad
question_1: Cuáles son las alternativas al R-410A más viables
question_2: Qué dice la normativa mexicana sobre refrigerantes
question_3: Cuál es el costo incremental de transición`,
  },
  {
    id: "re_3",
    category: "investigacion",
    title: "Verificación de datos",
    description: "Verificar afirmaciones o datos con fuentes primarias.",
    template: `Verifica la siguiente afirmación usando Perplexity Focus: [source_type]

Afirmación a verificar:
[claim_to_verify]

Contexto adicional:
[context]

Necesito:
1. Fuentes que confirmen o contradigan la afirmación
2. Nivel de certeza de cada fuente
3. Fecha de las fuentes (no mayores a [max_age])
4. Si es falso/mítico, la explicación correcta
5. Recomendación de cómo actuar con esta información

Presenta hallazgos con referencias claras.`,
    blanks: ["tipo_fuente", "afirmacion_verificar", "contexto", "max_edad"],
    example: `source_type: academic
claim_to_verify: Los chillers inverter son 40% más eficientes que los scroll tradicionales
context: Evaluando specs de proveedores para proyecto de retrofit
max_age: 24 meses`,
  },
  {
    id: "re_4",
    category: "investigacion",
    title: "Estado del arte",
    description: "Revisión del estado actual de una tecnología o campo.",
    template: `Genera un estado del arte de [technology_or_field] hasta [year].

Aspectos a cubrir:
1. Evolución histórica reciente (últimos 10 años)
2. Estado actual de la tecnología
3. Aplicaciones principales en [sector_or_context]
4. Principales players/ investigadores
5. Tendencias emergentes
6. Desafíos técnicos no resueltos
7. Proyecciones a [future_year]

Usa fuentes académicas y técnicas.
Formato: Informe estructurado con referencias.`,
    blanks: [
      "tecnologia_campo",
      "ano",
      "sector_contexto",
      "ano_futuro",
    ],
    example: `technology_or_field: Sistemas de refrigeración con CO2 transcrítico
year: 2024
sector_or_context: Supermercados e industria alimentaria
future_year: 2030`,
  },
  {
    id: "re_5",
    category: "investigacion",
    title: "Búsqueda de competidores",
    description: "Analizar el panorama competitivo de un mercado.",
    template: `Realiza análisis competitivo de [industry] en [geographic_area] usando Perplexity.

Focus: [focus_type]

Aspectos a investigar:
1. Principales competidores
2. Cuota de mercado estimada (si disponible)
3. Diferenciadores de cada uno
4. Estrategia de pricing típica
5. Fortalezas y debilidades
6. Clientes objetivo principales

Para cada competidor identificado:
[competitor_1]
[competitor_2]
[competitor_3]

Presenta análisis en formato actionable para estrategia comercial.`,
    blanks: [
      "industria",
      "area_geografica",
      "tipo_foco",
      "competidor_1",
      "competidor_2",
      "competidor_3",
    ],
    example: `industry: Servicios de mantenimiento HVAC
geographic_area: Ciudad de México
focus_type: web + news
competitor_1: Johnson Controls
competitor_2: Trane México
competitor_3: Empresas locales especializadas`,
  },
  {
    id: "re_6",
    category: "investigacion",
    title: "Revisión de literatura",
    description: "Sintetizar investigación académica sobre un tema.",
    template: `Realiza revisión de literatura sobre [research_topic] usando Perplexity Focus: academic.

Preguntas de investigación:
1. [research_question_1]
2. [research_question_2]
3. [research_question_3]

Período de búsqueda: [year_range]

Necesito:
- Síntesis de hallazgos principales (últimos [number] papers)
- Controversias o brechas identificadas
- Implicaciones prácticas para [practical_context]
- Papers/key references más relevantes (con DOI si es posible)

Formato: Informe estructurado estilo revisión de literatura académica.`,
    blanks: [
      "tema_investigacion",
      "pregunta_investigacion_1",
      "pregunta_investigacion_2",
      "pregunta_investigacion_3",
      "rango_anos",
      "numero",
      "contexto_practico",
    ],
    example: `research_topic: Mantenimiento predictivo basado en IA para chillers
research_question_1: Qué técnicas de IA son más efectivas
research_question_2: Precisión de predicción de fallos reportada
research_question_3: Implementación práctica en la industria
year_range: 2019-2024
number: 10 papers más citados
practical_context: Implementación en planta industrial mexicana`,
  },
  {
    id: "re_7",
    category: "investigacion",
    title: "Análisis de tendencias",
    description: "Identificar y proyectar tendencias en un sector.",
    template: `Analiza tendencias de [sector] para el período [timeframe] usando Perplexity.

Indicadores a analizar:
1. [indicator_1]
2. [indicator_2]
3. [indicator_3]
4. [indicator_4]

Para cada indicador:
- Estado actual
- Tendencia histórica
- Proyección
- Implicaciones para [my_business_context]

Conclusión:
- Oportunidades identificadas
- Riesgos potenciales
- Recomendaciones estratégicas`,
    blanks: [
      "sector",
      "periodo_tiempo",
      "indicador_1",
      "indicador_2",
      "indicador_3",
      "indicador_4",
      "mi_contexto_negocio",
    ],
    example: `sector: Servicios de facility management
timeframe: 2024-2028
indicator_1: Adopción de IoT en edificios
indicator_2: Demanda de contratos de mantenimiento as-a-service
indicator_3: Regulaciones de eficiencia energética
indicator_4: Consolidación del mercado
my_business_context: PYME de mantenimiento HVAC buscando diferenciación`,
  },
  {
    id: "pr_1",
    category: "presentaciones",
    title: "Pitch deck inversores",
    description: "Outline completo para presentar a potenciales inversores.",
    template: `Genera outline para pitch deck de [company_name] buscando [ask_amount] por [equity_percentage]%.

Secciones necesarias:
1. Título [company_name] - [tagline]
2. El problema [problem_statement]
3. La solución [solution_description]
4. Oportunidad de mercado [market_opportunity]
5. Modelo de negocio [business_model]
6. Tracción actual [traction]
7. Equipo [team_key_members]
8. Competencia [competitive_advantages]
9. Uso de fondos [use_of_funds]
10. Visión a [vision_timeline]

Para cada sección incluye:
- Sugerencia de slides
- Contenido clave
- Tips de presentación

Duración objetivo: 10-15 minutos.`,
    blanks: [
      "nombre_empresa",
      "monto_solicitado",
      "porcentaje_participacion",
      "declaracion_problema",
      "descripcion_solucion",
      "oportunidad_mercado",
      "modelo_negocio",
      "traccion",
      "miembros_clave",
      "ventajas_competitivas",
      "uso_fondos",
      "vision_plazo",
    ],
    example: `company_name: CoolTech Solutions
ask_amount: $500,000 USD
equity_percentage: 15%
problem_statement: Pymes manufactureras pierden 20% de producción por fallas de chillers
solution_description: Mantenimiento predictivo IoT + respuesta rápida 24/7
market_opportunity: 5,000 empresas objetivo en zona centro
business_model: SaaS + servicios de mantenimiento
traction: 15 clientes, $120K ARR, 95% retención
team_key_members: CEO con 15 años en HVAC, CTO ex-Google
competitive_advantages: Tech propietaria, red de técnicos propia
use_of_funds: 40% tecnología, 35% ventas, 25% operaciones
vision_timeline: Ser líderes en México en 3 años, expansión a USA en 5`,
  },
  {
    id: "pr_2",
    category: "presentaciones",
    title: "Informe ejecutivo slides",
    description: "Outline para presentar informes a dirección.",
    template: `Crea estructura de presentación para informe ejecutivo:

Tema: [topic]
Audiencia: [audience]
Duración: [duration]

Secciones:
1. Resumen ejecutivo [key_findings]
2. Metodología / Contexto [methodology]
3. Hallazgos principales [findings]
4. Análisis [analysis]
5. Recomendaciones [recommendations]
6. Próximos pasos [next_steps]
7. Q&A

Para cada sección:
- Slides sugeridos
- Contenido clave bullets
- Gráficos sugeridos
- Notas para presentador

Anexos sugeridos: [annexes]`,
    blanks: [
      "tema",
      "audiencia",
      "duracion",
      "hallazgos_clave",
      "metodologia",
      "hallazgos",
      "analisis",
      "recomendaciones",
      "proximos_pasos",
      "anexos",
    ],
    example: `topic: Evaluación de proveedores de chillers 2024
audience: Comité de Compras y Director de Operaciones
duration: 20 minutos + 10 Q&A
key_findings: Proveedor B ofrece mejor relación precio/calidad
methodology: RFP a 5 proveedores, análisis ponderado
findings: Comparativa técnica y económica detallada
analysis: Sensibilidad a tipo de cambio, costos operativos
recommendations: Contratar a Proveedor B con negociación
next_steps: Negociación final, visita de referencia
anexos: Matriz comparativa completa, fichas técnicas`,
  },
  {
    id: "pr_3",
    category: "presentaciones",
    title: "Capacitación interna",
    description: "Outline para sesiones de capacitación de empleados.",
    template: `Diseña presentación de capacitación:

Tema: [topic]
Audiencia: [audience]
Duración: [duration]
Modalidad: [modality]

Objetivos de aprendizaje:
[learning_objectives]

Estructura:
1. Introducción y objetivos [time_allocation]
2. Conceptos clave [key_concepts]
3. Demo / Ejercicio práctico [demo_exercise]
4. Caso de estudio [case_study]
5. Errores comunes a evitar [common_mistakes]
6. Q&A y recursos adicionales [resources]

Incluye:
- Slides interactivos sugeridos
- Actividades propuestas
- Evaluación de aprendizaje
- Materiales de apoyo`,
    blanks: [
      "tema",
      "audiencia",
      "duracion",
      "modalidad",
      "objetivos_aprendizaje",
      "asignacion_tiempo",
      "conceptos_clave",
      "demo_ejercicio",
      "caso_estudio",
      "errores_comunes",
      "recursos",
    ],
    example: `topic: Uso del nuevo sistema de tickets
audience: Técnicos de mantenimiento
duration: 2 horas
modalidad: Presencial + hands-on
learning_objectives: Crear tickets, actualizar estados, generar reportes básicos
time_allocation: Intro 10min, conceptos 20min, demo 30min, práctica 45min, caso 10min
key_concepts: Estados de ticket, priorización, documentación
demo_exercise: Crear ticket real de mantenimiento
case_study: Ticket mal documentado y sus consecuencias
common_mistakes: Campos obligatorios omitidos, cierre prematuro
resources: Manual de usuario, video tutorial, contacto soporte`,
  },
  {
    id: "pr_4",
    category: "presentaciones",
    title: "Presentación de producto",
    description: "Outline para demos y presentaciones comerciales de producto.",
    template: `Crea presentación comercial para [product_name]:

Audiencia: [audience]
Duración: [duration]
Objetivo: [objective]

Estructura:
1. Hook de apertura [hook]
2. Problema que resolvemos [problem]
3. Nuestra solución [solution]
4. Demo live / walkthrough [demo_flow]
5. Beneficios clave [benefits]
6. Casos de éxito [success_stories]
7. Propuesta de valor [value_proposition]
8. Pricing (si aplica) [pricing_info]
9. CTA / Próximos pasos [cta]

Incluye:
- Slide deTitle
- Tips de engagement
- Anticipación de objeciones`,
    blanks: [
      "nombre_producto",
      "audiencia",
      "duracion",
      "objetivo",
      "gancho",
      "problema",
      "solucion",
      "flujo_demo",
      "beneficios",
      "historias_exito",
      "propuesta_valor",
      "info_precios",
      "cta",
    ],
    example: `product_name: Sistema de monitoreo remoto de chillers
audience: Gerentes de Facilities de edificios comerciales
duration: 30 minutos
objective: Agendar demostración técnica detallada
hook: Sabías que puedes reducir tus costos de mantenimiento 30% sin invertir en nuevo equipo
problem: Averías no programadas costan promedio $15,000 USD y 72 horas fuera de servicio
solution: Monitoreo 24/7 con alertas predictivas
demo_flow: Dashboard, alertas, reportes, app móvil
benefits: Reducción OPEX, uptime garantizado, visibilidad
success_stories: Hotel Grand Plaza, Torre Corporativa Norte
value_proposition: Tu chillers hablan, tú decides
pricing_info: Desde $500 USD/mes por equipo
cta: Agendamos demo personalizada la próxima semana?`,
  },
  {
    id: "pr_5",
    category: "presentaciones",
    title: "Propuesta comercial",
    description: "Outline para presentar propuestas en reuniones de venta.",
    template: `Prepara presentación para propuesta comercial:

Cliente: [client_name]
Oportunidad: [opportunity_description]
Valor: [proposal_value]

Estructura:
1. Agradecimiento y agenda [agenda]
2. Resumen de necesidades [needs_summary]
3. Nuestra propuesta [proposal_details]
4. Beneficios para [client_name] [specific_benefits]
5. Inversión y retorno [investment_roi]
6. Cronograma propuesto [timeline]
7. Garantías y soporte [guarantees]
8. Próximos pasos [next_steps]

Incluye:
- Slide deThank you
- Comparativo antes/después
- ROI highlight
- Testimonio relevante`,
    blanks: [
      "nombre_cliente",
      "descripcion_oportunidad",
      "valor_propuesta",
      "agenda",
      "resumen_necesidades",
      "detalles_propuesta",
      "beneficios_especificos",
      "inversion_roi",
      "cronograma",
      "garantias",
      "proximos_pasos",
    ],
    example: `client_name: Hotel Grand Plaza
opportunity: Retrofit de sistema de climatización
proposal_value: $180,000 USD
agenda: 5 min needs, 15 min proposal, 5 min investment, 5 min Q&A
needs_summary: Reducir consumo 25%, mejorar comfort huéspedes
proposal_details: 2 chillers York + sistema de control
specific_benefits: 35% ahorro energético, guest satisfaction +20%
investment_roi: ROI 2.8 años, garantía 3 años
timeline: 8 semanas instalación
guarantees: Performance guarantee, mantenimiento primer año incluido
next_steps: Aprobación hasta viernes, inicio en 2 semanas`,
  },
  {
    id: "pr_6",
    category: "presentaciones",
    title: "Quarterly review",
    description: "Outline para revisión trimestral con equipos o dirección.",
    template: `Prepara presentación de Quarterly Review:

Período: [period]
Área/Equipo: [area]
Audiencia: [audience]

Secciones:
1. Resumen ejecutivo [executive_summary]
2. Highlights del quarter [highlights]
3. Métricas clave [metrics]
4. Desafíos enfrentados [challenges]
5. Lecciones aprendidas [lessons_learned]
6. Comparativo vs objetivos [variance]
7. Próximo quarter [upcoming_priorities]
8. Recursos necesitados [resource_requests]

Incluye:
- Gráficos de tendencias
- Comparativo con quarter anterior
- Tablero de KPIs`,
    blanks: [
      "period",
      "area",
      "audience",
      "executive_summary",
      "highlights",
      "metrics",
      "challenges",
      "lessons_learned",
      "variance",
      "upcoming_priorities",
      "resource_requests",
    ],
    example: `period: Q4 2024
area: Servicios de Mantenimiento
audience: Director de División + Equipo de Gestión
executive_summary: Crecimiento 18% vs Q3, margen estable, retención +5%
highlights: Nuevo contrato $50K, implementación nuevo sistema
metrics: Ingresos $180K, EBITDA 15%, CSAT 4.6/5
challenges: Demora en repuestos, rotación de técnicos
lessons_learned: Mejorar gestión de inventario, onboarding más rápido
variance: Ingresos +12% vs presupuesto, OPEX +5%
upcoming_priorities: Lanzar servicio predictivo, capacitar equipo
resource_requests: 1 técnico de apoyo, licencia software adicional`,
  },
  {
    id: "pr_7",
    category: "presentaciones",
    title: "Demo de producto",
    description: "Outline estructurado para demos efectivas.",
    template: `Prepara script de demo para [product_name]:

Audience: [audience]
Duración: [duration]
Tipo de demo: [demo_type]

Estructura:
1. Introducción [intro_time]
   - Presentación
   - Expectativas del demo
   
2. Setup / Contexto [context_time]
   - Situación inicial del cliente
   - Desafíos actuales
   
3. Demo principal [demo_time]
   - Flujo paso a paso
   - Puntos de engagement
   
4. Valor demostrado [value_time]
   - Resultados mostrados
   - ROI highlight

5. Q&A [qa_time]

6. Cierre y CTA [closing_time]

 Incluye:
- Alternativas por si no funciona algo
- Preguntas de qualifying
- Objetivo de siguiente paso`,
    blanks: [
      "product_name",
      "audience",
      "duration",
      "demo_type",
      "intro_time",
      "context_time",
      "demo_time",
      "value_time",
      "qa_time",
      "closing_time",
    ],
    example: `product_name: Plataforma de monitoreo de activos
audience: Director de Operaciones de hotel
duration: 30 minutos
demo_type: Demo funcional con datos reales
intro_time: 3 min
context_time: 5 min - problemas de visibilidad de activos
demo_time: 15 min - dashboard, alertas, reportes, app
value_time: 5 min - casos de éxito similares
qa_time: 5 min
closing_time: 2 min - proponer piloto gratuito`,
  },
  {
    id: "ge_1",
    category: "general",
    title: "Resumen ejecutivo",
    description: "Sintetizar documentos largos en resúmenes ejecutivos.",
    template: `Genera un Resumen Ejecutivo de [document_type] de [length] páginas.

Tema principal: [main_topic]

Puntos clave a incluir:
[key_points]

Audiencia del resumen: [audience]
Longitud deseada: [word_limit]

Formato:
- Máximo 1 página
- bullets claros
- Si aplica,表格 de datos clave
- Conclusión con recomendación`,
    blanks: [
      "document_type",
      "length",
      "main_topic",
      "key_points",
      "audience",
      "word_limit",
    ],
    example: `document_type: Informe de auditoría
length: 45 páginas
main_topic: Evaluación de controles internos de mantenimiento
key_points: Hallazgos críticos en gestión de refacciones, oportunidades de mejora en capacitación
audiencia: Comité de Auditoría
word_limit: 300 palabras`,
  },
  {
    id: "ge_2",
    category: "general",
    title: "Respuesta a email difícil",
    description: "Redactar respuestas a emails complicados o conflictivos.",
    template: `Redacta respuesta al siguiente email:

Email original:
[original_email]

Tu rol: [your_role]
Tono deseado: [tone]
Objetivo: [objective]

Consideraciones:
[considerations]

Estructura:
1. Reconocimiento del email
2. Respuesta directa a cada punto
3. Próximos pasos claros
4. Cierre profesional

Máximo [word_limit] palabras.`,
    blanks: [
      "original_email",
      "your_role",
      "tone",
      "objective",
      "considerations",
      "word_limit",
    ],
    example: `original_email: Queja formal del cliente por delay en proyecto
your_role: Gerente de Proyectos
tone: Profesional pero no defensivo
objective: Recover la relación y proponer solución
considerations: El cliente tiene razón en部分 del reclamo, pero hay factores externos
word_limit: 200`,
  },
  {
    id: "ge_3",
    category: "general",
    title: "Agenda de reunión",
    description: "Crear agendas efectivas para diferentes tipos de reuniones.",
    template: `Crea agenda para:

Tipo de reunión: [meeting_type]
Participantes: [participants]
Duración: [duration]

Objetivos:
[objective_1]
[objective_2]
[objective_3]

Topics a cubrir:
1. [topic_1] - [time_1]
2. [topic_2] - [time_2]
3. [topic_3] - [time_3]
4. [topic_4] - [time_4]

Pre-work requerido:
[pre_work]

Formatos sugeridos:
- Icebreaker (si aplica)
- Herramientas a usar
- Documentación post-reunión`,
    blanks: [
      "meeting_type",
      "participants",
      "duration",
      "objective_1",
      "objective_2",
      "objective_3",
      "topic_1",
      "time_1",
      "topic_2",
      "time_2",
      "topic_3",
      "time_3",
      "topic_4",
      "time_4",
      "pre_work",
    ],
    example: `meeting_type: Kickoff de proyecto
participantes: Cliente + Equipo interno (6 personas)
duration: 1.5 horas
objective_1: Alinear expectativas
objective_2: Definir roles
objective_3: Establecer timeline
topics: Introducciones 10min, scope 30min, timeline 20min, roles 15min, Q&A 15min
pre_work: Revisar propuesta aprobada`,
  },
  {
    id: "ge_4",
    category: "general",
    title: "Minuta de reunión",
    description: "Documentar reuniones de forma accionable.",
    template: `Genera minuta de la siguiente reunión:

Información básica:
- Fecha: [date]
- Lugar/Plataforma: [location]
- Asistentes: [attendees]
- Ausentes: [absentees]

Desarrollada por: [facilitator]

Discusión principal:
[discussion_summary]

Decisiones tomadas:
[decisions]

Action items:
| Responsable | Acción | Fecha límite |
|-------------|--------|--------------|
| [owner_1]   | [action_1] | [due_date_1] |
| [owner_2]   | [action_2] | [due_date_2] |

Proxima reunión:
[next_meeting]

Formato profesional con acciones claras.`,
    blanks: [
      "date",
      "location",
      "attendees",
      "absentees",
      "facilitator",
      "discussion_summary",
      "decisions",
      "owner_1",
      "action_1",
      "due_date_1",
      "owner_2",
      "action_2",
      "due_date_2",
      "next_meeting",
    ],
    example: `date: 2024-01-15
location: Sala A + Zoom
attendees: María, Juan, Carlos, Roberto
absentees: Ana (en vacación)
facilitator: María
discussion_summary: Revisión de estado del proyecto X, identificación de delays en fase 2
decisions: Ampliar equipo en 2 personas, ajustar timeline
action items:
| Responsable | Acción | Fecha límite |
|-------------|--------|--------------|
| Juan | Contratar 2 ingenieros de apoyo | 2024-01-22 |
| Carlos | Actualizar timeline | 2024-01-18 |
next_meeting: 2024-01-22, misma hora`,
  },
  {
    id: "ge_5",
    category: "general",
    title: "Traducción profesional",
    description: "Obtener traducciones con adaptación cultural apropiada.",
    template: `Traduce el siguiente texto:

Texto original:
[original_text]

Idioma origen: [source_language]
Idioma destino: [target_language]
Tipo de contenido: [content_type]

Audience objetivo: [audience]
Tono: [tone]

Consideraciones especiales:
[special_considerations]

Deliverable:
1. Traducción directa
2. Adaptación cultural si es necesaria
3. Glosario de términos técnicos`,
    blanks: [
      "original_text",
      "source_language",
      "target_language",
      "content_type",
      "audience",
      "tone",
      "special_considerations",
    ],
    example: `original_text: Email de quejas de cliente sobre servicio
source_language: Español mexicano
target_language: Inglés estadounidense
content_type: Email formal de negocios
audience: Director de operaciones en USA
tone: Formal, serio pero empático
special_considerations: Mantener nombres de productos originales, adaptar formato de fecha`,
  },
  {
    id: "ge_6",
    category: "general",
    title: "Revisión de documento",
    description: "Mejorar documentos existentes con feedback estructurado.",
    template: `Revisa el siguiente documento:

Tipo de documento: [doc_type]
Propósito: [purpose]
Audience: [audience]

Documento:
[document_content]

Necesito:
1. Feedback general (claridad, estructura, tono)
2. Mejoras específicas sugeridas (máx 5)
3. Correcciones gramaticales si las hay
4. Recomendación de rating (1-5)
5. Próximos pasos sugeridos para el autor`,
    blanks: ["doc_type", "purpose", "audience", "document_content"],
    example: `doc_type: Propuesta comercial
purpose: Venta de servicios de mantenimiento
audience: Director General de empresa manufacturera
document_content: (PEGAR PROPUESTA)`,
  },
  {
    id: "ge_7",
    category: "general",
    title: "Brief de proyecto",
    description: "Crear briefs claros para iniciar proyectos.",
    template: `Genera un Brief de Proyecto para:

Proyecto: [project_name]
Sponsor: [sponsor]
Líder de proyecto: [project_lead]

1. Antecedentes:
[background]

2. Objetivo del proyecto:
[objective]

3. Alcance:
[in_scope]
[out_of_scope]

4. Stakeholders principales:
[stakeholders]

5. Entregables:
[deliverables]

6. Timeline:
[timeline]

7. Presupuesto:
[budget]

8. Riesgos iniciales:
[risks]

9. Criterios de éxito:
[success_criteria]

10. Restricciones:
[constraints]`,
    blanks: [
      "project_name",
      "sponsor",
      "project_lead",
      "background",
      "objective",
      "in_scope",
      "out_of_scope",
      "stakeholders",
      "deliverables",
      "timeline",
      "budget",
      "risks",
      "success_criteria",
      "constraints",
    ],
    example: `project_name: Implementación de sistema de gestión de mantenimiento
sponsor: Director de Operaciones
project_lead: María González
background: Actualmente usamos Excel disperso, sin visibilidad
objective: Digitalizar gestión de activos y mantenimiento
in_scope: Implementación CMMS, capacitación de 20 usuarios
out_of_scope: Compilación de histórico de equipos
stakeholders: IT, Facilities, Finanzas
deliverables: Sistema funcional, usuarios capacitados, manual de usuario
timeline: 4 meses (ene-abr 2024)
budget: $35,000 USD (licencia + implementación)
risks: Resistencia al cambio, datos incompletos
success_criteria: 90% adopción en 3 meses, reducción 30% tiempo de respuesta
constraints: Sin parar operaciones, presupuesto fijo`,
  },
];

export const CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "operacional", label: "Operacional" },
  { id: "marketing", label: "Marketing" },
  { id: "financiero", label: "Financiero" },
  { id: "investigacion", label: "Investigación" },
  { id: "presentaciones", label: "Presentaciones" },
  { id: "favoritos", label: "Favoritos" },
  { id: "general", label: "General" },
];
