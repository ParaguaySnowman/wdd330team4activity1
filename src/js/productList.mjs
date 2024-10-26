import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Images.PrimaryMedium}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

export default async function productList(selector, category) {
  // get the element we will insert the list into from the selector
  const el = document.querySelector(selector);
  // get the list of products
  const products = await getData(category);
  console.log(products);
  // render out the product list to the element
  renderListWithTemplate(productCardTemplate, el, products);
  document.querySelector(".title").innerHTML = category;
}

// import { getData } from "./productData.mjs";

// export default function productList(category, selector) {
//   getData(category)
//     .then((products) => {
//       const productListContainer = document.querySelector(selector);
//       productListContainer.innerHTML = ""; // Clear existing content

//       products.forEach((product) => {
//         const productCard = document.createElement("li");
//         productCard.classList.add("product-card");

//         // Add product details to the card (customize as needed)
//         productCard.innerHTML = `
//           <a href="product_pages/index.html?product=${product.Id}">
//             <img src="${product.Image}" alt="${product.Name}">
//             <h3 class="card__brand">${product.Brand.Name}</h3>
//             <h2 class="card__name">${product.NameWithoutBrand}</h2>
//             <p class="product-card__price">$${product.FinalPrice}</p>
//           </a>
//         `;

//         productListContainer.appendChild(productCard);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching product data:", error);
//     });
// }