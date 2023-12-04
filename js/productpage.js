getData();

async function getData() {
  const urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  let result = await fetch(
    "https://johannela.dk/wp-maiken/wordpress/wp-json/wp/v2/product/" +
      id +
      "?_embed"
  );
  let data = await result.json();

  //console.log("data", data);

  showData(data);
}
function showData(product) {
  document.querySelector(".productTitle").textContent = product.title.rendered;
  document.querySelector(".price span").textContent = product.price;
  document.querySelector(".shortDescription").textContent =
    product.shortdescription;
  document.querySelector(".longDescription").textContent =
    product.longdescription;
  document.querySelector("#productImg").src =
    product._embedded["wp:featuredmedia"][0].source_url;
}
