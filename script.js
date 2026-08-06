document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for menu links
  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

  // Disable Coming Soon buttons
  document.querySelectorAll(".store-badge.disabled").forEach(button => {

    button.addEventListener("click", function(e) {
      e.preventDefault();
    });

  });

});
