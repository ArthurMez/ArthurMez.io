const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");

// On écoute le clic sur toutes les cartes
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // On récupère les infos des data-attributes et on remplit la modale
        document.getElementById("modal-title").innerText = card.getAttribute('data-title');
        document.getElementById("modal-desc").innerText = card.getAttribute('data-desc');
        document.getElementById("modal-tech").innerText = card.getAttribute('data-tech');
        
        // On affiche la modale
        modal.style.display = "block";
    });
});

// Fermer quand on clique sur la croix
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Fermer quand on clique en dehors de la boîte
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});