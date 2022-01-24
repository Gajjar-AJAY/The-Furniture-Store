var swiper = new Swiper(".review_slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay:5500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1020: {
      slidesPerView: 1,
    },
  },
});
