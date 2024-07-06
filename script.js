document.getElementById('navbar-toggler').addEventListener('click', function() {
    var navbarNav = document.getElementById('navbarNav');
    if (navbarNav.style.display === 'block') {
        navbarNav.style.display = 'none';
    } else {
        navbarNav.style.display = 'block';
    }
});

var currentSlide = 0;
var slides = document.getElementsByClassName('carousel-item');

function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].style.transform = 'translateX(' + (index * -100) + '%)';
    }
    slides[index].classList.add('active');
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

showSlide(currentSlide);
