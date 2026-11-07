
/* ============================================
   IA HUB - DETALLE DE HERRAMIENTAS
   ESPAÑOL E INGLÉS
============================================ */

// Obtener el identificador desde la URL
const parametros = new URLSearchParams(window.location.search);
const idHerramienta = parametros.get("id");

// Detectar idioma
const idiomaHerramienta =
    document.documentElement.lang === "en" ? "en" : "es";

const esIngles = idiomaHerramienta === "en";

// Buscar herramienta
const herramienta = herramientas.find(
    elemento => elemento.id === idHerramienta
);


// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Seleccionar texto según el idioma
function obtenerTexto(campo, valorAlternativo = "") {

    if (!herramienta) return valorAlternativo;

    if (esIngles) {
        return herramienta[campo + "En"] ||
            herramienta[campo] ||
            valorAlternativo;
    }

    return herramienta[campo] || valorAlternativo;
}


// Seleccionar listas según el idioma
function obtenerLista(campo) {

    if (!herramienta) return [];

    if (esIngles) {
        return herramienta[campo + "En"] ||
            herramienta[campo] ||
            [];
    }

    return herramienta[campo] || [];
}


// Crear o actualizar etiquetas META
function actualizarMeta(nombre, contenido, atributo = "name") {

    let meta = document.querySelector(
        `meta[${atributo}="${nombre}"]`
    );

    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(atributo, nombre);
        document.head.appendChild(meta);
    }

    meta.setAttribute("content", contenido);
}


// Obtener logo de una herramienta
function obtenerLogo(enlace) {

    try {
        const dominio = new URL(enlace).hostname;

        return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=128`;

    } catch (error) {
        return "";
    }
}


// ============================================
// MOSTRAR HERRAMIENTA
// ============================================

if (herramienta) {

    // ============================================
    // TÍTULO Y SEO
    // ============================================

    document.title = esIngles
        ? `${herramienta.nombre}: Features, Benefits and Uses | IA Hub`
        : `${herramienta.nombre}: qué es, funciones y usos | IA Hub`;


    const descripcionSEO = (
        obtenerTexto("descripcion") ||
        obtenerTexto("queEs")
    ).substring(0, 155);


    actualizarMeta("description", descripcionSEO);

    actualizarMeta(
        "og:title",
        `${herramienta.nombre} | IA Hub`,
        "property"
    );

    actualizarMeta(
        "og:description",
        descripcionSEO,
        "property"
    );

    actualizarMeta(
        "og:type",
        "website",
        "property"
    );

    actualizarMeta(
        "og:url",
        window.location.href,
        "property"
    );

    actualizarMeta("twitter:card", "summary");

    actualizarMeta(
        "twitter:title",
        `${herramienta.nombre} | IA Hub`
    );

    actualizarMeta(
        "twitter:description",
        descripcionSEO
    );


    // ============================================
    // URL CANÓNICA
    // ============================================

    let canonical = document.querySelector(
        'link[rel="canonical"]'
    );

    if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
    }

    const rutaCanonica = esIngles
        ? "/en/herramienta.html"
        : "/herramienta.html";

    canonical.href =
        `https://ia-hub-bice.vercel.app${rutaCanonica}?id=${encodeURIComponent(herramienta.id)}`;


    // ============================================
    // DATOS ESTRUCTURADOS
    // ============================================

    const datosEstructurados = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": herramienta.nombre,
        "description": descripcionSEO,
        "applicationCategory": "AI tool",
        "operatingSystem": "Web",
        "url": herramienta.enlace
    };

    let scriptSchema = document.getElementById(
        "datos-estructurados"
    );

    if (!scriptSchema) {

        scriptSchema = document.createElement("script");
        scriptSchema.id = "datos-estructurados";
        scriptSchema.type = "application/ld+json";

        document.head.appendChild(scriptSchema);
    }

    scriptSchema.textContent =
        JSON.stringify(datosEstructurados);


    // ============================================
    // MIGAS DE PAN
    // ============================================

    const urlInicio = esIngles
        ? "https://ia-hub-bice.vercel.app/en/"
        : "https://ia-hub-bice.vercel.app/";

    const migasDePan = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": esIngles ? "Home" : "Inicio",
                "item": urlInicio
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": herramienta.nombre,
                "item": canonical.href
            }
        ]
    };

    let scriptBreadcrumb = document.getElementById(
        "datos-breadcrumb"
    );

    if (!scriptBreadcrumb) {

        scriptBreadcrumb = document.createElement("script");
        scriptBreadcrumb.id = "datos-breadcrumb";
        scriptBreadcrumb.type = "application/ld+json";

        document.head.appendChild(scriptBreadcrumb);
    }

    scriptBreadcrumb.textContent =
        JSON.stringify(migasDePan);


    // ============================================
    // NOMBRE
    // ============================================

    document.getElementById("herramienta-nombre").textContent =
        herramienta.nombre;


    // ============================================
    // DESCRIPCIÓN
    // ============================================

    document.getElementById("herramienta-descripcion").textContent =
        obtenerTexto("descripcion");


    // ============================================
    // QUÉ ES
    // ============================================

    document.getElementById("herramienta-que-es").textContent =
        obtenerTexto("queEs", obtenerTexto("descripcion"));


    // ============================================
    // DISPONIBILIDAD
    // ============================================

    const mensajeDisponibilidad = esIngles
        ? "Visit the official website for available plans and features."
        : "Consulta la página oficial para conocer sus planes y funciones disponibles.";

    document.getElementById("herramienta-disponibilidad").textContent =
        obtenerTexto("disponibilidad", mensajeDisponibilidad);


    // ============================================
    // VENTAJAS
    // ============================================

    const contenedorVentajas =
        document.getElementById("herramienta-ventajas");

    contenedorVentajas.innerHTML = "";

    const ventajas = obtenerLista("ventajas");

    ventajas.forEach(ventaja => {

        const elemento = document.createElement("p");

        elemento.textContent = ventaja;

        contenedorVentajas.appendChild(elemento);

    });


    // ============================================
    // LOGO
    // ============================================

    const logo = document.getElementById("herramienta-logo");

    logo.src = obtenerLogo(herramienta.enlace);

    logo.alt = esIngles
        ? `${herramienta.nombre} logo`
        : `Logo de ${herramienta.nombre}`;


    // ============================================
    // ENLACES OFICIALES Y AFILIADOS
    // ============================================

    const tieneAfiliado =
        herramienta.afiliadoActivo &&
        herramienta.enlaceAfiliado;

    const urlVisita = tieneAfiliado
        ? herramienta.enlaceAfiliado
        : herramienta.enlace;

    const relVisita = tieneAfiliado
        ? "sponsored noopener noreferrer"
        : "noopener noreferrer";

    const enlacesVisita = [
        document.getElementById("herramienta-enlace"),
        document.getElementById("herramienta-enlace-final"),
        document.getElementById("herramienta-enlace-planes")
    ];

    enlacesVisita.forEach(enlace => {

        if (!enlace) return;

        enlace.href = urlVisita;
        enlace.target = "_blank";
        enlace.rel = relVisita;

    });


    // ============================================
    // CATEGORÍAS
    // ============================================

    const contenedorCategorias =
        document.getElementById("herramienta-categorias");

    contenedorCategorias.innerHTML = "";

    const categoriasEn = {
        "Texto": "Writing",
        "Imágenes": "Images",
        "Video": "Video",
        "Programación": "Coding",
        "Estudio": "Study",
        "Audio": "Audio"
    };

    herramienta.categorias.forEach(categoria => {

        const etiqueta = document.createElement("span");

        etiqueta.textContent = esIngles
            ? (categoriasEn[categoria] || categoria)
            : categoria;

        contenedorCategorias.appendChild(etiqueta);

    });


    // ============================================
    // FUNCIONES
    // ============================================

    const contenedorEtiquetas =
        document.getElementById("herramienta-etiquetas");

    contenedorEtiquetas.innerHTML = "";

    const funciones = obtenerLista("funciones");

    funciones.forEach(funcion => {

        const elemento = document.createElement("span");

        elemento.textContent = funcion;

        contenedorEtiquetas.appendChild(elemento);

    });


    // ============================================
    // USOS PRINCIPALES
    // ============================================

    const contenedorUsos =
        document.getElementById("herramienta-usos");

    contenedorUsos.innerHTML = "";

    let usos = obtenerLista("usos");

    // Alternativa si una herramienta no tiene usos
    if (usos.length === 0) {

        const etiquetas = obtenerLista("etiquetas");

        usos = etiquetas.slice(0, 4).map(uso => ({

            titulo:
                uso.charAt(0).toUpperCase() + uso.slice(1),

            descripcion: esIngles
                ? `Explore how ${herramienta.nombre} can help with ${uso}.`
                : `Explora las posibilidades de ${herramienta.nombre} relacionadas con ${uso}.`

        }));
    }

    usos.forEach((uso, indice) => {

        const bloque = document.createElement("div");

        const numero = document.createElement("span");
        numero.textContent =
            String(indice + 1).padStart(2, "0");

        const titulo = document.createElement("h3");
        titulo.textContent = uso.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = uso.descripcion;

        bloque.append(numero, titulo, descripcion);

        contenedorUsos.appendChild(bloque);

    });


    // ============================================
    // HERRAMIENTAS RELACIONADAS
    // ============================================

    const contenedorRelacionadas =
        document.getElementById("herramientas-relacionadas");

    contenedorRelacionadas.innerHTML = "";

    const relacionadas = herramientas
        .filter(elemento =>

            elemento.id !== herramienta.id &&

            elemento.categorias.some(categoria =>
                herramienta.categorias.includes(categoria)
            )

        )
        .slice(0, 3);


    relacionadas.forEach(relacionada => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "related-card";


        // Logo
        const logoRelacionado = document.createElement("img");

        logoRelacionado.src =
            obtenerLogo(relacionada.enlace);

        logoRelacionado.alt = esIngles
            ? `${relacionada.nombre} logo`
            : `Logo de ${relacionada.nombre}`;


        // Nombre
        const nombreRelacionado = document.createElement("h3");

        nombreRelacionado.textContent =
            relacionada.nombre;


        // Descripción
        const descripcionRelacionada =
            document.createElement("p");

        descripcionRelacionada.textContent = esIngles
            ? (relacionada.descripcionEn || relacionada.descripcion)
            : relacionada.descripcion;


        // Enlace
        const enlaceRelacionado =
            document.createElement("a");

        enlaceRelacionado.href =
            `herramienta.html?id=${encodeURIComponent(relacionada.id)}`;

        enlaceRelacionado.textContent = esIngles
            ? `Explore ${relacionada.nombre} →`
            : `Conocer ${relacionada.nombre} →`;

        enlaceRelacionado.title = esIngles
            ? `Discover ${relacionada.nombre}, its features and uses`
            : `Descubre qué es ${relacionada.nombre}, sus funciones y usos`;


        tarjeta.append(
            logoRelacionado,
            nombreRelacionado,
            descripcionRelacionada,
            enlaceRelacionado
        );

        contenedorRelacionadas.appendChild(tarjeta);

    });


// ============================================
// HERRAMIENTA NO ENCONTRADA
// ============================================

} else {

    const contenedorPrincipal =
        document.querySelector(".chatgpt-main");

    if (contenedorPrincipal) {

        contenedorPrincipal.textContent = esIngles
            ? "We couldn't find this AI tool. Return to the IA Hub catalog."
            : "No encontramos esta herramienta. Regresa al catálogo de IA Hub.";

    }

}
