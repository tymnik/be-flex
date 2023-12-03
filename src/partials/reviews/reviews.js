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
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    744: {
      spaceBetween: 24,
      slidesPerView: 1.643,
    },
    1440: {
      spaceBetween: 26,
      slidesPerView: 3.1345,
      grabCursor: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews_slider-btn-next',
    prevEl: '.reviews_slider-btn-prev',
  },
});
