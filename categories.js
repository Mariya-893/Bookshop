import { fetchBooks } from "./api.js";
import { renderBooks } from "./render.js";

let currentCategory = "Architecture";
let startIndex = 0;
const maxResults = 6;

export function initCategories() {
  const categories = document.querySelectorAll("#category-list li");
  const bookList = document.getElementById("book-list");

  categories.forEach(cat => {
    cat.addEventListener("click", () => {
      document.querySelector("#category-list li.active")?.classList.remove("active");
      cat.classList.add("active");

      currentCategory = cat.textContent;
      startIndex = 0;
      bookList.innerHTML = "";
      loadBooks(currentCategory, bookList);
    });
  });

  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.id = "load-more";
  loadMoreBtn.textContent = "Load more";
  loadMoreBtn.style.display = "block";
  loadMoreBtn.style.margin = "20px auto";
  document.querySelector(".content").appendChild(loadMoreBtn);

  loadMoreBtn.addEventListener("click", () => loadBooks(currentCategory, bookList));

  loadBooks(currentCategory, bookList);
}

async function loadBooks(category, bookList) {
  const books = await fetchBooks(category, startIndex, maxResults);
  renderBooks(books, bookList);
  startIndex += maxResults;
}
