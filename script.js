let slideIndex = 0;
showSlides();

function showSlides() {
	let slides = document.getElementsByClassName("slide");
	let dots = document.getElementsByClassName("dot");
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function currentSlide(n) {
	slideIndex = n;
	showSlides();
}

function plusSlides(n) {
	slideIndex += n;
	if (slideIndex > document.getElementsByClassName("slide").length) slideIndex = 1;
	if (slideIndex < 1) slideIndex = document.getElementsByClassName("slide").length;
	showSlides();
}

function toggleMenu() {
	let menu = document.getElementById("nav-menu");
	menu.classList.toggle("show");
}

// Form validation feedback
document.getElementById('orderForm').addEventListener('submit', function(e) {
	e.preventDefault();
	let name = document.getElementById('name').value.trim();
	let email = document.getElementById('email').value.trim();
	if (!name || !email) {
		alert('Please fill in all required fields.');
		return;
	}
	alert('Order successfully submitted!');
});
