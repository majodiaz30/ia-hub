// ============================================
// IA HUB - BIBLIOTECA DE PROMPTS
// ============================================

const bibliotecaPrompts = [

    // PROGRAMACIÓN
    {
        id: 1,
        titulo: "Crear una página web desde cero",
        categoria: "Programación",
        descripcion: "Genera una página web moderna utilizando HTML, CSS y JavaScript.",
        herramientas: ["ChatGPT", "Claude", "Gemini"],
        prompt: "Actúa como un desarrollador web. Ayúdame a crear una página web moderna y responsive sobre [TEMA]. Utiliza HTML, CSS y JavaScript. Organiza el código, explica brevemente cada sección y asegúrate de que funcione en dispositivos móviles."
    },
    {
        id: 2,
        titulo: "Encontrar errores en mi código",
        categoria: "Programación",
        descripcion: "Analiza tu código y encuentra posibles errores.",
        herramientas: ["ChatGPT", "Claude", "Gemini"],
        prompt: "Actúa como un programador experto. Revisa el siguiente código, identifica los errores, explica por qué ocurren y proporciona una versión corregida. Mantén la estructura original siempre que sea posible. Código: [PEGA TU CÓDIGO]"
    },
    {
        id: 3,
        titulo: "Aprender un lenguaje de programación",
        categoria: "Programación",
        descripcion: "Aprende un lenguaje desde cero con ejemplos sencillos.",
        herramientas: ["ChatGPT", "Gemini"],
        prompt: "Quiero aprender [LENGUAJE DE PROGRAMACIÓN] desde cero. Enséñame paso a paso, utiliza ejemplos sencillos, ejercicios prácticos y explicaciones fáciles de entender. No avances al siguiente tema hasta que comprenda el anterior."
    },
    {
        id: 4,
        titulo: "Crear una base de datos",
        categoria: "Programación",
        descripcion: "Diseña una base de datos según las necesidades de tu proyecto.",
        herramientas: ["ChatGPT", "Claude", "DeepSeek"],
        prompt: "Actúa como un especialista en bases de datos. Diseña una base de datos para [DESCRIPCIÓN DEL PROYECTO]. Identifica las entidades, atributos, claves primarias, claves foráneas y relaciones. Genera el código SQL y explica su estructura."
    },

    // ESTUDIO
    {
        id: 5,
        titulo: "Explicar un tema difícil",
        categoria: "Estudio",
        descripcion: "Comprende temas complejos con explicaciones sencillas.",
        herramientas: ["ChatGPT", "Claude", "DeepSeek"],
        prompt: "Explícame el tema [TEMA] desde cero, como si fuera principiante. Utiliza palabras sencillas, ejemplos cotidianos, analogías y una explicación paso a paso. Al final, hazme cinco preguntas para comprobar lo que aprendí."
    },
    {
        id: 6,
        titulo: "Resumir un documento",
        categoria: "Estudio",
        descripcion: "Obtén un resumen organizado de tus documentos.",
        herramientas: ["ChatGPT", "NotebookLM", "DeepSeek"],
        prompt: "Analiza el siguiente documento y crea un resumen organizado. Identifica las ideas principales, conceptos importantes, definiciones y conclusiones. No inventes información y conserva los datos relevantes. Documento: [PEGA EL TEXTO]"
    },
    {
        id: 7,
        titulo: "Preparar un examen",
        categoria: "Estudio",
        descripcion: "Organiza un plan de estudio y practica con preguntas.",
        herramientas: ["ChatGPT", "Gemini", "NotebookLM"],
        prompt: "Ayúdame a prepararme para un examen de [ASIGNATURA]. Los temas son: [TEMAS]. Organiza un plan de estudio, explica cada tema y crea preguntas de selección múltiple con sus respuestas explicadas."
    },
    {
        id: 8,
        titulo: "Crear tarjetas de memoria",
        categoria: "Estudio",
        descripcion: "Convierte tus apuntes en preguntas y respuestas.",
        herramientas: ["ChatGPT", "Gemini", "NotebookLM"],
        prompt: "Convierte estos apuntes sobre [TEMA] en tarjetas de estudio. Cada tarjeta debe tener una pregunta clara en el frente y una respuesta breve en el reverso. Prioriza conceptos, definiciones, fechas y datos importantes."
    },

    // IMÁGENES
    {
        id: 9,
        titulo: "Crear una ilustración digital",
        categoria: "Imágenes",
        descripcion: "Genera una ilustración con el estilo que necesitas.",
        herramientas: ["Leonardo AI", "Ideogram", "Midjourney"],
        prompt: "Crea una ilustración digital de [DESCRIPCIÓN]. Utiliza un estilo [ESTILO ARTÍSTICO], una composición equilibrada, iluminación cuidada y colores [PALETA DE COLORES]. La imagen debe tener alta calidad y una apariencia profesional."
    },
    {
        id: 10,
        titulo: "Diseñar un logotipo",
        categoria: "Imágenes",
        descripcion: "Obtén ideas para la identidad visual de una marca.",
        herramientas: ["Canva", "Ideogram", "Adobe Firefly"],
        prompt: "Diseña una propuesta de logotipo para una marca llamada [NOMBRE]. Su actividad es [SECTOR]. Quiero un diseño moderno, memorable y sencillo, con una paleta de colores [COLORES]. Evita elementos innecesarios y prioriza la legibilidad."
    },
    {
        id: 11,
        titulo: "Crear una imagen para redes sociales",
        categoria: "Imágenes",
        descripcion: "Diseña publicaciones atractivas para redes sociales.",
        herramientas: ["Canva", "Adobe Firefly", "ChatGPT"],
        prompt: "Diseña una publicación para [RED SOCIAL] sobre [TEMA]. Utiliza un estilo moderno, una composición visual atractiva, tipografía legible y colores coherentes con la marca. Incluye un espacio para el título y una llamada a la acción."
    },

    // ESCRITURA
    {
        id: 12,
        titulo: "Redactar un correo profesional",
        categoria: "Escritura",
        descripcion: "Escribe correos claros, organizados y profesionales.",
        herramientas: ["ChatGPT", "Claude", "Gemini"],
        prompt: "Redacta un correo electrónico dirigido a [DESTINATARIO] con el objetivo de [OBJETIVO]. Utiliza un tono profesional, amable y directo. Organiza las ideas, incluye un asunto apropiado y termina con una despedida adecuada."
    },
    {
        id: 13,
        titulo: "Mejorar un texto",
        categoria: "Escritura",
        descripcion: "Corrige y mejora la claridad de tus escritos.",
        herramientas: ["ChatGPT", "Claude", "Gemini"],
        prompt: "Revisa el siguiente texto. Corrige errores ortográficos y gramaticales, mejora la redacción y organiza las ideas para que sean claras y naturales. Conserva el significado original y evita cambiar mi estilo. Texto: [PEGA TU TEXTO]"
    },
    {
        id: 14,
        titulo: "Crear ideas para contenido",
        categoria: "Escritura",
        descripcion: "Encuentra ideas para publicaciones y proyectos.",
        herramientas: ["ChatGPT", "Gemini", "Claude"],
        prompt: "Dame 15 ideas originales de contenido sobre [TEMA] para [PLATAFORMA]. Para cada idea incluye un título atractivo, una breve descripción y el enfoque recomendado. Evita repetir propuestas."
    },

    // PRODUCTIVIDAD
    {
        id: 15,
        titulo: "Organizar mi semana",
        categoria: "Productividad",
        descripcion: "Planifica tus actividades y prioridades.",
        herramientas: ["ChatGPT", "Gemini", "Copilot"],
        prompt: "Ayúdame a organizar mi semana. Estas son mis actividades: [ACTIVIDADES]. Tengo disponibles estos horarios: [HORARIOS]. Organiza un calendario equilibrado, establece prioridades y deja espacios para descansos e imprevistos."
    },
    {
        id: 16,
        titulo: "Crear un plan para un proyecto",
        categoria: "Productividad",
        descripcion: "Divide un proyecto en tareas y etapas.",
        herramientas: ["ChatGPT", "Claude", "Gemini"],
        prompt: "Ayúdame a planificar un proyecto sobre [DESCRIPCIÓN]. Divide el trabajo en etapas, identifica tareas, establece objetivos, indica los recursos necesarios y propone un cronograma realista."
    },
    {
        id: 17,
        titulo: "Lluvia de ideas",
        categoria: "Productividad",
        descripcion: "Encuentra propuestas creativas para resolver problemas.",
        herramientas: ["ChatGPT", "Gemini", "Claude"],
        prompt: "Actúa como un facilitador creativo. Necesito ideas para resolver esta situación: [PROBLEMA]. Propón 15 alternativas diferentes, explica brevemente cada una y destaca cuáles serían las más sencillas de implementar."
    },

    // NEGOCIOS
    {
        id: 18,
        titulo: "Crear un plan de negocio",
        categoria: "Negocios",
        descripcion: "Organiza la propuesta de un nuevo emprendimiento.",
        herramientas: ["ChatGPT", "Claude", "Gemini"],
        prompt: "Ayúdame a desarrollar un plan de negocio para [IDEA]. Incluye propuesta de valor, público objetivo, productos o servicios, análisis de competencia, estrategias de marketing, recursos necesarios y posibles fuentes de ingresos."
    },
    {
        id: 19,
        titulo: "Analizar una idea de negocio",
        categoria: "Negocios",
        descripcion: "Evalúa oportunidades y posibles dificultades.",
        herramientas: ["ChatGPT", "Gemini", "Perplexity"],
        prompt: "Analiza esta idea de negocio: [DESCRIPCIÓN]. Identifica sus ventajas, posibles dificultades, clientes potenciales, competencia y oportunidades de mejora. No inventes cifras de mercado; indica qué datos necesitaría investigar."
    },
    {
        id: 20,
        titulo: "Crear una estrategia de marketing",
        categoria: "Negocios",
        descripcion: "Diseña una estrategia para dar a conocer una marca.",
        herramientas: ["ChatGPT", "Gemini", "Canva"],
        prompt: "Crea una estrategia de marketing para [MARCA O PRODUCTO]. Define el público objetivo, objetivos, canales de comunicación, tipos de contenido, calendario de publicaciones y formas de medir los resultados."
    }

];

// ============================================
// IDIOMA DE LOS PROMPTS
// ============================================

const promptsEnIngles = document.documentElement.lang === "en";

const textosPrompts = {
    resultado: promptsEnIngles ? "result" : "resultado",
    resultados: promptsEnIngles ? "results" : "resultados",
    destacado: promptsEnIngles ? "Featured" : "Destacado",
    ideal: promptsEnIngles ? "Best for:" : "Ideal para:",
    personalizar: promptsEnIngles ? "✎ Customize" : "✎ Personalizar",
    terminar: promptsEnIngles ? "✓ Finish editing" : "✓ Terminar edición",
    restaurar: promptsEnIngles ? "↺ Restore original" : "↺ Restaurar original",
    verMas: promptsEnIngles ? "Show more" : "Ver más",
    verMenos: promptsEnIngles ? "Show less" : "Ver menos",
    favorito: promptsEnIngles ? "♡ Favorite" : "♡ Favorito",
    guardado: promptsEnIngles ? "♥ Saved" : "♥ Guardado",
    compartir: promptsEnIngles ? "↗ Share" : "↗ Compartir",
    copiado: promptsEnIngles ? "✓ Copied" : "✓ Copiado",
    copiar: promptsEnIngles ? "Copy prompt" : "Copiar prompt",
    errorCopiar: promptsEnIngles ? "Could not copy" : "No se pudo copiar"
};

const categoriasPromptsEn = {
    "Programación": "Coding",
    "Estudio": "Studying",
    "Imágenes": "Images",
    "Escritura": "Writing",
    "Productividad": "Productivity",
    "Negocios": "Business"
};

// Aplicar las traducciones en la página inglesa
if (promptsEnIngles && typeof traduccionesPromptsEn !== "undefined") {

    bibliotecaPrompts.forEach(prompt => {

        const traduccion = traduccionesPromptsEn[prompt.id];

        if (traduccion) {
            Object.assign(prompt, traduccion);
        }

    });

}

// ============================================
// FUNCIONES DE LA BIBLIOTECA
// ============================================

console.log("Biblioteca de prompts cargada:", bibliotecaPrompts.length);

// ============================================
// MOSTRAR Y FILTRAR PROMPTS
// ============================================

const promptsGrid = document.getElementById("promptsGrid");
const buscarPrompt = document.getElementById("buscarPrompt");
const filtrosPrompt = document.querySelectorAll(".prompt-filter");
const cantidadPrompts = document.getElementById("cantidadPrompts");
const totalPrompts = document.getElementById("totalPrompts");
const promptsVacios = document.getElementById("promptsVacios");

let categoriaPromptActual = "Todas";

// PROMPTS DESTACADOS
const promptsDestacados = [1, 2, 5, 7, 9, 12, 15, 18];


// FAVORITOS GUARDADOS
let promptsFavoritos = [];

// PERSONALIZACIONES GUARDADAS

let promptsPersonalizados = {};

try {
    promptsPersonalizados = JSON.parse(
        localStorage.getItem("promptsPersonalizados")
    ) || {};
} catch (error) {
    promptsPersonalizados = {};
}

function guardarPersonalizaciones() {
    localStorage.setItem(
        "promptsPersonalizados",
        JSON.stringify(promptsPersonalizados)
    );
}

try {
    promptsFavoritos = JSON.parse(
        localStorage.getItem("promptsFavoritos")
    ) || [];
} catch (error) {
    promptsFavoritos = [];
}

function guardarFavoritos() {
    localStorage.setItem(
        "promptsFavoritos",
        JSON.stringify(promptsFavoritos)
    );
}

const iconosPrompts = {
    "Programación": "⌘",
    "Estudio": "▤",
    "Imágenes": "▧",
    "Escritura": "✎",
    "Productividad": "◷",
    "Negocios": "▣"
};

function mostrarPrompts() {

    const busqueda = buscarPrompt.value
        .toLowerCase()
        .trim();

    const resultados = bibliotecaPrompts.filter(prompt => {

        const coincideCategoria =
            categoriaPromptActual === "Todas" ||
            (
                categoriaPromptActual === "Favoritos"
                    ? promptsFavoritos.includes(prompt.id)
                    : categoriaPromptActual === "Destacados"
                        ? promptsDestacados.includes(prompt.id)
                        : prompt.categoria === categoriaPromptActual
            );

        const texto = (
            prompt.titulo + " " +
            prompt.descripcion + " " +
            prompt.categoria + " " +
            prompt.prompt
        )
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        const busquedaNormalizada = busqueda
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const coincideBusqueda = texto.includes(busquedaNormalizada);

        return coincideCategoria && coincideBusqueda;

    });

    promptsGrid.innerHTML = "";

    cantidadPrompts.textContent =
        `${resultados.length} ${resultados.length === 1 ? "resultado" : "resultados"}`;

    totalPrompts.textContent = bibliotecaPrompts.length;

    promptsVacios.hidden = resultados.length !== 0;

    resultados.forEach(prompt => {

        const tarjeta = document.createElement("article");
        tarjeta.className = "prompt-card";

        const parteSuperior = document.createElement("div");
        parteSuperior.className = "prompt-card-top";

        const categoria = document.createElement("span");
        categoria.className = "prompt-categoria";
        categoria.textContent = prompt.categoria;

        const icono = document.createElement("span");
        icono.className = "prompt-card-icon";
        icono.textContent = iconosPrompts[prompt.categoria] || "✦";

        if (promptsDestacados.includes(prompt.id)) {

            const etiquetaDestacado = document.createElement("span");
            etiquetaDestacado.className = "prompt-destacado";
            etiquetaDestacado.textContent = "✦ Destacado";

            parteSuperior.append(categoria, etiquetaDestacado, icono);

        } else {

            parteSuperior.append(categoria, icono);

        }

        const titulo = document.createElement("h3");
        titulo.textContent = prompt.titulo;

        const descripcion = document.createElement("p");
        descripcion.className = "prompt-card-description";
        descripcion.textContent = prompt.descripcion;

        // HERRAMIENTAS RECOMENDADAS

        const herramientasRecomendadas = document.createElement("div");
        herramientasRecomendadas.className = "prompt-herramientas";

        const tituloHerramientas = document.createElement("span");
        tituloHerramientas.textContent = "Ideal para:";

        const listaHerramientas = document.createElement("div");
        listaHerramientas.className = "prompt-herramientas-lista";

        const enlacesHerramientas = {
            "ChatGPT": "chatgpt",
            "Gemini": "gemini",
            "Claude": "claude",
            "Microsoft Copilot": "copilot",
            "Copilot": "copilot",
            "Perplexity": "perplexity",
            "NotebookLM": "notebooklm",
            "Canva": "canva",
            "Ideogram": "ideogram",
            "Adobe Firefly": "firefly",
            "Leonardo AI": "leonardo",
            "Midjourney": "midjourney"
        };

        (prompt.herramientas || []).forEach(nombre => {

            const etiqueta = document.createElement("a");
            etiqueta.textContent = nombre;

            const idHerramienta = enlacesHerramientas[nombre];

            if (idHerramienta) {
                etiqueta.href = `herramienta.html?id=${idHerramienta}`;
                etiqueta.className = "prompt-herramienta-link";
            } else {
                etiqueta.className = "prompt-herramienta-etiqueta";
            }

            listaHerramientas.appendChild(etiqueta);

        });

        herramientasRecomendadas.append(
            tituloHerramientas,
            listaHerramientas
        );

        const contenido = document.createElement("div");
        contenido.className = "prompt-contenido";
        contenido.textContent =
            promptsPersonalizados[prompt.id] || prompt.prompt;

        // BOTÓN PERSONALIZAR

        const botonPersonalizar = document.createElement("button");
        botonPersonalizar.type = "button";
        botonPersonalizar.className = "prompt-personalizar";
        botonPersonalizar.textContent = "✎ Personalizar";

        botonPersonalizar.addEventListener("click", () => {

            const expandido = contenido.classList.toggle("editando");

            if (expandido) {

                contenido.contentEditable = "true";
                contenido.focus();

                botonPersonalizar.textContent = "✓ Terminar edición";

            } else {
                contenido.contentEditable = "false";

                promptsPersonalizados[prompt.id] = contenido.textContent;
                guardarPersonalizaciones();

                botonPersonalizar.textContent = "✎ Personalizar";

            }

        });

        // RESTAURAR PROMPT ORIGINAL

        const botonRestaurar = document.createElement("button");
        botonRestaurar.type = "button";
        botonRestaurar.className = "prompt-restaurar";
        botonRestaurar.textContent = "↺ Restaurar original";

        botonRestaurar.addEventListener("click", () => {

            contenido.contentEditable = "false";
            contenido.classList.remove("editando");
            contenido.textContent = prompt.prompt;

            delete promptsPersonalizados[prompt.id];
            guardarPersonalizaciones();

            botonPersonalizar.textContent = "✎ Personalizar";

        });

        const botonVerMas = document.createElement("button");
        botonVerMas.type = "button";
        botonVerMas.className = "prompt-ver-mas";
        botonVerMas.textContent = "Ver más";

        botonVerMas.addEventListener("click", () => {

            const expandido = contenido.classList.toggle("expandido");

            botonVerMas.textContent = expandido
                ? "Ver menos"
                : "Ver más";

        });


        // BOTÓN DE FAVORITOS

        const botonFavorito = document.createElement("button");
        botonFavorito.type = "button";
        botonFavorito.className = "prompt-favorito";

        function actualizarBotonFavorito() {

            const esFavorito = promptsFavoritos.includes(prompt.id);

            botonFavorito.textContent = esFavorito ? "♥ Guardado" : "♡ Favorito";

            botonFavorito.classList.toggle("activo", esFavorito);

        }

        actualizarBotonFavorito();

        botonFavorito.addEventListener("click", () => {

            if (promptsFavoritos.includes(prompt.id)) {

                promptsFavoritos = promptsFavoritos.filter(
                    id => id !== prompt.id
                );

            } else {

                promptsFavoritos.push(prompt.id);

            }

            guardarFavoritos();
            actualizarBotonFavorito();

            if (categoriaPromptActual === "Favoritos") {
                mostrarPrompts();
            }

        });

        // BOTÓN COMPARTIR

        const botonCompartir = document.createElement("button");
        botonCompartir.type = "button";
        botonCompartir.className = "prompt-compartir";
        botonCompartir.textContent = "↗ Compartir";

        botonCompartir.addEventListener("click", async () => {

            const datosCompartir = {
                title: prompt.titulo,
                text: prompt.prompt,
                url: window.location.href
            };

            try {

                if (navigator.share) {

                    await navigator.share(datosCompartir);

                } else {

                    await navigator.clipboard.writeText(
                        `${prompt.titulo}\n\n${prompt.prompt}\n\nDescubre más en IA Hub: ${window.location.href}`
                    );

                    botonCompartir.textContent = "✓ Copiado";

                    setTimeout(() => {
                        botonCompartir.textContent = "↗ Compartir";
                    }, 1800);

                }

            } catch (error) {

                if (error.name !== "AbortError") {
                    console.error("No se pudo compartir:", error);
                }

            }

        });

        const botonCopiar = document.createElement("button");
        botonCopiar.type = "button";
        botonCopiar.className = "prompt-copiar";
        botonCopiar.textContent = "Copiar prompt";

        botonCopiar.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(contenido.textContent);

                botonCopiar.textContent = "✓ Copiado";
                botonCopiar.classList.add("copiado");

                setTimeout(() => {
                    botonCopiar.textContent = "Copiar prompt";
                    botonCopiar.classList.remove("copiado");
                }, 1800);

            } catch (error) {

                botonCopiar.textContent = "No se pudo copiar";

                console.error("Error al copiar:", error);

            }

        });

        tarjeta.append(
            parteSuperior,
            titulo,
            descripcion,
            herramientasRecomendadas,
            contenido,
            botonVerMas,
            botonPersonalizar,
            botonRestaurar,
            botonFavorito,
            botonCompartir,
            botonCopiar
        );
        promptsGrid.appendChild(tarjeta);

    });

}

// BUSCADOR

buscarPrompt.addEventListener("input", mostrarPrompts);

// FILTROS POR CATEGORÍA

filtrosPrompt.forEach(boton => {

    boton.addEventListener("click", () => {

        filtrosPrompt.forEach(filtro =>
            filtro.classList.remove("active")
        );

        boton.classList.add("active");

        categoriaPromptActual = boton.dataset.categoria;

        mostrarPrompts();

    });

});

// CARGA INICIAL

mostrarPrompts();