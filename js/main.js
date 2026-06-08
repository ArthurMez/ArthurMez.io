const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");

// On écoute le clic sur toutes les cartes
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // 1. On récupère et met à jour les infos de base
        document.getElementById("modal-title").innerText = card.getAttribute('data-title');
        document.getElementById("modal-desc").innerText = card.getAttribute('data-desc');
        document.getElementById("modal-tech").innerText = card.getAttribute('data-tech');
        
        // 2. Gestion de l'image
        const imgSrc = card.getAttribute('data-img');
        const modalImg = document.getElementById("modal-img");
        if (imgSrc) {
            modalImg.src = imgSrc;
            modalImg.style.display = "block"; // On affiche l'image si elle existe
        } else {
            modalImg.style.display = "none"; // On la cache s'il n'y en a pas
        }

        // 3. Gestion du lien GitHub
        const repoUrl = card.getAttribute('data-repo');
        const modalRepo = document.getElementById("modal-repo");
        if (repoUrl) {
            modalRepo.href = repoUrl;
            modalRepo.style.display = "inline-block"; // On affiche le bouton s'il y a un lien
        } else {
            modalRepo.style.display = "none"; // On cache le bouton s'il n'y a pas de lien
        }
        
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