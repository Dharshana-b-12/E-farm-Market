import { listProducts } from "./products.js";

function renderProductList(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous

  const productList = listProducts();
  if (productList.length === 0) {
    container.innerHTML = "<p>No products available.</p>";
    return;
  }

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <strong>Price: $${product.price}</strong>
    `;
    container.appendChild(card);
  });
}

export { renderProductList };
