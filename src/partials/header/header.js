const mobileMenuOpen = document.querySelector('.header-burger-opener');
const mobileMenuClose = document.querySelector('.header-burger-closer');
const mobileMenu = document.querySelector('.mobile-backdrop');
const mobileMenuIcon = document.querySelector('.header-burger-icon');
const headerNav = document.querySelectorAll('.mobile-nav-link');
const desktopPhoneIcon = document.querySelector('.header-phone-icon');
const desktopPhoneNumber = document.querySelector('.header-phone-number');
const body = document.querySelector('body');

headerNav.forEach(link => link.addEventListener('click', close));

mobileMenuOpen.addEventListener('click', open);
mobileMenuClose.addEventListener('click', close);
mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) {
    close(e);
  }
});

function open() {
  mobileMenu.style.display = 'block';
  mobileMenuOpen.style.visibility = 'hidden';
  body.style.overflow = 'hidden';
}

function close() {
  mobileMenu.style.display = 'none';
  mobileMenuOpen.style.visibility = 'visible';
  body.style.overflow = 'visible';
}

desktopPhoneIcon.addEventListener('click', function () {
  const phoneNumber = '+971524116236';
  copyPhoneNumber(phoneNumber);
});

desktopPhoneNumber.addEventListener('click', function () {
  const phoneNumber = '+971524116236';
  copyPhoneNumber(phoneNumber);
});

function copyPhoneNumber(phoneNumber) {
  const tempInput = document.createElement('input');
  tempInput.value = phoneNumber;

  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      alert('Phone number copied to clipboard: ' + phoneNumber);
    })
    .catch(err => {
      console.error('Unable to copy to clipboard', err);
    })
    .finally(() => {
      document.body.removeChild(tempInput);
    });
}
