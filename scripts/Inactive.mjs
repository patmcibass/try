// define and export function
export const inactiveBtn = (e) => {
    const selected = document.querySelector('.isSelected')
    selected.classList.remove('isSelected')
    e.target.classList.add('isSelected')
    // array of toggle switches
    const checkBoxes = document.querySelectorAll('.toggle')

    // array of articles
    const articles = document.querySelectorAll('.extensionCard')

    for (const box of checkBoxes) {
        const id = Number(box.id.substring(5))

        if(box.checked){
            for (const article of articles) {
                // compare toggle id to article id
                // if checked add class none
                Number(article.id.substring(13)) === id? article.classList.add('none'): ''
            }
        } else {
            for (const article of articles) {
                // compare toggle id to article id
                // if not checked remove class none
                Number(article.id.substring(13)) === id? article.classList.remove('none'): ''
            }
        }
    }

}




