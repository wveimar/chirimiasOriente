var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
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
