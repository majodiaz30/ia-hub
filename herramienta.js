
// Obtener el identificador de la herramienta desde la URL
const parametros = new URLSearchParams(window.location.search);
const idHerramienta = parametros.get("id");

// Obtener el catálogo guardado desde la página principal
const herramientasGuardadas = localStorage.getItem("iahub-herramientas");

const herramientas = herramientasGuardadas
    ? JSON.parse(herramientasGuardadas)
    : [];


// Buscar la herramienta seleccionada
const herramienta = herramientas.find(
    elemento => elemento.id === idHerramienta
);


// Mostrar la información
if (herramienta) {

    document.title = `${herramienta.nombre} | IA Hub`;

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
