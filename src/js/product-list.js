// import productList from "./productList.mjs";
// import { getParam, loadHeaderFooter } from "./utils.mjs";

// loadHeaderFooter();
// const category = getParam("category");
// productList(".product-list", category);

import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

productList("tents", ".product-list");