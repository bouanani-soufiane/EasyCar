// Get the popup title, image, and option list elements
import { dataobj } from "./data.js";
console.log(dataobj);
var popupTitle = document.getElementById("popupTitle");
var popupPrice = document.getElementById("popupPrice");
var popupImage = document.getElementById("popupImage");
var optionList = document.getElementById("optionList");
let cardTitle;
let cardPrice;
let cardImage;
let cardOptions;
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

function pagination() {
  const boxes = document.querySelectorAll(".filter");
  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const three = document.getElementById("three");

  let currentPage = 1;
  const totalPages = 3;

  function showPage(page) {
    boxes.forEach((box) => {
      if (box.getAttribute("data-page") === page.toString()) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  }

  showPage(currentPage);

  one.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  two.addEventListener("click", function () {
    currentPage++;
    if (currentPage <= totalPages - 1) {
      showPage(currentPage);
    }
  });

  three.addEventListener("click", function () {
    if (currentPage === 3) {
      currentPage = 3;
      showPage(currentPage);
    } else {
      currentPage = 1;
      showPage(currentPage);
    }
  });
}
// const retrievedData = JSON.parse(localStorage.getItem("dataobj"));
// console.log(`hi ${dataobj}`);
function listCards() {
  var cards = document.getElementById("cards");
  cards.classList.add("gap-5");
  for (const item of dataobj) {
    // console.log(item);
    const html = `<div class="card col-sm-12 w-100 filter ${item.categorie}" data-page="${item.page}">
  <div class="mb-3">
    <div class="g-0 d-flex justify-content-between">
      <div class="col-md-3">
        <img src="${item.img}" class="img-fluid pt-4" alt="img"  id="img-toggle" />
      </div>
      <div class="col-md-5">
        <div class="card-body">
          <h5 class="card-title pb-5">${item.title}<br> <span>${item.categorie}</span></h5>
          <p class="card-text text-secondary">
            <i class="fa-solid fa-gas-pump mx-2 h5 mx-2"></i><span>90L</span>
            <i class="fa-solid fa-circle-radiation mx-1 h5 mx-2"></i><span>Manuel</span>
            <i class="fa-solid fa-user-group mx-1 h5 mx-2"></i><span>2 Persons</span>
          </p>
        </div>
      </div>
      <div class="col-md-2">
        <div class="col-8 text-end pt-3">
          <h5 class="price pb-5 text-end">$/${item.price}<span class="lead">jrs</span></h5>
        </div>
        <div class="col-12">
          <a class="btn btn-primary px-4 py-2 rounded-2 mb-2 add-button" data-index="${item.Id}" id='ajouter'>Ajouter</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
    cards.insertAdjacentHTML("afterbegin", html);
  }
}

let list = document.getElementById("card-list");
list.addEventListener("click", function () {
  cards.innerHTML = "";
  listCards();
  filterCards();
  pagination();
  addToPanier();
  addToLocal();
});

function gridCard() {
  var cards = document.getElementById("cards");
  cards.innerHTML = "";
  cards.classList.remove("gap-5");
  for (const item of dataobj) {
    // console.log(item);
    const html = `<div class="my-5 col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ${item.categorie}" data-page="${item.page}">
        <div class="card border-0 rounded-0 shadow py-3 rounded-3">
            <h5 class="card-title text-start px-2 my-0">${item.title}</h5>
            <p class="card-text lead text-start px-2 h6 text-secondary">
               ${item.categorie}
            </p>
            <img src="${item.img}" class="card-img-top rounded-0 p-3" alt="sport" id="img-toggle" />
            <div class="card-body mt-3 mb-3">
                <div class="row">
                    <div class="col-12">
                        <p class="card-text text-secondary">
                            <i class="fa-solid fa-gas-pump mx-2 h5"></i><span class="">90L</span>
                            <i class="fa-solid fa-circle-radiation mx-1 h5"></i><span class="">Manuel</span>
                            <i class="fa-solid fa-user-group mx-1 h5"></i><span class="">2 Persons</span>
                        </p>
                    </div>
                    <div class="col-2">
                        <i class="bi bi-bookmark-plus fs-2"></i>
                    </div>
                </div>
            </div>
            <div class="row align-items-center text-center g-0">
                <div class="col-4">
                    <h5 class="price">$${item.price}/<span class="lead">jrs</span></h5>
                </div>
                <div class="col-8">
                  <a class="btn btn-primary px-4 py-2 rounded-2 mb-2 add-button" data-index="${item.Id}" id='ajouter'>Ajouter</a>
                </div>
            </div>
        </div>
    </div>`;
    cards.insertAdjacentHTML("afterbegin", html);
  }
}
let grid = document.getElementById("card-grid");
grid.addEventListener("click", function () {
  cards.innerHTML = "";
  gridCard();
  filterCards();
  pagination();
  addToPanier();
  addToLocal();
});
gridCard();
filterCards();
pagination();

// Event delegation to handle pop-up clicks
document.getElementById("cards").addEventListener("click", function (e) {
  // console.log("test");
  if (e.target.classList.contains("add-button")) {
    // addToCart(e);
    var cardElement = e.target.closest(".card");

    cardTitle = cardElement.querySelector(".card-title").textContent;
    cardPrice = cardElement.querySelector(".price").textContent;
    cardImage = cardElement.querySelector("#img-toggle").src;
    cardOptions = cardElement.querySelector(".card-text").textContent;

    popupTitle.innerText = cardTitle;
    popupPrice.innerText = cardPrice;
    popupImage.src = cardImage;
    optionList.innerHTML = cardOptions;

    modal.style.display = "block";
  }
});

// Close the popup when the close button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the popup when the user clicks outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// filter menu

function filterCards() {
  var filterButtons = document.querySelectorAll(".filter-button");
  var filters = document.querySelectorAll(".filter");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = this.getAttribute("data-filter"); 

      filters.forEach(function (filter) {
        if (!filter.classList.contains(value)) {
          filter.style.display = "none";
        } else {
          filter.style.display = "block";
        }
      });
    });
  });
}

var dataTable = [];

var panierData = JSON.parse(localStorage.getItem("panier"));
var counter = panierData ? panierData.length + 1 : 1;


var ajouterBtn = document.querySelectorAll("#ajouter");
function handleAjouterClick(btn) {
  var dataIndex = btn.getAttribute("data-index");
  var data = JSON.parse(localStorage.getItem("dataobj"));
  var cardTitle = data[dataIndex - 1].title;  
  var cardPrice = data[dataIndex - 1].price;
  var cardImage = data[dataIndex - 1].img;
  var cardCateg = data[dataIndex - 1].categorie;
  var isDuplicate = dataTable.some((item) => {
    return item.title === cardTitle && item.price === cardPrice;
  });

  if (!isDuplicate) {
    var dataObject = {};
    dataObject.id = counter;
    dataObject.title = cardTitle;
    dataObject.price = cardPrice;
    dataObject.img = cardImage;
    dataObject.categorie = cardCateg;
    dataObject.options = {
      toit: "panoramique",
      "Système audio": "Dolby",
      Station: "Radio",
    };

    dataTable.push(dataObject);
    var panierData = JSON.parse(localStorage.getItem("panier")) || [];
    panierData.push(dataObject);
    localStorage.setItem("panier", JSON.stringify(panierData));
    console.log(localStorage.getItem("panier"));
    counter++;
  } else {
    console.log("Item already exists in the cart.");
  }
}
function addToLocal() {
  var ajouterBtn = document.querySelectorAll("#ajouter");

  ajouterBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      handleAjouterClick(btn);
    });
  });
}
addToLocal();
var panier_items = document.getElementById("panier-items");

function addToPanier() {
  var data = JSON.parse(localStorage.getItem("panier"));
  console.log("hyee" + JSON.stringify(data));
  for (let item of data) {
    const modalRent = `<li class="row d-flex justify-content-end  " style="width: 350px;">
      <div class="col-4">
        <img src="${item.img}" alt="img" class="img-fluid small-image ms-1">
      </div>
      <div class="col-4 text-white">
        <h6 class= "">${item.title}</h6>
        <span class="d-block h6">${item.categorie}</span>
      </div>
      <div class="col-4 d-flex justify-content-end"> 
      <div >
        <button class="btn btn-sm btn-success mb-3" type="button" id="personaliser" data-index="${item.id}" >personaliser</button> 
        <button class="btn btn-sm btn-danger" type="button" id="supprimer" data-index="${item.id}">supprimer</button>
      </div>
      </div>
    </li>
    <hr class="custom-hr">
`;
    panier_items.insertAdjacentHTML("afterbegin", modalRent);
  }
}

addToPanier();

var personaliser = document.querySelectorAll("#personaliser");
personaliser.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("im personaliser");
    var dataIndex = e.target.getAttribute("data-index");
    var otherPageUrl = `./personalisation.html?dataIndex=${dataIndex}`;
    window.location.href = otherPageUrl;
  });
});
var supprimer = document.querySelectorAll("#supprimer");
supprimer.forEach((button) => {
  button.addEventListener("click", (e) => {
    let idToDel = e.target.getAttribute("data-index");
    const items = JSON.parse(localStorage.getItem("panier"));
    let afterSupp = items.filter((item) => item.id != idToDel);
    localStorage.setItem("panier", JSON.stringify(afterSupp));
    location.reload();
  });
});

let clearing = document.getElementById("clear");
clearing.addEventListener("click", function () {
  localStorage.clear("panier");
  location.reload();
});
