// AJOUTER UN PRODUIT AU PANIER
// faire apparaitre et disparaitre le panier
const cartBtn = document.getElementById("cart-button");
const cartContainer = document.querySelector(".cart-container");

cartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
});

//AJOUTER UN ITEM DANS LE PANIER
//selectionne le boutton ajouter au panier
const shopBtn = document.querySelectorAll(".fa-basket-shopping");

shopBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-basket-shopping")) {
      let fullPath = e.target.parentElement.parentElement.children[0].src;
      let pos = fullPath.indexOf("images");
      let partPart = fullPath.slice(pos);
      const item = {};
      item.img = partPart;

      let name =
        e.target.parentElement.parentElement.nextElementSibling.children[1]
          .textContent;
      item.name = name;

      let price =
        e.target.parentElement.parentElement.nextElementSibling.children[3]
          .children[0].textContent;
      // Obtenir le texte de l'élément et retirer "FCFA" et les espaces autour du nombre
      let finalPrice = price.replace("FCFA", "").trim();
      item.price = finalPrice;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `  <img src="${item.img}" alt="" />
          <div class="cart-items-text">
            <p>${item.name}</p>
            <span class="cart-item-price">${item.price}</span>
            <span>FCFA</span>
          </div>
          <a href="#"><i class="fa-solid fa-trash deleter"></i></a>`;

      const total = document.querySelector(".cart-total");

      cartContainer.insertBefore(cartItem, total);
      alert("element ajoute au panier");

      showTotal();

      // suprimer un produit du panier
      const deleteBtn = document.querySelectorAll(".deleter");
      deleteBtn.forEach((del) => {
        del.addEventListener("click", (e) => {
          e.target.parentElement.parentElement.remove();
          showTotal();
        });
      });
    }
  });
});

//Montrer le nombre total d'element dans le panier

function showTotal() {
  const total = [];
  const items = document.querySelectorAll(".cart-item-price");

  items.forEach((item) => {
    total.push(parseFloat(item.textContent));
  });

  //Calculer le montant total du panier
  const totalMoney = total.reduce(function (total, item) {
    total += item;
    return total;
  }, 0);

  const finalMoney = totalMoney.toFixed(2);

  document.querySelector(".total-amount").textContent = finalMoney;
  document.querySelector(".shopping-cart-number").textContent = total.length;
}
