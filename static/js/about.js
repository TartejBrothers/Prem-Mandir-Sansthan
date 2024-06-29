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
