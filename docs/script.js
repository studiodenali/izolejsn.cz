// On page load
document.querySelectorAll(".on-page-load").forEach((element) => {
    element.classList.remove("on-page-load");
});

// Copyright year
document.getElementById("copyright__year").innerHTML = new Date().getFullYear();

// Menu
let menuOpen = false;
const btn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const mask = document.getElementById("mask");

btn.onclick = function () {
    if (!menuOpen) {
        btn.classList.add("open");
        menu.classList.add("open");
        overlay.classList.add("open");
        mask.classList.add("open");

        menuOpen = true;
    } else if (menuOpen) {
        menu.classList.remove("open");
        btn.classList.add("close");
        btn.classList.remove("open");
        overlay.classList.remove("open");
        mask.classList.remove("open");

        setTimeout(() => {
            btn.classList.remove("close");
        }, "500");
        menuOpen = false;
    };
};

overlay.onclick = function() {
    if (menuOpen) {
        menu.classList.remove("open");
        btn.classList.add("close");
        btn.classList.remove("open");
        overlay.classList.remove("open");
        mask.classList.remove("open");

        setTimeout(() => {
            btn.classList.remove("close");
        }, "500");
        menuOpen = false;
    };
};

// Selection
document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, td, span, mark, ins, sup, input, button").forEach(element => {
    const color = window.getComputedStyle(element).color;

    if (color === "rgb(0, 0, 0)") {
        element.classList.add("selection");
    } else if (color === "rgb(83, 63, 252)") {
        element.classList.add("selection");
    } else if (color === "rgb(152, 249, 255)") {
        element.classList.add("selection-turquoise");
    };
});