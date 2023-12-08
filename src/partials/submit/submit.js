import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#user-tel');
    const iti = intlTelInput(input, {
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
        preferredCountries: ['ae', 'us', 'gb', 'ca', 'au', 'ua'],
        separateDialCode: true,
    });

    input.addEventListener('click', function () {
        if (typeof iti.openDropdown === 'function') {
            iti.openDropdown();
        }
    });

    input.addEventListener('countrychange', function (event) {
        const selectedCountry = iti.getSelectedCountryData();
        console.log('Selected country code: ' + selectedCountry.dialCode);
        const arrowElement = document.querySelector('.iti__arrow');
        arrowElement.style.display = 'none';
    });

    const selectedDialCodeElement = document.querySelector('.iti__selected-dial-code');
    selectedDialCodeElement.classList.add('vfkb');

    document.getElementById('user-tel').addEventListener('input', function (event) {
        this.value = this.value.replace(/[^0-9]/g, '');
        validatePhoneNumber();
    });

    const userNameInput = document.getElementById('user-name');
    userNameInput.addEventListener('input', function (event) {
        validateNameInput();
    });

    const userTelInput = document.getElementById('user-tel');
    userTelInput.addEventListener('change', function () {
        setTimeout(function () {
            var arrowElement = document.querySelector('.iti__arrow');
            arrowElement.style.display = 'none';
        }, 100);
        validatePhoneNumber();
    });

    // -----------------------
    
    document.getElementById('btn').addEventListener('click', function (event) {
        event.preventDefault();

        const formElements = document.querySelectorAll('.modal-check');
        const privacyCheckbox = document.getElementById('user-privacy');

        validatePhoneNumber();
        validateNameInput();

        
        
        // privacyCheckbox.addEventListener('change', function () {
        //     if (privacyCheckbox.checked) {
        //         privacyCheckbox.classList.remove('red-border');
        //         privacyCheckbox.style.border = '1px solid var(--main-2, #6B39D0)';
        //     } else {
        //         privacyCheckbox.classList.add('red-border');
        //         privacyCheckbox.style.border = '2px solid var(--error, #A61717)';
        //     }
        // });

    // const allFieldsEmpty = Array.from(formElements).every(function (element) {
    //     return element.value.trim() === '' || element === document.getElementById('user-comment');
    // });

    // if (allFieldsEmpty || userTelInput.classList.contains('red-border') || userNameInput.classList.contains('red-border') || !privacyCheckbox.checked) {
    //     console.log('Не можна відправити порожню форму або з невалідним номером телефону, ім\'ям або без погодження з політикою конфіденційності');
    //     return;
    // }




    // -----------------------
        const formData = new FormData(document.querySelector('.sign_up_form'));
        const telegramToken = '6943310494:AAF9IRuXS0o6ejGqdXoa_ZHePm6PcEwLLLA';
        const ChatId = '-1002131222060';
        const Url_api = `https://api.telegram.org/bot${telegramToken}`;

        let message = 'Нова заявка:\n\n';
        message += `<b>Відправник: </b> ${userNameInput.value}\n`;
        message += `<b>Телефон: </b> +${iti.getSelectedCountryData().dialCode} ${userTelInput.value}\n`;
        message += `<b>Повідомлення: </b> ${document.getElementById('user-comment').value}\n`;

        formData.forEach(function (value, key) {
        message += key + ': ' + value + '\n';
        });

        axios.post(`${Url_api}/sendMessage`, {
        chat_id: ChatId,
        parse_mode: 'html',
        text: message,
        }).then(function (response) {
        console.log('Повідомлення відправлено до Telegram:', response.data);
        }).catch(function (error) {
        console.error('Помилка відправлення повідомлення до Telegram:', error);
        });
    });

    function validatePhoneNumber() {
        if (userTelInput.value.trim() === '' || !iti.isValidNumber()) {
        userTelInput.classList.add('red-border');
        } else {
        userTelInput.classList.remove('red-border');
        }
    }

    function validateNameInput() {
        if (userNameInput.value.trim().length === 1) {
        userNameInput.classList.add('red-border');
        } else {
        userNameInput.classList.remove('red-border');
        }

        
    }
    
});
