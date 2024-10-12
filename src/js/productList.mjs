import { getData } from "./productData.mjs";

export default function productList(product){ 

    const element = document.querySelector(".product-list ul");

    const products = getData(category);

    element.innerHTML = products.map(product => `
        <li class="product-card">            
            <a href="${product.id}"</a> 
            <img src="${product.Image}" alt="${product.Name}">
            <h3 class="card__brand">"${product.Brand.Name}"</h3>
            <h2 class="card__name">"${product.Name}"</h2>
            <p class="product-card__price">"${product.ListPrice}"</p>
        </li> 
        `).join('');


}