var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  // Desactivar autoplay para facilitar la edición
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  speed: 3000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

const menu = document.querySelector('.menu')
const toggle = document.querySelector('#toggle')

toggle.addEventListener('click', function () {
  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !isExpanded);
  menu.classList.toggle('active');
});

// Pausar autoplay al hacer clic en un botón
document.getElementById('pauseButton').addEventListener('click', function() {
  swiper.autoplay.stop();
});