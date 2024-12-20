    const slides = document.querySelector('.slides');
    const boxes = document.querySelectorAll('.box-container .box');
    const totalSlides = slides.children.length;
    let currentIndex = 0;

    const links = [
        "https://animedubs.wapjo.xyz/page-download/1.html",
        "https://animedubs.wapjo.xyz/page-download/14.html",
        "https://animedubs.wapjo.xyz/page-download/2.html",
        "https://animedubs.wapjo.xyz/page-download/10.html"
    ];

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        updateSlide();
    }

    function currentSlide(index) {
        currentIndex = index - 1;
        updateSlide();
    }

    function updateSlide() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        boxes.forEach((box, index) => {
            box.classList.toggle('active', index === currentIndex);
        });
    }

    function openLink(slideNumber) {
        if (links[slideNumber - 1]) {
            window.open(links[slideNumber - 1], "_blank");
        }
    }

    setInterval(() => moveSlide(1), 3000);

    updateSlide();
