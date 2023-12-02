const slides = document.querySelectorAll(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function moveSlide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

prev.addEventListener("click", () => {
  if (index == 0) {
    return index;
  }
  index--;
  moveSlide();
});
next.addEventListener("click", () => {
  if (index === slides.length - 1) {
    return index;
  }
  index++;
  moveSlide();
});
function autoplay() {
  if (index == slides.length - 1) {
    index = -1;
  }
  index++;
  moveSlide();
}
window.onload = () => {
  setInterval(autoplay, 3000);
};
