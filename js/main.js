// SEPARATION
let playone = true;

// la navbar responsive
const tooglebtn = document.querySelector(".toggle-menu");
const navcontainer = document.querySelector(".nav-container");

tooglebtn.addEventListener("click", () => {
  navcontainer.classList.toggle("active");
});

// les cathegories
const articles = document.querySelectorAll(".article");

articles.forEach(function (article) {
  const btn = article.querySelector(".change-btn");
  btn.addEventListener("click", function () {
    articles.forEach(function (item) {
      if (item !== article) {
        item.classList.remove("voir-text");
      }
    });
    article.classList.toggle("voir-text");
  });
});
