
const hamburguer = document.querySelector(".hamburguer");

const nav = document.querySelector(".navbar");
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));


// const links = document.querySelectorAll('#navbar-items a');
// links.addEventListener('click', () => {
//             nav.classList.toggle('active');
// });

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 60
            },
            800
        );
    }
});