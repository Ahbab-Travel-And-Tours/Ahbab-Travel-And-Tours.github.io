document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".menu a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    // Set active class based on current path
    if (link.getAttribute("href") === currentPath) {
      link.parentElement.classList.add("active");
    }

    // Click event to maintain active class when clicked
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.parentElement.classList.remove("active"));
      this.parentElement.classList.add("active");
    });

    // Hover event to add 'active' class on hover
    link.addEventListener("mouseenter", function () {
      this.parentElement.classList.add("active");
    });

    // Remove 'active' class when hover ends
    link.addEventListener("mouseleave", function () {
      // Only remove if it's not the current active path
      if (this.getAttribute("href") !== currentPath) {
        this.parentElement.classList.remove("active");
      }
    });
  });
});
