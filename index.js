/*
The follow code provides a basic toggle functionality for a navigation menu, 
allowing users to open and close it by clicking on the toggle button and on individual links. 
nav-open controls the visibility of the navigation menu*/

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
