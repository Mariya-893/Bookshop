import { toggleCart, updateCartBadge } from "./cart.js";

const placeholder = "images/placeholder.png";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export function renderBooks(books, bookList) {
  books.forEach(bookItem => {
    const book = bookItem.volumeInfo;
    const sale = bookItem.saleInfo;

    const img = book.imageLinks?.thumbnail || placeholder;
    const authors = book.authors ? book.authors.join(", ") : "Unknown Author";
    const rating = book.averageRating
      ? `<div class="book-rating">
           ${"★".repeat(Math.round(book.averageRating))}
           ${"☆".repeat(5 - Math.round(book.averageRating))}
           <span class="reviews">(${book.ratingsCount || 0} reviews)</span>
         </div>`
      : "";
    const price = sale?.retailPrice
      ? `<div class="book-price">${sale.retailPrice.amount} ${sale.retailPrice.currencyCode}</div>`
      : "";

    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.innerHTML = `
      <div class="book-cover-wrapper">
        <img src="${img}" alt="${book.title}" class="book-cover">
      </div>
      <div class="book-info">
        <div class="book-author">${authors}</div>
        <div class="book-title">${book.title}</div>
        ${rating}
        <div class="book-desc">${truncateText(book.description || "", 250)}</div>
        ${price}
        <button class="buy-btn">Buy now</button>
      </div>
    `;

    const btn = bookCard.querySelector(".buy-btn");
    btn.addEventListener("click", () => toggleCart(book, btn));

    bookList.appendChild(bookCard);
  });

  updateCartBadge();
}
