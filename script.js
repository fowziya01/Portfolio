document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Image Animation Trigger on Scroll
    const homeImage = document.querySelector(".home-image");
    function handleScroll() {
        const imagePosition = homeImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (imagePosition < screenPosition) {
            homeImage.style.animation = "fadeInScale 1.5s ease-in-out forwards";
        }
    }

    window.addEventListener("scroll", handleScroll);
});
