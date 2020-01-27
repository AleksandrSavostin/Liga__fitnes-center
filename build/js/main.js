'use strict';

(function () {
var mySwiper = new Swiper('.swiper-container-s1', {
  speed: 400,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 40,
  breakpoints: {
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    1199: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var mySwiper2 = new Swiper('.swiper-container-s2', {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var classLinkList = document.querySelector('.subscription__time-list');
var activeClass = document.querySelector('.subscription__time-item a');

classLinkList.addEventListener('click', function () {
  activeClass.classList.remove('active');
});

})();
