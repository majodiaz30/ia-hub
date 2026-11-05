// ============================================
// IA HUB - CATÁLOGO, BÚSQUEDA Y FAVORITOS
// ============================================

// Catálogo. Cada herramienta puede pertenecer a varias categorías.
// Categorías válidas: Texto, Imágenes, Video, Programación, Estudio, Audio
// Colores válidos: purple, blue, orange, mint

const herramientas = [

    {
        id: "chatgpt",
        nombre: "ChatGPT",
        categorias: ["Texto", "Estudio", "Programación"],
        inicial: "C",
        color: "purple",
        destacado: true,

        etiquetas: [
            "escribir",
            "redactar",
            "estudiar",
            "programar",
            "preguntas",
            "asistente",
            "resumir",
            "ideas",
            "explicar"
        ],

        descripcion: "ChatGPT es un asistente de inteligencia artificial desarrollado por OpenAI que permite conversar, resolver dudas, aprender nuevos temas, redactar textos y trabajar con diferentes tipos de contenido.",

        queEs: "ChatGPT es una herramienta de inteligencia artificial diseñada para comprender instrucciones y generar respuestas mediante conversaciones. Puede ayudar en actividades académicas, creativas y profesionales.",

        usos: [
            {
                titulo: "Estudiar y aprender",
                descripcion: "Explica conceptos, desarrolla ejemplos, resume información y ayuda a comprender diferentes temas."
            },
            {
                titulo: "Escribir y redactar",
                descripcion: "Ayuda a crear textos, organizar ideas, corregir escritos y elaborar contenidos."
            },
            {
                titulo: "Programar",
                descripcion: "Explica código, ayuda a encontrar errores y propone soluciones de programación."
            },
            {
                titulo: "Investigar",
                descripcion: "Permite explorar temas, analizar información y organizar conocimientos."
            }
        ],

        funciones: [
            "Conversación con inteligencia artificial",
            "Generación y corrección de textos",
            "Análisis de archivos",
            "Ayuda con programación",
            "Generación de imágenes",
            "Análisis de información",
            "Búsqueda e investigación"
        ],

        ventajas: [
            "Facilita el aprendizaje de diferentes temas.",
            "Permite realizar distintas tareas desde una misma plataforma.",
            "Se adapta a diferentes instrucciones y necesidades."
        ],

        disponibilidad: "Cuenta con una modalidad gratuita y diferentes planes de pago. Los límites y funciones disponibles dependen del plan.",

        enlace: "https://chatgpt.com"
    },


    {
        id: "gemini",
        nombre: "Gemini",
        categorias: ["Texto", "Estudio", "Programación", "Imágenes"],
        inicial: "G",
        color: "blue",
        destacado: true,

        etiquetas: [
            "asistente",
            "investigar",
            "estudiar",
            "redactar",
            "resumir",
            "imágenes",
            "programar",
            "google"
        ],

        descripcion: "Gemini es el asistente de inteligencia artificial de Google que permite buscar información, crear contenido, analizar archivos y resolver diferentes tareas.",

        queEs: "Gemini es una familia de modelos y un asistente de inteligencia artificial desarrollado por Google. Está diseñado para comprender distintos tipos de información y ayudar a realizar tareas mediante instrucciones.",

        usos: [
            {
                titulo: "Estudiar",
                descripcion: "Ayuda a explicar conceptos, resumir información y preparar actividades académicas."
            },
            {
                titulo: "Investigar",
                descripcion: "Permite explorar temas y consultar información con apoyo de las herramientas de Google."
            },
            {
                titulo: "Crear contenido",
                descripcion: "Ayuda a redactar textos, generar ideas y organizar información."
            },
            {
                titulo: "Analizar información",
                descripcion: "Puede trabajar con diferentes tipos de contenido y archivos compatibles."
            }
        ],

        funciones: [
            "Conversación con inteligencia artificial",
            "Generación de textos",
            "Análisis de imágenes",
            "Comprensión de documentos",
            "Ayuda con programación",
            "Integración con servicios de Google"
        ],

        ventajas: [
            "Se integra con diferentes servicios del ecosistema Google.",
            "Permite trabajar con distintos tipos de información.",
            "Ofrece herramientas para estudiar, investigar y crear contenido."
        ],

        disponibilidad: "Cuenta con acceso gratuito y planes de pago. Las funciones y los límites dependen del plan y la región.",

        enlace: "https://gemini.google.com"
    },


    {
        id: "claude",
        nombre: "Claude",
        categorias: ["Texto", "Estudio", "Programación"],
        inicial: "C",
        color: "orange",
        destacado: true,

        etiquetas: [
            "redactar",
            "analizar",
            "estudiar",
            "programar",
            "documentos",
            "escribir",
            "razonar",
            "resumir"
        ],

        descripcion: "Claude es un asistente de inteligencia artificial desarrollado por Anthropic, orientado a la conversación, el análisis de información, la escritura y la programación.",

        queEs: "Claude es una familia de modelos de inteligencia artificial de Anthropic. Su asistente permite interactuar mediante conversaciones y trabajar con textos, documentos y tareas complejas.",

        usos: [
            {
                titulo: "Redactar textos",
                descripcion: "Ayuda a escribir, corregir y mejorar documentos y diferentes contenidos."
            },
            {
                titulo: "Analizar documentos",
                descripcion: "Permite examinar información y extraer ideas importantes de archivos compatibles."
            },
            {
                titulo: "Programar",
                descripcion: "Ayuda a explicar código, revisar errores y desarrollar soluciones."
            },
            {
                titulo: "Estudiar",
                descripcion: "Explica conceptos y ayuda a organizar información para el aprendizaje."
            }
        ],

        funciones: [
            "Generación y corrección de textos",
            "Análisis de documentos",
            "Programación asistida",
            "Resumen de información",
            "Razonamiento y resolución de problemas",
            "Conversación con inteligencia artificial"
        ],

        ventajas: [
            "Es útil para trabajar con textos extensos.",
            "Ayuda a organizar y analizar información.",
            "Ofrece asistencia para escritura y programación."
        ],

        disponibilidad: "Ofrece una modalidad gratuita y planes de pago. Los límites y las funciones disponibles dependen del plan.",

        enlace: "https://claude.ai"
    },

    {
        id: "copilot",
        nombre: "Microsoft Copilot",
        categorias: ["Texto", "Estudio", "Programación", "Imágenes"],
        inicial: "M",
        color: "blue",
        destacado: true,
        etiquetas: [
            "asistente", "microsoft", "redactar", "estudiar",
            "investigar", "imágenes", "productividad", "office"
        ],
        descripcion: "Microsoft Copilot es un asistente de inteligencia artificial que ayuda a buscar información, crear contenido, generar imágenes y realizar diferentes tareas.",
        queEs: "Microsoft Copilot es un asistente de inteligencia artificial desarrollado por Microsoft. Permite interactuar mediante instrucciones y ofrece herramientas para trabajar, aprender y crear contenido.",
        usos: [
            {
                titulo: "Crear contenido",
                descripcion: "Ayuda a redactar textos, organizar ideas y preparar diferentes tipos de documentos."
            },
            {
                titulo: "Buscar información",
                descripcion: "Permite consultar temas, obtener explicaciones y explorar información."
            },
            {
                titulo: "Generar imágenes",
                descripcion: "Puede crear imágenes a partir de descripciones escritas."
            },
            {
                titulo: "Mejorar la productividad",
                descripcion: "Ayuda a organizar tareas y trabajar con herramientas del entorno Microsoft."
            }
        ],
        funciones: [
            "Conversación con inteligencia artificial",
            "Generación y corrección de textos",
            "Creación de imágenes",
            "Búsqueda de información",
            "Ayuda con programación",
            "Integración con herramientas de Microsoft"
        ],
        ventajas: [
            "Se integra con diferentes servicios de Microsoft.",
            "Permite realizar tareas de escritura e investigación.",
            "Ofrece herramientas para mejorar la productividad."
        ],
        disponibilidad: "Cuenta con acceso gratuito y opciones de pago. Las funciones disponibles dependen del producto, el plan y la cuenta utilizada.",
        enlace: "https://copilot.microsoft.com"
    },
    {
        id: "deepseek",
        nombre: "DeepSeek",
        categorias: ["Texto", "Estudio", "Programación"],
        inicial: "D",
        color: "blue",
        destacado: true,
        etiquetas: [
            "razonamiento", "programar", "estudiar", "resolver",
            "analizar", "matemáticas", "código", "asistente"
        ],
        descripcion: "DeepSeek es una plataforma de inteligencia artificial que permite conversar, analizar información, resolver problemas y obtener ayuda con programación.",
        queEs: "DeepSeek es una familia de modelos de inteligencia artificial desarrollada por la empresa china DeepSeek. Sus modelos están orientados a tareas como el razonamiento, la generación de texto y la programación.",
        usos: [
            {
                titulo: "Programar",
                descripcion: "Ayuda a escribir código, explicar instrucciones y encontrar posibles errores."
            },
            {
                titulo: "Resolver problemas",
                descripcion: "Permite desarrollar explicaciones y analizar problemas paso a paso."
            },
            {
                titulo: "Estudiar",
                descripcion: "Ayuda a comprender conceptos, resumir temas y practicar ejercicios."
            },
            {
                titulo: "Analizar información",
                descripcion: "Puede organizar datos, explicar textos y desarrollar respuestas sobre diferentes temas."
            }
        ],
        funciones: [
            "Generación de textos",
            "Razonamiento y resolución de problemas",
            "Programación asistida",
            "Explicación de conceptos",
            "Análisis de información",
            "Conversación con inteligencia artificial"
        ],
        ventajas: [
            "Es útil para tareas de razonamiento y programación.",
            "Ofrece modelos de inteligencia artificial de código abierto.",
            "Cuenta con acceso a través de su plataforma web."
        ],
        disponibilidad: "Ofrece acceso gratuito a través de su plataforma, aunque las condiciones y funciones pueden variar según el servicio utilizado.",
        enlace: "https://www.deepseek.com"
    },
    {
        id: "grok",
        nombre: "Grok",
        categorias: ["Texto", "Estudio", "Imágenes"],
        inicial: "G",
        color: "purple",
        destacado: true,
        etiquetas: [
            "asistente", "preguntas", "investigar", "actualidad",
            "redactar", "imágenes", "analizar", "x"
        ],
        descripcion: "Grok es un asistente de inteligencia artificial desarrollado por xAI que permite conversar, investigar temas, generar contenido y analizar información.",
        queEs: "Grok es un asistente de inteligencia artificial creado por xAI. Está diseñado para responder preguntas, ayudar con diferentes tareas y ofrecer herramientas de generación y análisis de contenido.",
        usos: [
            {
                titulo: "Consultar información",
                descripcion: "Permite realizar preguntas y obtener explicaciones sobre diferentes temas."
            },
            {
                titulo: "Investigar actualidad",
                descripcion: "Puede ayudar a explorar conversaciones y temas de actualidad disponibles en sus fuentes."
            },
            {
                titulo: "Crear contenido",
                descripcion: "Ayuda a redactar textos, desarrollar ideas y preparar contenido."
            },
            {
                titulo: "Generar imágenes",
                descripcion: "Ofrece herramientas para crear imágenes a partir de instrucciones."
            }
        ],
        funciones: [
            "Conversación con inteligencia artificial",
            "Generación de textos",
            "Búsqueda de información",
            "Análisis de contenido",
            "Generación de imágenes",
            "Integración con el ecosistema de X"
        ],
        ventajas: [
            "Permite explorar temas de actualidad.",
            "Combina herramientas de conversación y creación de contenido.",
            "Ofrece funciones para analizar información."
        ],
        disponibilidad: "Su acceso y sus límites dependen del plan, la región y las condiciones de la plataforma X.",
        enlace: "https://grok.com"
    },
    {
        id: "perplexity",
        nombre: "Perplexity",
        categorias: ["Texto", "Estudio"],
        inicial: "P",
        color: "teal",
        destacado: true,
        etiquetas: [
            "investigar", "buscar", "fuentes", "estudiar",
            "preguntas", "resumir", "información", "respuestas"
        ],
        descripcion: "Perplexity es un buscador con inteligencia artificial que permite investigar temas y obtener respuestas acompañadas de fuentes de información.",
        queEs: "Perplexity es una plataforma de búsqueda e investigación basada en inteligencia artificial. Su objetivo es responder preguntas utilizando información de diferentes fuentes y mostrando referencias para consultar.",
        usos: [
            {
                titulo: "Investigar temas",
                descripcion: "Ayuda a explorar preguntas y encontrar información de diferentes fuentes."
            },
            {
                titulo: "Consultar fuentes",
                descripcion: "Presenta referencias que permiten revisar de dónde procede la información."
            },
            {
                titulo: "Estudiar",
                descripcion: "Permite comprender temas, obtener explicaciones y resumir información."
            },
            {
                titulo: "Comparar información",
                descripcion: "Ayuda a revisar diferentes perspectivas y organizar los resultados de una investigación."
            }
        ],
        funciones: [
            "Búsqueda de información con inteligencia artificial",
            "Respuestas con referencias y fuentes",
            "Resumen de información",
            "Exploración de temas",
            "Investigación asistida",
            "Análisis de preguntas"
        ],
        ventajas: [
            "Muestra fuentes para ampliar la investigación.",
            "Facilita la búsqueda de información.",
            "Permite obtener respuestas organizadas sobre distintos temas."
        ],
        disponibilidad: "Cuenta con una modalidad gratuita y opciones de pago. Las funciones y los límites dependen del plan.",
        enlace: "https://www.perplexity.ai"
    },
    {
        id: "notebooklm",
        nombre: "NotebookLM",
        categorias: ["Estudio", "Texto"],
        inicial: "N",
        color: "blue",
        destacado: true,
        etiquetas: [
            "estudiar", "investigar", "documentos", "resumir",
            "notas", "fuentes", "aprender", "google"
        ],
        descripcion: "NotebookLM es una herramienta de Google que utiliza inteligencia artificial para analizar documentos, resumir información y ayudar en el aprendizaje.",
        queEs: "NotebookLM es un asistente de investigación y aprendizaje desarrollado por Google. Trabaja con las fuentes que proporciona el usuario para responder preguntas y organizar información.",
        usos: [
            {
                titulo: "Estudiar con documentos",
                descripcion: "Permite cargar documentos y utilizarlos como material de estudio."
            },
            {
                titulo: "Crear resúmenes",
                descripcion: "Ayuda a identificar las ideas principales y organizar la información."
            },
            {
                titulo: "Resolver preguntas",
                descripcion: "Responde preguntas basándose en las fuentes agregadas al cuaderno."
            },
            {
                titulo: "Preparar material de estudio",
                descripcion: "Permite generar guías, preguntas frecuentes y otros recursos de aprendizaje."
            }
        ],
        funciones: [
            "Análisis de documentos",
            "Resúmenes de fuentes",
            "Respuestas basadas en documentos",
            "Generación de guías de estudio",
            "Creación de resúmenes de audio",
            "Organización de fuentes"
        ],
        ventajas: [
            "Trabaja directamente con las fuentes proporcionadas.",
            "Facilita la comprensión de documentos extensos.",
            "Ayuda a organizar materiales de investigación y estudio."
        ],
        disponibilidad: "Cuenta con acceso gratuito y opciones de planes superiores. Los límites y funciones dependen del plan y la región.",
        enlace: "https://notebooklm.google.com"
    },
    {
        id: "elicit",
        nombre: "Elicit",
        categorias: ["Estudio", "Texto"],
        inicial: "E",
        color: "teal",
        destacado: false,
        etiquetas: [
            "investigación", "artículos", "estudios", "ciencia",
            "fuentes", "resumir", "universidad", "academia"
        ],
        descripcion: "Elicit es una herramienta de inteligencia artificial orientada a la investigación académica y al análisis de artículos científicos.",
        queEs: "Elicit es una plataforma de investigación que utiliza inteligencia artificial para encontrar, analizar y organizar información de publicaciones científicas.",
        usos: [
            {
                titulo: "Buscar artículos científicos",
                descripcion: "Ayuda a encontrar investigaciones relacionadas con una pregunta o tema académico."
            },
            {
                titulo: "Analizar estudios",
                descripcion: "Permite revisar información importante de diferentes publicaciones científicas."
            },
            {
                titulo: "Comparar investigaciones",
                descripcion: "Ayuda a organizar resultados y comparar información entre distintos artículos."
            },
            {
                titulo: "Preparar revisiones bibliográficas",
                descripcion: "Facilita la recopilación y organización de literatura académica."
            }
        ],
        funciones: [
            "Búsqueda de literatura científica",
            "Análisis de artículos académicos",
            "Extracción de información",
            "Comparación de estudios",
            "Organización de investigaciones",
            "Apoyo en revisiones bibliográficas"
        ],
        ventajas: [
            "Está orientado a la investigación académica.",
            "Facilita la revisión de múltiples publicaciones.",
            "Ayuda a organizar información científica."
        ],
        disponibilidad: "Ofrece acceso gratuito con límites y planes de pago para funciones adicionales. Las condiciones pueden cambiar.",
        enlace: "https://elicit.com"
    },
    {
        id: "gamma",
        nombre: "Gamma",
        categorias: ["Texto", "Imágenes"],
        inicial: "G",
        color: "purple",
        destacado: true,
        etiquetas: [
            "presentaciones", "diapositivas", "diseño", "documentos",
            "exposiciones", "plantillas", "crear", "contenido"
        ],
        descripcion: "Gamma es una herramienta de inteligencia artificial que permite crear presentaciones, documentos y páginas visuales a partir de instrucciones.",
        queEs: "Gamma es una plataforma de creación de contenido visual que utiliza inteligencia artificial para transformar ideas y textos en presentaciones y documentos organizados.",
        usos: [
            {
                titulo: "Crear presentaciones",
                descripcion: "Genera diapositivas organizadas a partir de un tema o una descripción."
            },
            {
                titulo: "Preparar exposiciones",
                descripcion: "Ayuda a estructurar contenidos para trabajos académicos y presentaciones."
            },
            {
                titulo: "Diseñar documentos",
                descripcion: "Permite crear documentos visuales con diferentes diseños y estilos."
            },
            {
                titulo: "Compartir contenido",
                descripcion: "Facilita la publicación y presentación de materiales digitales."
            }
        ],
        funciones: [
            "Generación de presentaciones",
            "Creación de documentos visuales",
            "Diseños y plantillas",
            "Generación de contenido con IA",
            "Edición de diapositivas",
            "Compartir proyectos"
        ],
        ventajas: [
            "Permite crear presentaciones en menos tiempo.",
            "Ofrece diseños visuales personalizables.",
            "Ayuda a organizar ideas y contenidos."
        ],
        disponibilidad: "Cuenta con un plan gratuito y planes de pago. Los créditos y las funciones disponibles dependen del plan.",
        enlace: "https://gamma.app"
    },
    {
        id: "canva",
        nombre: "Canva",
        categorias: ["Imágenes", "Video", "Texto"],
        inicial: "C",
        color: "blue",
        destacado: true,
        etiquetas: [
            "diseño", "imágenes", "presentaciones", "videos",
            "publicaciones", "plantillas", "creatividad", "redes sociales"
        ],
        descripcion: "Canva es una plataforma de diseño gráfico que incorpora herramientas de inteligencia artificial para crear imágenes, presentaciones, videos y contenido visual.",
        queEs: "Canva es una plataforma de diseño y comunicación visual que permite crear diferentes materiales digitales mediante plantillas, herramientas de edición y funciones de inteligencia artificial.",
        usos: [
            {
                titulo: "Diseñar publicaciones",
                descripcion: "Permite crear contenido visual para redes sociales y otros medios digitales."
            },
            {
                titulo: "Crear presentaciones",
                descripcion: "Ofrece plantillas y herramientas para preparar diapositivas y exposiciones."
            },
            {
                titulo: "Editar imágenes",
                descripcion: "Incluye herramientas para modificar imágenes y aplicar efectos visuales."
            },
            {
                titulo: "Crear videos",
                descripcion: "Permite diseñar y editar videos utilizando recursos y plantillas."
            }
        ],
        funciones: [
            "Diseño gráfico",
            "Generación de imágenes con IA",
            "Edición de fotografías",
            "Creación de presentaciones",
            "Edición de videos",
            "Plantillas personalizables",
            "Herramientas de escritura con IA"
        ],
        ventajas: [
            "Cuenta con una gran variedad de plantillas.",
            "Permite crear diferentes tipos de contenido desde una misma plataforma.",
            "Ofrece herramientas de diseño fáciles de utilizar."
        ],
        disponibilidad: "Cuenta con una versión gratuita y planes de pago como Canva Pro y Canva para equipos. Algunas herramientas de IA tienen límites de uso.",
        enlace: "https://www.canva.com"
    },
    {
        id: "leonardo",
        nombre: "Leonardo AI",
        categorias: ["Imágenes"],
        inicial: "L",
        color: "purple",
        destacado: false,
        etiquetas: ["imágenes", "arte", "ilustración", "diseño", "personajes", "creatividad", "modelos"],
        descripcion: "Leonardo AI es una plataforma de inteligencia artificial especializada en la generación de imágenes y recursos visuales.",
        queEs: "Leonardo AI es una herramienta creativa que permite generar imágenes y elementos visuales a partir de descripciones escritas.",
        usos: [
            { titulo: "Crear imágenes", descripcion: "Genera imágenes a partir de instrucciones y descripciones de texto." },
            { titulo: "Diseñar personajes", descripcion: "Permite crear personajes y conceptos visuales para proyectos creativos." },
            { titulo: "Crear ilustraciones", descripcion: "Ayuda a producir ilustraciones digitales con diferentes estilos." },
            { titulo: "Desarrollar recursos visuales", descripcion: "Permite crear elementos gráficos para proyectos y diseños." }
        ],
        funciones: [
            "Generación de imágenes con IA",
            "Creación de ilustraciones",
            "Generación de personajes",
            "Edición de imágenes",
            "Personalización de estilos visuales"
        ],
        ventajas: [
            "Ofrece diferentes estilos para crear imágenes.",
            "Permite experimentar con ideas visuales.",
            "Incluye herramientas para editar y personalizar resultados."
        ],
        disponibilidad: "Cuenta con acceso gratuito limitado y planes de pago con funciones y créditos adicionales.",
        enlace: "https://leonardo.ai"
    },
    {
        id: "firefly",
        nombre: "Adobe Firefly",
        categorias: ["Imágenes", "Video"],
        inicial: "A",
        color: "orange",
        destacado: false,
        etiquetas: ["imágenes", "diseño", "edición", "fotografía", "efectos", "creatividad", "adobe"],
        descripcion: "Adobe Firefly es una familia de herramientas de inteligencia artificial de Adobe para generar y editar imágenes y contenido visual.",
        queEs: "Adobe Firefly es una plataforma creativa que utiliza inteligencia artificial generativa para ayudar a crear y modificar contenido visual.",
        usos: [
            { titulo: "Generar imágenes", descripcion: "Crea imágenes a partir de descripciones escritas." },
            { titulo: "Editar fotografías", descripcion: "Permite modificar imágenes y agregar o eliminar elementos." },
            { titulo: "Crear efectos visuales", descripcion: "Ayuda a aplicar efectos y transformar elementos gráficos." },
            { titulo: "Diseñar contenido", descripcion: "Facilita la creación de recursos visuales para proyectos creativos." }
        ],
        funciones: [
            "Generación de imágenes",
            "Relleno generativo",
            "Expansión de imágenes",
            "Efectos de texto",
            "Edición de contenido visual",
            "Generación de recursos creativos"
        ],
        ventajas: [
            "Se integra con herramientas del ecosistema Adobe.",
            "Facilita la edición y creación de imágenes.",
            "Ofrece diferentes opciones para experimentar visualmente."
        ],
        disponibilidad: "Ofrece acceso con créditos generativos y diferentes planes. La disponibilidad depende del producto y la suscripción.",
        enlace: "https://firefly.adobe.com"
    },
    {
        id: "ideogram",
        nombre: "Ideogram",
        categorias: ["Imágenes"],
        inicial: "I",
        color: "blue",
        destacado: false,
        etiquetas: ["imágenes", "diseño", "tipografía", "logotipos", "carteles", "ilustración", "creatividad"],
        descripcion: "Ideogram es una herramienta de inteligencia artificial enfocada en la generación de imágenes y diseños visuales a partir de texto.",
        queEs: "Ideogram es una plataforma de generación de imágenes que destaca por sus capacidades para incorporar texto y elementos tipográficos en composiciones visuales.",
        usos: [
            { titulo: "Crear carteles", descripcion: "Permite generar diseños visuales para anuncios y carteles." },
            { titulo: "Diseñar logotipos", descripcion: "Ayuda a explorar conceptos gráficos para identidades visuales." },
            { titulo: "Crear imágenes con texto", descripcion: "Genera composiciones que combinan ilustraciones y elementos escritos." },
            { titulo: "Desarrollar ideas visuales", descripcion: "Permite experimentar con estilos y conceptos creativos." }
        ],
        funciones: [
            "Generación de imágenes",
            "Creación de diseños tipográficos",
            "Generación de carteles",
            "Edición de imágenes",
            "Exploración de estilos visuales"
        ],
        ventajas: [
            "Destaca en la creación de imágenes con texto.",
            "Permite generar diferentes propuestas de diseño.",
            "Es útil para proyectos gráficos y creativos."
        ],
        disponibilidad: "Cuenta con acceso gratuito limitado y planes de pago con mayores capacidades.",
        enlace: "https://ideogram.ai"
    },
    {
        id: "midjourney",
        nombre: "Midjourney",
        categorias: ["Imágenes"],
        inicial: "M",
        color: "purple",
        destacado: false,
        etiquetas: ["imágenes", "arte", "ilustración", "fotografía", "diseño", "creatividad", "estilos"],
        descripcion: "Midjourney es una herramienta de inteligencia artificial reconocida por generar imágenes artísticas y visuales a partir de instrucciones escritas.",
        queEs: "Midjourney es una plataforma de generación de imágenes mediante inteligencia artificial que permite transformar descripciones en composiciones visuales.",
        usos: [
            { titulo: "Crear arte digital", descripcion: "Genera composiciones artísticas con diferentes estilos." },
            { titulo: "Diseñar conceptos", descripcion: "Ayuda a representar ideas para proyectos creativos." },
            { titulo: "Crear ilustraciones", descripcion: "Permite desarrollar imágenes e ilustraciones digitales." },
            { titulo: "Explorar estilos", descripcion: "Facilita experimentar con diferentes estilos y propuestas visuales." }
        ],
        funciones: [
            "Generación de imágenes",
            "Personalización de estilos",
            "Variaciones de imágenes",
            "Edición y modificación visual",
            "Exploración de conceptos artísticos"
        ],
        ventajas: [
            "Permite crear imágenes con gran variedad de estilos.",
            "Es útil para explorar conceptos artísticos.",
            "Ofrece opciones para personalizar los resultados."
        ],
        disponibilidad: "Funciona mediante planes de suscripción. Las funciones y límites dependen del plan contratado.",
        enlace: "https://www.midjourney.com"
    },
    {
        id: "runway",
        nombre: "Runway",
        categorias: ["Video", "Imágenes"],
        inicial: "R",
        color: "purple",
        destacado: false,
        etiquetas: ["video", "edición", "animación", "efectos", "generación", "cine", "creatividad"],
        descripcion: "Runway es una plataforma de inteligencia artificial especializada en la generación y edición de videos y contenido visual.",
        queEs: "Runway es una herramienta creativa que utiliza modelos de inteligencia artificial para producir, transformar y editar contenido audiovisual.",
        usos: [
            { titulo: "Generar videos", descripcion: "Permite crear clips de video a partir de descripciones e imágenes." },
            { titulo: "Editar contenido", descripcion: "Ofrece herramientas para modificar y mejorar videos." },
            { titulo: "Crear efectos visuales", descripcion: "Ayuda a transformar escenas y desarrollar efectos audiovisuales." },
            { titulo: "Producir contenido creativo", descripcion: "Facilita la creación de material audiovisual para proyectos." }
        ],
        funciones: [
            "Generación de video con IA",
            "Conversión de texto a video",
            "Conversión de imagen a video",
            "Edición audiovisual",
            "Efectos visuales",
            "Herramientas de creación multimedia"
        ],
        ventajas: [
            "Combina generación y edición de contenido audiovisual.",
            "Ofrece herramientas para experimentar con videos.",
            "Facilita la producción de contenido creativo."
        ],
        disponibilidad: "Cuenta con acceso limitado y planes de pago. Los créditos y las funciones dependen de la suscripción.",
        enlace: "https://runwayml.com"
    },
    {
        id: "capcut",
        nombre: "CapCut",
        categorias: ["Video"],
        inicial: "C",
        color: "teal",
        destacado: false,
        etiquetas: ["video", "edición", "subtítulos", "efectos", "redes sociales", "audio", "contenido"],
        descripcion: "CapCut es un editor de video que incorpora herramientas de inteligencia artificial para facilitar la creación de contenido audiovisual.",
        queEs: "CapCut es una plataforma de edición de video que permite crear y modificar contenido mediante herramientas de edición tradicionales y funciones basadas en inteligencia artificial.",
        usos: [
            { titulo: "Editar videos", descripcion: "Permite cortar, unir y organizar clips de video." },
            { titulo: "Crear contenido para redes", descripcion: "Ayuda a preparar videos para diferentes plataformas sociales." },
            { titulo: "Agregar subtítulos", descripcion: "Ofrece herramientas para generar y editar subtítulos automáticamente." },
            { titulo: "Mejorar videos", descripcion: "Incluye efectos, filtros y herramientas para mejorar el contenido audiovisual." }
        ],
        funciones: [
            "Edición de videos",
            "Subtítulos automáticos",
            "Efectos y transiciones",
            "Herramientas de audio",
            "Plantillas de video",
            "Funciones de edición con IA"
        ],
        ventajas: [
            "Cuenta con herramientas fáciles de utilizar.",
            "Ofrece plantillas y efectos para editar contenido.",
            "Permite crear videos desde diferentes dispositivos."
        ],
        disponibilidad: "Cuenta con una versión gratuita y opciones de pago. Algunas funciones y recursos requieren una suscripción.",
        enlace: "https://www.capcut.com"
    },
    {
        id: "kling",
        nombre: "Kling AI",
        categorias: ["Video", "Imágenes"],
        inicial: "K",
        color: "blue",
        destacado: false,
        etiquetas: ["video", "imágenes", "animación", "movimiento", "generación", "creatividad"],
        descripcion: "Kling AI es una plataforma de inteligencia artificial especializada en generar videos e imágenes a partir de instrucciones.",
        queEs: "Kling AI es una herramienta generativa que permite transformar descripciones e imágenes en contenido visual y audiovisual.",
        usos: [
            { titulo: "Generar videos", descripcion: "Crea clips audiovisuales a partir de descripciones escritas." },
            { titulo: "Animar imágenes", descripcion: "Permite convertir imágenes estáticas en escenas con movimiento." },
            { titulo: "Crear contenido visual", descripcion: "Ayuda a desarrollar escenas y conceptos creativos." },
            { titulo: "Experimentar con animaciones", descripcion: "Facilita explorar diferentes movimientos y estilos visuales." }
        ],
        funciones: [
            "Generación de texto a video",
            "Conversión de imagen a video",
            "Generación de imágenes",
            "Animación de escenas",
            "Edición de contenido visual"
        ],
        ventajas: [
            "Permite crear videos a partir de imágenes y texto.",
            "Ofrece herramientas para generar movimiento.",
            "Facilita la creación de contenido audiovisual."
        ],
        disponibilidad: "Ofrece acceso gratuito limitado y planes de pago. Los créditos y las funciones dependen del plan.",
        enlace: "https://klingai.com"
    },
    {
        id: "pika",
        nombre: "Pika",
        categorias: ["Video"],
        inicial: "P",
        color: "purple",
        destacado: false,
        etiquetas: ["video", "animación", "efectos", "imágenes", "movimiento", "creatividad"],
        descripcion: "Pika es una plataforma de inteligencia artificial que permite generar y transformar videos mediante instrucciones escritas e imágenes.",
        queEs: "Pika es una herramienta creativa enfocada en la generación de videos con inteligencia artificial y la transformación de contenido visual.",
        usos: [
            { titulo: "Crear videos", descripcion: "Permite generar clips a partir de descripciones de texto." },
            { titulo: "Animar imágenes", descripcion: "Ayuda a dar movimiento a imágenes estáticas." },
            { titulo: "Aplicar efectos", descripcion: "Ofrece herramientas para transformar escenas y contenido audiovisual." },
            { titulo: "Crear contenido creativo", descripcion: "Facilita producir clips para proyectos y publicaciones digitales." }
        ],
        funciones: [
            "Generación de video",
            "Texto a video",
            "Imagen a video",
            "Transformación de escenas",
            "Efectos visuales con IA"
        ],
        ventajas: [
            "Facilita la creación de clips cortos.",
            "Permite transformar imágenes en contenido animado.",
            "Ofrece herramientas creativas para experimentar."
        ],
        disponibilidad: "Cuenta con opciones de acceso gratuito limitado y planes de pago. Las condiciones pueden variar.",
        enlace: "https://pika.art"
    },
    {
        id: "github-copilot",
        nombre: "GitHub Copilot",
        categorias: ["Programación"],
        inicial: "G",
        color: "blue",
        destacado: false,
        etiquetas: ["programar", "código", "desarrollo", "autocompletar", "depuración", "software"],
        descripcion: "GitHub Copilot es un asistente de programación con inteligencia artificial que ayuda a escribir, explicar y revisar código.",
        queEs: "GitHub Copilot es una herramienta desarrollada por GitHub que utiliza inteligencia artificial para apoyar a los programadores durante el desarrollo de software.",
        usos: [
            { titulo: "Escribir código", descripcion: "Sugiere líneas de código y funciones mientras se programa." },
            { titulo: "Encontrar errores", descripcion: "Ayuda a identificar posibles problemas y proponer correcciones." },
            { titulo: "Comprender código", descripcion: "Permite obtener explicaciones sobre instrucciones y fragmentos de código." },
            { titulo: "Desarrollar proyectos", descripcion: "Ofrece asistencia durante diferentes etapas del desarrollo de software." }
        ],
        funciones: [
            "Autocompletado de código",
            "Generación de funciones",
            "Explicación de código",
            "Ayuda con depuración",
            "Asistencia en el editor",
            "Chat para programación"
        ],
        ventajas: [
            "Se integra con entornos de desarrollo compatibles.",
            "Ayuda a agilizar tareas de programación.",
            "Facilita la comprensión de diferentes lenguajes."
        ],
        disponibilidad: "Ofrece opciones gratuitas y planes de pago. Las funciones y los límites dependen del plan y la cuenta.",
        enlace: "https://github.com/features/copilot"
    },
    {
        id: "cursor",
        nombre: "Cursor",
        categorias: ["Programación"],
        inicial: "C",
        color: "blue",
        destacado: false,
        etiquetas: ["programar", "código", "editor", "desarrollo", "depuración", "software", "asistente"],
        descripcion: "Cursor es un editor de código que integra inteligencia artificial para ayudar a desarrollar, comprender y modificar proyectos de software.",
        queEs: "Cursor es un entorno de desarrollo basado en un editor de código que incorpora herramientas de inteligencia artificial para facilitar el trabajo de programación.",
        usos: [
            { titulo: "Crear código", descripcion: "Ayuda a generar fragmentos de código a partir de instrucciones." },
            { titulo: "Modificar proyectos", descripcion: "Permite solicitar cambios en diferentes partes de un proyecto." },
            { titulo: "Encontrar errores", descripcion: "Ayuda a revisar código y proponer posibles soluciones." },
            { titulo: "Comprender proyectos", descripcion: "Permite consultar cómo funcionan archivos y componentes del código." }
        ],
        funciones: [
            "Autocompletado inteligente",
            "Generación de código",
            "Chat integrado",
            "Edición asistida por IA",
            "Análisis de archivos",
            "Ayuda con depuración"
        ],
        ventajas: [
            "Integra herramientas de IA en el editor.",
            "Permite trabajar con el contexto de un proyecto.",
            "Facilita la edición y comprensión del código."
        ],
        disponibilidad: "Ofrece un plan gratuito limitado y planes de pago con capacidades adicionales.",
        enlace: "https://cursor.com"
    },
    {
        id: "windsurf",
        nombre: "Windsurf",
        categorias: ["Programación"],
        inicial: "W",
        color: "teal",
        destacado: false,
        etiquetas: ["programar", "código", "desarrollo", "editor", "automatización", "software"],
        descripcion: "Windsurf es un entorno de desarrollo que incorpora inteligencia artificial para ayudar a crear y modificar aplicaciones.",
        queEs: "Windsurf es un editor de código con funciones de inteligencia artificial diseñado para acompañar diferentes tareas del desarrollo de software.",
        usos: [
            { titulo: "Desarrollar aplicaciones", descripcion: "Ayuda a construir proyectos de software mediante instrucciones." },
            { titulo: "Editar código", descripcion: "Permite modificar archivos y generar soluciones de programación." },
            { titulo: "Analizar proyectos", descripcion: "Ayuda a comprender la estructura y el funcionamiento del código." },
            { titulo: "Resolver problemas", descripcion: "Ofrece asistencia para revisar errores y proponer correcciones." }
        ],
        funciones: [
            "Asistencia de programación con IA",
            "Autocompletado de código",
            "Edición de archivos",
            "Análisis del proyecto",
            "Chat integrado",
            "Generación de código"
        ],
        ventajas: [
            "Integra asistencia de IA en el entorno de desarrollo.",
            "Permite trabajar con diferentes archivos de un proyecto.",
            "Ayuda a agilizar tareas de programación."
        ],
        disponibilidad: "Cuenta con opciones gratuitas y planes de pago. Las capacidades dependen del plan disponible.",
        enlace: "https://windsurf.com"
    },
    {
        id: "replit",
        nombre: "Replit",
        categorias: ["Programación"],
        inicial: "R",
        color: "orange",
        destacado: false,
        etiquetas: ["programar", "código", "aplicaciones", "web", "desarrollo", "proyectos", "colaboración"],
        descripcion: "Replit es una plataforma en línea para programar, ejecutar y publicar proyectos, con herramientas de inteligencia artificial.",
        queEs: "Replit es un entorno de desarrollo en la nube que permite escribir código desde el navegador y utilizar herramientas de IA para construir aplicaciones.",
        usos: [
            { titulo: "Programar en línea", descripcion: "Permite crear y ejecutar código desde un navegador." },
            { titulo: "Crear aplicaciones", descripcion: "Ayuda a desarrollar proyectos web y otras aplicaciones." },
            { titulo: "Aprender programación", descripcion: "Ofrece un espacio para practicar diferentes lenguajes." },
            { titulo: "Compartir proyectos", descripcion: "Facilita colaborar y publicar proyectos desarrollados." }
        ],
        funciones: [
            "Editor de código en línea",
            "Ejecución de programas",
            "Asistencia con inteligencia artificial",
            "Creación de aplicaciones",
            "Colaboración en proyectos",
            "Publicación de aplicaciones"
        ],
        ventajas: [
            "Permite programar sin instalar un entorno local.",
            "Facilita compartir proyectos.",
            "Integra herramientas de desarrollo y asistencia con IA."
        ],
        disponibilidad: "Ofrece opciones gratuitas y planes de pago. Los recursos y funciones dependen del plan.",
        enlace: "https://replit.com"
    },
    {
        id: "lovable",
        nombre: "Lovable",
        categorias: ["Programación"],
        inicial: "L",
        color: "purple",
        destacado: false,
        etiquetas: ["aplicaciones", "web", "programar", "diseño", "desarrollo", "prototipos", "código"],
        descripcion: "Lovable es una plataforma de inteligencia artificial que permite crear aplicaciones y sitios web a partir de instrucciones escritas.",
        queEs: "Lovable es una herramienta de desarrollo asistido por IA que transforma descripciones de proyectos en aplicaciones web que se pueden editar y mejorar.",
        usos: [
            { titulo: "Crear sitios web", descripcion: "Permite generar páginas web a partir de instrucciones en lenguaje natural." },
            { titulo: "Desarrollar aplicaciones", descripcion: "Ayuda a construir interfaces y funcionalidades para aplicaciones web." },
            { titulo: "Crear prototipos", descripcion: "Facilita convertir ideas en versiones iniciales de productos digitales." },
            { titulo: "Modificar proyectos", descripcion: "Permite solicitar cambios y mejoras mediante instrucciones." }
        ],
        funciones: [
            "Generación de aplicaciones web",
            "Creación de interfaces",
            "Generación de código",
            "Edición mediante instrucciones",
            "Integración con servicios externos",
            "Creación de prototipos"
        ],
        ventajas: [
            "Permite convertir ideas en proyectos funcionales.",
            "Reduce la necesidad de escribir todo el código manualmente.",
            "Facilita probar y modificar prototipos."
        ],
        disponibilidad: "Cuenta con un plan gratuito limitado y planes de pago basados en créditos y capacidades adicionales.",
        enlace: "https://lovable.dev"
    },
    {
        id: "bolt",
        nombre: "Bolt",
        categorias: ["Programación"],
        inicial: "B",
        color: "blue",
        destacado: false,
        etiquetas: ["programar", "aplicaciones", "web", "código", "desarrollo", "prototipos", "diseño"],
        descripcion: "Bolt es una herramienta de desarrollo con inteligencia artificial que permite crear y ejecutar aplicaciones web a partir de instrucciones.",
        queEs: "Bolt es una plataforma que utiliza inteligencia artificial para generar proyectos de software y permitir su edición y ejecución desde el navegador.",
        usos: [
            { titulo: "Crear aplicaciones web", descripcion: "Permite generar proyectos web mediante descripciones escritas." },
            { titulo: "Diseñar interfaces", descripcion: "Ayuda a construir pantallas y componentes para aplicaciones." },
            { titulo: "Probar proyectos", descripcion: "Permite ejecutar y visualizar aplicaciones durante su desarrollo." },
            { titulo: "Modificar código", descripcion: "Facilita realizar cambios mediante instrucciones en lenguaje natural." }
        ],
        funciones: [
            "Generación de aplicaciones",
            "Creación de interfaces",
            "Generación y edición de código",
            "Vista previa de proyectos",
            "Ejecución en el navegador",
            "Asistencia de programación"
        ],
        ventajas: [
            "Permite desarrollar prototipos rápidamente.",
            "Combina generación de código y vista previa.",
            "Facilita experimentar con ideas de aplicaciones."
        ],
        disponibilidad: "Cuenta con acceso gratuito limitado y planes de pago. El consumo depende de los créditos disponibles.",
        enlace: "https://bolt.new"
    },
    {
        id: "elevenlabs",
        nombre: "ElevenLabs",
        categorias: ["Audio"],
        inicial: "E",
        color: "purple",
        destacado: false,
        etiquetas: ["voz", "audio", "narración", "texto a voz", "locución", "idiomas", "sonido"],
        descripcion: "ElevenLabs es una plataforma de inteligencia artificial especializada en generación de voz, narración y herramientas de audio.",
        queEs: "ElevenLabs es una plataforma de audio que utiliza inteligencia artificial para generar voces sintéticas y transformar texto en contenido hablado.",
        usos: [
            { titulo: "Convertir texto en voz", descripcion: "Transforma textos escritos en narraciones de audio." },
            { titulo: "Crear narraciones", descripcion: "Permite producir voces para videos, presentaciones y otros contenidos." },
            { titulo: "Crear contenido multilingüe", descripcion: "Ofrece herramientas de generación de voz en diferentes idiomas." },
            { titulo: "Producir audio", descripcion: "Ayuda a crear contenido hablado para proyectos digitales." }
        ],
        funciones: [
            "Conversión de texto a voz",
            "Generación de voces sintéticas",
            "Herramientas de doblaje",
            "Creación de narraciones",
            "Generación de audio",
            "Soporte para varios idiomas"
        ],
        ventajas: [
            "Ofrece voces con diferentes características.",
            "Facilita la producción de narraciones.",
            "Incluye herramientas para contenido en varios idiomas."
        ],
        disponibilidad: "Cuenta con un plan gratuito limitado y diferentes planes de pago. Los créditos y derechos de uso dependen del plan.",
        enlace: "https://elevenlabs.io"
    },
    {
        id: "suno",
        nombre: "Suno",
        categorias: ["Audio"],
        inicial: "S",
        color: "orange",
        destacado: false,
        etiquetas: ["música", "canciones", "audio", "composición", "creatividad", "sonido", "letras"],
        descripcion: "Suno es una plataforma de inteligencia artificial que permite generar canciones y composiciones musicales a partir de instrucciones.",
        queEs: "Suno es una herramienta de creación musical que utiliza inteligencia artificial para producir canciones con voces, instrumentos y diferentes estilos.",
        usos: [
            { titulo: "Crear canciones", descripcion: "Permite generar canciones a partir de descripciones e ideas musicales." },
            { titulo: "Explorar estilos musicales", descripcion: "Ayuda a experimentar con diferentes géneros y sonidos." },
            { titulo: "Desarrollar ideas", descripcion: "Facilita convertir conceptos creativos en composiciones musicales." },
            { titulo: "Crear contenido audiovisual", descripcion: "Permite producir música para proyectos y contenidos digitales, respetando sus condiciones de uso." }
        ],
        funciones: [
            "Generación de canciones",
            "Creación de música con IA",
            "Generación de voces",
            "Exploración de estilos musicales",
            "Edición de composiciones",
            "Creación a partir de descripciones"
        ],
        ventajas: [
            "Permite experimentar con diferentes estilos musicales.",
            "Facilita transformar ideas en composiciones.",
            "Integra voces e instrumentos en las creaciones."
        ],
        disponibilidad: "Ofrece acceso gratuito limitado y planes de pago. Los derechos de uso y las condiciones comerciales dependen del plan.",
        enlace: "https://suno.com"
    },
    {
        id: "udio",
        nombre: "Udio",
        categorias: ["Audio"],
        inicial: "U",
        color: "purple",
        destacado: false,
        etiquetas: ["música", "canciones", "audio", "composición", "sonido", "creatividad", "géneros"],
        descripcion: "Udio es una plataforma de inteligencia artificial orientada a la creación de música y canciones a partir de instrucciones escritas.",
        queEs: "Udio es una herramienta de generación musical que permite explorar ideas y producir composiciones mediante modelos de inteligencia artificial.",
        usos: [
            { titulo: "Crear música", descripcion: "Permite generar composiciones a partir de descripciones." },
            { titulo: "Probar géneros", descripcion: "Ayuda a experimentar con diferentes estilos y ambientes musicales." },
            { titulo: "Desarrollar ideas musicales", descripcion: "Facilita transformar conceptos en propuestas de canciones." },
            { titulo: "Explorar composiciones", descripcion: "Permite generar variaciones y desarrollar ideas creativas." }
        ],
        funciones: [
            "Generación de música",
            "Creación de canciones",
            "Exploración de géneros",
            "Generación a partir de texto",
            "Variaciones musicales",
            "Herramientas de edición"
        ],
        ventajas: [
            "Facilita experimentar con ideas musicales.",
            "Permite explorar diferentes géneros.",
            "Ofrece herramientas para desarrollar composiciones."
        ],
        disponibilidad: "Las opciones de acceso y las funciones disponibles pueden cambiar según el servicio y sus condiciones vigentes.",
        enlace: "https://www.udio.com"
    },
    {
        id: "descript",
        nombre: "Descript",
        categorias: ["Audio", "Video"],
        inicial: "D",
        color: "teal",
        destacado: false,
        etiquetas: ["audio", "video", "transcripción", "edición", "podcast", "subtítulos", "voz"],
        descripcion: "Descript es una plataforma de edición de audio y video que utiliza inteligencia artificial para facilitar la transcripción y modificación de contenido.",
        queEs: "Descript es una herramienta multimedia que permite editar grabaciones de audio y video mediante transcripciones de texto y otras funciones inteligentes.",
        usos: [
            { titulo: "Editar podcasts", descripcion: "Permite organizar y modificar grabaciones de audio." },
            { titulo: "Editar videos", descripcion: "Facilita modificar videos mediante la edición de sus transcripciones." },
            { titulo: "Transcribir grabaciones", descripcion: "Convierte contenido hablado en texto." },
            { titulo: "Crear subtítulos", descripcion: "Ayuda a generar subtítulos para contenido audiovisual." }
        ],
        funciones: [
            "Transcripción automática",
            "Edición de audio",
            "Edición de video",
            "Generación de subtítulos",
            "Eliminación de silencios",
            "Herramientas de voz con IA"
        ],
        ventajas: [
            "Permite editar contenido mediante texto.",
            "Combina herramientas de audio y video.",
            "Facilita la creación de podcasts y material audiovisual."
        ],
        disponibilidad: "Cuenta con acceso gratuito limitado y planes de pago. Las funciones dependen de la suscripción.",
        enlace: "https://www.descript.com"
    },
    {
        id: "otter",
        nombre: "Otter",
        categorias: ["Audio", "Texto", "Estudio"],
        inicial: "O",
        color: "blue",
        destacado: false,
        etiquetas: ["transcripción", "reuniones", "audio", "notas", "resúmenes", "voz", "productividad"],
        descripcion: "Otter es una herramienta de inteligencia artificial que permite transcribir conversaciones, organizar notas y resumir reuniones.",
        queEs: "Otter es una plataforma de transcripción y asistencia para reuniones que convierte conversaciones habladas en texto y ayuda a organizar sus contenidos.",
        usos: [
            { titulo: "Transcribir conversaciones", descripcion: "Convierte grabaciones y conversaciones en texto." },
            { titulo: "Resumir reuniones", descripcion: "Ayuda a identificar los temas y puntos principales de una reunión." },
            { titulo: "Organizar notas", descripcion: "Permite guardar y consultar información de conversaciones." },
            { titulo: "Consultar información", descripcion: "Facilita buscar contenido dentro de las transcripciones disponibles." }
        ],
        funciones: [
            "Transcripción automática",
            "Resúmenes de reuniones",
            "Identificación de participantes",
            "Organización de notas",
            "Búsqueda en transcripciones",
            "Asistencia para reuniones"
        ],
        ventajas: [
            "Facilita convertir conversaciones en texto.",
            "Ayuda a organizar información de reuniones.",
            "Permite consultar transcripciones posteriormente."
        ],
        disponibilidad: "Ofrece un plan gratuito limitado y planes de pago con funciones adicionales.",
        enlace: "https://otter.ai"
    }
];

// Guardar el catálogo para utilizarlo en las páginas individuales
localStorage.setItem(
    "iahub-herramientas",
    JSON.stringify(herramientas)
);


// Elementos del HTML
const toolsGrid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const searchButton = document.getElementById("searchButton");
const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");
const favoriteCount = document.getElementById("favoriteCount");
const favoritesToggle = document.getElementById("favoritesToggle");
const filterButtons = document.querySelectorAll(".filter-chip");
const categoryCards = document.querySelectorAll(".category-card");
const clearFilters = document.getElementById("clearFilters");
const resetSearch = document.getElementById("resetSearch");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toolsSection = document.querySelector(".tools-section");

// Estado de los filtros
let categoriaActual = "Todas";
let mostrarSoloFavoritos = false;

// Recuperar favoritos guardados en el navegador
let favoritos = [];
try {
    const guardados = JSON.parse(localStorage.getItem("iahub-favoritos"));
    favoritos = Array.isArray(guardados) ? guardados : [];
} catch (error) {
    favoritos = [];
}

// Normalizar texto para ignorar mayúsculas y tildes
function normalizar(texto) {
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// Guardar favoritos (con protección por si el navegador bloquea localStorage)
function guardarFavoritos() {
    try {
        localStorage.setItem("iahub-favoritos", JSON.stringify(favoritos));
    } catch (error) {
        // Modo privado o almacenamiento lleno: los favoritos duran solo la sesión
    }
    actualizarContadorFavoritos();
}

// Actualizar contador y estado del botón
function actualizarContadorFavoritos() {
    favoriteCount.textContent = favoritos.length;
    favoritesToggle.classList.toggle("active", mostrarSoloFavoritos);
    favoritesToggle.setAttribute("aria-pressed", String(mostrarSoloFavoritos));
}

// Palabras relacionadas para mejorar las búsquedas
const palabrasRelacionadas = {
    imagenes: [
        "imagen", "imagenes", "dibujar", "dibujo",
        "ilustracion", "ilustraciones", "arte", "foto",
        "fotografia", "diseño", "diseno", "logo"
    ],

    video: [
        "video", "videos", "animacion", "animaciones",
        "editar video", "peliculas", "clips"
    ],

    audio: [
        "audio", "voz", "voces", "musica", "canciones",
        "sonido", "podcast", "locucion"
    ],

    programacion: [
        "programar", "codigo", "codificar", "desarrollo",
        "desarrollar", "programacion", "software",
        "pagina web", "aplicacion"
    ],

    estudio: [
        "estudiar", "estudio", "aprender", "aprendizaje",
        "tareas", "investigar", "investigacion",
        "resumen", "resumir", "apuntes"
    ],

    texto: [
        "escribir", "redactar", "texto", "documentos",
        "ensayos", "correos", "articulos", "contenido"
    ]
};


// Identificar las categorías relacionadas con una búsqueda
function obtenerCategoriasRelacionadas(terminos) {

    const categorias = [];

    Object.entries(palabrasRelacionadas).forEach(([categoria, palabras]) => {

        const coincide = terminos.some(termino =>
            palabras.some(palabra => palabra.includes(termino) ||
                termino.includes(palabra))
        );

        if (coincide) {
            categorias.push(categoria);
        }

    });

    return categorias;
}

// Obtener herramientas según búsqueda, categoría y favoritos
function obtenerResultados() {

    const terminos = normalizar(searchInput.value)
        .split(/[\s,]+/)
        .filter(Boolean);

    const categoriaBuscada = normalizar(categoriaActual);

    const categoriasRelacionadas =
        obtenerCategoriasRelacionadas(terminos);

    const resultados = [];

    herramientas.forEach(herramienta => {

        const coincideCategoria = categoriaActual === "Todas" ||
            herramienta.categorias.some(c =>
                normalizar(c) === categoriaBuscada
            );

        const coincideFavorito =
            !mostrarSoloFavoritos ||
            favoritos.includes(herramienta.id);

        if (!coincideCategoria || !coincideFavorito) return;

        const nombre = normalizar(herramienta.nombre);
        const categorias = normalizar(herramienta.categorias.join(" "));
        const etiquetas = normalizar(herramienta.etiquetas.join(" "));
        const descripcion = normalizar(herramienta.descripcion);

        const textoCompleto = [
            nombre,
            categorias,
            etiquetas,
            descripcion
        ].join(" ");

        if (terminos.length === 0) {
            resultados.push({
                herramienta,
                puntuacion: 0
            });
            return;
        }

        let puntuacion = 0;

        // Coincidencias de palabras escritas
        terminos.forEach(termino => {

            if (nombre.includes(termino)) {
                puntuacion += 10;
            }

            if (categorias.includes(termino)) {
                puntuacion += 6;
            }

            if (etiquetas.includes(termino)) {
                puntuacion += 4;
            }

            if (descripcion.includes(termino)) {
                puntuacion += 2;
            }

        });

        // Coincidencias por categorías relacionadas
        categoriasRelacionadas.forEach(categoria => {

            if (herramienta.categorias.some(c =>
                normalizar(c) === categoria
            )) {
                puntuacion += 8;
            }

        });

        if (puntuacion === 0) return;

        resultados.push({
            herramienta,
            puntuacion
        });

    });

    resultados.sort((a, b) =>
        b.puntuacion - a.puntuacion
    );

    return resultados.map(resultado => resultado.herramienta);
}

// Mostrar sugerencias mientras se escribe
function mostrarSugerencias() {

    const busqueda = normalizar(searchInput.value.trim());

    searchSuggestions.innerHTML = "";

    if (!busqueda) {
        searchSuggestions.classList.remove("active");
        return;
    }

    const sugerencias = herramientas
        .filter(herramienta => {
            const nombre = normalizar(herramienta.nombre);
            const etiquetas = normalizar(herramienta.etiquetas.join(" "));
            const categorias = normalizar(herramienta.categorias.join(" "));

            return nombre.includes(busqueda) ||
                etiquetas.includes(busqueda) ||
                categorias.includes(busqueda);
        })
        .slice(0, 5);

    if (sugerencias.length === 0) {
        searchSuggestions.classList.remove("active");
        return;
    }

    sugerencias.forEach(herramienta => {

        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "suggestion-item";

        const dominio = new URL(herramienta.enlace).hostname;

        const imagen = document.createElement("img");
        imagen.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=64`;
        imagen.alt = "";

        const nombre = document.createElement("span");
        nombre.textContent = herramienta.nombre;

        const etiqueta = document.createElement("strong");
        etiqueta.textContent = "VER";

        boton.append(imagen, nombre, etiqueta);

        boton.addEventListener("click", () => {
            searchInput.value = herramienta.nombre;
            searchSuggestions.classList.remove("active");
            mostrarHerramientas();
        });

        searchSuggestions.appendChild(boton);
    });

    searchSuggestions.classList.add("active");
}

// Crear una tarjeta sin insertar texto del catálogo mediante HTML inseguro
function crearTarjeta(herramienta) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tool-card";

    const top = document.createElement("div");
    top.className = "tool-top";

    // Contenedor del logo
    const icono = document.createElement("div");
    icono.className = `tool-icon ${herramienta.color || ""}`.trim();
    icono.setAttribute("aria-label", `Logo de ${herramienta.nombre}`);

    // Inicial como respaldo
    const inicial = document.createElement("span");
    inicial.className = "tool-initial";
    inicial.textContent = herramienta.inicial;

    // Favicon del sitio oficial
    const imagen = document.createElement("img");
    const dominio = new URL(herramienta.enlace).hostname;

    imagen.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=128`;
    imagen.alt = `Logo de ${herramienta.nombre}`;
    imagen.loading = "lazy";

    imagen.onload = () => {
        imagen.style.display = "block";
        inicial.style.display = "none";
    };

    imagen.onerror = () => {
        imagen.style.display = "none";
        inicial.style.display = "block";
    };

    icono.append(imagen, inicial);

    // Se muestra la categoría principal en la tarjeta
    const categoria = document.createElement("span");
    categoria.className = "tool-category";
    categoria.textContent = herramienta.categorias[0];

    top.append(icono, categoria);

    const titulo = document.createElement("h3");
    titulo.textContent = herramienta.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "tool-description";
    descripcion.textContent = herramienta.descripcion;

    const acciones = document.createElement("div");
    acciones.className = "tool-actions";

    const enlace = document.createElement("a");
    enlace.className = "tool-link";
    enlace.href = herramienta.enlace;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = "Visitar herramienta ↗";

    const botonFavorito = document.createElement("button");
    botonFavorito.className = "favorite-button";
    botonFavorito.type = "button";

    const esFavorito = favoritos.includes(herramienta.id);

    botonFavorito.classList.toggle("is-favorite", esFavorito);
    botonFavorito.textContent = esFavorito ? "♥" : "♡";
    botonFavorito.setAttribute(
        "aria-label",
        esFavorito
            ? `Quitar ${herramienta.nombre} de favoritos`
            : `Agregar ${herramienta.nombre} a favoritos`
    );
    botonFavorito.setAttribute("aria-pressed", String(esFavorito));

    botonFavorito.addEventListener("click", () => {
        cambiarFavorito(herramienta.id);
    });

    const botonDetalles = document.createElement("button");
    botonDetalles.className = "tool-details-button";
    botonDetalles.type = "button";
    botonDetalles.textContent = "Ver detalles";

    botonDetalles.addEventListener("click", () => {
        window.location.href = `herramienta.html?id=${encodeURIComponent(herramienta.id)}`;
    });
    acciones.append(enlace, botonDetalles, botonFavorito);
    tarjeta.append(top, titulo, descripcion, acciones);

    if (herramienta.destacado) {
        const etiqueta = document.createElement("span");
        etiqueta.className = "featured-label";
        etiqueta.textContent = "DESTACADA";
        tarjeta.appendChild(etiqueta);
    }

    return tarjeta;
}


// ============================================
// VENTANA DE DETALLES DE CADA HERRAMIENTA
// ============================================

function mostrarDetalle(herramienta, botonOrigen) {

    // Evitar que se abran varias ventanas
    const ventanaAnterior = document.querySelector(".detail-overlay");
    if (ventanaAnterior) {
        ventanaAnterior.remove();
    }

    // Fondo de la ventana
    const overlay = document.createElement("div");
    overlay.className = "detail-overlay";

    // Contenedor principal
    const modal = document.createElement("div");
    modal.className = "detail-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "detail-title");

    // Cierra la ventana y limpia el listener de Escape (siempre, sin importar cómo se cierre)
    function cerrarModal() {
        document.removeEventListener("keydown", cerrarConEscape);
        overlay.remove();
        if (botonOrigen && document.body.contains(botonOrigen)) {
            botonOrigen.focus();
        }
    }

    function cerrarConEscape(event) {
        if (event.key === "Escape") {
            cerrarModal();
        }
    }

    // Botón cerrar
    const cerrar = document.createElement("button");
    cerrar.className = "detail-close";
    cerrar.type = "button";
    cerrar.textContent = "×";
    cerrar.setAttribute("aria-label", "Cerrar detalles");
    cerrar.addEventListener("click", cerrarModal);

    // Categorías
    const categoria = document.createElement("span");
    categoria.className = "detail-category";
    categoria.textContent = herramienta.categorias.join(" · ");

    // Nombre
    const titulo = document.createElement("h2");
    titulo.id = "detail-title";
    titulo.textContent = herramienta.nombre;

    // Descripción
    const descripcionTitulo = document.createElement("h3");
    descripcionTitulo.textContent = "¿Para qué sirve?";

    const descripcion = document.createElement("p");
    descripcion.textContent = herramienta.descripcion;

    // Etiquetas
    const etiquetasTitulo = document.createElement("h3");
    etiquetasTitulo.textContent = "Funciones y usos";

    const etiquetas = document.createElement("div");
    etiquetas.className = "detail-tags";

    herramienta.etiquetas.forEach(etiqueta => {
        const elemento = document.createElement("span");
        elemento.textContent = etiqueta;
        etiquetas.appendChild(elemento);
    });

    // Aviso sobre disponibilidad
    const aviso = document.createElement("p");
    aviso.className = "detail-notice";
    aviso.textContent =
        "Consulta la página oficial para conocer sus planes, precios y funciones disponibles.";

    // Enlace oficial
    const visitar = document.createElement("a");
    visitar.className = "detail-visit";
    visitar.href = herramienta.enlace;
    visitar.target = "_blank";
    visitar.rel = "noopener noreferrer";
    visitar.textContent = "Visitar página oficial ↗";

    // Construir ventana
    modal.append(
        cerrar,
        categoria,
        titulo,
        descripcionTitulo,
        descripcion,
        etiquetasTitulo,
        etiquetas,
        aviso,
        visitar
    );

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Cerrar al pulsar fuera de la ventana
    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            cerrarModal();
        }
    });

    document.addEventListener("keydown", cerrarConEscape);

    cerrar.focus();
}


// Mostrar resultados en pantalla
function mostrarHerramientas() {
    const resultados = obtenerResultados();
    toolsGrid.replaceChildren();

    resultados.forEach(herramienta => {
        toolsGrid.appendChild(crearTarjeta(herramienta));
    });

    noResults.hidden = resultados.length !== 0;
    toolsGrid.hidden = resultados.length === 0;

    if (mostrarSoloFavoritos) {
        resultsCount.textContent = `${resultados.length} ${resultados.length === 1 ? "favorito" : "favoritos"}`;
    } else {
        resultsCount.textContent = `Mostrando ${resultados.length} de ${herramientas.length} herramientas`;
    }

    actualizarContadorFavoritos();
}

// Agregar o quitar una herramienta de favoritos
function cambiarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favorito => favorito !== id);
    } else {
        favoritos.push(id);
    }

    guardarFavoritos();
    mostrarHerramientas();
}

// Marcar visualmente el chip de filtro activo
function marcarFiltroActivo(categoria) {
    filterButtons.forEach(boton => {
        boton.classList.toggle("active", boton.dataset.filter === categoria);
    });
}

// Aplicar una categoría
function seleccionarCategoria(categoria) {
    categoriaActual = categoria;
    mostrarSoloFavoritos = false;
    searchInput.value = "";
    marcarFiltroActivo(categoria);
    mostrarHerramientas();
}

// Restablecer filtros
function limpiarFiltros() {
    categoriaActual = "Todas";
    mostrarSoloFavoritos = false;
    searchInput.value = "";
    marcarFiltroActivo("Todas");
    mostrarHerramientas();
}

// Ir a la sección del catálogo
function irAlCatalogo() {
    toolsSection.scrollIntoView({ behavior: "smooth" });
}

// Al escribir en el buscador se busca en todo el catálogo,
// así no se queda una categoría activa "escondiendo" resultados
searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() !== "" && (categoriaActual !== "Todas" || mostrarSoloFavoritos)) {
        categoriaActual = "Todas";
        mostrarSoloFavoritos = false;
        marcarFiltroActivo("Todas");
    }
    mostrarHerramientas();
});

searchButton.addEventListener("click", () => {
    mostrarHerramientas();
    irAlCatalogo();
});

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        mostrarHerramientas();
        irAlCatalogo();
    }
});

searchInput.addEventListener("input", mostrarSugerencias);
document.addEventListener("click", (evento) => {

    if (!evento.target.closest(".search-container")) {
        searchSuggestions.classList.remove("active");
    }

});

// Eventos de filtros
filterButtons.forEach(boton => {
    boton.addEventListener("click", () => seleccionarCategoria(boton.dataset.filter));
});

categoryCards.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        seleccionarCategoria(tarjeta.dataset.category);
        irAlCatalogo();
    });
});

// Ver solo favoritos
favoritesToggle.addEventListener("click", () => {
    mostrarSoloFavoritos = !mostrarSoloFavoritos;
    if (mostrarSoloFavoritos) {
        categoriaActual = "Todas";
        searchInput.value = "";
        marcarFiltroActivo("Todas");
    }
    mostrarHerramientas();
    irAlCatalogo();
});

clearFilters.addEventListener("click", limpiarFiltros);
resetSearch.addEventListener("click", limpiarFiltros);

// Menú móvil
menuToggle.addEventListener("click", () => {
    const abierto = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!abierto));
    navLinks.classList.toggle("open", !abierto);
});

navLinks.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Primera carga
mostrarHerramientas();