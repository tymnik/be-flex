document.addEventListener('DOMContentLoaded', function () {
  const introText = document.querySelector('.intro-text');
  const showMoreBtn = document.querySelector('.show-more-btn');
  const showLessBtn = document.querySelector('.show-less-btn');
  const ellipsis = document.querySelector('.ellipsis');

  showMoreBtn.addEventListener('click', function () {
    introText.classList.add('collapsed');
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline';
    ellipsis.style.display = 'none';
  });

  showLessBtn.addEventListener('click', function () {
    introText.classList.remove('collapsed');
    showMoreBtn.style.display = 'inline';
    showLessBtn.style.display = 'none';
    ellipsis.style.display = 'inline';
  });
});
