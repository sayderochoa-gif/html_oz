document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.closest('.movie-card');
    card.classList.toggle('expanded');
    
    // Cambiar el texto del botón
    if (card.classList.contains('expanded')) {
      this.textContent = 'Ver menos';
    } else {
      this.textContent = 'Ver más';
    }
  });
});
