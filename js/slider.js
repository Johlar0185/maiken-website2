document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(
    '.slider_tabs input[type="radio"]'
  );
  let currentSlide = 1;

  function switchSlide() {
    radioButtons[currentSlide - 1].checked = true;
    currentSlide = (currentSlide % radioButtons.length) + 1;
  }

  // Immediately select the first button
  switchSlide();

  // Switch to the next buttons every 5 seconds
  setInterval(switchSlide, 5000);
});
