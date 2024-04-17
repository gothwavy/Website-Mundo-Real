'use strict'

// add event on multiple elements

const addEventOnElement = function (elements, evetType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(evetType, callback);
  }
}

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active")
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

// parallax effect

const parallaxElelements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
  for (let i = 0, len = parallaxElelements.length; i < len; i++){
    const movementX = (event.clientX / window.innerWidth) * Number
    (parallaxElelements[i].dataset.parallaxSpeed);
    const movementY = (event.clientY / window.innerHeight) * Number
    (parallaxElelements[i].dataset.parallaxSpeed);

    parallaxElelements[i].animate({
      transform: `translate(${movementX}px, ${movementY}px)`
    }, { duration: 500, fill: "forwards"});
  }
})