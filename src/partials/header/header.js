const mobileMenuOpen = document.querySelector('.header-burger-opener');
const mobileMenuClose = document.querySelector('.header-burger-closer');
const mobileMenu = document.querySelector('.mobile-menu-container');

mobileMenuOpen.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

addEventListener('click', e => {
  if (mobileMenu.style.display !== 'none') {
    mobileMenu.style.display = 'none';
    mobileMenuOpen.style.visibility = 'visible';
  }
});

function toggleMobileMenu() {
  const currentDisplayStyle = window.getComputedStyle(mobileMenu).display;

  const openerVisibility = window.getComputedStyle(mobileMenuOpen).visibility;

  mobileMenu.style.display = currentDisplayStyle === 'none' ? 'block' : 'none';
  mobileMenuOpen.style.visibility =
    openerVisibility === 'visible' ? 'hidden' : 'visible';
}
