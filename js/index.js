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
