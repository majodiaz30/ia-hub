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
        etiquetas: ["escribir", "redactar", "estudiar", "programar", "preguntas", "asistente"],
        descripcion: "Asistente de IA para escribir, aprender, programar, generar ideas y resolver preguntas.",
        enlace: "https://chatgpt.com"
    },
    {
        id: "gemini",
        nombre: "Gemini",
        categorias: ["Texto", "Estudio", "Programación"],
        inicial: "G",
        color: "blue",
        destacado: true,
        etiquetas: ["escribir", "investigar", "estudiar", "programar", "google", "asistente"],
        descripcion: "Asistente de Google para investigar, crear contenido, programar y organizar ideas.",
        enlace: "https://gemini.google.com"
    },
    {
        id: "claude",
        nombre: "Claude",
        categorias: ["Texto", "Programación"],
        inicial: "C",
        color: "orange",
        destacado: false,
        etiquetas: ["escribir", "redactar", "programar", "codigo", "analizar", "documentos", "asistente"],
        descripcion: "Asistente de IA para redactar, analizar documentos y programar, incluido Claude Code.",
        enlace: "https://claude.ai"
    },
    {
        id: "microsoft-copilot",
        nombre: "Microsoft Copilot",
        categorias: ["Texto", "Programación"],
        inicial: "M",
        color: "blue",
        destacado: false,
        etiquetas: ["asistente", "productividad", "texto", "programar"],
        descripcion: "Asistente de IA para resolver preguntas, redactar textos y generar ideas.",
        enlace: "https://copilot.microsoft.com/"
    },
    {
        id: "deepseek",
        nombre: "DeepSeek",
        categorias: ["Texto", "Programación"],
        inicial: "D",
        color: "blue",
        destacado: false,
        etiquetas: ["asistente", "razonamiento", "texto", "programar", "codigo"],
        descripcion: "Asistente de inteligencia artificial para preguntas, análisis, código y resolución de problemas.",
        enlace: "https://chat.deepseek.com/"
    },
    {
        id: "grok",
        nombre: "Grok",
        categorias: ["Texto"],
        inicial: "G",
        color: "purple",
        destacado: false,
        etiquetas: ["asistente", "preguntas", "texto"],
        descripcion: "Asistente de IA para explorar preguntas, generar contenido y analizar información.",
        enlace: "https://grok.com/"
    },
    {
        id: "perplexity",
        nombre: "Perplexity",
        categorias: ["Estudio", "Texto"],
        inicial: "P",
        color: "mint",
        destacado: true,
        etiquetas: ["estudiar", "investigar", "buscar", "fuentes", "preguntas"],
        descripcion: "Buscador con IA que ayuda a investigar preguntas y consultar fuentes.",
        enlace: "https://www.perplexity.ai"
    },
    {
        id: "notebooklm",
        nombre: "NotebookLM",
        categorias: ["Estudio", "Audio"],
        inicial: "N",
        color: "blue",
        destacado: false,
        etiquetas: ["estudiar", "resumir", "documentos", "investigar", "apuntes", "podcast"],
        descripcion: "Asistente de investigación que trabaja con las fuentes que proporcionas y puede resumirlas en audio.",
        enlace: "https://notebooklm.google.com"
    },
    {
        id: "elicit",
        nombre: "Elicit",
        categorias: ["Estudio"],
        inicial: "E",
        color: "mint",
        destacado: false,
        etiquetas: ["investigacion", "estudio", "articulos", "papers"],
        descripcion: "Ayuda a buscar y analizar artículos científicos para investigar temas académicos.",
        enlace: "https://elicit.com/"
    },
    {
        id: "gamma",
        nombre: "Gamma",
        categorias: ["Estudio", "Imágenes"],
        inicial: "G",
        color: "purple",
        destacado: false,
        etiquetas: ["presentaciones", "diapositivas", "documentos", "diseño"],
        descripcion: "Crea presentaciones y documentos visuales a partir de ideas y textos.",
        enlace: "https://gamma.app/"
    },
    {
        id: "canva",
        nombre: "Canva",
        categorias: ["Imágenes"],
        inicial: "Ca",
        color: "blue",
        destacado: true,
        etiquetas: ["imagenes", "diseño", "presentaciones", "redes sociales", "ilustraciones"],
        descripcion: "Plataforma de diseño con funciones de IA para crear contenido visual.",
        enlace: "https://www.canva.com"
    },
    {
        id: "leonardo",
        nombre: "Leonardo AI",
        categorias: ["Imágenes"],
        inicial: "L",
        color: "purple",
        destacado: false,
        etiquetas: ["imagenes", "diseño", "ilustraciones", "arte", "generador"],
        descripcion: "Herramienta para crear imágenes y recursos visuales con inteligencia artificial.",
        enlace: "https://leonardo.ai"
    },
    {
        id: "adobe-firefly",
        nombre: "Adobe Firefly",
        categorias: ["Imágenes"],
        inicial: "A",
        color: "orange",
        destacado: false,
        etiquetas: ["imagenes", "diseño", "generar", "editar", "creatividad"],
        descripcion: "Herramientas generativas de Adobe para crear y editar contenido visual.",
        enlace: "https://firefly.adobe.com"
    },
    {
        id: "ideogram",
        nombre: "Ideogram",
        categorias: ["Imágenes"],
        inicial: "I",
        color: "purple",
        destacado: false,
        etiquetas: ["imagenes", "diseño", "creatividad", "carteles"],
        descripcion: "Genera imágenes, carteles y diseños a partir de descripciones de texto.",
        enlace: "https://ideogram.ai/"
    },
    {
        id: "midjourney",
        nombre: "Midjourney",
        categorias: ["Imágenes"],
        inicial: "M",
        color: "purple",
        destacado: false,
        etiquetas: ["imagenes", "arte", "diseño"],
        descripcion: "Herramienta de generación de imágenes artísticas mediante inteligencia artificial.",
        enlace: "https://www.midjourney.com/"
    },
    {
        id: "runway",
        nombre: "Runway",
        categorias: ["Video", "Imágenes"],
        inicial: "R",
        color: "mint",
        destacado: true,
        etiquetas: ["videos", "edicion", "audiovisual", "generar video", "animacion"],
        descripcion: "Plataforma creativa para generar y editar videos con IA.",
        enlace: "https://runwayml.com"
    },
    {
        id: "capcut",
        nombre: "CapCut",
        categorias: ["Video"],
        inicial: "C",
        color: "blue",
        destacado: false,
        etiquetas: ["videos", "edicion", "subtitulos", "redes sociales"],
        descripcion: "Editor de video con funciones inteligentes para crear contenido audiovisual.",
        enlace: "https://www.capcut.com"
    },
    {
        id: "kling-ai",
        nombre: "Kling AI",
        categorias: ["Video"],
        inicial: "K",
        color: "blue",
        destacado: false,
        etiquetas: ["video", "animacion", "creatividad"],
        descripcion: "Crea vídeos a partir de indicaciones de texto e imágenes.",
        enlace: "https://klingai.com/"
    },
    {
        id: "pika",
        nombre: "Pika",
        categorias: ["Video"],
        inicial: "P",
        color: "orange",
        destacado: false,
        etiquetas: ["video", "animacion", "efectos"],
        descripcion: "Crea y transforma vídeos con herramientas de inteligencia artificial.",
        enlace: "https://pika.art/"
    },
    {
        id: "github-copilot",
        nombre: "GitHub Copilot",
        categorias: ["Programación"],
        inicial: "GH",
        color: "mint",
        destacado: true,
        etiquetas: ["programar", "codigo", "desarrollo", "programacion", "software"],
        descripcion: "Asistente de programación que ayuda a escribir y comprender código.",
        enlace: "https://github.com/features/copilot"
    },
    {
        id: "cursor",
        nombre: "Cursor",
        categorias: ["Programación"],
        inicial: "C",
        color: "mint",
        destacado: false,
        etiquetas: ["codigo", "programacion", "desarrollo", "editor"],
        descripcion: "Editor de código con IA que ayuda a comprender y desarrollar proyectos.",
        enlace: "https://cursor.com/"
    },
    {
        id: "windsurf",
        nombre: "Windsurf",
        categorias: ["Programación"],
        inicial: "W",
        color: "blue",
        destacado: false,
        etiquetas: ["codigo", "programacion", "desarrollo", "editor"],
        descripcion: "Editor de código con agentes de IA para desarrollar y modificar proyectos.",
        enlace: "https://windsurf.com/"
    },
    {
        id: "replit",
        nombre: "Replit",
        categorias: ["Programación"],
        inicial: "R",
        color: "orange",
        destacado: false,
        etiquetas: ["codigo", "programacion", "aplicaciones", "en linea"],
        descripcion: "Entorno en línea para crear y probar aplicaciones con ayuda de IA.",
        enlace: "https://replit.com/"
    },
    {
        id: "lovable",
        nombre: "Lovable",
        categorias: ["Programación"],
        inicial: "L",
        color: "purple",
        destacado: false,
        etiquetas: ["aplicaciones", "paginas web", "programacion", "sin codigo"],
        descripcion: "Crea aplicaciones y sitios web describiendo en lenguaje natural lo que necesitas.",
        enlace: "https://lovable.dev/"
    },
    {
        id: "bolt",
        nombre: "Bolt",
        categorias: ["Programación"],
        inicial: "B",
        color: "blue",
        destacado: false,
        etiquetas: ["aplicaciones", "paginas web", "programacion", "desarrollo"],
        descripcion: "Genera y edita aplicaciones web completas desde el navegador con ayuda de IA.",
        enlace: "https://bolt.new/"
    },
    {
        id: "elevenlabs",
        nombre: "ElevenLabs",
        categorias: ["Audio"],
        inicial: "11",
        color: "orange",
        destacado: false,
        etiquetas: ["audio", "voces", "texto a voz", "transcripcion", "locucion"],
        descripcion: "Plataforma de generación de voz y herramientas de audio con IA.",
        enlace: "https://elevenlabs.io"
    },
    {
        id: "suno",
        nombre: "Suno",
        categorias: ["Audio"],
        inicial: "S",
        color: "orange",
        destacado: false,
        etiquetas: ["musica", "audio", "creatividad", "canciones"],
        descripcion: "Genera canciones y composiciones musicales a partir de descripciones.",
        enlace: "https://suno.com/"
    },
    {
        id: "udio",
        nombre: "Udio",
        categorias: ["Audio"],
        inicial: "U",
        color: "purple",
        destacado: false,
        etiquetas: ["musica", "audio", "canciones"],
        descripcion: "Plataforma para crear música con inteligencia artificial.",
        enlace: "https://www.udio.com/"
    },
    {
        id: "descript",
        nombre: "Descript",
        categorias: ["Audio", "Video"],
        inicial: "D",
        color: "mint",
        destacado: false,
        etiquetas: ["transcripcion", "audio", "edicion", "podcast", "video"],
        descripcion: "Edita audio y video como si fuera un documento de texto, con transcripción automática.",
        enlace: "https://www.descript.com/"
    },
    {
        id: "otter",
        nombre: "Otter",
        categorias: ["Audio"],
        inicial: "O",
        color: "blue",
        destacado: false,
        etiquetas: ["transcripcion", "reuniones", "audio", "notas", "resumir"],
        descripcion: "Transcribe y resume reuniones y conversaciones con inteligencia artificial.",
        enlace: "https://otter.ai/"
    }
];

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
    const terminos = normalizar(searchInput.value).split(/[\s,]+/).filter(Boolean);
    const categoriaBuscada = normalizar(categoriaActual);

    const resultados = [];

    herramientas.forEach(herramienta => {
        const coincideCategoria = categoriaActual === "Todas" ||
            herramienta.categorias.some(c => normalizar(c) === categoriaBuscada);
        const coincideFavorito = !mostrarSoloFavoritos || favoritos.includes(herramienta.id);

        if (!coincideCategoria || !coincideFavorito) return;

        const texto = normalizar([
            herramienta.nombre,
            ...herramienta.categorias,
            herramienta.descripcion,
            ...herramienta.etiquetas
        ].join(" "));

        // Cuántas palabras de la búsqueda aparecen en la herramienta
        const coincidencias = terminos.filter(t => texto.includes(t)).length;

        if (terminos.length === 0 || coincidencias > 0) {
            resultados.push({ herramienta, coincidencias });
        }
    });

    // Con búsqueda activa, primero las que coinciden con más palabras
    if (terminos.length > 0) {
        resultados.sort((a, b) => b.coincidencias - a.coincidencias);
    }

    return resultados.map(r => r.herramienta);
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
        mostrarDetalle(herramienta, botonDetalles);
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