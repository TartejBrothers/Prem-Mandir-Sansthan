const cardWrapper = document.querySelector(".card-wrapper");
const widthToScroll = cardWrapper.children[0].offsetWidth;
const arrowPrev = document.querySelector(".arrow.prev");
const arrowNext = document.querySelector(".arrow.next");
const cardBounding = cardWrapper.getBoundingClientRect();
const cardImageAndLink = cardWrapper.querySelectorAll("img, a");
let currScroll = 0;
let initPos = 0;
let clicked = false;

cardImageAndLink.forEach((item) => {
  item.setAttribute("draggable", false);
});

arrowPrev.onclick = function () {
  cardWrapper.scrollLeft -= widthToScroll;
};

arrowNext.onclick = function () {
  console.log("clicked");
  cardWrapper.scrollLeft += widthToScroll;
};

cardWrapper.onmousedown = function (e) {
  cardWrapper.classList.add("grab");
  initPos = e.clientX - cardBounding.left;
  currScroll = cardWrapper.scrollLeft;
  clicked = true;
};

cardWrapper.onmousemove = function (e) {
  if (clicked) {
    const xPos = e.clientX - cardBounding.left;
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos);
  }
};

cardWrapper.onmouseup = mouseUpAndLeave;
cardWrapper.onmouseleave = mouseUpAndLeave;

function mouseUpAndLeave() {
  cardWrapper.classList.remove("grab");
  clicked = false;
}




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
