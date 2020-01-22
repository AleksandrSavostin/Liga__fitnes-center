'use strict';

(function () {
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var mySwiper2 = new Swiper('.swiper-container-s2', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
})();
