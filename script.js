// Selecteer de kaart en de knop
const card = document.querySelector('.card');
const flipButton = document.getElementById('flip-button');

// Voeg een klik-event toe aan de knop om de kaart om te draaien
flipButton.addEventListener('click', function() {
  card.classList.toggle('flipped');
});
