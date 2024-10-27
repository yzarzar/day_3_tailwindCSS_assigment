const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  // Toggle the mobile menu's visibility
  if (mobileMenu.style.right === "0px") {
    mobileMenu.style.right = "-100%"; // Hide the menu
  } else {
    mobileMenu.style.right = "0px"; // Show the menu
  }
});

// Close the mobile menu when clicking outside of it
document.addEventListener("click", (event) => {
  // Check if the click was outside the mobile menu
  if (
    !mobileMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    mobileMenu.style.right = "-100%"; // Hide the menu
  }
});
