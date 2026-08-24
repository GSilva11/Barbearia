// Menu hamburguer
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".navbar");

if (hamburguer && nav) {
    hamburguer.addEventListener("click", () => {
        const isActive = nav.classList.toggle("active");
        hamburguer.setAttribute("aria-expanded", isActive ? "true" : "false");
    });
}

function addListener() {
    const navEl = document.querySelector("nav");
    const listItems = document.querySelectorAll("#navbar-items > li");
    listItems.forEach((li) => {
        const anchor = li.querySelector("a");
        anchor.addEventListener("click", () => navEl.classList.remove("active"));
    });
}
addListener();

// Destaca o dia de funcionamento atual
function destacarDiaAtual() {
    const hoje = new Date().getDay(); // 0 = domingo ... 6 = sabado
    const boxes = document.querySelectorAll(".box-hour");
    boxes.forEach((box) => {
        const dia = Number(box.getAttribute("data-day"));
        if (dia === hoje) {
            box.classList.add("is-today");
        }
    });
}
destacarDiaAtual();

// Atualiza o ano do copyright automaticamente
const anoAtualEl = document.getElementById("ano-atual");
if (anoAtualEl) {
    anoAtualEl.textContent = new Date().getFullYear();
}

// ScrollReveal (com fallback: se a lib não carregar, o conteúdo continua visível)
if (window.ScrollReveal) {
    window.revelar = ScrollReveal({ reset: false });
    revelar.reveal(".esconder", {
        duration: 1400,
        distance: "60px",
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        interval: 80,
    });
} else {
    document.querySelectorAll(".esconder").forEach((el) => el.classList.remove("esconder"));
}
