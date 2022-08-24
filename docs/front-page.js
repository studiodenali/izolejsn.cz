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
        const description = document.getElementById(part.dataset.house);

        function reset() {
            house.querySelectorAll(".house__part").forEach((part) => {
                part.style.fill = "#543ffc";
            });

            document.querySelectorAll("#descriptions .description").forEach((description) => {
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
    const input = document.getElementById("uspora__input");

    document.querySelectorAll(".uspora__section-1 .value").forEach((value) => {
        const dataset = value.dataset.value;

        if (dataset == input.value) {
            value.style.visibility = "visible";
            value.style.opacity = "1";
        } else if (dataset !== input.value) {
            value.style.visibility = "hidden";
            value.style.opacity = "0";
        }
    });

    document.querySelectorAll(".uspora__section-2 .estimate").forEach((estimate) => {
        const dataset = estimate.dataset.value;

        if (dataset == input.value) {
            estimate.style.visibility = "visible";
            estimate.style.opacity = "1";
        } else if (dataset !== input.value) {
            estimate.style.visibility = "hidden";
            estimate.style.opacity = "0";
        }
    });

    input.oninput = function() {
        document.querySelectorAll(".uspora__section-1 .value").forEach((value) => {
            const dataset = value.dataset.value;
    
            if (dataset == input.value) {
                value.style.visibility = "visible";
                value.style.opacity = "1";
            } else if (dataset !== input.value) {
                value.style.visibility = "hidden";
                value.style.opacity = "0";
            }
        });

        document.querySelectorAll(".uspora__section-2 .estimate").forEach((estimate) => {
            const dataset = estimate.dataset.value;
    
            if (dataset == input.value) {
                estimate.style.visibility = "visible";
                estimate.style.opacity = "1";
            } else if (dataset !== input.value) {
                estimate.style.visibility = "hidden";
                estimate.style.opacity = "0";
            }
        });
    }

    /*info.querySelectorAll("#uspora-info .content").forEach((content) => {
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
    };*/
};

hero();
house();
uspora();