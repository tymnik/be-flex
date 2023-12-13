import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.reviews-swiper-js', {
  modules: [Navigation, Pagination],
  speed: 300,
  grabCursor: true,
  spaceBetween: 26,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-slide',
  },
  loop: true,
  breakpoints: {
    744: {
      slidesPerView: 1.8,
    },
    1280: {
      slidesPerView: 3,
      grabCursor: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider-btn-next-js',
    prevEl: '.reviews-slider-btn-prev-js',
  },

  pagination: {
    el: '.reviews-swiper-pagination',
    type: 'bullets',
  },
});
