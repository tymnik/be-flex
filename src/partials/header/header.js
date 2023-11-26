const mobileMenuOpen = document.querySelector('.header-burger-opener');
const mobileMenuClose = document.querySelector('.header-burger-closer');
const mobileMenu = document.querySelector('.mobile-backdrop');
const mobileMenuIcon = document.querySelector('.header-burger-icon');
const headerNav = document.querySelectorAll('.mobile-nav-link');
const body = document.querySelector('body');

headerNav.forEach(link => link.addEventListener('click', close));

mobileMenuOpen.addEventListener('click', open);
mobileMenuClose.addEventListener('click', close);
mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) {
    close(e);
  }
});

function open(e) {
  mobileMenu.style.display = 'block';
  mobileMenuOpen.style.visibility = 'hidden';
  body.style.overflow = 'hidden';
}

function close(e) {
  mobileMenu.style.display = 'none';
  mobileMenuOpen.style.visibility = 'visible';
  body.style.overflow = 'visible';
}
