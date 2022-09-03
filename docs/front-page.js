// Hero
const hero = document.getElementById("hero");
const headerHeight = document.querySelector(".header-index").clientHeight;

let windowHeight = window.innerHeight;
hero.style.height = windowHeight * 1.2 + "px";

addEventListener("resize", function () {
    windowHeight = window.innerHeight;
    hero.style.height = windowHeight + headerHeight + "px";
});

// Interaktivní dům
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

// Výpočet úspor
const input = document.getElementById("uspora__input");
const value = document.getElementById("uspora__value");
const estimate = document.getElementById("uspora__estimate");

switch (input.value) {
    case "1":
        value.innerHTML = "5000 Kč nebo méně";
        estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>2250 Kč</mark> měsíčně!";
        break;
    case "2":
        value.innerHTML = "6000 Kč";
        estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>2700 Kč</mark> měsíčně!";
        break;
    case "3":
        value.innerHTML = "7000 Kč";
        estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>3150 Kč</mark> měsíčně!";
        break;
    case "4":
        value.innerHTML = "8000 Kč";
        estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>3600 Kč</mark> měsíčně!";
        break;
    case "5":
        value.innerHTML = "9000 Kč nebo více";
        estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit i více než <mark>4050 Kč</mark>měsíčně!";
        break;
};

input.oninput = function () {
    switch (input.value) {
        case "1":
            value.innerHTML = "5000 Kč nebo méně";
            estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>2250 Kč</mark> měsíčně!";
            break;
        case "2":
            value.innerHTML = "6000 Kč";
            estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>2700 Kč</mark> měsíčně!";
            break;
        case "3":
            value.innerHTML = "7000 Kč";
            estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>3150 Kč</mark> měsíčně!";
            break;
        case "4":
            value.innerHTML = "8000 Kč";
            estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit až <mark>3600 Kč</mark> měsíčně!";
            break;
        case "5":
            value.innerHTML = "9000 Kč nebo více";
            estimate.innerHTML = "s naší stříkanou izolací můžete <br>ušetřit i více než <mark>4050 Kč</mark>měsíčně!";
            break;
    };
};