// Récupération de tous les éléments de menu
var menuItems = document.querySelectorAll('.navbar-nav .nav-item');

// Fonction pour supprimer la classe active de tous les éléments de menu
function removeActiveClass() {
  menuItems.forEach(function(item) {
    item.classList.remove('active');
  });
}

// Récupération de tous les éléments de menu cliqués
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    removeActiveClass(); // Appel de la fonction pour supprimer la classe active de tous les éléments
    item.classList.add('active'); // Ajout de la classe active à l'élément de menu cliqué
  });
});


function handleInputChange(input) {
  if (input.value.length > 0) {
    input.classicList.add("not-empty");
  } else {
    input.classicList.remove("not-empty");
  }
};

let swiper = new Swiper(".mySwiper", {
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









