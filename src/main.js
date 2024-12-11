import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


const elementBtn = document.querySelector("#toggleButton");
const toggleDiv = document.querySelector("#btns");

// fonction hide

function hide(){
  toggleDiv.style.display = "none"; // Cache l'élément
}

window.hide = hide;

// interval
let toggleState = false;

setInterval(() => {
    toggleState = !toggleState; 
    toggle(toggleState);
}, 1000);

function toggle(state) {
    // Gérer la visibilité de l'élément
    elementBtn.classList.toggle('hidden', state);

    // Définir la couleur immédiatement
    elementBtn.style.backgroundColor = 'orange';

    // Changer la couleur d'arrière-plan après 2 secondes
    setTimeout(() => {
        elementBtn.style.backgroundColor = 'blue'; // Change le fond en bleu
    }, 2000);
}

function toggleElement() {

  const element = document.getElementById("elementToToggle");

  // Vérifie si l'élément est visible
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}



// Attacher la fonction à l'objet global
window.toggleElement = toggleElement;
