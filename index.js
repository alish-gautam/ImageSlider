const slides = document.querySelectorAll(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
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
  dotsOpacity();
  dots[index].style.opacity = "1";
  moveSlide();
});
next.addEventListener("click", () => {
  if (index === slides.length - 1) {
    return index;
  }
  index++;
  dotsOpacity();
  dots[index].style.opacity = "1";
  moveSlide();
});
function autoplay() {
  if (index == slides.length - 1) {
    index = -1;
  }
  index++;
  dotsOpacity();
  dots[index].style.opacity = "1";
  moveSlide();
}
window.onload = () => {
  setInterval(autoplay, 3000);
};

function dotsOpacity() {
  dots.forEach((dot) => {
    dot.style.opacity = ".2";
  });
}
dots.forEach((dot, i) => {
  dot.addEventListener("click", (e) => {
    index = i;
    dotsOpacity();
    e.target.style.opacity = 1;
    moveSlide();
  });
});

