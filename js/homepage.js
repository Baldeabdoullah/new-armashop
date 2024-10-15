// LE CAROUSEL

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  //get current class
  const current = document.querySelector(".current");

  //Remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //get current class
  const current = document.querySelector(".current");

  //Remove current class
  current.classList.remove("current");
  // check for previous slide
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//Auto slide
if (auto) {
  //Run next slide at intervalle time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Faire apparaitre la popup quand on est en bas du site

window.addEventListener("scroll", () => {
  const popup = document.getElementById("pop-up");

  const closePopup = document.getElementById("closepopup");

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.65 && playone) {
    // popup.style.display = "block";
    popup.classList.add("active");

    playone = false;
  }

  // fermer le popup
  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});

//--------------------
// Pour ajouter un Timer
//--------------------

// array mois et jours de la semaine
const months = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aut",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
const weekdays = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

//les constantes
const anonce = document.querySelector(".anoncetext");
const dateContainer = document.querySelector(".ends-date-container");
const dateItem = document.querySelectorAll(".ends-date-item h4");

// la date actuelle
let actualDate = new Date();
let actualYear = actualDate.getFullYear();
let actualMonth = actualDate.getMonth();
let actualDay = actualDate.getDate();

// La dater d'expiration

const futureDate = new Date(actualYear, actualMonth, actualDay + 10, 17, 50, 0);

// on selectionne l'annee le mois la date le jour de la semiane, l'heure, la minute, les secondes

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// pour recuperer le mois
let month = futureDate.getMonth();
month = months[futureDate.getMonth()];

// pour recuperer le jour du mois (la date)
let date = futureDate.getDate();

// pour recuperer le jour de la semaine
let weekday = futureDate.getDay();
weekday = weekdays[futureDate.getDay()];

// on affiche la date d'expiration
anonce.textContent = `l'annonce expire le ${weekday} ${date} ${month} ${year} à ${hours}:${minutes} min`;

// le temps restant en milisecondes
const futureTime = futureDate.getTime();

// calcule du temps restant
function getRemainingTime() {
  let today = new Date().getTime();
  let timeLeft = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // valeurs en milisecondes d'un jour, d'une heure et d'une minutes

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // on calcule le temps restamt en jours en heures et en minutes et en secondes
  let days = timeLeft / oneDay;
  days = Math.floor(days);

  //on prend le restant en seconde du nombre de jour et on le divise pour obtenir les heures et on arrondie
  let hours = (timeLeft % oneDay) / oneHour;
  hours = Math.floor(hours);

  // pour les minutes pareil
  // on veut connaitre le nombre d'heures total et c'est seulement le restant qui nous interesse
  let minutes = (timeLeft % oneHour) / oneMinute;
  minutes = Math.floor(minutes);

  // pour les secondes
  let seconds = (timeLeft % oneMinute) / 1000;
  seconds = Math.floor(seconds);

  // creer un array de valeures
  const values = [days, hours, minutes, seconds];

  // ajouter un zero pour une valeure  10

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  dateItem.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  // si le temps est expire on fait
  if (timeLeft < 0) {
    dateContainer.innerHTML = `<h2 class="ends-title"> L'offre à expiré <h2>`;
  }
}

// diminution en temps reele

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
