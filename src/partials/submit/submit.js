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
        var selectedCountry = iti.getSelectedCountryData();
        console.log('Selected country code: ' + selectedCountry.dialCode);
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

    document.getElementById('btn').addEventListener('click', function (event) {
        event.preventDefault();

        var formElements = document.querySelectorAll('.sign_up_form_input, .modal-check');

        formElements.forEach(function (element) {
            if (element.value.trim() === '') {
                element.classList.add('red-border');
            } else {
                element.classList.remove('red-border');
            }
        });

        const allFieldsEmpty = Array.from(formElements).every(function (element) {
            return element.value.trim() === '';
        });

        if (allFieldsEmpty || document.getElementById('user-tel').value.trim() === '') {
            document.getElementById('user-tel').classList.add('red-border');
            console.log('Не можна відправити порожню форму');
            return; 
        }

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
});
