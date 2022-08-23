function hero() {
    const hero = document.getElementById("hero");
    const headerHeight = document.querySelector(".header-index").clientHeight;

    let windowHeight = window.innerHeight;
    hero.style.height = windowHeight * 1.2 + "px";

    addEventListener("resize", function () {
        windowHeight = window.innerHeight;
        hero.style.height = windowHeight + headerHeight + "px";
    });
};

function house() {
    const house = document.getElementById("house__svg");

    house.querySelectorAll(".house__part").forEach((part) => {
        const info = document.getElementById("info");
        const description = document.getElementById(part.dataset.house);

        function reset() {
            house.querySelectorAll(".house__part").forEach((part) => {
                part.style.fill = "#543ffc";
            });

            document.querySelectorAll(".content").forEach((description) => {
                description.style.visibility = "hidden";
                description.style.opacity = "0";
            });
        };

        part.onclick = function () {
            reset();

            house.querySelectorAll("[data-house='" + part.dataset.house + "']").forEach((element) => {
                element.style.fill = "#98f9ff";
            });

            if (description) {
                description.style.visibility = "visible";
                description.style.opacity = "1";
            };
        }
    });
};

function uspora() {
    const input = document.getElementById("uspora-input");
    const info = document.getElementById("uspora-info");

    info.querySelectorAll("#uspora-info .content").forEach((content) => {
        const dataset = content.dataset.value;

        if (dataset == input.value) {
            content.style.visibility = "visible";
            content.style.opacity = "1";
        } else if (dataset !== input.value) {
            content.style.visibility = "hidden";
            content.style.opacity = "0";
        }
    });

    input.oninput = function () {
        info.querySelectorAll("#uspora-info .content").forEach((content) => {
            const dataset = content.dataset.value;

            if (dataset == input.value) {
                content.style.visibility = "visible";
                content.style.opacity = "1";
            } else if (dataset !== input.value) {
                content.style.visibility = "hidden";
                content.style.opacity = "0";
            }
        });
    };
};

hero();
house();
uspora();