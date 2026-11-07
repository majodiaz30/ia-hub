
(function () {

    let tema = "dark";

    try {
        tema = localStorage.getItem("temaIAHub") || "dark";
    } catch (error) {
        // Se mantiene el tema oscuro por defecto.
    }

    if (tema === "light") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }

})();
