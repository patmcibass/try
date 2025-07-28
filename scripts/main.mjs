import { createExtensions } from "./extensions.mjs";
import data from './data.json' with { type: 'json' }
import { showAll } from "./All.mjs";
import { removeBtn } from "./RemoveBtn.mjs";
import { activeBtn } from "./Active.mjs";
import { inactiveBtn } from "./Inactive.mjs";
import { switchLightMode } from "./LightMode.mjs";

createExtensions(data)

// Change Light/Dark Mode

// Show All Button
const allBtn = document.getElementById('allBtn')
allBtn.addEventListener('click', showAll)

// Show Active Button
const activeButton = document.getElementById('activeBtn')
activeButton.addEventListener('click', activeBtn)

// Show Inactive Button
const inactiveButton = document.getElementById('inactiveBtn')
inactiveButton.addEventListener('click', inactiveBtn)

// Remove Buttons
const removeBtns = document.querySelectorAll('.removeBtn')
for (const btn of removeBtns) {
    btn.addEventListener('click', removeBtn)
}

const lightModeBtn = document.querySelector('#toggleLightMode')
lightModeBtn.addEventListener('click', switchLightMode)
