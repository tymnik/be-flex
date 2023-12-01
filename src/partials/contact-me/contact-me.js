document.addEventListener('DOMContentLoaded', function () {
  let contactMeButton = document.querySelector('.contact-me-btn');

  contactMeButton.addEventListener('click', function () {
    window.location.href = '#submit-form';
  });
});
