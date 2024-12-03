document.getElementById("menu-toggle").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });
  
  document.getElementById("close-menu").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("hidden");
  });
  
  const mobileLinks = document.querySelectorAll("#mobile-menu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("mobile-menu").classList.add("hidden");
    });
  });




  // Get the current page URL
  const currentPage = window.location.pathname.split("/").pop();

  // Get all menu links
  const menuLinks = document.querySelectorAll("#menu a");

  // Add 'active' class to the matching link
  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-white", "font-bold"); // Add active styles
    } else {
      link.classList.remove("text-white", "font-bold"); // Remove active styles from others
    }
  });

  // Date picker

  





