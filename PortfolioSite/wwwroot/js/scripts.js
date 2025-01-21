document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}



AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Smoother easing
    once: true, // Animations occur only once
    mirror: false, // Prevent duplicate animations on scrolling back up
});