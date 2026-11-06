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
// FILTRO POR PRECIO
const priceButtons = document.querySelectorAll(".price-chip");

priceButtons.forEach(boton => {

    boton.addEventListener("click", () => {

        priceButtons.forEach(b =>
            b.classList.remove("active")
        );

        boton.classList.add("active");

        precioActual = boton.dataset.price;

        mostrarHerramientas();

    });

});
const categoryCards = document.querySelectorAll(".category-card");
const clearFilters = document.getElementById("clearFilters");
const resetSearch = document.getElementById("resetSearch");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toolsSection = document.querySelector(".tools-section");

// Estado de los filtros
let categoriaActual = "Todas";
let mostrarSoloFavoritos = false;
let precioActual = "todos";

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

        const coincidePrecio =
            precioActual === "todos" ||
            herramienta.precio === precioActual;

        if (!coincideCategoria || !coincideFavorito || !coincidePrecio) return;

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

function obtenerEnlaceVisita(herramienta) {
    if (herramienta.afiliadoActivo && herramienta.enlaceAfiliado) {
        return herramienta.enlaceAfiliado;
    }

    return herramienta.enlace;
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
    const enlaceVisita = obtenerEnlaceVisita(herramienta);

    enlace.href = enlaceVisita;
    enlace.target = "_blank";

    enlace.rel = herramienta.afiliadoActivo && herramienta.enlaceAfiliado
        ? "sponsored noopener noreferrer"
        : "noopener noreferrer";

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
    const enlaceVisita = obtenerEnlaceVisita(herramienta);

    visitar.href = enlaceVisita;
    visitar.target = "_blank";

    visitar.rel = herramienta.afiliadoActivo && herramienta.enlaceAfiliado
        ? "sponsored noopener noreferrer"
        : "noopener noreferrer";

    visitar.textContent = "Visitar página ↗";

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

// ============================================
// MODO CLARO Y OSCURO - IA HUB
// ============================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Recuperar tema guardado
let temaGuardado = localStorage.getItem("temaIAHub") || "dark";

// Aplicar tema
function aplicarTema(tema) {

    document.documentElement.setAttribute("data-theme", tema);

    if (tema === "light") {
        themeIcon.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Cambiar a modo oscuro");
        themeToggle.title = "Cambiar a modo oscuro";
    } else {
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Cambiar a modo claro");
        themeToggle.title = "Cambiar a modo claro";
    }

    localStorage.setItem("temaIAHub", tema);
}

// Cambiar tema al pulsar
themeToggle.addEventListener("click", () => {

    const temaActual = document.documentElement.getAttribute("data-theme");

    const nuevoTema = temaActual === "dark" ? "light" : "dark";

    aplicarTema(nuevoTema);

});

// Aplicar tema inicial
aplicarTema(temaGuardado);