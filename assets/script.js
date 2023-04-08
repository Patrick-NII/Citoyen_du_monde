

  // Récupérer les éléments du DOM
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Ajouter un écouteur d'événements au clic sur le bouton de menu
  navbarToggle.addEventListener('click', () => {
    // Inverser la visibilité du menu
    navbarCollapse.classList.toggle('show');
  });