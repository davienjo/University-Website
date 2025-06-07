let navLinks = document.getElementById("nav-links").querySelector('ul');
let menuToggle = document.getElementById("toggle-menu");

menuToggle.addEventListener("click", function() {
  // Check if the menu is already visible
  if (navLinks.style.right == "0px" || navLinks.style.right == "") {
    // Hide the menu
    navLinks.style.right = "-200px";
  } else {
    // Show the menu
    navLinks.style.right = "0px";
  }
});
