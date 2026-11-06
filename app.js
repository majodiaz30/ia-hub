
/* ============================================
   IA HUB - CATÁLOGO, BÚSQUEDA Y FAVORITOS
   COMPATIBLE CON ESPAÑOL E INGLÉS
============================================ */

// ============================================
// ELEMENTOS DEL HTML
// ============================================

const toolsGrid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const searchButton = document.getElementById("searchButton");
const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");
const favoriteCount = document.getElementById("favoriteCount");
const favoritesToggle = document.getElementById("favoritesToggle");

const filterButtons = document.querySelectorAll(".filter-chip");
const priceButtons = document.querySelectorAll(".price-chip");
const categoryCards = document.querySelectorAll(".category-card");

const clearFilters = document.getElementById("clearFilters");
const resetSearch = document.getElementById("resetSearch");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toolsSection = document.querySelector(".tools-section");


// ============================================
// ESTADO DE LOS FILTROS
// ============================================

let categoriaActual = "Todas";
let mostrarSoloFavoritos = false;
let precioActual = "todos";


// ============================================
// FAVORITOS
// ============================================

let favoritos = [];

try {
    const guardados = JSON.parse(
        localStorage.getItem("iahub-favoritos")
    );

    favoritos = Array.isArray(guardados) ? guardados : [];

} catch (error) {
    favoritos = [];
}


// ============================================
// NORMALIZAR TEXTO
// ============================================

function normalizar(texto) {
    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


// ============================================
// GUARDAR FAVORITOS
// ============================================

function guardarFavoritos() {

    try {
        localStorage.setItem(
            "iahub-favoritos",
            JSON.stringify(favoritos)
        );
    } catch (error) {
        // Si el navegador bloquea el almacenamiento,
        // los favoritos siguen funcionando temporalmente.
    }

    actualizarContadorFavoritos();
}


// ============================================
// CONTADOR DE FAVORITOS
// ============================================

function actualizarContadorFavoritos() {

    if (!favoriteCount || !favoritesToggle) return;

    favoriteCount.textContent = favoritos.length;

    favoritesToggle.classList.toggle(
        "active",
        mostrarSoloFavoritos
    );

    favoritesToggle.setAttribute(
        "aria-pressed",
        String(mostrarSoloFavoritos)
    );
}


// ============================================
// PALABRAS RELACIONADAS
// ============================================

const palabrasRelacionadas = {

    imagenes: [
        "imagen", "imagenes", "dibujar", "dibujo",
        "ilustracion", "ilustraciones", "arte",
        "foto", "fotografia", "diseño", "diseno",
        "logo"
    ],

    video: [
        "video", "videos", "animacion",
        "animaciones", "editar video",
        "peliculas", "clips"
    ],

    audio: [
        "audio", "voz", "voces", "musica",
        "canciones", "sonido", "podcast",
        "locucion"
    ],

    programacion: [
        "programar", "codigo", "codificar",
        "desarrollo", "desarrollar",
        "programacion", "software",
        "pagina web", "aplicacion"
    ],

    estudio: [
        "estudiar", "estudio", "aprender",
        "aprendizaje", "tareas", "investigar",
        "investigacion", "resumen",
        "resumir", "apuntes"
    ],

    texto: [
        "escribir", "redactar", "texto",
        "documentos", "ensayos", "correos",
        "articulos", "contenido"
    ]
};


// Agregar búsquedas en inglés
if (idiomaIAHub === "en") {

    Object.keys(busquedasInglesIAHub).forEach(categoria => {

        if (palabrasRelacionadas[categoria]) {

            palabrasRelacionadas[categoria].push(
                ...busquedasInglesIAHub[categoria]
            );
        }

    });
}


// ============================================
// RELACIÓN ENTRE CATEGORÍAS
// ============================================

const categoriasBusqueda = {

    imagenes: "Imágenes",
    video: "Video",
    audio: "Audio",
    programacion: "Programación",
    estudio: "Estudio",
    texto: "Texto"

};


// ============================================
// IDENTIFICAR CATEGORÍAS RELACIONADAS
// ============================================

function obtenerCategoriasRelacionadas(terminos) {

    const categorias = [];

    Object.entries(palabrasRelacionadas).forEach(
        ([categoria, palabras]) => {

            const coincide = terminos.some(termino =>

                palabras.some(palabra => {

                    const palabraNormalizada = normalizar(palabra);

                    return palabraNormalizada.includes(termino) ||
                        termino.includes(palabraNormalizada);

                })

            );

            if (coincide) {
                categorias.push(categoriasBusqueda[categoria]);
            }

        }
    );

    return categorias;
}


// ============================================
// OBTENER RESULTADOS
// ============================================

function obtenerResultados() {

    const terminos = normalizar(searchInput.value)
        .split(/[\s,]+/)
        .filter(Boolean);

    const categoriaBuscada = normalizar(categoriaActual);

    const categoriasRelacionadas =
        obtenerCategoriasRelacionadas(terminos);

    const resultados = [];

    herramientas.forEach(herramienta => {

        // Filtrar por categoría
        const coincideCategoria =
            categoriaActual === "Todas" ||
            herramienta.categorias.some(c =>
                normalizar(c) === categoriaBuscada
            );

        // Filtrar por favoritos
        const coincideFavorito =
            !mostrarSoloFavoritos ||
            favoritos.includes(herramienta.id);

        // Filtrar por precio
        const coincidePrecio =
            precioActual === "todos" ||
            herramienta.precio === precioActual;

        if (
            !coincideCategoria ||
            !coincideFavorito ||
            !coincidePrecio
        ) {
            return;
        }

        const nombre = normalizar(herramienta.nombre);

        const categorias = normalizar(
            herramienta.categorias.join(" ")
        );

        const categoriasTraducidas = normalizar(
            herramienta.categorias
                .map(traducirCategoriaIAHub)
                .join(" ")
        );

        const etiquetas = normalizar(
            herramienta.etiquetas.join(" ")
        );

        const descripcion = normalizar(
            herramienta.descripcion
        );

        const descripcionIngles = normalizar(
            herramienta.descripcionEn || ""
        );

        // Si no hay búsqueda, mostrar todas
        // las herramientas que cumplan los filtros
        if (terminos.length === 0) {

            resultados.push({
                herramienta,
                puntuacion: 0
            });

            return;
        }

        let puntuacion = 0;

        // Buscar coincidencias
        terminos.forEach(termino => {

            if (nombre.includes(termino)) {
                puntuacion += 10;
            }

            if (
                categorias.includes(termino) ||
                categoriasTraducidas.includes(termino)
            ) {
                puntuacion += 6;
            }

            if (etiquetas.includes(termino)) {
                puntuacion += 4;
            }

            if (
                descripcion.includes(termino) ||
                descripcionIngles.includes(termino)
            ) {
                puntuacion += 2;
            }

        });

        // Buscar coincidencias por palabras relacionadas
        categoriasRelacionadas.forEach(categoria => {

            if (
                herramienta.categorias.some(c =>
                    normalizar(c) === normalizar(categoria)
                )
            ) {
                puntuacion += 8;
            }

        });

        if (puntuacion === 0) return;

        resultados.push({
            herramienta,
            puntuacion
        });

    });

    resultados.sort(
        (a, b) => b.puntuacion - a.puntuacion
    );

    return resultados.map(
        resultado => resultado.herramienta
    );
}


// ============================================
// SUGERENCIAS DE BÚSQUEDA
// ============================================

function mostrarSugerencias() {

    const busqueda = normalizar(
        searchInput.value.trim()
    );

    searchSuggestions.replaceChildren();

    if (!busqueda) {
        searchSuggestions.classList.remove("active");
        return;
    }

    // Utilizar el mismo sistema de búsqueda
    // para que también reconozca términos ingleses.
    const sugerencias = obtenerResultados().slice(0, 5);

    if (sugerencias.length === 0) {
        searchSuggestions.classList.remove("active");
        return;
    }

    sugerencias.forEach(herramienta => {

        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "suggestion-item";

        const dominio = new URL(
            herramienta.enlace
        ).hostname;

        const imagen = document.createElement("img");

        imagen.src =
            `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=64`;

        imagen.alt = "";

        const nombre = document.createElement("span");
        nombre.textContent = herramienta.nombre;

        const etiqueta = document.createElement("strong");
        etiqueta.textContent = tIA.ver;

        boton.append(imagen, nombre, etiqueta);

        boton.addEventListener("click", () => {

            searchInput.value = herramienta.nombre;

            searchSuggestions.classList.remove("active");

            mostrarHerramientas();

            irAlCatalogo();

        });

        searchSuggestions.appendChild(boton);

    });

    searchSuggestions.classList.add("active");
}


// ============================================
// ENLACES DE AFILIADOS
// ============================================

function obtenerEnlaceVisita(herramienta) {

    if (
        herramienta.afiliadoActivo &&
        herramienta.enlaceAfiliado
    ) {
        return herramienta.enlaceAfiliado;
    }

    return herramienta.enlace;
}


// ============================================
// DESCRIPCIÓN SEGÚN EL IDIOMA
// ============================================

function obtenerDescripcion(herramienta) {

    if (
        idiomaIAHub === "en" &&
        herramienta.descripcionEn
    ) {
        return herramienta.descripcionEn;
    }

    return herramienta.descripcion;
}


// ============================================
// ETIQUETAS SEGÚN EL IDIOMA
// ============================================

function obtenerEtiquetas(herramienta) {

    if (
        idiomaIAHub === "en" &&
        Array.isArray(herramienta.etiquetasEn)
    ) {
        return herramienta.etiquetasEn;
    }

    return herramienta.etiquetas;
}


// ============================================
// CREAR TARJETAS
// ============================================

function crearTarjeta(herramienta) {

    const tarjeta = document.createElement("article");
    tarjeta.className = "tool-card";

    const top = document.createElement("div");
    top.className = "tool-top";

    // Logo
    const icono = document.createElement("div");

    icono.className =
        `tool-icon ${herramienta.color || ""}`.trim();

    icono.setAttribute(
        "aria-label",
        `Logo: ${herramienta.nombre}`
    );

    // Inicial de respaldo
    const inicial = document.createElement("span");

    inicial.className = "tool-initial";
    inicial.textContent = herramienta.inicial;

    // Imagen oficial
    const imagen = document.createElement("img");

    const dominio = new URL(
        herramienta.enlace
    ).hostname;

    imagen.src =
        `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=128`;

    imagen.alt = `Logo: ${herramienta.nombre}`;
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

    // Categoría
    const categoria = document.createElement("span");

    categoria.className = "tool-category";

    categoria.textContent = traducirCategoriaIAHub(
        herramienta.categorias[0]
    );

    top.append(icono, categoria);

    // Nombre
    const titulo = document.createElement("h3");
    titulo.textContent = herramienta.nombre;

    // Descripción
    const descripcion = document.createElement("p");

    descripcion.className = "tool-description";

    descripcion.textContent = obtenerDescripcion(
        herramienta
    );

    // Acciones
    const acciones = document.createElement("div");
    acciones.className = "tool-actions";

    // Visitar herramienta
    const enlace = document.createElement("a");
    enlace.className = "tool-link";

    enlace.href = obtenerEnlaceVisita(herramienta);
    enlace.target = "_blank";

    enlace.rel =
        herramienta.afiliadoActivo &&
        herramienta.enlaceAfiliado
            ? "sponsored noopener noreferrer"
            : "noopener noreferrer";

    enlace.textContent = tIA.visitar;

    // Favoritos
    const botonFavorito = document.createElement("button");

    botonFavorito.className = "favorite-button";
    botonFavorito.type = "button";

    const esFavorito = favoritos.includes(
        herramienta.id
    );

    botonFavorito.classList.toggle(
        "is-favorite",
        esFavorito
    );

    botonFavorito.textContent =
        esFavorito ? "♥" : "♡";

    botonFavorito.setAttribute(
        "aria-label",
        `${esFavorito ? tIA.quitarFavorito : tIA.agregarFavorito}: ${herramienta.nombre}`
    );

    botonFavorito.setAttribute(
        "aria-pressed",
        String(esFavorito)
    );

    botonFavorito.addEventListener("click", () => {
        cambiarFavorito(herramienta.id);
    });

    // Ver detalles
    const botonDetalles = document.createElement("button");

    botonDetalles.className = "tool-details-button";
    botonDetalles.type = "button";
    botonDetalles.textContent = tIA.detalles;

    botonDetalles.addEventListener("click", () => {

        window.location.href = rutaHerramientaIAHub(
            herramienta.id
        );

    });

    acciones.append(
        enlace,
        botonDetalles,
        botonFavorito
    );

    tarjeta.append(
        top,
        titulo,
        descripcion,
        acciones
    );

    // Destacada
    if (herramienta.destacado) {

        const etiqueta = document.createElement("span");

        etiqueta.className = "featured-label";
        etiqueta.textContent = tIA.destacado;

        tarjeta.appendChild(etiqueta);
    }

    return tarjeta;
}


// ============================================
// VENTANA DE DETALLES
// ============================================

function mostrarDetalle(herramienta, botonOrigen) {

    const ventanaAnterior = document.querySelector(
        ".detail-overlay"
    );

    if (ventanaAnterior) {
        ventanaAnterior.remove();
    }

    const overlay = document.createElement("div");
    overlay.className = "detail-overlay";

    const modal = document.createElement("div");
    modal.className = "detail-modal";

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "detail-title");

    // Cerrar ventana
    function cerrarModal() {

        document.removeEventListener(
            "keydown",
            cerrarConEscape
        );

        overlay.remove();

        if (
            botonOrigen &&
            document.body.contains(botonOrigen)
        ) {
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

    cerrar.setAttribute(
        "aria-label",
        tIA.cerrar
    );

    cerrar.addEventListener("click", cerrarModal);

    // Categorías
    const categoria = document.createElement("span");

    categoria.className = "detail-category";

    categoria.textContent = herramienta.categorias
        .map(traducirCategoriaIAHub)
        .join(" · ");

    // Nombre
    const titulo = document.createElement("h2");

    titulo.id = "detail-title";
    titulo.textContent = herramienta.nombre;

    // Título de descripción
    const descripcionTitulo = document.createElement("h3");

    descripcionTitulo.textContent = tIA.paraQueSirve;

    // Descripción
    const descripcion = document.createElement("p");

    descripcion.textContent = obtenerDescripcion(
        herramienta
    );

    // Título de funciones
    const etiquetasTitulo = document.createElement("h3");

    etiquetasTitulo.textContent = tIA.funciones;

    // Etiquetas
    const etiquetas = document.createElement("div");

    etiquetas.className = "detail-tags";

    obtenerEtiquetas(herramienta).forEach(etiqueta => {

        const elemento = document.createElement("span");

        elemento.textContent = etiqueta;

        etiquetas.appendChild(elemento);

    });

    // Aviso
    const aviso = document.createElement("p");

    aviso.className = "detail-notice";
    aviso.textContent = tIA.aviso;

    // Visitar página
    const visitar = document.createElement("a");

    visitar.className = "detail-visit";

    visitar.href = obtenerEnlaceVisita(herramienta);
    visitar.target = "_blank";

    visitar.rel =
        herramienta.afiliadoActivo &&
        herramienta.enlaceAfiliado
            ? "sponsored noopener noreferrer"
            : "noopener noreferrer";

    visitar.textContent = tIA.visitarPagina;

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

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {
            cerrarModal();
        }

    });

    document.addEventListener(
        "keydown",
        cerrarConEscape
    );

    cerrar.focus();
}


// ============================================
// MOSTRAR HERRAMIENTAS
// ============================================

function mostrarHerramientas() {

    const resultados = obtenerResultados();

    toolsGrid.replaceChildren();

    resultados.forEach(herramienta => {

        toolsGrid.appendChild(
            crearTarjeta(herramienta)
        );

    });

    noResults.hidden = resultados.length !== 0;
    toolsGrid.hidden = resultados.length === 0;

    if (mostrarSoloFavoritos) {

        resultsCount.textContent =
            `${resultados.length} ${
                resultados.length === 1
                    ? tIA.favorito
                    : tIA.favoritos
            }`;

    } else {

        resultsCount.textContent =
            `${tIA.mostrando} ${resultados.length} ${tIA.de} ${herramientas.length} ${tIA.herramientas}`;

    }

    actualizarContadorFavoritos();
}


// ============================================
// CAMBIAR FAVORITO
// ============================================

function cambiarFavorito(id) {

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(
            favorito => favorito !== id
        );

    } else {

        favoritos.push(id);

    }

    guardarFavoritos();
    mostrarHerramientas();
}


// ============================================
// MARCAR FILTRO ACTIVO
// ============================================

function marcarFiltroActivo(categoria) {

    filterButtons.forEach(boton => {

        boton.classList.toggle(
            "active",
            boton.dataset.filter === categoria
        );

    });
}


// ============================================
// SELECCIONAR CATEGORÍA
// ============================================

function seleccionarCategoria(categoria) {

    categoriaActual = categoria;
    mostrarSoloFavoritos = false;

    searchInput.value = "";

    marcarFiltroActivo(categoria);
    mostrarHerramientas();
}


// ============================================
// LIMPIAR FILTROS
// ============================================

function limpiarFiltros() {

    categoriaActual = "Todas";
    mostrarSoloFavoritos = false;
    precioActual = "todos";

    searchInput.value = "";

    searchSuggestions.classList.remove("active");

    marcarFiltroActivo("Todas");

    priceButtons.forEach(boton => {

        boton.classList.toggle(
            "active",
            boton.dataset.price === "todos"
        );

    });

    mostrarHerramientas();
}


// ============================================
// IR AL CATÁLOGO
// ============================================

function irAlCatalogo() {

    toolsSection.scrollIntoView({
        behavior: "smooth"
    });
}


// ============================================
// EVENTOS DEL BUSCADOR
// ============================================

searchInput.addEventListener("input", () => {

    if (
        searchInput.value.trim() !== "" &&
        (
            categoriaActual !== "Todas" ||
            mostrarSoloFavoritos
        )
    ) {

        categoriaActual = "Todas";
        mostrarSoloFavoritos = false;

        marcarFiltroActivo("Todas");
    }

    mostrarHerramientas();
    mostrarSugerencias();
});


searchButton.addEventListener("click", () => {

    searchSuggestions.classList.remove("active");

    mostrarHerramientas();
    irAlCatalogo();
});


searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        searchSuggestions.classList.remove("active");

        mostrarHerramientas();
        irAlCatalogo();
    }
});


// Cerrar sugerencias al hacer clic fuera
document.addEventListener("click", evento => {

    if (!evento.target.closest(".search-box")) {

        searchSuggestions.classList.remove("active");

    }
});


// ============================================
// EVENTOS DE FILTROS
// ============================================

filterButtons.forEach(boton => {

    boton.addEventListener("click", () => {

        seleccionarCategoria(
            boton.dataset.filter
        );

    });
});


// ============================================
// FILTROS POR PRECIO
// ============================================

priceButtons.forEach(boton => {

    boton.addEventListener("click", () => {

        priceButtons.forEach(b => {
            b.classList.remove("active");
        });

        boton.classList.add("active");

        precioActual = boton.dataset.price;

        mostrarHerramientas();

    });
});


// ============================================
// TARJETAS DE CATEGORÍAS
// ============================================

categoryCards.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        seleccionarCategoria(
            tarjeta.dataset.category
        );

        irAlCatalogo();

    });
});


// ============================================
// VER SOLO FAVORITOS
// ============================================

favoritesToggle.addEventListener("click", () => {

    mostrarSoloFavoritos = !mostrarSoloFavoritos;

    if (mostrarSoloFavoritos) {

        categoriaActual = "Todas";
        searchInput.value = "";

        marcarFiltroActivo("Todas");

        searchSuggestions.classList.remove("active");
    }

    mostrarHerramientas();
    irAlCatalogo();
});


// ============================================
// LIMPIAR Y RESTABLECER
// ============================================

clearFilters.addEventListener(
    "click",
    limpiarFiltros
);

resetSearch.addEventListener(
    "click",
    limpiarFiltros
);


// ============================================
// MENÚ MÓVIL
// ============================================

menuToggle.addEventListener("click", () => {

    const abierto =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
        "aria-expanded",
        String(!abierto)
    );

    navLinks.classList.toggle(
        "open",
        !abierto
    );
});


navLinks.querySelectorAll("a").forEach(enlace => {

    enlace.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });
});


// ============================================
// MODO CLARO Y OSCURO
// ============================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

let temaGuardado = "dark";

try {

    temaGuardado =
        localStorage.getItem("temaIAHub") || "dark";

} catch (error) {

    temaGuardado = "dark";

}


// Aplicar tema
function aplicarTema(tema) {

    document.documentElement.setAttribute(
        "data-theme",
        tema
    );

    if (tema === "light") {

        themeIcon.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            tIA.modoOscuro
        );

        themeToggle.title = tIA.modoOscuro;

    } else {

        themeIcon.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            tIA.modoClaro
        );

        themeToggle.title = tIA.modoClaro;

    }

    try {

        localStorage.setItem(
            "temaIAHub",
            tema
        );

    } catch (error) {
        // El tema sigue funcionando sin almacenamiento.
    }
}


// Cambiar tema
themeToggle.addEventListener("click", () => {

    const temaActual =
        document.documentElement.getAttribute("data-theme");

    const nuevoTema =
        temaActual === "dark" ? "light" : "dark";

    aplicarTema(nuevoTema);

});


// ============================================
// PRIMERA CARGA
// ============================================

mostrarHerramientas();
aplicarTema(temaGuardado);
