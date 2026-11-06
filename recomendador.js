
// ============================================
// IA HUB - RECOMENDADOR DE HERRAMIENTAS
// ============================================

const recomendador = {
    preguntaActual: 0,
    respuestas: {
        categoria: "",
        contexto: "",
        presupuesto: "",
        nivel: ""
    }
};

// ============================================
// ELEMENTOS HTML
// ============================================

const btnIniciar = document.getElementById("iniciarRecomendador");
const introduccion = document.querySelector(".recomendador-intro");
const cuestionario = document.getElementById("recomendadorCuestionario");
const resultados = document.getElementById("recomendadorResultados");

const tituloPregunta = document.getElementById("preguntaTitulo");
const descripcionPregunta = document.getElementById("preguntaDescripcion");
const opcionesPregunta = document.getElementById("recomendadorOpciones");

const preguntaAnterior = document.getElementById("preguntaAnterior");
const preguntaSiguiente = document.getElementById("preguntaSiguiente");

const progresoPregunta = document.getElementById("progresoPregunta");
const progresoPorcentaje = document.getElementById("progresoPorcentaje");
const progresoRelleno = document.getElementById("progresoRelleno");

const resumenRecomendacion = document.getElementById("resumenRecomendacion");
const listaRecomendaciones = document.getElementById("listaRecomendaciones");

const btnReiniciar = document.getElementById("reiniciarRecomendador");

// ============================================
// PREGUNTAS
// ============================================

const preguntasRecomendador = [
    {
        clave: "categoria",
        titulo: "¿Para qué necesitas una IA?",
        descripcion: "Selecciona la actividad que más te interesa.",
        opciones: [
            { valor: "Texto", nombre: "Escribir y crear textos", icono: "✎" },
            { valor: "Estudio", nombre: "Estudiar e investigar", icono: "▤" },
            { valor: "Programación", nombre: "Programar y crear aplicaciones", icono: "</>" },
            { valor: "Imágenes", nombre: "Crear imágenes y diseños", icono: "▧" },
            { valor: "Video", nombre: "Crear y editar videos", icono: "▷" },
            { valor: "Audio", nombre: "Crear música y trabajar con audio", icono: "♫" }
        ]
    },
    {
        clave: "presupuesto",
        titulo: "¿Qué presupuesto tienes?",
        descripcion: "Así podremos recomendarte herramientas según su disponibilidad.",
        opciones: [
            { valor: "gratis", nombre: "Busco opciones gratuitas", icono: "$" },
            { valor: "freemium", nombre: "Acepto opciones gratuitas con límites", icono: "◇" },
            { valor: "pago", nombre: "Puedo considerar planes de pago", icono: "✦" }
        ]
    },
    {
        clave: "nivel",
        titulo: "¿Cuál es tu nivel de experiencia?",
        descripcion: "Queremos recomendarte herramientas que puedas aprovechar.",
        opciones: [
            { valor: "principiante", nombre: "Principiante", icono: "○" },
            { valor: "intermedio", nombre: "Intermedio", icono: "◉" },
            { valor: "avanzado", nombre: "Avanzado", icono: "◎" }
        ]
    },
    {
        clave: "contexto",
        titulo: "¿Para qué utilizarás principalmente la IA?",
        descripcion: "Esto nos ayudará a encontrar herramientas adecuadas para tu situación.",
        opciones: [
            {
                valor: "personal",
                nombre: "Uso personal",
                icono: "◇"
            },
            {
                valor: "academico",
                nombre: "Estudios y universidad",
                icono: "▤"
            },
            {
                valor: "profesional",
                nombre: "Trabajo y proyectos profesionales",
                icono: "▣"
            }
        ]
    },
];

// ============================================
// INICIAR RECOMENDADOR
// ============================================

if (
    btnIniciar &&
    introduccion &&
    cuestionario &&
    resultados &&
    typeof herramientas !== "undefined"
) {
    btnIniciar.addEventListener("click", () => {
        introduccion.hidden = true;
        cuestionario.hidden = false;
        resultados.hidden = true;

        recomendador.preguntaActual = 0;

        mostrarPregunta();
    });
}

// ============================================
// MOSTRAR PREGUNTAS
// ============================================

function mostrarPregunta() {
    const pregunta = preguntasRecomendador[recomendador.preguntaActual];

    tituloPregunta.textContent = pregunta.titulo;
    descripcionPregunta.textContent = pregunta.descripcion;

    opcionesPregunta.innerHTML = "";

    const respuestaGuardada = recomendador.respuestas[pregunta.clave];

    pregunta.opciones.forEach(opcion => {
        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "recomendador-opcion";

        if (respuestaGuardada === opcion.valor) {
            boton.classList.add("seleccionada");
        }

        const indicador = document.createElement("span");
        indicador.className = "opcion-indicador";

        if (respuestaGuardada === opcion.valor) {
            indicador.textContent = "✓";
        }

        const icono = document.createElement("span");
        icono.textContent = opcion.icono;
        icono.setAttribute("aria-hidden", "true");

        const texto = document.createElement("span");
        texto.textContent = opcion.nombre;

        boton.append(indicador, icono, texto);

        boton.addEventListener("click", () => {
            recomendador.respuestas[pregunta.clave] = opcion.valor;

            mostrarPregunta();
        });

        opcionesPregunta.appendChild(boton);
    });

    const numero = recomendador.preguntaActual + 1;
    const porcentaje = Math.round((numero / preguntasRecomendador.length) * 100);

    progresoPregunta.textContent =
        `Pregunta ${numero} de ${preguntasRecomendador.length}`;

    progresoPorcentaje.textContent = `${porcentaje}%`;
    progresoRelleno.style.width = `${porcentaje}%`;

    preguntaAnterior.hidden = recomendador.preguntaActual === 0;

    preguntaSiguiente.disabled = !respuestaGuardada;

    preguntaSiguiente.textContent =
        recomendador.preguntaActual === preguntasRecomendador.length - 1
            ? "Ver recomendaciones →"
            : "Continuar →";
}

// ============================================
// NAVEGACIÓN
// ============================================

if (preguntaSiguiente) {
    preguntaSiguiente.addEventListener("click", () => {
        const pregunta = preguntasRecomendador[recomendador.preguntaActual];

        if (!recomendador.respuestas[pregunta.clave]) {
            return;
        }

        if (recomendador.preguntaActual < preguntasRecomendador.length - 1) {
            recomendador.preguntaActual++;
            mostrarPregunta();
        } else {
            generarRecomendaciones();
        }
    });
}

if (preguntaAnterior) {
    preguntaAnterior.addEventListener("click", () => {
        if (recomendador.preguntaActual > 0) {
            recomendador.preguntaActual--;
            mostrarPregunta();
        }
    });
}

// ============================================
// ANALIZAR CATÁLOGO
// ============================================

function generarRecomendaciones() {
    cuestionario.hidden = true;
    resultados.hidden = false;

    const { categoria, contexto, presupuesto, nivel } = recomendador.respuestas;

    const herramientasEvaluadas = herramientas.map(herramienta => {

        let puntuacion = 0;
        let motivos = [];

        // Coincidencia por categoría
        if (herramienta.categorias.includes(categoria)) {
            puntuacion += 10;
            motivos.push(`Está relacionada con ${categoria.toLowerCase()}`);
        }

        // Recomendaciones según el contexto de uso
        if (contexto === "personal") {
            if (["chatgpt", "gemini", "copilot", "canva"].includes(herramienta.id)) {
                puntuacion += 4;
                motivos.push("Puede ayudarte en actividades personales");
            }
        }

        if (contexto === "academico") {
            if (["chatgpt", "gemini", "notebooklm", "elicit"].includes(herramienta.id)) {
                puntuacion += 5;
                motivos.push("Es útil para estudiar e investigar");
            }
        }

        if (contexto === "profesional") {
            if (["claude", "chatgpt", "copilot", "cursor", "github-copilot", "gamma"].includes(herramienta.id)) {
                puntuacion += 5;
                motivos.push("Puede apoyar tareas y proyectos profesionales");
            }
        }

        // Coincidencia por presupuesto
        const disponibilidad = (herramienta.disponibilidad || "").toLowerCase();

        if (presupuesto === "gratis") {
            if (
                disponibilidad.includes("gratuito") ||
                disponibilidad.includes("gratuita") ||
                disponibilidad.includes("acceso gratuito") ||
                disponibilidad.includes("versión gratuita")
            ) {
                puntuacion += 5;
                motivos.push("Tiene una opción gratuita");
            } else {
                puntuacion -= 8;
            }
        }

        if (presupuesto === "freemium") {
            if (
                disponibilidad.includes("gratuito") ||
                disponibilidad.includes("gratuita") ||
                disponibilidad.includes("limitado") ||
                disponibilidad.includes("versión gratuita")
            ) {
                puntuacion += 5;
                motivos.push("Permite comenzar con acceso gratuito");
            }
        }

        if (presupuesto === "pago") {
            if (disponibilidad.includes("pago") || disponibilidad.includes("planes")) {
                puntuacion += 3;
                motivos.push("Ofrece opciones de pago");
            }
        }

        // Coincidencia por nivel de experiencia
        if (nivel === "principiante") {
            if (
                ["chatgpt", "gemini", "canva", "notebooklm", "copilot", "gamma"]
                    .includes(herramienta.id)
            ) {
                puntuacion += 4;
                motivos.push("Es una opción adecuada para comenzar");
            }
        }

        if (nivel === "intermedio") {
            if (
                herramienta.categorias.includes("Estudio") ||
                herramienta.categorias.includes("Programación")
            ) {
                puntuacion += 2;
            }
        }

        if (nivel === "avanzado") {
            if (
                ["claude", "deepseek", "cursor", "windsurf", "runway", "firefly"]
                    .includes(herramienta.id)
            ) {
                puntuacion += 4;
                motivos.push("Ofrece posibilidades para trabajos más avanzados");
            }
        }

        // Herramientas destacadas
        if (herramienta.destacado) {
            puntuacion += 1;
        }

        return {
            herramienta,
            puntuacion,
            motivos
        };

    });

    const mejoresResultados = herramientasEvaluadas
        .filter(resultado => resultado.puntuacion > 0)
        .sort((a, b) => b.puntuacion - a.puntuacion)
        .slice(0, 3);

    mostrarResultados(mejoresResultados);
}

// ============================================
// MOSTRAR RECOMENDACIONES
// ============================================

function mostrarResultados(resultadosEncontrados) {
    listaRecomendaciones.innerHTML = "";

    if (resultadosEncontrados.length === 0) {
        resumenRecomendacion.textContent =
            "No encontramos coincidencias suficientes. Puedes probar con otras respuestas.";

        return;
    }

    resumenRecomendacion.textContent =
        "Estas herramientas coinciden con tus intereses y preferencias. Compara sus características antes de elegir.";

    resultadosEncontrados.forEach((resultado, indice) => {
        const herramienta = resultado.herramienta;

        const tarjeta = document.createElement("article");
        tarjeta.className = "recomendacion-item";

        const logo = document.createElement("img");
        const dominio = new URL(herramienta.enlace).hostname;

        logo.src =
            `https://www.google.com/s2/favicons?domain=${encodeURIComponent(dominio)}&sz=128`;

        logo.alt = `Logo de ${herramienta.nombre}`;
        logo.className = "recomendacion-logo";

        const informacion = document.createElement("div");
        informacion.className = "recomendacion-info";

        const nombre = document.createElement("h4");
        nombre.textContent = `${indice + 1}. ${herramienta.nombre}`;

        const descripcion = document.createElement("p");
        descripcion.textContent = herramienta.descripcion;

        // Disponibilidad de la herramienta
        const disponibilidad = document.createElement("p");
        disponibilidad.className = "recomendacion-disponibilidad";
        disponibilidad.textContent =
            herramienta.disponibilidad || "Consulta sus planes en la página oficial";

        const motivo = document.createElement("p");
        motivo.textContent =
            resultado.motivos.slice(0, 2).join(" · ");

        const enlaces = document.createElement("div");
        enlaces.className = "recomendacion-enlaces";

        const conocer = document.createElement("a");
        conocer.href =
            `herramienta.html?id=${encodeURIComponent(herramienta.id)}`;

        conocer.textContent = "Conocer herramienta →";

        const visitar = document.createElement("a");
        visitar.href = herramienta.enlace;
        visitar.target = "_blank";
        visitar.rel = "noopener noreferrer";
        visitar.textContent = "Visitar página oficial ↗";

        enlaces.append(conocer, visitar);

        informacion.append(
            nombre,
            descripcion,
            disponibilidad,
            motivo,
            enlaces
        );

        tarjeta.append(logo, informacion);

        listaRecomendaciones.appendChild(tarjeta);
    });
}

// ============================================
// REINICIAR
// ============================================

if (btnReiniciar) {
    btnReiniciar.addEventListener("click", reiniciarRecomendador);
}

function reiniciarRecomendador() {
    recomendador.preguntaActual = 0;

    recomendador.respuestas = {
        categoria: "",
        contexto: "",
        presupuesto: "",
        nivel: ""
    };

    resultados.hidden = true;
    cuestionario.hidden = true;
    introduccion.hidden = false;
}
