import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import axios from 'axios';

let iti;
var selectedCountry;
let userTelInput;
let userNameInput;
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
const form = document.getElementById('form');
    
document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = 0;
        

        const userNameInput = document.getElementById('user-name');
        if (userNameInput.value.trim().length < 1) {
            addError(userNameInput);
            error++;
        } else {
            removeError(userNameInput);
        }
        const formElements = document.querySelectorAll('.submit_form_input, .sign_up_checkbox_input');

        formElements.forEach((input) => {
            removeError(input);

            if (input.type === 'checkbox' && !input.checked) {
                addError(input);
                error++;
            } else if (input.id === 'user-tel') {
                const userTelInput = document.getElementById('user-tel');
                if (!isValidPhoneNumber(userTelInput.value.trim())) {
                    addError(userTelInput);
                    error++;
                } else {
                    removeError(userTelInput);
                }
            } else if (input.id !== 'user-comment' && input.value.trim() === '') {
                addError(input);
                error++;
            }
        });

<<<<<<< Updated upstream
        // if (error > 0) {
        //     console.log('Не можна відправити форму з помилками валідації');
        //     return;
        // }
=======
>>>>>>> Stashed changes

        // Отримання даних і відправлення форми, якщо валідація успішна

            try {
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

                const response = await axios.post(`${Url_api}/sendMessage`, {
                    chat_id: ChatId,
                    parse_mode: 'html',
                    text: message,
                });

                console.log('Повідомлення відправлено до Telegram:', response.data);
            } catch (error) {
                console.error('Помилка відправлення повідомлення до Telegram:', error);
            }
        }

    function addError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function removeError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function isValidPhoneNumber(phoneNumber) {
        return /^\d{10}$/.test(phoneNumber);
    }
});


