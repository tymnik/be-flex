const button = document.getElementById('hero-section-button');
const signUpForm = document.getElementById('submit-form');

function scrollToSection() {

  const headerHeight = document.querySelector('.header-wrap').offsetHeight;

  const targetScrollPosition = signUpForm.offsetTop - headerHeight;

  window.scrollTo({
    top: targetScrollPosition,
    behavior: 'smooth',
  });
}

button.addEventListener('click', scrollToSection);
