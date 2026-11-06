
/* =========================================
   IA HUB - IDIOMAS ESPAÑOL / INGLÉS
========================================= */

const idiomaIAHub = document.documentElement.lang === "en" ? "en" : "es";

const textosIAHub = {
    es: {
        visitar: "Visitar herramienta ↗",
        detalles: "Ver detalles",
        destacado: "DESTACADA",
        ver: "VER",
        quitarFavorito: "Quitar de favoritos",
        agregarFavorito: "Agregar a favoritos",
        cerrar: "Cerrar detalles",
        paraQueSirve: "¿Para qué sirve?",
        funciones: "Funciones y usos",
        aviso: "Consulta la página oficial para conocer sus planes, precios y funciones disponibles.",
        visitarPagina: "Visitar página ↗",
        mostrando: "Mostrando",
        de: "de",
        herramientas: "herramientas",
        favorito: "favorito",
        favoritos: "favoritos",
        modoClaro: "Cambiar a modo claro",
        modoOscuro: "Cambiar a modo oscuro"
    },

    en: {
        visitar: "Visit Tool ↗",
        detalles: "View Details",
        destacado: "FEATURED",
        ver: "VIEW",
        quitarFavorito: "Remove from favorites",
        agregarFavorito: "Add to favorites",
        cerrar: "Close details",
        paraQueSirve: "What Is It Used For?",
        funciones: "Features and Uses",
        aviso: "Visit the official website to check available plans, pricing, and features.",
        visitarPagina: "Visit Website ↗",
        mostrando: "Showing",
        de: "of",
        herramientas: "tools",
        favorito: "favorite",
        favoritos: "favorites",
        modoClaro: "Switch to light mode",
        modoOscuro: "Switch to dark mode"
    }
};

const tIA = textosIAHub[idiomaIAHub];

/* Categorías visibles */
const categoriasIAHub = {
    "Texto": "Writing",
    "Imágenes": "Images",
    "Video": "Video",
    "Programación": "Coding",
    "Estudio": "Studying",
    "Audio": "Audio"
};

function traducirCategoriaIAHub(categoria) {
    if (idiomaIAHub === "es") return categoria;
    return categoriasIAHub[categoria] || categoria;
}

/* Términos de búsqueda en inglés */
const busquedasInglesIAHub = {
    imagenes: [
        "image", "images", "picture", "pictures",
        "drawing", "illustration", "art", "design",
        "photo", "photography", "logo"
    ],
    video: [
        "video", "videos", "animation", "movie",
        "movies", "clip", "editing"
    ],
    audio: [
        "audio", "voice", "voices", "music",
        "song", "songs", "sound", "podcast",
        "transcription", "speech"
    ],
    programacion: [
        "code", "coding", "programming", "program",
        "developer", "development", "software",
        "website", "web", "app", "debugging"
    ],
    estudio: [
        "study", "studying", "learn", "learning",
        "research", "homework", "school",
        "education", "summary", "notes"
    ],
    texto: [
        "write", "writing", "text", "essay",
        "document", "email", "article",
        "content", "copywriting"
    ]
};

/* Rutas correctas según el idioma */
function rutaHerramientaIAHub(id) {
    const archivo = `herramienta.html?id=${encodeURIComponent(id)}`;

    return idiomaIAHub === "en"
        ? `../${archivo}`
        : archivo;
}
