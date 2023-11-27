import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

document.addEventListener('DOMContentLoaded', function () {
const input = document.querySelector('#user-tel');
const iti = intlTelInput(input, {
    utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
    preferredCountries: ['ae', 'us', 'gb', 'ca', 'au', 'ua'],
    separateDialCode: true,
});

input.addEventListener('click', function () {
    if (typeof iti.openDropdown === 'function') {
    iti.openDropdown();
    }
});

input.addEventListener('countrychange', function (event) {
    var selectedCountry = iti.getSelectedCountryData();
    console.log('Selected country code: ' + selectedCountry.dialCode);
});
});

document.getElementById('user-tel').addEventListener('input', function (event) {
this.value = this.value.replace(/[^0-9]/g, '');
});

const userTelInput = document.getElementById('user-tel');

userTelInput.addEventListener('countrychange', function () {
setTimeout(function () {
    var arrowElement = document.querySelector('.iti__arrow');
    arrowElement.style.display = 'none';
}, 100);
});
