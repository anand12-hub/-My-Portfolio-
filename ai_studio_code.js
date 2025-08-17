document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to open the modal
    const openModal = (card) => {
        // Get data from the clicked card's data attributes
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const tech = card.getAttribute('data-tech');
        const image = card.getAttribute('data-image');

        // Populate the modal with the data
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-tech').textContent = tech;
        document.getElementById('modal-image').src = image;

        // Display the modal
        modal.style.display = 'flex';
    };

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Add click event listener to each project card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    // Add click event listener to the close button
    closeButton.addEventListener('click', closeModal);

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close the modal with the Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});```