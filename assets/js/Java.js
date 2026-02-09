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


const filterBtns = document.querySelectorAll("[data-filter-btn]");
const selectBox = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-select-value]");
const selectItems = document.querySelectorAll("[data-select-item]");
const projectItems = document.querySelectorAll("[data-filter-item]");


// Desktop filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.toLowerCase();

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    filterProjects(category);
  });
});


// Mobile dropdown
selectBox.addEventListener("click", () => {
  selectBox.classList.toggle("active");
});

selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const category = item.innerText.toLowerCase();

    selectValue.innerText = item.innerText;
    selectBox.classList.remove("active");

    filterProjects(category);
  });
});


// Core filtering logic
function filterProjects(category) {
  projectItems.forEach(item => {
    if (category === "all" || item.dataset.category === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}


// ================= PROJECT FILTER =================

const projectBtns = document.querySelectorAll("[data-project-btn]");
const projectList = document.querySelectorAll("[data-project-item]");

projectBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.toLowerCase();

    projectBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    projectList.forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});
