var panierData = JSON.parse(localStorage.getItem("panier"));
console.log(panierData);
console.log(panierData[0]);
var urlParams = new URLSearchParams(window.location.search);
var dataIndex = urlParams.get("dataIndex");
var dataTables = document.getElementById("dataTables");
var priceHT = document.getElementById("priceHT");
var priceTTC = document.getElementById("priceTTC");
var orderNum = document.getElementById("orderNum");
var reference = document.getElementById("reference");
var dateN = document.getElementById("dateN");
var sentDate = document.getElementById("sentDate");
const TVA = 0.2;

let currDate = new Date();
let year = currDate.getFullYear();
let mounth = currDate.getMonth();
let day = currDate.getDate();
dateN.textContent = `${year}/${mounth + 1}/${day}`;
sentDate.textContent = `${year}/${mounth + 1}/${day}`;
orderNum.textContent = Math.floor(Math.random() * (10000000 - 100 + 1) + 100);
reference.textContent = Math.floor(
  Math.random() * (10000000000 - 100 + 1) + 100
);
if (dataIndex) {
  console.log("Data Index:", dataIndex);
  const table = `<table class="table table-striped  my-5"><tr><th>Description</th><th>Unit Price</th></tr><tr><td>Car Name</td><td>${
    panierData[dataIndex - 1].title
  }</td></tr><tr><td>categorie</td><td>${
    panierData[dataIndex - 1].categorie
  }</td></tr><tr><td>type de toit</td><td>${
    panierData[dataIndex - 1].options.toit
  }</td></tr><tr><td>Systeme d'audio</td><td>${
    panierData[dataIndex - 1].options["Système audio"]
  }</td></tr><tr><td>Station</td><td>${
    panierData[dataIndex - 1].options.Station
  }</td></tr><tr><td>Prix total</td><td>${
    panierData[dataIndex - 1].price
  } $</td></tr></table>`;
  dataTables.insertAdjacentHTML("afterbegin", table);
  priceHT.textContent = panierData[dataIndex - 1].price;
  let TTC = panierData[dataIndex - 1].price * (1 + TVA);
  priceTTC.textContent = TTC.toFixed(2);
} else {
  let HT = 0;

  console.log("no data");
  for (let item of panierData) {
    const table = `<table class="table table-striped  my-5"><tr><th>Description</th><th></th></tr><tr><td>Car Name</td><td>${item.title}</td></tr><tr><td>categorie</td><td>${item.categorie}</td></tr><tr><td>type de toit</td><td>${item.options.toit}</td></tr><tr><td>Systeme d'audio</td><td>${item.options["Système audio"]}</td></tr><tr><td>Station</td><td>${item.options.Station}</td></tr><tr><td>Prix total</td><td>${item.price} $</td></tr></table> <hr> `;
    dataTables.insertAdjacentHTML("afterbegin", table);
    HT += parseFloat(item.price);
  }
  priceHT.textContent = HT;
  priceTTC.textContent = HT * (1 + TVA);
}
