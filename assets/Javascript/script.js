document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop", // Loop infinito
    perPage: 1, // Mostrar apenas 1 slide por vez
    autoplay: true, // Ativar autoplay
    interval: 3000, // Tempo entre os slides
    pagination: false, // Desativar indicadores de página
    arrows: true, // Ativar setas de navegação por padrão
    breakpoints: {
      600: {
        arrows: false, // Desativar setas em telas com largura <= 600px
      },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});
