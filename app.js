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
        categorias: ["Texto", "Estudio", "Programación"],
        inicial: "G",
        color: "blue",
        destacado: true,
        etiquetas: ["escribir", "investigar", "estudiar", "programar", "google", "asistente", "resumir", "analizar"],
        descripcion: "Gemini es el asistente de inteligencia artificial de Google. Ayuda a investigar temas, redactar contenido, comprender información, organizar ideas y resolver consultas relacionadas con el estudio y el trabajo.",
        enlace: "https://gemini.google.com"
    },
    {
        id: "claude",
        nombre: "Claude",
        categorias: ["Texto", "Programación"],
        inicial: "C",
        color: "orange",
        destacado: false,
        etiquetas: ["escribir", "redactar", "programar", "codigo", "analizar", "documentos", "asistente", "razonamiento"],
        descripcion: "Claude es un asistente de inteligencia artificial de Anthropic que permite analizar documentos, redactar textos, resumir información, desarrollar ideas y recibir ayuda para escribir y comprender código.",
        enlace: "https://claude.ai"
    },
    {
        id: "microsoft-copilot",
        nombre: "Microsoft Copilot",
        categorias: ["Texto", "Programación"],
        inicial: "M",
        color: "blue",
        destacado: false,
        etiquetas: ["asistente", "productividad", "texto", "programar", "microsoft", "investigar", "ideas"],
        descripcion: "Microsoft Copilot es un asistente de inteligencia artificial que ayuda a responder preguntas, redactar contenido, generar ideas y realizar tareas de productividad dentro del ecosistema de Microsoft.",
        enlace: "https://copilot.microsoft.com/"
    },
    {
        id: "deepseek",
        nombre: "DeepSeek",
        categorias: ["Texto", "Programación"],
        inicial: "D",
        color: "blue",
        destacado: false,
        etiquetas: ["asistente", "razonamiento", "texto", "programar", "codigo", "matematicas", "analisis"],
        descripcion: "DeepSeek es una plataforma de inteligencia artificial útil para resolver preguntas, analizar problemas, trabajar con razonamiento, comprender conceptos y obtener asistencia en programación.",
        enlace: "https://chat.deepseek.com/"
    },
    {
        id: "grok",
        nombre: "Grok",
        categorias: ["Texto"],
        inicial: "G",
        color: "purple",
        destacado: false,
        etiquetas: ["asistente", "preguntas", "texto", "informacion", "ideas", "investigacion"],
        descripcion: "Grok es un asistente de inteligencia artificial desarrollado por xAI. Permite explorar preguntas, generar contenido, analizar información y conversar sobre diferentes temas.",
        enlace: "https://grok.com/"
    },
    {
        id: "perplexity",
        nombre: "Perplexity",
        categorias: ["Estudio", "Texto"],
        inicial: "P",
        color: "mint",
        destacado: true,
        etiquetas: ["estudiar", "investigar", "buscar", "fuentes", "preguntas", "buscador", "informacion"],
        descripcion: "Perplexity es un buscador con inteligencia artificial que ayuda a investigar preguntas, encontrar información en internet y consultar fuentes para profundizar en temas académicos y profesionales.",
        enlace: "https://www.perplexity.ai"
    },
    {
        id: "notebooklm",
        nombre: "NotebookLM",
        categorias: ["Estudio", "Audio"],
        inicial: "N",
        color: "blue",
        destacado: false,
        etiquetas: ["estudiar", "resumir", "documentos", "investigar", "apuntes", "podcast", "fuentes", "aprendizaje"],
        descripcion: "NotebookLM es un asistente de investigación de Google que trabaja con las fuentes que proporcionas. Permite resumir documentos, organizar información, responder preguntas y generar resúmenes de audio.",
        enlace: "https://notebooklm.google.com"
    },
    {
        id: "elicit",
        nombre: "Elicit",
        categorias: ["Estudio"],
        inicial: "E",
        color: "mint",
        destacado: false,
        etiquetas: ["investigacion", "estudio", "articulos", "papers", "ciencia", "academico", "fuentes"],
        descripcion: "Elicit es una herramienta de investigación académica con inteligencia artificial que ayuda a encontrar artículos científicos, revisar publicaciones y organizar información para trabajos e investigaciones.",
        enlace: "https://elicit.com/"
    },
    {
        id: "gamma",
        nombre: "Gamma",
        categorias: ["Estudio", "Imágenes"],
        inicial: "G",
        color: "purple",
        destacado: false,
        etiquetas: ["presentaciones", "diapositivas", "documentos", "diseño", "exposiciones", "trabajos"],
        descripcion: "Gamma permite crear presentaciones, documentos y páginas visuales a partir de ideas o instrucciones de texto. Es una opción para preparar exposiciones, proyectos y materiales de trabajo.",
        enlace: "https://gamma.app/"
    },
    {
        id: "canva",
        nombre: "Canva",
        categorias: ["Imágenes"],
        inicial: "Ca",
        color: "blue",
        destacado: true,
        etiquetas: ["imagenes", "diseño", "presentaciones", "redes sociales", "ilustraciones", "plantillas", "carteles"],
        descripcion: "Canva es una plataforma de diseño gráfico que incorpora funciones de inteligencia artificial para crear presentaciones, publicaciones para redes sociales, imágenes, carteles y otros recursos visuales.",
        enlace: "https://www.canva.com"
    },
    {
        id: "leonardo",
        nombre: "Leonardo AI",
        categorias: ["Imágenes"],
        inicial: "L",
        color: "purple",
        destacado: false,
        etiquetas: ["imagenes", "diseño", "ilustraciones", "arte", "generador", "creatividad", "recursos visuales"],
        descripcion: "Leonardo AI es una herramienta de generación de imágenes con inteligencia artificial. Permite crear ilustraciones, conceptos visuales y recursos gráficos a partir de descripciones escritas.",
        enlace: "https://leonardo.ai"
    },
    {
        id: "adobe-firefly",
        nombre: "Adobe Firefly",
        categorias: ["Imágenes"],
        inicial: "A",
        color: "orange",
        destacado: false,
        etiquetas: ["imagenes", "diseño", "generar", "editar", "creatividad", "adobe", "fotografia"],
        descripcion: "Adobe Firefly reúne herramientas generativas para crear y editar imágenes y otros recursos visuales. Permite experimentar con ideas creativas mediante instrucciones de texto.",
        enlace: "https://firefly.adobe.com"
    },
    {
        id: "ideogram",
        nombre: "Ideogram",
        categorias: ["Imágenes"],
        inicial: "I",
        color: "purple",
        destacado: false,
        etiquetas: ["imagenes", "diseño", "creatividad", "carteles", "texto en imagen", "ilustraciones"],
        descripcion: "Ideogram es una herramienta de inteligencia artificial para generar imágenes a partir de descripciones. Puede utilizarse para crear carteles, composiciones gráficas, ilustraciones y diseños con texto integrado.",
        enlace: "https://ideogram.ai/"
    },
    {
        id: "midjourney",
        nombre: "Midjourney",
        categorias: ["Imágenes"],
        inicial: "M",
        color: "purple",
        destacado: false,
        etiquetas: ["imagenes", "arte", "diseño", "ilustraciones", "generador", "creatividad"],
        descripcion: "Midjourney es una plataforma de generación de imágenes mediante inteligencia artificial. Permite transformar descripciones escritas en composiciones artísticas, ilustraciones y conceptos visuales.",
        enlace: "https://www.midjourney.com/"
    },
    {
        id: "runway",
        nombre: "Runway",
        categorias: ["Video", "Imágenes"],
        inicial: "R",
        color: "mint",
        destacado: true,
        etiquetas: ["videos", "edicion", "audiovisual", "generar video", "animacion", "efectos", "creatividad"],
        descripcion: "Runway es una plataforma creativa con inteligencia artificial para generar y editar contenido audiovisual. Incluye herramientas para experimentar con videos, imágenes y efectos visuales.",
        enlace: "https://runwayml.com"
    },
    {
        id: "capcut",
        nombre: "CapCut",
        categorias: ["Video"],
        inicial: "C",
        color: "blue",
        destacado: false,
        etiquetas: ["videos", "edicion", "subtitulos", "redes sociales", "efectos", "contenido"],
        descripcion: "CapCut es un editor de video que incorpora funciones inteligentes para editar clips, añadir subtítulos, aplicar efectos y preparar contenido audiovisual para redes sociales.",
        enlace: "https://www.capcut.com"
    },
    {
        id: "kling-ai",
        nombre: "Kling AI",
        categorias: ["Video"],
        inicial: "K",
        color: "blue",
        destacado: false,
        etiquetas: ["video", "animacion", "creatividad", "texto a video", "imagen a video"],
        descripcion: "Kling AI ofrece herramientas de generación de video mediante inteligencia artificial. Permite crear clips a partir de indicaciones de texto e imágenes.",
        enlace: "https://klingai.com/"
    },
    {
        id: "pika",
        nombre: "Pika",
        categorias: ["Video"],
        inicial: "P",
        color: "orange",
        destacado: false,
        etiquetas: ["video", "animacion", "efectos", "edicion", "creatividad"],
        descripcion: "Pika es una herramienta de inteligencia artificial para crear y transformar videos. Permite experimentar con animaciones, efectos y contenido visual a partir de instrucciones.",
        enlace: "https://pika.art/"
    },
    {
        id: "github-copilot",
        nombre: "GitHub Copilot",
        categorias: ["Programación"],
        inicial: "GH",
        color: "mint",
        destacado: true,
        etiquetas: ["programar", "codigo", "desarrollo", "programacion", "software", "programador", "autocompletar"],
        descripcion: "GitHub Copilot es un asistente de programación que ayuda a escribir código, sugerir soluciones, explicar fragmentos y agilizar tareas durante el desarrollo de software.",
        enlace: "https://github.com/features/copilot"
    },
    {
        id: "cursor",
        nombre: "Cursor",
        categorias: ["Programación"],
        inicial: "C",
        color: "mint",
        destacado: false,
        etiquetas: ["codigo", "programacion", "desarrollo", "editor", "software", "programador"],
        descripcion: "Cursor es un editor de código con funciones de inteligencia artificial que ayuda a comprender proyectos, generar código, realizar cambios y trabajar con archivos de programación.",
        enlace: "https://cursor.com/"
    },
    {
        id: "windsurf",
        nombre: "Windsurf",
        categorias: ["Programación"],
        inicial: "W",
        color: "blue",
        destacado: false,
        etiquetas: ["codigo", "programacion", "desarrollo", "editor", "software", "agentes"],
        descripcion: "Windsurf es un entorno de desarrollo con funciones de inteligencia artificial que ayuda a explorar proyectos, escribir código y realizar tareas de programación.",
        enlace: "https://windsurf.com/"
    },
    {
        id: "replit",
        nombre: "Replit",
        categorias: ["Programación"],
        inicial: "R",
        color: "orange",
        destacado: false,
        etiquetas: ["codigo", "programacion", "aplicaciones", "en linea", "desarrollo", "crear apps"],
        descripcion: "Replit es un entorno de desarrollo en línea que permite crear, ejecutar y compartir aplicaciones. También ofrece herramientas de inteligencia artificial para apoyar el proceso de programación.",
        enlace: "https://replit.com/"
    },
    {
        id: "lovable",
        nombre: "Lovable",
        categorias: ["Programación"],
        inicial: "L",
        color: "purple",
        destacado: false,
        etiquetas: ["aplicaciones", "paginas web", "programacion", "sin codigo", "desarrollo web", "prototipos"],
        descripcion: "Lovable permite crear aplicaciones y sitios web a partir de instrucciones en lenguaje natural. Es una herramienta para desarrollar prototipos y proyectos web describiendo lo que necesitas.",
        enlace: "https://lovable.dev/"
    },
    {
        id: "bolt",
        nombre: "Bolt",
        categorias: ["Programación"],
        inicial: "B",
        color: "blue",
        destacado: false,
        etiquetas: ["aplicaciones", "paginas web", "programacion", "desarrollo", "prototipos", "codigo"],
        descripcion: "Bolt permite crear y modificar aplicaciones web desde el navegador mediante instrucciones de texto. Puede ayudar a generar prototipos y desarrollar proyectos con tecnologías web.",
        enlace: "https://bolt.new/"
    },
    {
        id: "elevenlabs",
        nombre: "ElevenLabs",
        categorias: ["Audio"],
        inicial: "11",
        color: "orange",
        destacado: false,
        etiquetas: ["audio", "voces", "texto a voz", "transcripcion", "locucion", "narracion"],
        descripcion: "ElevenLabs ofrece herramientas de inteligencia artificial para generar voces, convertir texto en audio y trabajar con contenido hablado, narraciones y otros formatos de sonido.",
        enlace: "https://elevenlabs.io"
    },
    {
        id: "suno",
        nombre: "Suno",
        categorias: ["Audio"],
        inicial: "S",
        color: "orange",
        destacado: false,
        etiquetas: ["musica", "audio", "creatividad", "canciones", "composicion"],
        descripcion: "Suno es una plataforma de creación musical con inteligencia artificial que permite generar canciones a partir de descripciones e ideas, explorando diferentes estilos y sonidos.",
        enlace: "https://suno.com/"
    },
    {
        id: "udio",
        nombre: "Udio",
        categorias: ["Audio"],
        inicial: "U",
        color: "purple",
        destacado: false,
        etiquetas: ["musica", "audio", "canciones", "composicion", "creatividad"],
        descripcion: "Udio es una plataforma de creación musical con inteligencia artificial que permite experimentar con canciones y composiciones a partir de indicaciones y conceptos musicales.",
        enlace: "https://www.udio.com/"
    },
    {
        id: "descript",
        nombre: "Descript",
        categorias: ["Audio", "Video"],
        inicial: "D",
        color: "mint",
        destacado: false,
        etiquetas: ["transcripcion", "audio", "edicion", "podcast", "video", "subtitulos"],
        descripcion: "Descript es una herramienta de edición de audio y video que utiliza transcripciones de texto para facilitar la edición de grabaciones, podcasts y contenido audiovisual.",
        enlace: "https://www.descript.com/"
    },
    {
        id: "otter",
        nombre: "Otter",
        categorias: ["Audio"],
        inicial: "O",
        color: "blue",
        destacado: false,
        etiquetas: ["transcripcion", "reuniones", "audio", "notas", "resumir", "voz"],
        descripcion: "Otter es una herramienta de transcripción asistida por inteligencia artificial que ayuda a convertir conversaciones y reuniones en texto, además de organizar notas y resúmenes.",
        enlace: "https://otter.ai/"
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

// Obtener herramientas según búsqueda, categoría y favoritos
function obtenerResultados() {
    const terminos = normalizar(searchInput.value)
        .split(/[\s,]+/)
        .filter(Boolean);

    const categoriaBuscada = normalizar(categoriaActual);

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

        // Si no hay búsqueda, mostrar todos los resultados
        if (terminos.length === 0) {
            resultados.push({
                herramienta,
                puntuacion: 0
            });
            return;
        }

        // Todas las palabras deben coincidir
        const coincideTodo = terminos.every(termino =>
            textoCompleto.includes(termino)
        );

        if (!coincideTodo) return;

        // Dar mayor prioridad a las coincidencias más importantes
        let puntuacion = 0;

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

        resultados.push({
            herramienta,
            puntuacion
        });
    });

    // Mostrar primero las herramientas más relacionadas
    resultados.sort((a, b) =>
        b.puntuacion - a.puntuacion
    );

    return resultados.map(resultado => resultado.herramienta);
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