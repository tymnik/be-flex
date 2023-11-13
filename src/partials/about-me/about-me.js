document.addEventListener('DOMContentLoaded', function () {
  const introText = document.querySelector('.intro-text');
  const ellipsis = document.createElement('span');
  ellipsis.textContent = '...';
  ellipsis.classList.add('ellipsis');
  introText.appendChild(ellipsis);

  const showMoreBtn = document.createElement('button');
  showMoreBtn.textContent = 'read more';
  showMoreBtn.classList.add('show-more-btn');
  introText.appendChild(showMoreBtn);

  const showLessBtn = document.createElement('button');
  showLessBtn.textContent = 'read less';
  showLessBtn.classList.add('show-less-btn');
  introText.appendChild(showLessBtn);

  showMoreBtn.addEventListener('click', function () {
    introText.classList.add('collapsed');
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline';
  });

  showLessBtn.addEventListener('click', function () {
    introText.classList.remove('collapsed');
    showMoreBtn.style.display = 'inline';
    showLessBtn.style.display = 'none';
  });
});
