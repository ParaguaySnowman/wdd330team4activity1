import { getLocalStorage, setLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function shoppingCart() {
  const cartItems = getLocalStorage("so-cart") || [];
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
  
  const total = calculateListTotal(cartItems);
  displayCartTotal(total);

  // Add event listeners for "Remove" buttons
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemId = event.target.dataset.id;
      removeItemFromCart(itemId);
    });
  });
}

function removeItemFromCart(itemId) {
  let cartItems = getLocalStorage("so-cart") || [];
  // Filter out the item to be removed
  cartItems = cartItems.filter((item) => item.Id !== itemId);
  
  // Update local storage
  setLocalStorage("so-cart", cartItems);

  // Recalculate and update the total
  const total = calculateListTotal(cartItems);
  displayCartTotal(total);

  // Re-render the cart
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);

  // Re-attach event listeners for the new buttons
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemId = event.target.dataset.id;
      removeItemFromCart(itemId);
    });
  });
}

function displayCartTotal(total) {
  const totalEl = document.querySelector(".list-total");
  if (total > 0) {
    totalEl.innerText = `Total: $${total.toFixed(2)}`;
    totalEl.classList.remove("hide");
  } else {
    totalEl.innerText = "Total:";
    totalEl.classList.add("hide");
  }
}


function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider" data-id="${item.Id}">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimaryMedium}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <button class="remove-item" data-id="${item.Id}">Remove</button>
  </li>`;
  return newItem;
}


function calculateListTotal(list) {
  const amounts = list.map((item) => item.FinalPrice);
  const total = amounts.reduce((sum, item) => sum + item, 0);
  return total;
}