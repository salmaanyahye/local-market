const form = document.getElementById("priceForm");
const priceList = document.getElementById("priceList");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;

  let row = `
    <tr>
      <td>${product}</td>
      <td>$${price}</td>
    </tr>
  `;

  priceList.innerHTML += row;
  form.reset();
});