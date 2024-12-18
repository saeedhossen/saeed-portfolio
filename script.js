// JavaScript to toggle project details
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active'); // Toggle the 'active' class
    });
});
