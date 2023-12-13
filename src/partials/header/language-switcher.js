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



// Function to reattach event listeners to buttons
// function reattachEventListeners() {
//     const buttons = document.querySelectorAll('[data-i18n-created][data-i18n]');
    
//     buttons.forEach(button => {
//         const originalButton = document.querySelector(`[data-i18n="${button.dataset.i18n}"]`);
        
//         if (originalButton) {
//             // Clone the original button's listeners and attach them to the translated button
//             const originalListeners = getEventListeners(originalButton);
//             if (originalListeners) {
//                 Object.keys(originalListeners).forEach(eventType => {
//                     originalListeners[eventType].forEach(listener => {
//                         button.addEventListener(eventType, listener);
//                     });
//                 });
//             }
//         }
//     });
// }

// Initial call to reattach event listeners
// reattachEventListeners();


// Function to get event listeners attached to an element
// function getEventListeners(element) {
//     return element.__events || (element.__events = {});
// }

// updateContent();














// import i18next from './../../i18n';


// function switchLanguage(e) {
//     const language = e.currentTarget.textContent.trim() === 'EN' ?
//      'uk' 
//      : 'en';
//     const textNode = e.currentTarget.childNodes[0]; 

//     textNode.textContent = language.toUpperCase();

//     i18next.changeLanguage(language, (err, t) => {
//         if (err) return console.log('something went wrong loading', err);
//         updateContent();
//     });
// }

// const languageSwitchers = document.querySelectorAll('.language-switcher-btn');
// languageSwitchers.forEach(btn => btn.addEventListener('click', switchLanguage));

// // function updateContent() {
// //     const elementsWithTranslation = document.querySelectorAll('[data-i18n]');

// //     elementsWithTranslation.forEach(element => {
// //         const key = element.dataset.i18n;
// //         const translation = i18next.t(key);

// //         if (translation !== key) {
// //             // Create a temporary div to set the HTML content
// //             const tempDiv = document.createElement('div');
// //             tempDiv.innerHTML = translation.replace(/%br%/g, '<br>');

// //             // Clear the content of the target element
// //             element.innerHTML = '';

// //             // Append the child nodes of the temporary div to the target element
// //             while (tempDiv.firstChild) {
// //                 element.appendChild(tempDiv.firstChild);
// //             }
// //         } else {
// //             console.warn(`Translation not found for key: ${key}`);
// //         }
// //     });
// // }


// function updateContent() {
//     const elementsWithTranslation = document.querySelectorAll('[data-i18n]');

//     elementsWithTranslation.forEach(element => {
//         const key = element.dataset.i18n;
//         const translation = i18next.t(key);

//         if (translation !== key) {
//             const tempDiv = document.createElement('div');
//             tempDiv.innerHTML = translation.replace(/%br%/g, '<br>');

//             // Check if the element was created during translation
//             const wasCreatedDuringTranslation = element.hasAttribute('data-i18n-created');

//             // Clear the content of the target element
//             element.innerHTML = '';

//             // Append the child nodes of the temporary div to the target element
//             while (tempDiv.firstChild) {
//                 const child = tempDiv.firstChild;
//                 element.appendChild(child);

//                 // If the child is a button and it was created during translation, reattach event listener
//                 if (child.tagName === 'BUTTON' && wasCreatedDuringTranslation) {
//                     reattachEventListener(child);
//                 }
//             }

//             // Set the flag indicating that the element was created during translation
//             element.setAttribute('data-i18n-created', 'true');
//         } else {
//             console.warn(`Translation not found for key: ${key}`);
//         }
//     });
// }

// // Function to reattach event listeners to buttons
// function reattachEventListener(button) {
//     const originalButton = document.querySelector(`[data-i18n-created][data-i18n="${button.dataset.i18n}"]`);

//     // Check if the original button has any event listeners
//     const originalListeners = getEventListeners(originalButton);

//     if (originalListeners) {
//         // Loop through each event type
//         Object.keys(originalListeners).forEach(eventType => {
//             // Loop through each listener function for the event type
//             originalListeners[eventType].forEach(listener => {
//                 // Attach the listener to the translated button
//                 button.addEventListener(eventType, listener);
//             });
//         });
//     }
// }



// updateContent();