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


// Récupération de tous les éléments de menu
var menuItems = document.querySelectorAll('.navbar-nav .nav-item');

// Ajout d'un gestionnaire d'événements clic à chaque élément de menu
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Suppression de la classe active de tous les éléments de menu
    menuItems.forEach(function(item) {
      item.classList.remove('active');
      item.style.backgroundColor = ''; // Réinitialisation de la couleur de fond
      item.style.color = ''; // Réinitialisation de la couleur de texte
    });

    // Ajout de la classe active à l'élément de menu cliqué
    item.classList.add('active');
    item.style.backgroundColor = '#005490'; // Changement de la couleur de fond
    item.style.color = '#f8f8f8'; // Changement de la couleur de texte
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

