var swiper = new Swiper(".myTestimonial", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 75,
  loop: true,
  coverflowEffect: {
    rotate: -5,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 10000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*
swiper.el.addEventListener('mouseover', function(){
  swiper.autoplay.stop()
})

swiper.el.addEventListener('mouseleave', function(){
  swiper.autoplay.start()
})
*/