// Main.js get and add event listener to light mode

// define function and export
export const switchLightMode = () => {

    const lightModeDiv = document.getElementById('toggleLightMode')

    // get all dark mode class as array
    const darkModes = document.querySelectorAll('.darkMode')
    console.log(darkModes.length)
    
    // get all light mode class array
    const lightModes = document.querySelectorAll('.lightMode')
    console.log(lightModes.length)

    // get array of fonts that need to change
    const fontsToChange = document.querySelectorAll('.changeFontColor')

    // Get svg fill
    const svgFill = document.getElementById('changeFill')

    if(darkModes.length > 0){
        for (const mode of darkModes) {
            mode.classList.remove('darkMode')
            mode.classList.add('lightMode')
            lightModeDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>'
        }
        for (const font of fontsToChange) {
            font.style.color = 'black'
        }
        document.body.classList.add('lightBody')
        svgFill.style.fill = 'black'
    } else {
        for (const mode of lightModes) {
            mode.classList.remove('lightMode')
            mode.classList.add('darkMode')
            lightModeDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#FBFDFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>`   
        }

         for (const font of fontsToChange) {
            font.style.color = 'white'
        }
        document.body.classList.remove('lightBody')
        svgFill.style.fill = 'white'

    }
    
}

    

