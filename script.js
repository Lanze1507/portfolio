"use strict";

// The navigation remains usable when JavaScript is unavailable.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const mobileViewport = window.matchMedia("(max-width: 800px)");

if (menuToggle && navLinks) {
  document.documentElement.classList.add("js");
  menuToggle.hidden = false;

  function closeMenu(restoreFocus = false) {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
    if (restoreFocus) menuToggle.focus();
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu(true);
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav")) closeMenu();
  });

  mobileViewport.addEventListener("change", () => closeMenu());
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
