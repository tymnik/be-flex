import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperReviews = new Swiper('.reviews-swiper-js', {
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
    nextEl: '.reviews-slider-btn-next-js',
    prevEl: '.reviews-slider-btn-prev-js',
  },
});
