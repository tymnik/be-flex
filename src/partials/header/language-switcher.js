import i18next from './../../i18n';

function switchLanguage(e) {
    const language = e.currentTarget.textContent.trim() === 'EN' ? 'uk' : 'en';
    const textNode = e.currentTarget.childNodes[0];

    textNode.textContent = language.toUpperCase();

    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        updateContent();
    });
}

const languageSwitchers = document.querySelectorAll('.language-switcher-btn');
languageSwitchers.forEach(btn => btn.addEventListener('click', switchLanguage));

function updateContent() {
    const elementsWithTranslation = document.querySelectorAll('[data-i18n]');

    elementsWithTranslation.forEach(element => {
        const key = element.dataset.i18n;
        const translation = i18next.t(key);

        if (translation !== key) {
            // Check if the key contains the word "placeholder"
            const isPlaceholder = key.toLowerCase().includes('placeholder');

            if (isPlaceholder && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
                // If it's a placeholder and the element is an input or textarea, set the translation as the placeholder
                element.placeholder = translation;
            } else {
                // Create a temporary div to set the HTML content
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = translation.replace(/%br%/g, '<br>');

                // Clear the content of the target element
                element.innerHTML = '';

                // Append the child nodes of the temporary div to the target element
                while (tempDiv.firstChild) {
                    const child = tempDiv.firstChild;
                    element.appendChild(child);
                }
            }
        } else {
            console.warn(`Translation not found for key: ${key}`);
        }
    });
}