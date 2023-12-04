import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperGallery = new Swiper('.gallery-swiper-js', {
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
      slidesPerView: 1.7,
    },
    1280: {
      spaceBetween: 16,
      slidesPerView: 2.9,
      grabCursor: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery-slider-btn-next-js',
    prevEl: '.gallery-slider-btn-prev-js',
  },
});
