document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Disable placeholder App Store buttons
  document.querySelectorAll(".store-badge.disabled").forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
    });
  });

});
