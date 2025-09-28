import "style.css";
import { initSlider } from "./slider.js";
import { initBooks } from "./books.js";
import { initCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  initBooks();
  initCart();
});
