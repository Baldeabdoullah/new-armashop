// LA VUE EN DETAIL DES PRODUITS

const allproduct = document.querySelector(".product-container");

const previewModalOverlay = document.getElementById("preview-modal-overlay");

const modalCloseBtn = document.getElementById("modal-close-btn");

allproduct.addEventListener("click", showMealImg);

modalCloseBtn.addEventListener("click", () => {
  previewModalOverlay.style.display = "none";
});

function showMealImg(e) {
  let mealDiv;
  if (e.target.classList.contains("fa-magnifying-glass")) {
    mealDiv = e.target.parentElement.parentElement.parentElement;
  } else {
    mealDiv = e.target;
  }

  previewModalOverlay.querySelector("img").src =
    mealDiv.querySelector("img").src;
  previewModalOverlay.querySelector("p").textContent =
    mealDiv.querySelector("h6").textContent;
  previewModalOverlay.style.display = "block";
}
