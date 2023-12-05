document.addEventListener('DOMContentLoaded', function () {
  let signUpButton = document.querySelector('.message_me-btn');

  signUpButton.addEventListener('click', function () {
    window.location.href = '#submit-form';
  });
});