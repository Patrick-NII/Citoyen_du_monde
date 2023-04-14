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


