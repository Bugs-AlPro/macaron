// console.log("Привет Всем");
var mySwiper = new Swiper('.swiper', {
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }
});

var iamshasha = new Swiper('.swipe', {
  navigation: {
    nextEl: ".slider-navigation__btn--right",
    prevEl: ".slider-navigation__btn--left",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

var mama = new Swiper('.swip', {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  },
  freeMode: true,
});

