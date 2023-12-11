import i18next from './../../i18n';

// Function to switch language
function switchLanguage(e) {
    const language = e.currentTarget.textContent.trim() === 'EN' ?
     'UK'
     : 'EN';
    const textNode = e.currentTarget.childNodes[0]; 

    textNode.textContent = language;

    
    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        updateContent();
    });
}

const languageSwitchers = document.querySelectorAll('.language-switcher-btn');
languageSwitchers.forEach(btn => btn.addEventListener('click', switchLanguage))

// Function to update content based on the selected language
function updateContent() {
    const elementsWithTranslation = document.querySelectorAll('[data-i18n]');

    elementsWithTranslation.forEach(element => {
        const key = element.dataset.i18n;
        const translation = i18next.t(key);
        element.textContent = translation;
    });
}

updateContent();