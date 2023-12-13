document.addEventListener('DOMContentLoaded', function () {
  const introText = document.querySelector('.intro-text');
  const showMoreBtn = document.querySelector('.show-more-btn');
  const showLessBtn = document.querySelector('.show-less-btn');

  if (showMoreBtn) {
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'block';
  }

  showMoreBtn.addEventListener('click', function () {
    introText.classList.remove('collapsed');
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'block';
  });

  showLessBtn.addEventListener('click', function () {
    introText.classList.add('collapsed');
    showMoreBtn.style.display = 'block';
    showLessBtn.style.display = 'none';
  });
});
