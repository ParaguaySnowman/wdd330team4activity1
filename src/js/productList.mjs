import {getProductsByCategory } from "./productData.mjs";

export default function productList(category, selector) {
  getProductsByCategory(category)
    .then((products) => {
      const productListContainer = document.querySelector(selector);
      productListContainer.innerHTML = ""; // Clear existing content

      if (products.length === 0) {
        productListContainer.innerHTML = `<p>No products found for category: ${category}</p>`;
      } else {
        products.forEach((product) => {
          const productCard = document.createElement("li");
          productCard.classList.add("product-card");
  
          // Add product details to the card (customize as needed)
          productCard.innerHTML = `
            <a href="../product_pages/index.html?product=${product.Id}">
            <img src="${product.Image}" alt="${product.Name}">
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.NameWithoutBrand}</h2>
            <p class="product-card__price">$${product.FinalPrice}</p>
            </a>
            `;

            if (product.ListPrice > product.FinalPrice) {
              const discountElement = document.createElement("p");
              discountElement.classList.add("product-card__discount");
              let productDiscount = Math.round((product.ListPrice - product.FinalPrice) / product.ListPrice * 100);
              discountElement.textContent = `${productDiscount}% off`;
              // discountElement.textContent = `${((product.ListPrice - product.FinalPrice) / product.ListPrice) * 100}% off`;
              productCard.appendChild(discountElement);
            }
  
          productListContainer.appendChild(productCard);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
}