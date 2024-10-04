// import { findProductById } from "./productData.mjs";
import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId);

// function addProductToCart(product) {
//   let cart = getLocalStorage("so-cart");
//   if (cart === null) {
//     cart = [];
//   }
//   cart.push(product);
//   setLocalStorage("so-cart", cart);
// } 
// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await findProductById(e.target.dataset.id);
//   addProductToCart(product);
  //I'm adding a cart count in the header
  // updateCartCount();
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

// //This function calculates the total number of items in the cart
// function calculateCartQuantity() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   //Get the sum of cart items
//   return cartItems.reduce((total, item) => total + item.quantity, 0);
// }

// //This is the cart counter in the header
// function updateCartCount() {
//   // Fetch the cart from local storage
//   const cartItems = getLocalStorage("so-cart") || [];

//   // Calculate the total number of items in the cart
//   const totalItems = cartItems.reduce(
//     (total, item) => total + (item.quantity || 1),
//     0
//   );

//   // Get the cart count element (update its content)
//   const cartCountElement = document.getElementById("cart-count");
//   if (cartCountElement) {
//     cartCountElement.textContent = totalItems;
//   }
// }

// Ensure that the function runs when the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", updateCartCount);

//Update the count on page load
// updateCartCount();
