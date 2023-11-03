// Create the outer div with class "card col-sm-12 w-100 filter sport"
const outerDiv = document.createElement("div");
outerDiv.className = "card col-sm-12 w-100 filter sport";

// Create the first nested div with class "mb-3"
const nestedDiv1 = document.createElement("div");
nestedDiv1.className = "mb-3";

// Create the second nested div with classes "g-0 d-flex justify-content-between"
const nestedDiv2 = document.createElement("div");
nestedDiv2.className = "g-0 d-flex justify-content-between";

// Create the first column with class "col-md-3"
const col1 = document.createElement("div");
col1.className = "col-md-3";

// Create the image element
const image = document.createElement("img");
image.src = dataobj[0].img;

image.className = "img-fluid pt-4";
image.alt = "img";

// Create the second column with class "col-md-5"
const col2 = document.createElement("div");
col2.className = "col-md-5";

// Create the card body
const cardBody = document.createElement("div");
cardBody.className = "card-body";

// Create the card title
cardTitle = document.createElement("h5");
cardTitle.className = "card-title pb-5";
cardTitle.innerHTML = `${dataobj[0].title}<br> <span> ${dataobj[0].categorie} </span> `;

// Create the paragraph with icons and text
const paragraph = document.createElement("p");
paragraph.className = "card-text text-secondary";

// Create and append the icons and text spans to the paragraph
const iconsAndText = [
  { iconClass: "fa-solid fa-gas-pump mx-2 h5 mx-2", text: "90L" },
  { iconClass: "fa-solid fa-circle-radiation mx-1 h5 mx-2", text: "Manuel" },
  { iconClass: "fa-solid fa-user-group mx-1 h5 mx-2", text: "2 Persons" },
];

iconsAndText.forEach((item) => {
  const icon = document.createElement("i");
  icon.className = item.iconClass;
  const textSpan = document.createElement("span");
  textSpan.textContent = item.text;
  paragraph.appendChild(icon);
  paragraph.appendChild(textSpan);
});

// Create the third column with class "col-md-2"
const col3 = document.createElement("div");
col3.className = "col-md-2";

// Create the first column within col3 with class "col-4 text-end"
const col3col1 = document.createElement("div");
col3col1.className = "col-8 text-end pt-3";

// Create the price element
const price = document.createElement("h5");
price.className = "price  pb-5 text-end";
price.innerHTML = `$${dataobj[0].price}/<span class="lead">jrs</span>`;

// Create the second column within col3 with class "col-8"
const col3col2 = document.createElement("div");
col3col2.className = "col-12";

// Create the "Ajouter" button element
const addButton = document.createElement("a");
addButton.href = "#";
addButton.className = "btn btn-primary px-4 py-2 rounded-2 mb-2";
addButton.textContent = "Ajouter";

// Append all elements to build the structure
col1.appendChild(image);
col2.appendChild(cardBody);
cardBody.appendChild(cardTitle);
cardBody.appendChild(paragraph);
col3col1.appendChild(price);
col3col2.appendChild(addButton);
col3.appendChild(col3col1);
col3.appendChild(col3col2);
nestedDiv2.appendChild(col1);
nestedDiv2.appendChild(col2);
nestedDiv2.appendChild(col3);
nestedDiv1.appendChild(nestedDiv2);
outerDiv.appendChild(nestedDiv1);

const targetDiv = document.querySelector("#targetDiv"); // Replace "targetDiv" with the actual ID of your target div
