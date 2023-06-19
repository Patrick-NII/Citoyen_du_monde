// Récupération de tous les éléments de menu
var menuItems = document.querySelectorAll('.navbar-nav .nav-item');

// Ajout d'un gestionnaire d'événements clic à chaque élément de menu
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Suppression de la classe active de tous les éléments de menu
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    // Ajout de la classe active à l'élément de menu cliqué
    item.classList.add('active');
  });
});





// sélectionner l'élément flèche
const arrow = document.querySelector('.arrows');

// écouter l'événement de clic sur la flèche
arrow.addEventListener('click', function() {
  // sélectionner l'élément cible de la navigation en douceur (ici la section #about)
  const target = document.querySelector('#about');

  // calculer la position de la cible par rapport au haut de la page
  const targetPosition = target.offsetTop;

  // définir la durée de l'animation (en millisecondes)
  const duration = 1000;

  // démarrer l'animation de navigation en douceur
  window.scrollTo({
    top: targetPosition,
    left: 0,
    duration: duration,
    behavior: 'smooth'
  });
});


function handleInputChange(input) {
  if (input.value.length > 0) {
    input.classicList.add("not-empty");
  } else {
    input.classicList.remove("not-empty");
  }
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


