const dataobj = [
  {
    Id: 1,
    title: "Acura NSX",
    categorie: "sport",
    img: "./images/car-sedan3.png",
    price: "99.00",

    page: 1,
  },
  {
    Id: 2,
    title: "BMW X5",
    categorie: "suv",
    img: "./images/car-sedan2.png",
    price: "89.00",

    page: 1,
  },
  {
    Id: 3,
    title: "Toyota Camry",
    categorie: "sedan",
    img: "./images/car-sedan1.png",
    price: "79.00",

    page: 1,
  },
  {
    Id: 4,
    title: "Porsche 911",
    categorie: "sport",
    img: "./images/car-sport2.png",
    price: "109.00",
    page: 1,
  },
  {
    Id: 5,
    title: "Jeep Wrangler",
    categorie: "suv",
    img: "./images/car-suv2.png",
    price: "79.00",

    page: 1,
  },
  {
    Id: 6,
    title: "Honda Accord",
    categorie: "sedan",
    img: "./images/car-sedan2.png",
    price: "69.00",

    page: 1,
  },
  {
    Id: 7,
    title: "Ford Mustang",
    categorie: "sport",
    img: "./images/car-sport3.png",
    price: "89.00",
    page: 2,
  },
  {
    Id: 8,
    title: "Tesla Model X",
    categorie: "suv",
    img: "./images/car-suv3.png",
    price: "109.00",
    page: 2,
  },
  {
    Id: 9,
    title: "Nissan Altima",
    categorie: "sedan",
    img: "./images/car-sedan3.png",
    price: "79.00",
    page: 2,
  },
  {
    Id: 10,
    title: "Acura NSX",
    categorie: "sport",
    img: "./images/car-sport1.png",
    price: "99.00",
    page: 2,
  },
  {
    Id: 11,
    title: "BMW X5",
    categorie: "suv",
    img: "./images/car-suv1.png",
    price: "89.00",
    page: 2,
  },
  {
    Id: 12,
    title: "Toyota Camry",
    categorie: "sedan",
    img: "./images/car-sedan1.png",
    price: "79.00",
    page: 2,
  },
  {
    Id: 13,
    title: "Porsche 911",
    categorie: "sport",
    img: "./images/car-sport2.png",
    price: "109.00",
    page: 3,
  },
  {
    Id: 14,
    title: "Jeep Wrangler",
    categorie: "suv",
    img: "./images/car-suv2.png",
    price: "79.00",
    page: 3,
  },
  {
    Id: 15,
    title: "Honda Accord",
    categorie: "sedan",
    img: "./images/car-sedan2.png",
    price: "69.00",
    page: 3,
  },
  {
    Id: 16,
    title: "Ford Mustang",
    categorie: "sport",
    img: "./images/car-sport3.png",
    price: "89.00",
    page: 3,
  },
  {
    Id: 17,
    title: "Tesla Model X",
    categorie: "suv",
    img: "./images/car-suv3.png",
    price: "109.00",
    page: 3,
  },
  {
    Id: 18,
    title: "Nissan Altima",
    categorie: "sedan",
    img: "./images/car-sedan3.png",
    price: "79.00",
    page: 3,
  },
];
// Get the popup title, image, and option list elements
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

localStorage.setItem("dataobj", JSON.stringify(dataobj));
const retrievedData = JSON.parse(localStorage.getItem("dataobj"));

console.log(retrievedData[0]);

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

function listCards() {
  var cards = document.getElementById("cards");
  cards.classList.add("gap-5");
  for (const item of dataobj) {
    console.log(item);
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
          <a class="btn btn-primary px-4 py-2 rounded-2 mb-2 add-button">Ajouter</a>
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
});

function gridCard() {
  var cards = document.getElementById("cards");
  cards.innerHTML = "";
  cards.classList.remove("gap-5");
  for (const item of dataobj) {
    console.log(item);
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
                  <a class="btn btn-primary px-4 py-2 rounded-2 mb-2 add-button">Ajouter</a>
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
});
gridCard();
filterCards();
pagination();

// Event delegation to handle pop-up clicks
document.getElementById("cards").addEventListener("click", function (e) {
  console.log("test");
  if (e.target.classList.contains("add-button")) {
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
var dataTable = [];
var counter = 0;
const dataObject = {};
let personaliser = document.getElementById("personaliser");
personaliser.addEventListener("click", () => {
  var dataObject = {}; // Create a new object for each click

  dataObject.id = counter;
  dataObject.title = cardTitle;
  dataObject.price = cardPrice;
  dataObject.img = cardImage;
  dataObject.categorie = cardOptions;

  dataTable.push(dataObject);
  console.log(`HERE IS ${JSON.stringify(dataTable)}`);
  localStorage.setItem("car-personalization", JSON.stringify(dataTable));
  console.log(localStorage.getItem("car-personalization"));
  counter++;
});

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
