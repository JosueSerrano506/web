document.addEventListener('DOMContentLoaded', function() {
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', function() {
mobileMenu.classList.toggle('hidden');
if (mobileMenu.classList.contains('hidden')) {
mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
} else {
mobileMenuButton.innerHTML = '<i class="ri-close-line ri-2x"></i>';
}
});
// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
link.addEventListener('click', function() {
mobileMenu.classList.add('hidden');
mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
});
});
});

document.addEventListener('DOMContentLoaded', function() {
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
filterButtons.forEach(button => {
button.addEventListener('click', function() {
// Remove active class from all buttons
filterButtons.forEach(btn => {
btn.classList.remove('active', 'bg-primary', 'text-white');
btn.classList.add('bg-gray-200', 'text-gray-700');
});
// Add active class to clicked button
this.classList.add('active', 'bg-primary', 'text-white');
this.classList.remove('bg-gray-200', 'text-gray-700');
const filter = this.getAttribute('data-filter');
// Show/hide products based on filter
productCards.forEach(card => {
if (filter === 'all' || card.getAttribute('data-category') === filter) {
card.style.display = 'block';
} else {
card.style.display = 'none';
}
});
});
});
});

document.addEventListener('DOMContentLoaded', function() {
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
const headerHeight = document.querySelector('header').offsetHeight;
const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
window.scrollTo({
top: targetPosition,
behavior: 'smooth'
});
}
});
});
});