'use strict';

const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {

  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      elementToggleFunc(sidebar);
    });
  }

});
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {

    navLinks.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const pageName = this.textContent.toLowerCase();

    pages.forEach((page) => {
      page.classList.remove("active");

      if (page.dataset.page === pageName) {
        page.classList.add("active");
      }
    });

  });
});
