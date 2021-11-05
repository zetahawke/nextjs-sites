setTimeout(function () {
  let activeSlide = document.querySelector(".slide.translate-x-0");
  if (activeSlide) {
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("-translate-x-full");
    let nextSlide = activeSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.remove("translate-x-full");
      nextSlide.classList.add("translate-x-0");
    }
  }
}, 3000);

function nextSlide() {
  let activeSlide = document.querySelector(".slide.translate-x-0");
  if (activeSlide) {
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("-translate-x-full");
    let nextSlide = activeSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.remove("translate-x-full");
      nextSlide.classList.add("translate-x-0");
    }
  }
}

function previousSlide() {
  let activeSlide = document.querySelector(".slide.translate-x-0");
  if (activeSlide) {
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("translate-x-full");
    let previousSlide = activeSlide.previousElementSibling;
    if (previousSlide) {
      previousSlide.classList.remove("-translate-x-full");
      previousSlide.classList.add("translate-x-0");
    }
  }
}

let prevSlideButton = document.getElementsByClassName("prev-slide")[0];
if (prevSlideButton) {
  prevSlideButton.addEventListener("click", (event) => {
    previousSlide();
  });
}
let nextSlideButton = document.getElementsByClassName("next-slide")[0];
if (nextSlideButton) {
  nextSlideButton.addEventListener("click", (event) => {
    nextSlide();
  });
}
