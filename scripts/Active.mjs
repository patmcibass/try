
// define function
export const activeBtn = (e) => {
    // get array of toggle switches
    const checkBoxes = document.querySelectorAll('.toggle')
    const articles = document.querySelectorAll('.extensionCard')
    const selected = document.querySelector('.isSelected')
    selected.classList.remove('isSelected')
    e.target.classList.add('isSelected')
    for (const box of checkBoxes) {
        const id = Number(box.id.substring(5))

        // get id of Box and compare it to article ID
        // box.checked? 
        if(box.checked){
            for (const card of articles) {
                // if checked remove class none
                Number(card.id.substring(13)) === id? card.classList.remove('none'):''
            }
        }else {
            for (const card of articles) {
                // if not checked add class none
                Number(card.id.substring(13)) === id? card.classList.add('none'):''
            }
        }
    }

}