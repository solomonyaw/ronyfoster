// Configuration
const BACKGROUND_GIF_URL = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxx7X95vV6w/giphy.gif";

const SLIDER_IMAGES = [
    "/img/DSC_7637.JPG",
    "/img/DSC_7655.JPG",
    "/img/DSC_7670.JPG",
    "/img/DSC_7974.JPG",
];

// Initialize Lucide Icons
lucide.createIcons();

// Set Background GIF
document.getElementById('bg-gif').style.backgroundImage = `url(${BACKGROUND_GIF_URL})`;

// Slider Logic
const sliderContainer = document.querySelector('.slider-container');
const dotsContainer = document.getElementById('slider-dots');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

let currentSlide = 0;

// Create Slides
SLIDER_IMAGES.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${img}" alt="Rony Foster Slide ${index + 1}" referrerpolicy="no-referrer">`;
    sliderContainer.appendChild(slide);

    // Create Dots
    const dot = document.createElement('div');
    dot.className = `h-1 w-8 rounded-full transition-all cursor-pointer ${index === 0 ? 'bg-red-600 w-12' : 'bg-white/30'}`;
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
});

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update Dots
    const dots = dotsContainer.querySelectorAll('div');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.className = 'h-1 w-12 rounded-full transition-all cursor-pointer bg-red-600';
        } else {
            dot.className = 'h-1 w-8 rounded-full transition-all cursor-pointer bg-white/30';
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % SLIDER_IMAGES.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length;
    updateSlider();
}

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Auto Slide
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause auto slide on interaction
[prevBtn, nextBtn, dotsContainer].forEach(el => {
    el.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    el.addEventListener('mouseleave', () => autoSlideInterval = setInterval(nextSlide, 5000));
});

// Copyright Year
document.getElementById('copyright').innerHTML = `&copy; ${new Date().getFullYear()} Rony Foster. All Rights Reserved.`;

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
