import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";


loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

checkoutProcess.calculateItemSummary();

console.log(checkoutProcess);
console.log(checkoutProcess.calculateOrdertotal);

// Listen for changes to the ZIP code input
document
  .querySelector("#zip")
  .addEventListener("blur", checkoutProcess.calculateOrdertotal.bind(checkoutProcess));

// Listen for form submission
const form = document.forms["checkout"] || document.querySelector("#checkoutForm"); // Use whichever is applicable
if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            await checkoutProcess.checkout(event.target); // Use the form being submitted
        } catch (error) {
            console.error("Checkout failed:", error);
        }
    });
} else {
    console.error("Form not found");
}
