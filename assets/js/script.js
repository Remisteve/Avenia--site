'use strict';

/**
 * Navbar toggle functionality
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleElements = [navOpenBtn, navCloseBtn, overlay];
toggleElements.forEach(element => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

/**
 * Toggle navbar & overlay on navbar link click
 */
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

/**
 * Header & "Go to top" button activation on scroll
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
