function includeHeaderAndFooter() {
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du header');
      }
      return response.text();
    })
    .then(headerContent => {
      const headerElement = document.createElement('div');
      headerElement.innerHTML = headerContent;
      document.body.prepend(headerElement);
    })
    .catch(error => {
      console.error(error);
      // Afficher un message à l'utilisateur
      alert('Une erreur est survenue lors du chargement, veuillez réessayer.');
    });

  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du footer');
      }
      return response.text();
    })
    .then(footerContent => {
      const footerElement = document.createElement('div');
      footerElement.innerHTML = footerContent;
      document.body.appendChild(footerElement);
    })
    .catch(error => {
      console.error(error);
      // Afficher un message à l'utilisateur
      alert('Une erreur est survenue lors du chargement, veuillez réessayer');
    });
}
