const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.75; // Calcula a posição do topo da janela mais 75% da altura da janela
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass); // Remove a animação se o elemento não estiver mais visível
    }
  });
}

animeScroll();
if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll();
  });
}
