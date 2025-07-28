
// create variable for the All Btn in main js

// set event listener on All btn in main js

// Define function for event listener and export
export const showAll = (e) => {
    // get an array of all the articles
    const selected = document.querySelector('.isSelected')
    selected.classList.remove('isSelected')
    e.target.classList.add('isSelected')
    const extensionsArray = document.querySelectorAll('.extensionCard')
    // loop through the array and remove class none (make a class none that hides the article)
    for (const extension of extensionsArray) {
        extension.classList.remove('none')
    }
}




