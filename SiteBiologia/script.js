const faders = document.querySelectorAll('.fade');

function aparecerAoRolar() {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', aparecerAoRolar);
window.addEventListener('load', aparecerAoRolar);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

const nav = document.querySelector('.navegacao');
  const homeSection = document.querySelector('#home');

  window.addEventListener('scroll', () => {
    const homeHeight = homeSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > homeHeight - 50) {
      nav.style.top = "-100px";    // Sobe o menu
      nav.style.opacity = "0";      // Some (fade)
    } else {
      nav.style.top = "0";          // Volta para o topo
      nav.style.opacity = "1";      // Fica visível
    }
  });

  const menuHamburguer = document.getElementById('menu-hamburguer');
  const menuLinks = document.getElementById('menu-links');

  menuHamburguer.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
  });

  // Fecha o menu quando clicar num item
  const links = document.querySelectorAll('.menu-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.classList.remove('active');
    });
  });



