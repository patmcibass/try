const mainSection = document.getElementById('mainSection')

export const createExtensions = (data) => {
    let htmlString = ''
    let extensionId = 1

    for (const obj of data) {
        htmlString += `
        <article class='extensionCard darkMode' id='extensionCard${extensionId}'>
            <div>
                <img src="${obj.logo}" alt="${obj.name} image">
                <div class="textDiv">
                    <h1 class="changeFontColor">${obj.name}</h1>
                    <p class="changeFontColor">${obj.description}</p>
                </div>
            </div>
            <div class="removeBtnDiv">
                <button class="removeBtn darkMode changeFontColor" id='${extensionId}'>Remove</button>
                <div class="toggleDiv">
                    <input type="checkbox" id="check${extensionId}" class="darkMode toggle ${obj.isActive? 'active': ''}" ${obj.isActive? 'checked': ''}>
                    <label for="check${extensionId}"></label>
                </div>
            </div>
        </article>
        `
        extensionId++
    }

    mainSection.innerHTML = htmlString
}
