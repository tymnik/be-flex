document.addEventListener('DOMContentLoaded', function () {
  let cards = document.querySelectorAll(
    '.you-will-find-card, .find-second-card, .you-will-find-card.hoverable'
  );

  let textWrappers = document.querySelectorAll(
    '.first-card-tab-wrapper, .second-card-text-wrapper, .third-card-tab-wrapper'
  );

  textWrappers.forEach(function (wrapper) {
    wrapper.classList.add('visually-hidden');
  });

  cards.forEach(function (card, index) {
    card.addEventListener('mouseover', function () {
      cards.forEach(function (c, i) {
        c.classList.remove('hovered');
        textWrappers[i].classList.add('visually-hidden', 'text-appeared');
      });

      card.classList.add('hovered');
      textWrappers[index].classList.remove('visually-hidden');
    });

    card.addEventListener('mouseout', function () {
      card.classList.remove('hovered');
      textWrappers[index].classList.add('visually-hidden', 'text-appeared');
    });
  });
});
