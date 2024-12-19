
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle"); // Open button
    const closeMenu = document.getElementById("close-menu");   // Close button
    const mobileMenu = document.getElementById("mobile-menu"); // Mobile menu container

    // Open Mobile Menu
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
    });

    // Close Mobile Menu
    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
    });

    // Optional: Close menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("-translate-x-full");
      });
    });
  });



  // Get the current page URL
  // Get the current page path without query parameters or fragments
const currentPage = window.location.pathname.split("/").pop().split("?")[0].split("#")[0];

// Function to highlight active links
const highlightActiveLinks = (menuSelector) => {
  const menuLinks = document.querySelectorAll(`${menuSelector} a`);
  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-white", "font-bold"); // Add active styles
    } else {
      link.classList.remove("text-white", "font-bold"); // Remove active styles from others
    }
  });
};

// Apply active link styling to both desktop and mobile menus
highlightActiveLinks("#menu");
highlightActiveLinks("#mobile-menu");


  // Date picker


  


  





