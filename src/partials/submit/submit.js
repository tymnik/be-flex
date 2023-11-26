import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector("#user-tel");
    var iti = intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
        preferredCountries: ["ae", "us", "gb", "ca", "au", "ua"],
        separateDialCode: true,
    });

    input.addEventListener("click", function () {
        iti.openDropdown();
    });

    input.addEventListener("countrychange", function (event) {
        var selectedCountry = iti.getSelectedCountryData();
        console.log("Selected country code: " + selectedCountry.dialCode);
    });
});

