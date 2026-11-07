
/* =========================================
   IA HUB - COOKIES Y GOOGLE ANALYTICS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const ID_ANALYTICS = "G-3KGS8VD9PN";
    const CLAVE_CONSENTIMIENTO = "iaHubCookies";

    const idioma = document.documentElement.lang
        .toLowerCase().startsWith("en") ? "en" : "es";

    const textos = {
        es: {
            titulo: "Tu privacidad importa",
            descripcion: "Utilizamos cookies opcionales de estadísticas para conocer las visitas a IA Hub y mejorar nuestros contenidos. Puedes aceptarlas o rechazarlas.",
            aceptar: "Aceptar",
            rechazar: "Rechazar",
            configurar: "Configurar cookies"
        },
        en: {
            titulo: "Your privacy matters",
            descripcion: "We use optional analytics cookies to understand visits to IA Hub and improve our content. You can accept or reject them.",
            aceptar: "Accept",
            rechazar: "Reject",
            configurar: "Cookie settings"
        }
    };

    const t = textos[idioma];

    let analyticsIniciado = false;

    function iniciarAnalytics() {

        if (analyticsIniciado) return;

        analyticsIniciado = true;

        window.dataLayer = window.dataLayer || [];

        window.gtag = function () {
            window.dataLayer.push(arguments);
        };

        window.gtag("js", new Date());
        window.gtag("config", ID_ANALYTICS);

        const script = document.createElement("script");

        script.async = true;
        script.src =
            "https://www.googletagmanager.com/gtag/js?id=" +
            encodeURIComponent(ID_ANALYTICS);

        document.head.appendChild(script);
    }

    function guardarConsentimiento(valor) {

        localStorage.setItem(CLAVE_CONSENTIMIENTO, valor);

        if (valor === "aceptado") {
            iniciarAnalytics();
        }

        aviso.remove();
    }

    const aviso = document.createElement("div");

    aviso.className = "ia-cookie-banner";

    aviso.innerHTML = `
        <div class="ia-cookie-content">
            <div class="ia-cookie-text">
                <h3>${t.titulo}</h3>
                <p>${t.descripcion}</p>
            </div>

            <div class="ia-cookie-actions">
                <button type="button" class="ia-cookie-accept">
                    ${t.aceptar}
                </button>

                <button type="button" class="ia-cookie-reject">
                    ${t.rechazar}
                </button>
            </div>
        </div>
    `;

    const consentimiento = localStorage.getItem(
        CLAVE_CONSENTIMIENTO
    );

    if (consentimiento === "aceptado") {

        iniciarAnalytics();

    } else if (consentimiento !== "rechazado") {

        document.body.appendChild(aviso);

        aviso.querySelector(".ia-cookie-accept")
            .addEventListener("click", () => {
                guardarConsentimiento("aceptado");
            });

        aviso.querySelector(".ia-cookie-reject")
            .addEventListener("click", () => {
                guardarConsentimiento("rechazado");
            });
    }

    // Botón para cambiar la elección posteriormente
    const botonConfigurar = document.createElement("button");

    botonConfigurar.type = "button";
    botonConfigurar.className = "ia-cookie-settings";
    botonConfigurar.textContent = t.configurar;

    botonConfigurar.addEventListener("click", () => {

        if (!aviso.isConnected) {
            document.body.appendChild(aviso);
        }

        aviso.querySelector(".ia-cookie-accept").onclick = () => {
            guardarConsentimiento("aceptado");
        };

        aviso.querySelector(".ia-cookie-reject").onclick = () => {
            localStorage.setItem(
                CLAVE_CONSENTIMIENTO,
                "rechazado"
            );

            // Recargar para detener Analytics
            // si estaba activo en esta página.
            window.location.reload();
        };
    });

    document.body.appendChild(botonConfigurar);

});
