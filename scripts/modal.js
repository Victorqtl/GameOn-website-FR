function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// Événement ouverture modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Événement fermeture modal
modalCloseBtn.addEventListener("click", closeModal);

// Fonction ouverture modal
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction fermeture modal
function closeModal() {
  modalbg.style.display = "none";
}
