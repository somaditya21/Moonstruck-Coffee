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




tailwind.config = {
        theme: {
          extend: {
            container: {
              padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
              },
            },
            fontFamily: {
              sans: ['"Josefin Sans"', "sans-serif"],
              josefin: ['"Josefin Sans"', "sans-serif"],
              antonio: ['"Antonio Fischer"', "cursive"],
              italiana: ['"Italiana"', "serif"],
            },
            backgroundImage: {
              "gradient-border":
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1D71B8 100%)",
            },
          },
        },
 };
   