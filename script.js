const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentSlide = 0;

function updateSlider() {
	slides.forEach((slide, index) => {
		slide.classList.toggle("active", index === currentSlide);
	});

	dots.forEach((dot, index) => {
		dot.classList.toggle("active", index === currentSlide);
	});

	prevBtn.disabled = currentSlide === 0;
	nextBtn.disabled = currentSlide === slides.length - 1;
}

prevBtn.addEventListener("click", () => {
	if (currentSlide > 0) {
		currentSlide--;
		updateSlider();
	}
});

nextBtn.addEventListener("click", () => {
	if (currentSlide < slides.length - 1) {
		currentSlide++;
		updateSlider();
	}
});

// Обробники для точок
dots.forEach((dot) => {
	dot.addEventListener("click", () => {
		currentSlide = parseInt(dot.getAttribute("data-slide"), 10);
		updateSlider();
	});
});

updateSlider();
