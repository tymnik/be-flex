const mobileMenuOpen = document.querySelector('.header-burger-opener');
const mobileMenuClose = document.querySelector('.header-burger-closer');

mobileMenuOpen.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-container');
  const currentDisplayStyle = window.getComputedStyle(mobileMenu).display;

  mobileMenu.style.display = currentDisplayStyle === 'none' ? 'block' : 'none';
}
