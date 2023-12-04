const button = document.getElementById('hero-section-button');
const signUpForm = document.getElementById('submit-form');

function scrollToSection() {
  signUpForm.scrollIntoView({ behavior: 'smooth' });
}

button.addEventListener('click', scrollToSection);
