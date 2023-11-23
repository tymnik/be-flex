 var input = document.querySelector("#user-tel");
    var iti = window.intlTelInput(input, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        preferredCountries: ["us", "gb", "ca", "au"], 
        separateDialCode: true, 
    });

    input.addEventListener("click", function () {
        iti.openDropdown();
    });

    input.addEventListener("countrychange", function (event) {
        var selectedCountry = iti.getSelectedCountryData();
        console.log("Selected country code: " + selectedCountry.dialCode);
    });
