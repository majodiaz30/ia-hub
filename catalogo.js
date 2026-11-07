// ============================================
// IA HUB - CATÁLOGO DE HERRAMIENTAS
// ============================================

const herramientas = [

    // ============================================
    // TEXTO, ESTUDIO Y ASISTENTES
    // ============================================

    {
        id: "chatgpt",
        nombre: "ChatGPT",
        categorias: ["Texto", "Estudio", "Programación"],
        inicial: "C",
        color: "purple",
        destacado: true,
        etiquetas: ["escribir", "redactar", "estudiar", "programar", "preguntas", "resumir", "ideas", "explicar"],
        descripcion: "Asistente de inteligencia artificial que permite conversar, resolver dudas, crear contenido, estudiar y desarrollar ideas.",
        enlace: "https://chatgpt.com",
        queEs: "ChatGPT es un asistente de inteligencia artificial desarrollado por OpenAI que comprende instrucciones y genera respuestas en lenguaje natural.",
        usos: [
            { titulo: "Crear textos", descripcion: "Redacta documentos, ensayos, correos y diferentes tipos de contenido." },
            { titulo: "Estudiar", descripcion: "Explica temas, resume información y ayuda a comprender conceptos." },
            { titulo: "Programar", descripcion: "Ayuda a escribir código, detectar errores y aprender programación." },
            { titulo: "Generar ideas", descripcion: "Propone ideas para proyectos, actividades y trabajos." }
        ],
        funciones: ["Conversación", "Redacción", "Resúmenes", "Programación", "Análisis de información"],
        ventajas: ["Interfaz sencilla de utilizar", "Permite trabajar con diferentes tipos de tareas", "Ofrece explicaciones y ejemplos", "Cuenta con opciones gratuitas y de pago"],
        disponibilidad: "Cuenta con una versión gratuita y planes de pago con funciones adicionales."
    },

    {
        id: "gemini",
        nombre: "Gemini",
        categorias: ["Texto", "Estudio", "Imágenes"],
        inicial: "G",
        color: "blue",
        destacado: true,
        etiquetas: ["asistente", "investigar", "resumir", "estudiar", "escribir", "crear", "google"],
        descripcion: "Asistente de inteligencia artificial de Google que ayuda a investigar, escribir, aprender y crear contenido.",
        enlace: "https://gemini.google.com",
        queEs: "Gemini es una familia de modelos y un asistente de inteligencia artificial desarrollado por Google.",
        usos: [
            { titulo: "Investigar", descripcion: "Ayuda a buscar información y comprender diferentes temas." },
            { titulo: "Aprender", descripcion: "Explica conceptos y facilita el aprendizaje." },
            { titulo: "Escribir", descripcion: "Genera textos, ideas y documentos." },
            { titulo: "Crear contenido", descripcion: "Permite trabajar con diferentes formatos de contenido." }
        ],
        funciones: ["Asistente conversacional", "Investigación", "Redacción", "Análisis", "Generación de contenido"],
        ventajas: ["Integración con servicios de Google", "Permite realizar consultas variadas", "Ofrece herramientas para estudiar y trabajar"],
        disponibilidad: "Dispone de acceso gratuito y opciones de pago. Las funciones pueden variar según el plan."
    },

    {
        id: "claude",
        nombre: "Claude",
        categorias: ["Texto", "Estudio", "Programación"],
        inicial: "C",
        color: "orange",
        destacado: true,
        etiquetas: ["escribir", "analizar", "documentos", "programar", "resumir", "investigar"],
        descripcion: "Asistente de inteligencia artificial enfocado en la conversación, el análisis de información y la escritura.",
        enlace: "https://claude.ai",
        queEs: "Claude es un asistente de inteligencia artificial desarrollado por Anthropic que ayuda a trabajar con textos, documentos e ideas.",
        usos: [
            { titulo: "Redacción", descripcion: "Ayuda a crear textos claros, documentos y contenidos." },
            { titulo: "Análisis", descripcion: "Permite examinar información y documentos." },
            { titulo: "Programación", descripcion: "Ayuda a escribir y comprender código." },
            { titulo: "Estudio", descripcion: "Explica conceptos y organiza información." }
        ],
        funciones: ["Conversación", "Análisis de documentos", "Redacción", "Programación"],
        ventajas: ["Respuestas detalladas", "Útil para trabajar con textos extensos", "Ayuda a organizar información"],
        disponibilidad: "Tiene una opción gratuita y planes de pago."
    },

    {
        id: "copilot",
        nombre: "Microsoft Copilot",
        categorias: ["Texto", "Estudio", "Imágenes", "Programación"],
        inicial: "M",
        color: "blue",
        destacado: true,
        etiquetas: ["asistente", "escribir", "buscar", "crear imagenes", "productividad", "programar"],
        descripcion: "Asistente de inteligencia artificial de Microsoft para trabajar, buscar información y crear contenido.",
        enlace: "https://copilot.microsoft.com",
        queEs: "Microsoft Copilot es un asistente de inteligencia artificial que ayuda a realizar tareas de productividad, búsqueda y creación.",
        usos: [
            { titulo: "Productividad", descripcion: "Ayuda a organizar tareas y desarrollar actividades." },
            { titulo: "Escritura", descripcion: "Genera y mejora diferentes tipos de textos." },
            { titulo: "Imágenes", descripcion: "Permite crear imágenes a partir de descripciones." },
            { titulo: "Investigación", descripcion: "Ayuda a consultar información y resolver dudas." }
        ],
        funciones: ["Asistencia", "Redacción", "Generación de imágenes", "Búsqueda", "Productividad"],
        ventajas: ["Integración con herramientas Microsoft", "Facilita tareas cotidianas", "Permite generar diferentes contenidos"],
        disponibilidad: "Cuenta con acceso gratuito y planes con funciones adicionales."
    },

    {
        id: "deepseek",
        nombre: "DeepSeek",
        categorias: ["Texto", "Programación", "Estudio"],
        inicial: "D",
        color: "blue",
        destacado: true,
        etiquetas: ["programar", "codigo", "razonamiento", "matematicas", "resolver", "estudiar"],
        descripcion: "Asistente de inteligencia artificial especializado en razonamiento, consultas y ayuda con programación.",
        enlace: "https://chat.deepseek.com",
        queEs: "DeepSeek es una plataforma de inteligencia artificial que ofrece modelos para conversación, razonamiento y generación de código.",
        usos: [
            { titulo: "Programación", descripcion: "Ayuda a generar, revisar y explicar código." },
            { titulo: "Matemáticas", descripcion: "Permite resolver problemas y comprender procedimientos." },
            { titulo: "Razonamiento", descripcion: "Analiza preguntas y desarrolla respuestas." },
            { titulo: "Estudio", descripcion: "Explica temas y ayuda a comprender información." }
        ],
        funciones: ["Conversación", "Razonamiento", "Generación de código", "Resolución de problemas"],
        ventajas: ["Útil para consultas técnicas", "Ofrece herramientas de razonamiento", "Tiene acceso gratuito"],
        disponibilidad: "Ofrece acceso gratuito a través de su plataforma, sujeto a disponibilidad."
    },

    {
        id: "grok",
        nombre: "Grok",
        categorias: ["Texto", "Estudio"],
        inicial: "G",
        color: "purple",
        destacado: false,
        etiquetas: ["conversar", "investigar", "preguntas", "informacion", "redactar"],
        descripcion: "Asistente de inteligencia artificial desarrollado por xAI para responder preguntas y generar contenido.",
        enlace: "https://grok.com",
        queEs: "Grok es un asistente de inteligencia artificial desarrollado por xAI que permite conversar, investigar y generar respuestas.",
        usos: [
            { titulo: "Consultar", descripcion: "Resuelve preguntas sobre distintos temas." },
            { titulo: "Investigar", descripcion: "Ayuda a explorar información y desarrollar consultas." },
            { titulo: "Escribir", descripcion: "Genera textos e ideas." }
        ],
        funciones: ["Conversación", "Investigación", "Generación de contenido"],
        ventajas: ["Interfaz conversacional", "Permite consultas variadas", "Integra funciones relacionadas con X"],
        disponibilidad: "La disponibilidad de funciones depende del acceso y del plan."
    },

    {
        id: "perplexity",
        nombre: "Perplexity",
        categorias: ["Texto", "Estudio"],
        inicial: "P",
        color: "mint",
        destacado: true,
        etiquetas: ["buscar", "investigar", "fuentes", "informacion", "preguntas", "estudiar"],
        descripcion: "Motor de búsqueda con inteligencia artificial que responde preguntas y presenta fuentes de información.",
        enlace: "https://www.perplexity.ai",
        queEs: "Perplexity es una herramienta de búsqueda e investigación que utiliza inteligencia artificial para elaborar respuestas basadas en información disponible en internet.",
        usos: [
            { titulo: "Investigar", descripcion: "Consulta información sobre diferentes temas." },
            { titulo: "Encontrar fuentes", descripcion: "Presenta referencias para profundizar en los resultados." },
            { titulo: "Estudiar", descripcion: "Facilita la comprensión y recopilación de información." }
        ],
        funciones: ["Búsqueda inteligente", "Respuestas con fuentes", "Investigación", "Resúmenes"],
        ventajas: ["Presenta fuentes consultables", "Facilita la investigación", "Permite hacer preguntas adicionales"],
        disponibilidad: "Cuenta con una versión gratuita y planes de pago."
    },

    {
        id: "notebooklm",
        nombre: "NotebookLM",
        categorias: ["Estudio", "Texto"],
        inicial: "N",
        color: "blue",
        destacado: true,
        etiquetas: ["estudiar", "documentos", "resumir", "apuntes", "investigar", "notas"],
        descripcion: "Herramienta de Google que permite estudiar y analizar información a partir de documentos y fuentes propias.",
        enlace: "https://notebooklm.google.com",
        queEs: "NotebookLM es un asistente de investigación y aprendizaje que trabaja con las fuentes que proporciona el usuario.",
        usos: [
            { titulo: "Resumir documentos", descripcion: "Organiza información de archivos y fuentes." },
            { titulo: "Estudiar", descripcion: "Ayuda a comprender contenidos y preparar material de estudio." },
            { titulo: "Consultar fuentes", descripcion: "Responde preguntas utilizando los materiales agregados." }
        ],
        funciones: ["Análisis de fuentes", "Resúmenes", "Preguntas y respuestas", "Material de estudio"],
        ventajas: ["Trabaja con fuentes seleccionadas", "Facilita el estudio", "Ayuda a organizar documentos"],
        disponibilidad: "Dispone de acceso gratuito y funciones sujetas a las condiciones de Google."
    },

    {
        id: "elicit",
        nombre: "Elicit",
        categorias: ["Estudio", "Texto"],
        inicial: "E",
        color: "mint",
        destacado: false,
        etiquetas: ["investigar", "articulos", "academico", "ciencia", "estudiar", "fuentes"],
        descripcion: "Herramienta de inteligencia artificial para apoyar investigaciones y analizar publicaciones académicas.",
        enlace: "https://elicit.com",
        queEs: "Elicit es una plataforma que utiliza inteligencia artificial para facilitar la búsqueda y el análisis de literatura científica.",
        usos: [
            { titulo: "Investigación académica", descripcion: "Ayuda a localizar publicaciones relacionadas con una pregunta." },
            { titulo: "Analizar artículos", descripcion: "Facilita la revisión de información científica." },
            { titulo: "Organizar resultados", descripcion: "Permite comparar datos de diferentes publicaciones." }
        ],
        funciones: ["Búsqueda académica", "Análisis de artículos", "Organización de estudios"],
        ventajas: ["Enfocada en investigación", "Facilita la revisión bibliográfica", "Ayuda a comparar publicaciones"],
        disponibilidad: "Cuenta con opciones gratuitas y planes de pago."
    },


    {
        id: "gamma",
        nombre: "Gamma",
        categorias: ["Texto", "Imágenes", "Estudio"],
        inicial: "G",
        color: "purple",
        destacado: true,

        etiquetas: [
            "presentaciones",
            "diapositivas",
            "powerpoint",
            "documentos",
            "diseño",
            "exposiciones",
            "estudiantes",
            "inteligencia artificial",
            "crear presentaciones",
            "presentaciones con ia",
            "gamma app"
        ],

        descripcion: "Crea presentaciones, documentos y páginas web con inteligencia artificial. Gamma transforma tus ideas en contenido visual organizado, sin necesidad de diseñar cada diapositiva desde cero.",

        enlace: "https://gamma.app",
        enlaceAfiliado: "",
        afiliadoActivo: false,

        queEs: "Gamma es una plataforma de inteligencia artificial especializada en crear presentaciones, documentos y páginas web visuales. Permite transformar una idea, un texto o un esquema en contenido estructurado con diseños modernos. Es una alternativa para estudiantes, docentes, emprendedores y profesionales que necesitan presentar información de manera clara y atractiva.",

        usos: [
            {
                titulo: "Presentaciones académicas",
                descripcion: "Crea presentaciones para exposiciones, trabajos universitarios y proyectos escolares a partir de un tema o instrucciones."
            },
            {
                titulo: "Presentaciones profesionales",
                descripcion: "Organiza propuestas de negocio, informes, proyectos y reuniones mediante diapositivas visuales."
            },
            {
                titulo: "Documentos visuales",
                descripcion: "Convierte información escrita en documentos organizados con títulos, imágenes y secciones."
            },
            {
                titulo: "Páginas web",
                descripcion: "Crea páginas visuales sencillas para presentar ideas, proyectos o información sin comenzar desde cero."
            },
            {
                titulo: "Transformar contenido",
                descripcion: "Utiliza textos o esquemas existentes como punto de partida para generar presentaciones más organizadas."
            }
        ],

        funciones: [
            "Generación de presentaciones con IA",
            "Creación de documentos visuales",
            "Creación de páginas web",
            "Diseños y plantillas personalizables",
            "Generación y edición de contenido",
            "Incorporación de imágenes y elementos visuales",
            "Organización automática de información",
            "Opciones para compartir y exportar presentaciones"
        ],

        ventajas: [
            "Permite crear un primer borrador de presentación en poco tiempo",
            "No requiere conocimientos avanzados de diseño",
            "Facilita organizar información extensa",
            "Ofrece diseños visuales modernos",
            "Permite personalizar el contenido generado",
            "Es útil para estudiantes y profesionales",
            "Ayuda a transformar ideas en presentaciones estructuradas"
        ],

        disponibilidad: "Gamma ofrece un plan gratuito con créditos y funcionalidades limitadas, además de planes de pago con mayores capacidades. Los límites, precios y funciones disponibles pueden cambiar."
    },


    // ============================================
    // IMÁGENES Y DISEÑO
    // ============================================

    {
        id: "canva",
        nombre: "Canva",
        categorias: ["Imágenes", "Texto", "Video"],
        inicial: "C",
        color: "blue",
        destacado: true,
        etiquetas: ["diseño", "presentaciones", "imagenes", "publicaciones", "videos", "logos"],
        descripcion: "Plataforma de diseño gráfico que incorpora herramientas de inteligencia artificial para crear contenido visual.",
        enlace: "https://www.canva.com",
        queEs: "Canva es una plataforma de diseño que permite crear contenido visual mediante plantillas, recursos gráficos y funciones de inteligencia artificial.",
        usos: [
            { titulo: "Diseño gráfico", descripcion: "Crea afiches, invitaciones, publicaciones y otros diseños." },
            { titulo: "Presentaciones", descripcion: "Desarrolla diapositivas para exposiciones y proyectos." },
            { titulo: "Contenido para redes", descripcion: "Diseña publicaciones y material visual." }
        ],
        funciones: ["Diseño gráfico", "Plantillas", "Edición de imágenes", "Presentaciones", "Herramientas de IA"],
        ventajas: ["Fácil de utilizar", "Amplia variedad de plantillas", "Permite trabajar con distintos formatos"],
        disponibilidad: "Cuenta con una versión gratuita y planes de pago."
    },

    {
        id: "leonardo",
        nombre: "Leonardo AI",
        categorias: ["Imágenes"],
        inicial: "L",
        color: "purple",
        destacado: true,
        etiquetas: ["crear imagenes", "arte", "ilustraciones", "diseño", "personajes", "imagenes"],
        descripcion: "Herramienta de inteligencia artificial para generar imágenes, ilustraciones y recursos visuales.",
        enlace: "https://leonardo.ai",
        queEs: "Leonardo AI es una plataforma de generación visual que permite crear imágenes mediante descripciones escritas.",
        usos: [
            { titulo: "Crear imágenes", descripcion: "Genera imágenes a partir de instrucciones." },
            { titulo: "Diseño de personajes", descripcion: "Desarrolla conceptos visuales y personajes." },
            { titulo: "Arte digital", descripcion: "Crea ilustraciones y composiciones artísticas." }
        ],
        funciones: ["Generación de imágenes", "Edición visual", "Estilos artísticos", "Recursos creativos"],
        ventajas: ["Variedad de estilos", "Permite explorar ideas visuales", "Ofrece herramientas de edición"],
        disponibilidad: "Cuenta con opciones gratuitas limitadas y planes de pago."
    },

    {
        id: "firefly",
        nombre: "Adobe Firefly",
        categorias: ["Imágenes", "Video"],
        inicial: "A",
        color: "orange",
        destacado: false,
        etiquetas: ["crear imagenes", "diseño", "editar", "efectos", "fotografia"],
        descripcion: "Familia de herramientas de inteligencia artificial de Adobe para generar y editar contenido creativo.",
        enlace: "https://firefly.adobe.com",
        queEs: "Adobe Firefly reúne funciones de inteligencia artificial generativa para crear y modificar contenido visual.",
        usos: [
            { titulo: "Generar imágenes", descripcion: "Crea imágenes a partir de descripciones." },
            { titulo: "Editar diseños", descripcion: "Modifica y amplía contenido visual." },
            { titulo: "Crear efectos", descripcion: "Experimenta con estilos y efectos creativos." }
        ],
        funciones: ["Generación de imágenes", "Edición generativa", "Efectos de texto", "Herramientas creativas"],
        ventajas: ["Integración con el ecosistema Adobe", "Herramientas para diseño", "Opciones de edición generativa"],
        disponibilidad: "Ofrece acceso con límites y planes de Adobe."
    },

    {
        id: "ideogram",
        nombre: "Ideogram",
        categorias: ["Imágenes"],
        inicial: "I",
        color: "purple",
        destacado: false,
        etiquetas: ["crear imagenes", "texto en imagenes", "logos", "diseño", "ilustraciones"],
        descripcion: "Generador de imágenes con inteligencia artificial que permite crear composiciones visuales a partir de texto.",
        enlace: "https://ideogram.ai",
        queEs: "Ideogram es una plataforma de generación de imágenes que destaca por sus capacidades para integrar texto en diseños visuales.",
        usos: [
            { titulo: "Diseños gráficos", descripcion: "Crea composiciones visuales para diferentes proyectos." },
            { titulo: "Carteles", descripcion: "Genera imágenes con elementos escritos." },
            { titulo: "Ilustraciones", descripcion: "Produce imágenes a partir de instrucciones." }
        ],
        funciones: ["Generación de imágenes", "Diseños con texto", "Estilos visuales"],
        ventajas: ["Útil para diseños tipográficos", "Permite explorar estilos", "Genera imágenes mediante instrucciones"],
        disponibilidad: "Cuenta con opciones gratuitas limitadas y planes de pago."
    },

    {
        id: "midjourney",
        nombre: "Midjourney",
        categorias: ["Imágenes"],
        inicial: "M",
        color: "purple",
        destacado: true,
        etiquetas: ["arte", "crear imagenes", "ilustraciones", "fotografia", "diseño"],
        descripcion: "Herramienta de inteligencia artificial especializada en la creación de imágenes artísticas y visuales.",
        enlace: "https://www.midjourney.com",
        queEs: "Midjourney es una plataforma de generación de imágenes que transforma descripciones escritas en composiciones visuales.",
        usos: [
            { titulo: "Arte digital", descripcion: "Crea imágenes con diferentes estilos artísticos." },
            { titulo: "Conceptos visuales", descripcion: "Desarrolla ideas para proyectos creativos." },
            { titulo: "Ilustraciones", descripcion: "Genera imágenes para inspiración y diseño." }
        ],
        funciones: ["Generación de imágenes", "Estilos artísticos", "Variaciones visuales"],
        ventajas: ["Amplias posibilidades creativas", "Gran variedad de estilos", "Permite desarrollar conceptos visuales"],
        disponibilidad: "El acceso y las funciones dependen de los planes disponibles."
    },

    // ============================================
    // VIDEO
    // ============================================

    {
        id: "runway",
        nombre: "Runway",
        categorias: ["Video", "Imágenes"],
        inicial: "R",
        color: "purple",
        destacado: true,
        etiquetas: ["crear videos", "animacion", "editar video", "efectos", "video con ia"],
        descripcion: "Plataforma de inteligencia artificial para generar, editar y transformar contenido audiovisual.",
        enlace: "https://runwayml.com",
        queEs: "Runway es una plataforma creativa que incorpora modelos de inteligencia artificial para trabajar con imágenes y videos.",
        usos: [
            { titulo: "Generar videos", descripcion: "Crea clips audiovisuales a partir de instrucciones." },
            { titulo: "Edición", descripcion: "Modifica y transforma contenido visual." },
            { titulo: "Efectos creativos", descripcion: "Experimenta con herramientas de edición y generación." }
        ],
        funciones: ["Generación de video", "Edición audiovisual", "Efectos visuales", "Generación de imágenes"],
        ventajas: ["Reúne herramientas creativas", "Permite experimentar con video generativo", "Ofrece funciones de edición"],
        disponibilidad: "Cuenta con opciones de acceso limitado y planes de pago."
    },

    {
        id: "capcut",
        nombre: "CapCut",
        categorias: ["Video", "Audio"],
        inicial: "C",
        color: "mint",
        destacado: true,
        etiquetas: ["editar video", "videos", "subtitulos", "efectos", "redes sociales", "audio"],
        descripcion: "Editor de video que ofrece herramientas de edición y funciones impulsadas por inteligencia artificial.",
        enlace: "https://www.capcut.com",
        queEs: "CapCut es una plataforma de edición audiovisual que permite crear y modificar videos con herramientas tradicionales y funciones inteligentes.",
        usos: [
            { titulo: "Editar videos", descripcion: "Corta clips, organiza escenas y agrega transiciones." },
            { titulo: "Subtítulos", descripcion: "Utiliza funciones automáticas para trabajar con texto en videos." },
            { titulo: "Contenido para redes", descripcion: "Prepara videos para diferentes plataformas." }
        ],
        funciones: ["Edición de video", "Subtítulos automáticos", "Efectos", "Edición de audio"],
        ventajas: ["Interfaz sencilla", "Variedad de herramientas", "Adecuado para contenido digital"],
        disponibilidad: "Tiene funciones gratuitas y opciones de pago."
    },

    {
        id: "kling",
        nombre: "Kling AI",
        categorias: ["Video", "Imágenes"],
        inicial: "K",
        color: "blue",
        destacado: false,
        etiquetas: ["crear videos", "animacion", "imagenes a video", "video con ia"],
        descripcion: "Plataforma de inteligencia artificial para generar videos e imágenes mediante instrucciones.",
        enlace: "https://klingai.com",
        queEs: "Kling AI es una herramienta generativa que permite crear contenido audiovisual a partir de texto e imágenes.",
        usos: [
            { titulo: "Crear videos", descripcion: "Genera clips a partir de descripciones." },
            { titulo: "Animar imágenes", descripcion: "Transforma imágenes estáticas en contenido animado." },
            { titulo: "Contenido creativo", descripcion: "Explora ideas visuales para proyectos." }
        ],
        funciones: ["Generación de video", "Texto a video", "Imagen a video"],
        ventajas: ["Permite generar clips mediante instrucciones", "Ofrece herramientas audiovisuales", "Facilita explorar conceptos creativos"],
        disponibilidad: "Cuenta con opciones gratuitas limitadas y planes de pago."
    },

    {
        id: "pika",
        nombre: "Pika",
        categorias: ["Video"],
        inicial: "P",
        color: "purple",
        destacado: false,
        etiquetas: ["crear videos", "animacion", "efectos", "imagenes a video"],
        descripcion: "Herramienta de inteligencia artificial para crear y transformar videos a partir de instrucciones.",
        enlace: "https://pika.art",
        queEs: "Pika es una plataforma de creación audiovisual que permite generar y modificar clips mediante inteligencia artificial.",
        usos: [
            { titulo: "Generar clips", descripcion: "Crea videos a partir de descripciones escritas." },
            { titulo: "Animar imágenes", descripcion: "Da movimiento a imágenes estáticas." },
            { titulo: "Experimentar", descripcion: "Prueba efectos y transformaciones audiovisuales." }
        ],
        funciones: ["Texto a video", "Imagen a video", "Efectos visuales"],
        ventajas: ["Facilita la creación de clips", "Permite experimentar con efectos", "Tiene una interfaz visual"],
        disponibilidad: "Ofrece opciones de acceso limitado y planes de pago."
    },

    // ============================================
    // PROGRAMACIÓN
    // ============================================

    {
        id: "github-copilot",
        nombre: "GitHub Copilot",
        categorias: ["Programación"],
        inicial: "G",
        color: "blue",
        destacado: true,
        etiquetas: ["programar", "codigo", "desarrollo", "autocompletar", "software"],
        descripcion: "Asistente de programación que ayuda a escribir código y mejorar el flujo de desarrollo.",
        enlace: "https://github.com/features/copilot",
        queEs: "GitHub Copilot es una herramienta de asistencia para desarrolladores que utiliza inteligencia artificial para sugerir y explicar código.",
        usos: [
            { titulo: "Escribir código", descripcion: "Sugiere fragmentos de código mientras programas." },
            { titulo: "Resolver dudas", descripcion: "Ayuda a comprender funciones y estructuras." },
            { titulo: "Desarrollo", descripcion: "Acompaña diferentes tareas del proceso de programación." }
        ],
        funciones: ["Autocompletado", "Sugerencias de código", "Asistencia de programación"],
        ventajas: ["Se integra con editores compatibles", "Facilita tareas repetitivas", "Ayuda a comprender código"],
        disponibilidad: "Ofrece planes gratuitos con límites y planes de pago."
    },

    {
        id: "cursor",
        nombre: "Cursor",
        categorias: ["Programación"],
        inicial: "C",
        color: "mint",
        destacado: true,
        etiquetas: ["programar", "codigo", "editor", "desarrollo", "depurar", "software"],
        descripcion: "Editor de código con inteligencia artificial integrada para ayudar a desarrollar proyectos de software.",
        enlace: "https://cursor.com",
        queEs: "Cursor es un editor de código diseñado para integrar funciones de inteligencia artificial en el flujo de programación.",
        usos: [
            { titulo: "Desarrollar proyectos", descripcion: "Trabaja con archivos y código dentro del editor." },
            { titulo: "Corregir errores", descripcion: "Ayuda a identificar y solucionar problemas en el código." },
            { titulo: "Comprender código", descripcion: "Permite consultar explicaciones sobre un proyecto." }
        ],
        funciones: ["Edición de código", "Asistencia con IA", "Análisis de proyectos", "Depuración"],
        ventajas: ["Integra IA en el editor", "Facilita trabajar con proyectos", "Ayuda a comprender código existente"],
        disponibilidad: "Cuenta con un plan gratuito limitado y planes de pago."
    },

    {
        id: "windsurf",
        nombre: "Windsurf",
        categorias: ["Programación"],
        inicial: "W",
        color: "blue",
        destacado: false,
        etiquetas: ["programar", "codigo", "desarrollo web", "editor", "software"],
        descripcion: "Entorno de desarrollo con inteligencia artificial para ayudar a construir y modificar proyectos de software.",
        enlace: "https://windsurf.com",
        queEs: "Windsurf es un entorno de desarrollo que integra herramientas de inteligencia artificial para apoyar el trabajo de programación.",
        usos: [
            { titulo: "Desarrollo", descripcion: "Ayuda a crear y modificar proyectos de software." },
            { titulo: "Código", descripcion: "Permite generar y comprender fragmentos de código." },
            { titulo: "Productividad", descripcion: "Facilita tareas dentro del entorno de desarrollo." }
        ],
        funciones: ["Editor de código", "Asistencia inteligente", "Análisis de proyectos"],
        ventajas: ["Integra herramientas de IA", "Ayuda en diferentes etapas del desarrollo", "Facilita trabajar con código"],
        disponibilidad: "Ofrece opciones gratuitas y planes de pago."
    },

    {
        id: "replit",
        nombre: "Replit",
        categorias: ["Programación"],
        inicial: "R",
        color: "orange",
        destacado: false,
        etiquetas: ["programar", "crear aplicaciones", "codigo", "desarrollo web", "software"],
        descripcion: "Plataforma en línea para programar, ejecutar y desarrollar aplicaciones desde el navegador.",
        enlace: "https://replit.com",
        queEs: "Replit es un entorno de desarrollo en línea que permite escribir, ejecutar y compartir proyectos de programación.",
        usos: [
            { titulo: "Aprender programación", descripcion: "Practica diferentes lenguajes desde el navegador." },
            { titulo: "Crear aplicaciones", descripcion: "Desarrolla proyectos y aplicaciones." },
            { titulo: "Trabajar con IA", descripcion: "Utiliza herramientas inteligentes para apoyar el desarrollo." }
        ],
        funciones: ["Editor en línea", "Ejecución de código", "Desarrollo de aplicaciones", "Herramientas de IA"],
        ventajas: ["No requiere configurar un entorno local para comenzar", "Permite compartir proyectos", "Facilita practicar programación"],
        disponibilidad: "Cuenta con acceso gratuito y planes de pago."
    },


    {
        id: "lovable",
        nombre: "Lovable",
        categorias: ["Programación"],
        inicial: "L",
        color: "mint",
        destacado: false,

        etiquetas: [
            "crear paginas web",
            "crear aplicaciones",
            "inteligencia artificial",
            "programar",
            "desarrollo web",
            "diseño web",
            "crear sitios web",
            "aplicaciones sin codigo",
            "prototipos",
            "frontend",
            "backend",
            "bases de datos",
            "desarrollo con ia"
        ],

        descripcion: "Lovable es una plataforma de desarrollo con inteligencia artificial que permite crear sitios web y aplicaciones mediante instrucciones escritas, facilitando el diseño, la programación y la creación de proyectos digitales.",

        enlace: "https://lovable.dev",

        queEs: "Lovable es una herramienta de inteligencia artificial diseñada para transformar ideas en aplicaciones web funcionales. Los usuarios pueden describir lo que desean construir mediante lenguaje natural y la plataforma genera una primera versión del proyecto, incluyendo interfaces y código. También permite realizar modificaciones mediante nuevas instrucciones.",

        usos: [
            {
                titulo: "Crear páginas web",
                descripcion: "Permite desarrollar páginas de presentación, portafolios, sitios informativos y páginas para negocios a partir de instrucciones escritas."
            },
            {
                titulo: "Desarrollar aplicaciones web",
                descripcion: "Ayuda a construir aplicaciones con diferentes pantallas, formularios y funcionalidades, según las necesidades del proyecto."
            },
            {
                titulo: "Crear prototipos",
                descripcion: "Facilita transformar una idea en una versión inicial de una aplicación para visualizarla, probarla y mejorarla."
            },
            {
                titulo: "Diseñar interfaces",
                descripcion: "Genera diseños visuales con componentes, secciones y estructuras que pueden modificarse mediante instrucciones."
            },
            {
                titulo: "Desarrollar proyectos académicos",
                descripcion: "Puede utilizarse para explorar ideas de software, aprender sobre estructuras de aplicaciones y crear demostraciones de proyectos."
            },
            {
                titulo: "Crear herramientas para negocios",
                descripcion: "Ayuda a desarrollar prototipos de paneles administrativos, sistemas de reservas y aplicaciones para organizar información."
            }
        ],

        funciones: [
            "Generación de sitios web mediante inteligencia artificial",
            "Creación de aplicaciones a partir de instrucciones",
            "Diseño automático de interfaces",
            "Generación y edición de código",
            "Modificación de proyectos mediante conversaciones",
            "Vista previa de aplicaciones",
            "Integración con servicios y bases de datos compatibles",
            "Publicación de proyectos web",
            "Creación rápida de prototipos"
        ],

        ventajas: [
            "Permite comenzar un proyecto sin escribir todo el código manualmente",
            "Facilita transformar ideas en prototipos funcionales",
            "Combina diseño y desarrollo en una misma plataforma",
            "Permite solicitar cambios mediante lenguaje natural",
            "Ayuda a reducir el tiempo necesario para crear una primera versión",
            "Es útil tanto para principiantes como para personas con conocimientos de programación"
        ],

        disponibilidad: "Lovable ofrece un plan gratuito con límites de uso y diferentes planes de pago. Algunas funciones, capacidades y límites dependen del plan seleccionado."
    },


    {
        id: "bolt",
        nombre: "Bolt",
        categorias: ["Programación"],
        inicial: "B",
        color: "orange",
        destacado: false,
        etiquetas: ["crear paginas web", "programar", "aplicaciones", "codigo", "desarrollo"],
        descripcion: "Herramienta de desarrollo con inteligencia artificial que permite crear aplicaciones directamente desde el navegador.",
        enlace: "https://bolt.new",
        queEs: "Bolt es una plataforma que utiliza inteligencia artificial para generar y ejecutar proyectos de desarrollo web.",
        usos: [
            { titulo: "Crear aplicaciones", descripcion: "Construye proyectos a partir de instrucciones escritas." },
            { titulo: "Desarrollo web", descripcion: "Genera estructuras y componentes para sitios web." },
            { titulo: "Prototipos", descripcion: "Permite convertir ideas en proyectos funcionales." }
        ],
        funciones: ["Generación de código", "Desarrollo web", "Creación de prototipos"],
        ventajas: ["Funciona desde el navegador", "Permite comenzar proyectos rápidamente", "Combina generación y ejecución de código"],
        disponibilidad: "Ofrece acceso gratuito limitado y planes de pago."
    },

    // ============================================
    // AUDIO Y MÚSICA
    // ============================================

    {
        id: "elevenlabs",
        nombre: "ElevenLabs",
        categorias: ["Audio"],
        inicial: "E",
        color: "purple",
        destacado: true,
        etiquetas: ["voz", "audio", "locucion", "narracion", "texto a voz", "podcast"],
        descripcion: "Plataforma de inteligencia artificial especializada en generación de voz y herramientas de audio.",
        enlace: "https://elevenlabs.io",
        enlaceAfiliado: "",
        afiliadoActivo: false,
        queEs: "ElevenLabs es una plataforma que utiliza inteligencia artificial para generar voces y trabajar con contenido de audio.",
        usos: [
            { titulo: "Narraciones", descripcion: "Convierte textos en contenido hablado." },
            { titulo: "Contenido audiovisual", descripcion: "Crea voces para proyectos multimedia." },
            { titulo: "Audio", descripcion: "Explora herramientas de generación y procesamiento de voz." }
        ],
        funciones: ["Texto a voz", "Generación de voz", "Herramientas de audio"],
        ventajas: ["Variedad de voces", "Permite trabajar con diferentes idiomas", "Útil para proyectos audiovisuales"],
        disponibilidad: "Cuenta con acceso gratuito limitado y planes de pago."
    },

    {
        id: "suno",
        nombre: "Suno",
        categorias: ["Audio"],
        inicial: "S",
        color: "purple",
        destacado: true,
        etiquetas: ["musica", "canciones", "crear musica", "composicion", "audio"],
        descripcion: "Plataforma de inteligencia artificial que permite generar canciones a partir de descripciones e ideas.",
        enlace: "https://suno.com",
        queEs: "Suno es una herramienta de generación musical que utiliza inteligencia artificial para crear canciones a partir de instrucciones.",
        usos: [
            { titulo: "Crear canciones", descripcion: "Genera composiciones a partir de ideas escritas." },
            { titulo: "Explorar estilos", descripcion: "Experimenta con diferentes estilos musicales." },
            { titulo: "Proyectos creativos", descripcion: "Desarrolla ideas musicales para proyectos." }
        ],
        funciones: ["Generación musical", "Creación de canciones", "Composición asistida"],
        ventajas: ["Facilita explorar ideas musicales", "Permite generar canciones mediante texto", "Ofrece diferentes estilos"],
        disponibilidad: "Cuenta con acceso gratuito limitado y planes de pago."
    },

    {
        id: "udio",
        nombre: "Udio",
        categorias: ["Audio"],
        inicial: "U",
        color: "blue",
        destacado: false,
        etiquetas: ["musica", "canciones", "crear musica", "audio", "composicion"],
        descripcion: "Herramienta de inteligencia artificial para explorar y generar composiciones musicales.",
        enlace: "https://www.udio.com",
        queEs: "Udio es una plataforma de generación musical que permite desarrollar ideas y composiciones mediante inteligencia artificial.",
        usos: [
            { titulo: "Crear música", descripcion: "Genera composiciones a partir de descripciones." },
            { titulo: "Experimentar", descripcion: "Explora diferentes estilos y propuestas musicales." },
            { titulo: "Ideas creativas", descripcion: "Desarrolla conceptos para proyectos de audio." }
        ],
        funciones: ["Generación musical", "Composición asistida", "Creación de audio"],
        ventajas: ["Permite experimentar con música generativa", "Ofrece diferentes posibilidades creativas", "Facilita desarrollar ideas musicales"],
        disponibilidad: "La disponibilidad y las funciones dependen de las condiciones de la plataforma."
    },

    {
        id: "descript",
        nombre: "Descript",
        categorias: ["Audio", "Video"],
        inicial: "D",
        color: "mint",
        destacado: false,
        etiquetas: ["editar audio", "editar video", "podcast", "transcribir", "subtitulos"],
        descripcion: "Herramienta de edición de audio y video que incorpora inteligencia artificial para facilitar la creación de contenido.",
        enlace: "https://www.descript.com",
        enlaceAfiliado: "",
        afiliadoActivo: false,
        queEs: "Descript es una plataforma de edición multimedia que permite trabajar con audio y video mediante herramientas basadas en texto.",
        usos: [
            { titulo: "Editar podcasts", descripcion: "Organiza y modifica grabaciones de audio." },
            { titulo: "Editar videos", descripcion: "Trabaja con contenido audiovisual." },
            { titulo: "Transcribir", descripcion: "Convierte grabaciones en texto." }
        ],
        funciones: ["Edición de audio", "Edición de video", "Transcripción", "Subtítulos"],
        ventajas: ["Combina audio y video", "Facilita la edición mediante texto", "Útil para crear contenido"],
        disponibilidad: "Cuenta con opciones gratuitas limitadas y planes de pago."
    },

    {
        id: "otter",
        nombre: "Otter.ai",
        categorias: ["Audio", "Estudio"],
        inicial: "O",
        color: "blue",
        destacado: false,
        etiquetas: ["transcribir", "audio", "reuniones", "notas", "resumir", "voz"],
        descripcion: "Asistente de inteligencia artificial para transcribir conversaciones y organizar notas de reuniones.",
        enlace: "https://otter.ai",
        enlaceAfiliado: "",
        afiliadoActivo: false,
        queEs: "Otter.ai es una plataforma que utiliza inteligencia artificial para convertir conversaciones y grabaciones en texto.",
        usos: [
            { titulo: "Transcribir", descripcion: "Convierte grabaciones y conversaciones en texto." },
            { titulo: "Tomar notas", descripcion: "Organiza información de reuniones y conversaciones." },
            { titulo: "Resumir", descripcion: "Facilita revisar los puntos principales de una conversación." }
        ],
        funciones: ["Transcripción", "Notas automáticas", "Resúmenes", "Organización de conversaciones"],
        ventajas: ["Ahorra tiempo al revisar grabaciones", "Facilita organizar notas", "Permite consultar transcripciones"],
        disponibilidad: "Cuenta con un plan gratuito limitado y planes de pago."
    }

];

// ============================================
// DISPONIBILIDAD Y MODELO DE PRECIOS
// ============================================

const preciosHerramientas = {
    // Texto, estudio y asistentes
    chatgpt: "freemium",
    gemini: "freemium",
    claude: "freemium",
    copilot: "freemium",
    deepseek: "gratis",
    grok: "freemium",
    perplexity: "freemium",
    notebooklm: "freemium",
    elicit: "freemium",
    gamma: "freemium",

    // Imágenes y diseño
    canva: "freemium",
    leonardo: "freemium",
    firefly: "freemium",
    ideogram: "freemium",
    midjourney: "pago",

    // Video
    runway: "freemium",
    capcut: "freemium",
    kling: "freemium",
    pika: "freemium",

    // Programación
    "github-copilot": "freemium",
    cursor: "freemium",
    windsurf: "freemium",
    replit: "freemium",
    lovable: "freemium",
    bolt: "freemium",

    // Audio y música
    elevenlabs: "freemium",
    suno: "freemium",
    udio: "freemium",
    descript: "freemium",
    otter: "freemium"
};

// Asignar disponibilidad a cada herramienta
herramientas.forEach(herramienta => {
    herramienta.precio = preciosHerramientas[herramienta.id] || "freemium";
});