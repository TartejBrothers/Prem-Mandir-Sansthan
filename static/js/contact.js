document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  function toggleDropdownMenu() {
    if (window.innerWidth <= 1000) {
      if (
        dropdownMenu.style.display === "none" ||
        dropdownMenu.style.display === ""
      ) {
        dropdownMenu.style.display = "block";
      } else {
        dropdownMenu.style.display = "none";
      }
    } else {
      dropdownMenu.style.display = "none";
    }
  }

  mobileMenuIcon.addEventListener("click", toggleDropdownMenu);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
      dropdownMenu.style.display = "none";
    }
  });
});
