let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function toggleCart(book, button) {
  const index = cart.findIndex(item => item.title === book.title);
  if (index >= 0) {
    cart.splice(index, 1);
    button.classList.remove("in-cart");
    button.textContent = "Buy now";
  } else {
    cart.push(book);
    button.classList.add("in-cart");
    button.textContent = "In the cart";
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

export function updateCartBadge() {
  const cartIcon = document.querySelector(".cart-btn");
  let badge = cartIcon.querySelector(".cart-badge");

  if (!badge) {
    badge = document.createElement("span");
    badge.className = "cart-badge";
    cartIcon.appendChild(badge);
  }

  badge.textContent = cart.length;
  badge.style.display = cart.length > 0 ? "block" : "none";
}
