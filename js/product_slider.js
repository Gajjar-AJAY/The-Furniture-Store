var swiper = new Swiper(".products_slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay:4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
