const button = document.getElementById('hero-section-button');
const signUpForm = document.getElementById('submit-form');

function scrollToSection() {
  // Get the height of the sticky header
  const headerHeight = document.querySelector('.header-wrap').offsetHeight;

  // Calculate the target scroll position
  const targetScrollPosition = signUpForm.offsetTop - headerHeight;

  // Scroll to the target position
  window.scrollTo({
    top: targetScrollPosition,
    behavior: 'smooth',
  });
}

button.addEventListener('click', scrollToSection);
