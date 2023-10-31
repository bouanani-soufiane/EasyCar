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
// Get the modal and close button elements
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Get all the "Ajouter" buttons
var addButtons = document.querySelectorAll(".btn.btn-primary");

// Get the popup title, image, and option list elements
var popupTitle = document.getElementById("popupTitle");
var popupPrice = document.getElementById("popupPrice");
var popupImage = document.getElementById("popupImage");
var optionList = document.getElementById("optionList");

// Add event listeners to the "Ajouter" buttons
addButtons.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    // Set the popup content based on the clicked car
    var cardTitle =
      this.parentElement.parentElement.parentElement.getElementsByClassName(
        "card-title"
      )[0].innerText;
    var cardPrice =
      this.parentElement.parentElement.parentElement.getElementsByClassName(
        "price"
      )[0].innerText;
    var cardImage =
      this.parentElement.parentElement.parentElement.getElementsByClassName(
        "card-img-top"
      )[0].src;
    var cardOptions =
      this.parentElement.parentElement.parentElement.getElementsByClassName(
        "card-text"
      )[0].innerText;

    popupTitle.innerText = cardTitle;
    popupPrice.innerText = cardPrice;
    popupImage.src = cardImage;

    // Create an array of options (assuming they are separated by line breaks)
    var optionsArray = cardOptions.split("\n");
    optionList.innerHTML = "";

    optionsArray.forEach(function (option) {
      var li = document.createElement("li");
      li.innerText = option;
      optionList.appendChild(li);
    });

    // Display the popup
    modal.style.display = "block";
  });
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
