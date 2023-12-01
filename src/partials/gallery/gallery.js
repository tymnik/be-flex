import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperGallery = new Swiper('.swiper', {
  modules: [Navigation],
  rewind: true,
  setWrapperSize: true,
  uniqueNavElements: true,
  speed: 300,
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    744: {
      spaceBetween: 16,
      slidesPerView: 1.6626,
    },
    1440: {
      spaceBetween: 16,
      slidesPerView: 3.2078,
      grabCursor: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});
