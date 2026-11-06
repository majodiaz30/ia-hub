
// Obtener el identificador de la herramienta desde la URL
const parametros = new URLSearchParams(window.location.search);
const idHerramienta = parametros.get("id");


// Buscar la herramienta seleccionada
const herramienta = herramientas.find(
    elemento => elemento.id === idHerramienta
);


// Mostrar la información
if (herramienta) {

    document.title = `${herramienta.nombre}: qué es, funciones y usos | IA Hub`;

    // ============================================
    // SEO DINÁMICO PARA CADA HERRAMIENTA
    // ============================================

    const descripcionSEO = (
        herramienta.descripcion ||
        herramienta.queEs
    ).substring(0, 155);

    // ============================================
    // DATOS ESTRUCTURADOS PARA GOOGLE
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

    let scriptSchema = document.getElementById("datos-estructurados");

    if (!scriptSchema) {
        scriptSchema = document.createElement("script");
        scriptSchema.id = "datos-estructurados";
        scriptSchema.type = "application/ld+json";
        document.head.appendChild(scriptSchema);
    }

    scriptSchema.textContent = JSON.stringify(datosEstructurados);

    // ============================================
    // MIGAS DE PAN PARA GOOGLE
    // ============================================

    const migasDePan = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://ia-hub-bice.vercel.app/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": herramienta.nombre,
                "item": window.location.href
            }
        ]
    };

    let scriptBreadcrumb = document.getElementById("datos-breadcrumb");

    if (!scriptBreadcrumb) {
        scriptBreadcrumb = document.createElement("script");
        scriptBreadcrumb.id = "datos-breadcrumb";
        scriptBreadcrumb.type = "application/ld+json";
        document.head.appendChild(scriptBreadcrumb);
    }

    scriptBreadcrumb.textContent = JSON.stringify(migasDePan);

    // Función para crear o actualizar etiquetas META
    function actualizarMeta(nombre, contenido, atributo = "name") {
        let meta = document.querySelector(`meta[${atributo}="${nombre}"]`);

        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute(atributo, nombre);
            document.head.appendChild(meta);
        }

        meta.setAttribute("content", contenido);
    }

    // Descripción para Google
    actualizarMeta("description", descripcionSEO);

    // Open Graph para compartir enlaces
    actualizarMeta("og:title", `${herramienta.nombre} | IA Hub`, "property");
    actualizarMeta("og:description", descripcionSEO, "property");
    actualizarMeta("og:type", "website", "property");
    actualizarMeta("og:url", window.location.href, "property");

    // Twitter
    actualizarMeta("twitter:card", "summary");
    actualizarMeta("twitter:title", `${herramienta.nombre} | IA Hub`);
    actualizarMeta("twitter:description", descripcionSEO);

    // URL canónica
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
    }

    canonical.href = window.location.href;

    document.getElementById("herramienta-nombre").textContent =
        herramienta.nombre;

    document.getElementById("herramienta-descripcion").textContent =
        herramienta.descripcion;

    document.getElementById("herramienta-que-es").textContent =
        herramienta.queEs || herramienta.descripcion;

    // Disponibilidad
    document.getElementById("herramienta-disponibilidad").textContent =
        herramienta.disponibilidad ||
        "Consulta la página oficial para conocer sus planes y funciones disponibles.";

    // Ventajas
    const contenedorVentajas =
        document.getElementById("herramienta-ventajas");

    (herramienta.ventajas || []).forEach(ventaja => {
        const elemento = document.createElement("p");
        elemento.textContent = ventaja;
        contenedorVentajas.appendChild(elemento);
    });

    // Logo
    const logo = document.getElementById("herramienta-logo");
    const dominio = new URL(herramienta.enlace).hostname;

    logo.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=128`;

    logo.alt = `Logo de ${herramienta.nombre}`;

    // Enlaces oficiales
    document.getElementById("herramienta-enlace").href =
        herramienta.enlace;

    document.getElementById("herramienta-enlace-final").href =
        herramienta.enlace;

    document.getElementById("herramienta-enlace-planes").href =
        herramienta.enlace;

    // Categorías
    const contenedorCategorias =
        document.getElementById("herramienta-categorias");

    herramienta.categorias.forEach(categoria => {
        const etiqueta = document.createElement("span");
        etiqueta.textContent = categoria;
        contenedorCategorias.appendChild(etiqueta);
    });

    // Funciones y etiquetas
    const contenedorEtiquetas =
        document.getElementById("herramienta-etiquetas");

    const funciones = herramienta.funciones || herramienta.etiquetas || [];

    funciones.forEach(funcion => {
        const elemento = document.createElement("span");
        elemento.textContent = funcion;
        contenedorEtiquetas.appendChild(elemento);
    });

    // Usos principales
    const contenedorUsos =
        document.getElementById("herramienta-usos");

    const usos = herramienta.usos || herramienta.etiquetas.slice(0, 4).map(uso => ({
        titulo: uso.charAt(0).toUpperCase() + uso.slice(1),
        descripcion: `Explora las posibilidades de ${herramienta.nombre} relacionadas con ${uso}.`
    }));

    usos.forEach((uso, indice) => {
        const bloque = document.createElement("div");

        const numero = document.createElement("span");
        numero.textContent = String(indice + 1).padStart(2, "0");

        const titulo = document.createElement("h3");
        titulo.textContent = uso.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = uso.descripcion;

        bloque.append(numero, titulo, descripcion);
        contenedorUsos.appendChild(bloque);
    });

    // Herramientas relacionadas
    const contenedorRelacionadas = document.getElementById(
        "herramientas-relacionadas"

    );

    console.log("Herramientas relacionadas:", herramientas.length);
    console.log("Contenedor:", contenedorRelacionadas);
    console.log("Herramienta actual:", herramienta.nombre);

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

        const dominioRelacionado = new URL(relacionada.enlace).hostname;

        const logoRelacionado = document.createElement("img");
        logoRelacionado.src =
            `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominioRelacionado)}&sz=128`;
        logoRelacionado.alt = `Logo de ${relacionada.nombre}`;

        const nombreRelacionado = document.createElement("h3");
        nombreRelacionado.textContent = relacionada.nombre;

        const descripcionRelacionada = document.createElement("p");
        descripcionRelacionada.textContent = relacionada.descripcion;

        const enlaceRelacionado = document.createElement("a");
        enlaceRelacionado.href =
            `herramienta.html?id=${encodeURIComponent(relacionada.id)}`;
        enlaceRelacionado.textContent = "Conocer herramienta →";

        tarjeta.append(
            logoRelacionado,
            nombreRelacionado,
            descripcionRelacionada,
            enlaceRelacionado
        );

        contenedorRelacionadas.appendChild(tarjeta);
    });

} else {

    // Si no existe la herramienta, mostrar un mensaje
    document.querySelector(".chatgpt-main").textContent =
        "No encontramos esta herramienta. Regresa al catálogo de IA Hub.";

}
