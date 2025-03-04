document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-btn");
    scrollButton.addEventListener("click", function () {
        const targetSection = document.getElementById("about-hotel");

        if (targetSection) {
            const headerOffset = document.querySelector("header").offsetHeight || 0; // Adjust if there's a header
            const targetPosition = targetSection.offsetTop - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth" // Ensures smooth scrolling
            });
        } else {
            console.log("Section not found");
        }
    });
});
