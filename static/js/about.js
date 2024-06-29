document.addEventListener("DOMContentLoaded", function () {
  const helpedElement = document.getElementById("helpedCount");
  const taughtElement = document.getElementById("taughtCount");

  function countUp(element, maxCount) {
    let count = 0;
    const interval = 0.1;
    const counter = setInterval(() => {
      count++;
      element.textContent = count;
      if (count === maxCount) {
        clearInterval(counter);
      }
    }, interval);
  }

  function startCounting() {
    countUp(helpedElement, 1000);
    countUp(taughtElement, 2000);

    setTimeout(() => {
      startCounting();
    }, 10000);
  }

  startCounting();
});

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
