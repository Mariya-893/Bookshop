let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
    dots[i].classList.toggle("active", i === n);
  });
  slideIndex = n;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

export function initSlider() {
  setInterval(nextSlide, 5000);
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });
  showSlide(slideIndex);
}
