var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop:true,
    autoplay:true,
    speed:3000
  });

  const menu = document.querySelector('.menu')
  const toggle = document.querySelector('#toggle')

  toggle.addEventListener('click',function(){
    menu.classList.toggle('active');
  })