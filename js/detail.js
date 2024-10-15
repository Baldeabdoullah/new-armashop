// PRODUITS EN DETAIL
const imgCurrent = document.getElementById("imgcurrent");
const imgs = document.querySelectorAll(".one-product-imgs img");
const opacity = 0.6;

// Mettre une faible opacite sur la premiere image
imgs[0].style.opacity = opacity;

imgs.forEach((detailImg) =>
  detailImg.addEventListener("click", detailimgClick)
);

function detailimgClick(e) {
  // formater l'opaciter de toute les images
  imgs.forEach((detailImg) => (detailImg.style.opacity = 1));
  imgCurrent.src = e.target.src;
  //ajouter une an imation par la classe fadeIn
  imgCurrent.classList.add("fadeIn");

  //retirer la classe fadeIn apres une une demi seconde
  setTimeout(() => {
    imgCurrent.classList.remove("fadeIn");
  }, 500);

  //mettre une faible opacite sur l'image cliquer
  e.target.style.opacity = opacity;
}
