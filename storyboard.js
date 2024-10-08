const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Smooth scrolling using arrow keys
const parallaxContainer = document.querySelector('.parallax-container');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Show or hide arrows based on scroll position
function updateArrows() {
    const scrollLeft = parallaxContainer.scrollLeft;
    const maxScrollLeft = parallaxContainer.scrollWidth - parallaxContainer.clientWidth;
    
    leftArrow.style.display = scrollLeft > 0 ? 'block' : 'none';
    rightArrow.style.display = scrollLeft < maxScrollLeft ? 'block' : 'none';
}

// Scroll control for arrow clicks
leftArrow.addEventListener('click', () => {
    parallaxContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
    parallaxContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
});

// Initial arrow display and scroll event listener
updateArrows();
parallaxContainer.addEventListener('scroll', updateArrows);
