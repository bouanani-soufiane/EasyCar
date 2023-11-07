var panierData = JSON.parse(localStorage.getItem("panier"));
var dataobj = JSON.parse(localStorage.getItem("dataobj"));
// Get the data from the URL
var urlParams = new URLSearchParams(window.location.search);
var dataIndex = urlParams.get("dataIndex");

// Use the dataIndex to fetch the corresponding data or perform any other actions
console.log("Data Index:", dataIndex);

console.log(panierData[dataIndex - 1].price);

var imgPersonalisation = document.getElementById("img-personalisation");
var titlePersonalisation = document.getElementById("title-personalisation");
var pricePersonalisation = document.getElementById("price-personalisation");
var categPersonalisation = document.getElementById("categ-personalisation");
imgPersonalisation.src = panierData[dataIndex - 1].img;
titlePersonalisation.textContent = panierData[dataIndex - 1].title;
pricePersonalisation.textContent = `${panierData[dataIndex - 1].price} $`;
categPersonalisation.textContent = panierData[dataIndex - 1].categorie;

var roof = document.querySelector("#SelectRoof");
var SelectAudio = document.querySelector("#SelectAudio");
var SelectStation = document.querySelector("#SelectStation");
var panoramique = document.querySelector("#panoramique");
var station = document.querySelector("#station");
var audio = document.querySelector("#audio");

var updatedPrice = parseFloat(panierData[dataIndex - 1].price);
roof.addEventListener("change", function () {
  var oldPrice = parseFloat(dataobj[+dataIndex].price);

  // Compare the new price with the old price
  if (roof.value == "Electric") {
    // Update the price in the local storage
    panierData[dataIndex - 1].price = oldPrice + 20;
    panierData[dataIndex - 1].options.toit = "Electric";

    localStorage.setItem("panier", JSON.stringify(panierData));
    // Update the displayed price
    pricePersonalisation.textContent = `${oldPrice + 20} $`;
  } else if (roof.value == "Manual") {
    panierData[dataIndex - 1].price = updatedPrice + 10;
    panierData[dataIndex - 1].options.toit = "Manual";

    localStorage.setItem("panier", JSON.stringify(panierData));
    // Update the displayed price
    pricePersonalisation.textContent = `${updatedPrice + 10} $`;
  } else if (roof.value == "Panoramic") {
    panierData[dataIndex - 1].price = oldPrice;
    panierData[dataIndex - 1].options.toit = "Panoramic";

    localStorage.setItem("panier", JSON.stringify(panierData));
    // Update the displayed price
    pricePersonalisation.textContent = `${oldPrice} $`;
  }
  // Update the additional details
  panoramique.innerHTML = `<p id="panoramique"><i class="fa-solid fa-circle-check me-3"></i> toit ${roof.value}</p>`;
});

SelectAudio.addEventListener("change", function () {
  var oldPrice = parseFloat(dataobj[+dataIndex].price);
  var updatedPrice = parseFloat(panierData[dataIndex - 1].price);

  if (SelectAudio.value == "ATMOS") {
    updatedPrice += 20;
    panierData[dataIndex - 1].options["Système audio"] = "ATMOS";
  } else if (SelectAudio.value == "Bose") {
    updatedPrice = oldPrice + 30;
    panierData[dataIndex - 1].options["Système audio"] = "Bose";
  } else if (SelectAudio.value == "Dolby") {
    updatedPrice = oldPrice;
    panierData[dataIndex - 1].options["Système audio"] = "Dolby";
  }
  // Update the price in the local storage
  panierData[dataIndex - 1].price = updatedPrice;
  localStorage.setItem("panier", JSON.stringify(panierData));

  // Update the displayed price
  pricePersonalisation.textContent = `${updatedPrice} $`;

  audio.innerHTML = `<p id="audio"><i class="fa-solid fa-circle-check me-3"></i> Système audio ${SelectAudio.value}</p>`;
});

SelectStation.addEventListener("change", function () {
  if (SelectStation.value == "Radio") {
    panierData[dataIndex - 1].options.Station = "Radio";
  } else if (SelectStation.value == "CD") {
    panierData[dataIndex - 1].options.Station = "CD";
  } else if (SelectStation.value == "Ecran Tactile") {
    panierData[dataIndex - 1].options.Station = "Ecran Tactile";
  }
  localStorage.setItem("panier", JSON.stringify(panierData));

  SelectStation.value == "Ecran Tactile"
    ? (station.innerHTML = `<p id="station"><i class="fa-solid fa-circle-check me-3"></i>  ${SelectStation.value}</p>`)
    : (station.innerHTML = `<p id="station"><i class="fa-solid fa-circle-check me-3"></i> Station ${SelectStation.value}</p>`);
});


var valider = document.querySelectorAll("#valider");
valider.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("validated" + e);
    var devisPag = `./devis.html?dataIndex=${dataIndex}`;
    window.location.href = devisPag;
  });
});
