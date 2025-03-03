
document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Close menu when clicking a link (for mobile)
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // Image Animation Trigger on Scroll
    const homeImage = document.querySelector(".home-image");
    function handleScroll() {
        if (!homeImage) return; // Prevents errors if element is missing

        const imagePosition = homeImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (imagePosition < screenPosition) {
            homeImage.style.animation = "fadeInScale 1.5s ease-in-out forwards";
        } else {
            homeImage.style.animation = "none"; // Reset animation if scrolled up
        }
    }

    window.addEventListener("scroll", handleScroll);
});
