import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.gallery-swiper-js', {
  modules: [Navigation, Pagination],
  speed: 300,
  grabCursor: true,
  spaceBetween: 26,
  slidesPerView: 1,
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
    nextEl: '.gallery-slider-btn-next-js',
    prevEl: '.gallery-slider-btn-prev-js',
  },

  pagination: {
    el: '.gallery-swiper-pagination',
    type: 'bullets',
  },
});
