//use for testing with local json data
import { isDevelopment } from "./config.js";

const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export async function getProductsByCategory(category) {
  // for testing with local json data
  if (isDevelopment) {
    // Fetch from local JSON file
    return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
  } else {
    // Fetch from server
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
}

export async function findProductById(id) {
    // Fetch from server
    const response = await fetch(baseURL + `product/${id}`);
    const product = await convertToJson(response);
    return product.Result;
  }

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}