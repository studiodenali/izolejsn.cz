document.querySelectorAll(".on-page-load").forEach((element) => {
    element.classList.remove("on-page-load");
})

let width = window.innerWidth - document.documentElement.clientWidth;

let menuOpen = false;
const btn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

btn.onclick = function () {
    if (!menuOpen) {
        btn.classList.add("open");
        menu.classList.add("open");
        document.querySelector(".overlay").classList.add("open");

        document.documentElement.style.overflowY = "hidden";

        menuOpen = true;
    } else if (menuOpen) {
        menu.classList.remove("open");
        btn.classList.add("close");
        btn.classList.remove("open");
        document.querySelector(".overlay").classList.remove("open");

        document.documentElement.style.overflowY = "auto";

        setTimeout(() => {
            btn.classList.remove("close");
        }, "500");
        menuOpen = false;
    };
};