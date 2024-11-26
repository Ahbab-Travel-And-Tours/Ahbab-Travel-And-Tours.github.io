document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    const indicators = document.querySelectorAll(".carousel-indicators .indicator");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Initialize
    showSlide(currentIndex);
});
