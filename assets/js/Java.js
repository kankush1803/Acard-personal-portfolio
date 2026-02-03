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
