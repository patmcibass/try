// in Main js create removeBtn and add event listener

// define function and export
export const removeBtn = (e) => {
    // target the article with id that matches remove btn id #
    const id = Number(e.target.id)
    const article = document.getElementById(`extensionCard${id}`)
    // add class none
    article.classList.add('none')
}