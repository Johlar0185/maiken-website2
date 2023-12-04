const url =
  "https://johannela.dk/wp-maiken/wordpress/wp-json/wp/v2/product?_embed&per_page=100";

async function getData() {
  const response = await fetch(url);
  const products = await response.json();

  products.forEach(showData);
}

getData();

function showData(product) {
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);

  copy.querySelector(".productTitle").textContent = product.title.rendered;

  copy.querySelector("img").src =
    product._embedded["wp:featuredmedia"][0].source_url;

  copy.querySelector("a").href = "product.html?id=" + product.id;

  document.querySelector(".wrapper1").appendChild(copy);
}
