// On page load
document.querySelectorAll(".on-page-load").forEach((element) => {
    element.classList.remove("on-page-load");
})

// Width
let width = window.innerWidth - document.documentElement.clientWidth;

// Menu
let menuOpen = false;
const btn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

btn.onclick = function () {
    const scrollY = window.scrollY;

    if (!menuOpen) {
        btn.classList.add("open");
        menu.classList.add("open");
        document.querySelector(".overlay").classList.add("open");

        menuOpen = true;
    } else if (menuOpen) {
        menu.classList.remove("open");
        btn.classList.add("close");
        btn.classList.remove("open");
        document.querySelector(".overlay").classList.remove("open");

        setTimeout(() => {
            btn.classList.remove("close");
        }, "500");
        menuOpen = false;
    };
};

// Selection
document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, td, mark, sup").forEach(element => {
    const color = window.getComputedStyle(element).color;

    if (color === "rgb(0, 0, 0)") {
        element.classList.add("selection");
    } else if (color === "rgb(83, 63, 252)") {
        element.classList.add("selection");
    } else if (color === "rgb(152, 249, 255)") {
        element.classList.add("selection-turquoise");
    };
});