document.addEventListener('DOMContentLoaded', function () {
  let toJoinButton = document.querySelector('.to-join-btn');

  toJoinButton.addEventListener('click', function () {
    window.location.href = '#submit-form';
  });
});
