document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openModal(id) {
    console.log(`Opening modal: ${id}`); // Debugging
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10); // Trigger animation
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('show');
    setTimeout(() => (modal.style.display = 'none'), 300); // Match transition duration
}

function setMainImage(imageSrc, modalId) {
    const modal = document.getElementById(modalId);
    const mainImage = modal.querySelector('.main-image');
    mainImage.src = imageSrc;
}



AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Smoother easing
    once: true, // Animations occur only once
    mirror: false, // Prevent duplicate animations on scrolling back up
});