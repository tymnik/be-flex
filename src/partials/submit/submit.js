import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import axios from 'axios';

let iti;
var selectedCountry;
let userTelInput;
let formElements

document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#user-tel');
    iti = intlTelInput(input, {
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
        selectedCountry = iti.getSelectedCountryData();
        console.log('Selected country code: ' + selectedCountry.dialCode);
    });

    document.getElementById('user-tel').addEventListener('input', function (event) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    userTelInput = document.getElementById('user-tel');

    userTelInput.addEventListener('countrychange', function () {
        setTimeout(function () {
            var arrowElement = document.querySelector('.iti__arrow');
            arrowElement.style.display = 'none';
        }, 100);
    });
});




// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', formSend);

    formElements = document.querySelectorAll('.submit_form_input, .sign_up_checkbox_input');

    formElements.forEach((input) => {
        input.addEventListener('input', function () {
            validateInput(input);
        });
    });

    async function formSend(e) {
        e.preventDefault();

        let error = 0;

        formElements.forEach((input) => {
            validateInput(input);

            if (input.parentElement.classList.contains('_error')) {
                error++;
            }
        });

        console.log('Error count:', error);

        if (error === 0) {
            try {
                console.log('Form is valid. Trying to submit...');
                const formData = new FormData(document.querySelector('.sign_up_form'));
                const telegramToken = '6943310494:AAF9IRuXS0o6ejGqdXoa_ZHePm6PcEwLLLA';
                const ChatId = '-1002131222060';
                const Url_api = `https://api.telegram.org/bot${telegramToken}`;

                let message = 'Нова заявка:\n\n';
                message += `<b>Відправник: </b> ${document.getElementById('user-name').value}\n`;
                message += `<b>Телефон: </b> +${iti.getSelectedCountryData().dialCode} ${document.getElementById('user-tel').value}\n`;
                message += `<b>Повідомлення: </b> ${document.getElementById('user-comment').value}\n`;

                formData.forEach(function (value, key) {
                    message += key + ': ' + value + '\n';
                });

                console.log('Sending form data to Telegram...');
                const response = await axios.post(`${Url_api}/sendMessage`, {
                    chat_id: ChatId,
                    parse_mode: 'html',
                    text: message,
                });

                console.log('Form data sent successfully to Telegram:', response.data);
            } catch (error) {
                console.error('Error sending form data to Telegram:', error);
            }
        }
    }

    function validateInput(input) {
        const value = input.value.trim();

        if (input.id === 'user-name' && value.length < 1) {
            addError(input);
        } else if (input.type === 'checkbox' && !input.checked) {
            addError(input);
        } else if (input.id === 'user-tel' && !isValidPhoneNumber(value)) {
            addError(input);
        } else if (input.id !== 'user-comment' && value === '') {
            addError(input);
        } else {
            removeError(input);
        }
    }

function addError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
    if (input.type === 'checkbox' && !input.checked) {
        input.parentElement.classList.add('sign_up_checkbox_input_error');
    } else {
        input.style.border = '2px solid #A61717';
    }
}

function removeError(input, removeBorder = true) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
    input.parentElement.classList.remove('sign_up_checkbox_input_error');

    if (removeBorder) {
        input.style.removeProperty('border');
    }
}


    function isValidPhoneNumber(phoneNumber) {
        return /^\d{9,12}$/.test(phoneNumber);
    }
});




