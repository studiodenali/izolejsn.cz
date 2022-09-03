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
        function reset() {
            house.querySelectorAll(".house__part").forEach((part) => {
                part.style.fill = "#543ffc";
            });
        };

        part.onclick = function () {
            reset();

            house.querySelectorAll("[data-house='" + part.dataset.house + "']").forEach((element) => {
                element.style.fill = "#98f9ff";
            });

            const ins = document.getElementById("house__ins");
            const description = document.getElementById("house__description");

            switch (part.dataset.house) {
                case "strecha":
                    ins.innerHTML = "střechu";
                    description.innerHTML = `
                        <p><a href="./materialy/purex_ng-0440.html" class="link">Tvrdá střešní pěna</a></p>
                        <p>Od 90 Kč/m<sup>2</sup> bez DPH</p>
                        <p>Je určená na exteriér střechy</p>
                    `;
                    break;
                case "podkrovi":
                    ins.innerHTML = "podkroví";
                    description.innerHTML = `
                        <p><a href="./materialy/purex_ng-0808nf.html" class="link">Měkká pěna</a></p>
                        <p>Od 250 Kč/m<sup>2</sup> bez DPH</p>
                    `;
                    break;
                case "strop":
                    ins.innerHTML = "strop";
                    description.innerHTML = `
                        <p><a href="./materialy/purex_ng-0808nf.html" class="link">Měkká pěna</a></p>
                        <p>Od 250 Kč/m<sup>2</sup> bez DPH</p>
                    `;
                    break;
                case "vnejsi_steny":
                    ins.innerHTML = "vnější stěny";
                    description.innerHTML = `
                        <p><a href="./materialy/purex_ng-0428.html" class="link">Tvrdá pěna</a></p>
                        <p>Od 72 Kč/m<sup>2</sup> bez DPH</p>
                    `;
                    break;
                case "podlaha":
                    ins.innerHTML = "podlahu";
                    description.innerHTML = `
                        <p><a href="./materialy/purex_ng-0808nf.html" class="link">Měkká pěna</a></p>
                        <p>Od 250 Kč/m<sup>2</sup> bez DPH</p>
                    `;
                    break;
                case "zaklady":
                    ins.innerHTML = "základy";
                    description.innerHTML = `
                        <p><a href="./materialy/purex_ng-0428.html" class="link">Tvrdá pěna</a></p>
                        <p>Od 72 Kč/m<sup>2</sup> bez DPH</p>
                    `;
                    break;
            };
        };
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
    };
};

hero();
house();
uspora();