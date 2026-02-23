// Responsivité de mon menu hambergur

const btnToogle = document.querySelector('#btnToggle');
const navbar = document.querySelector('#navbar');
const navbarLinks = document.querySelectorAll('#navbar a');

btnToogle.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.add('hidden');
    });
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !btnToogle.contains(e.target)) {
        navbar.classList.add('hidden');
    }
});
