// importation des dependances
import { listCafe } from "./script/menu.js";
import { initSwiper } from "./script/swiper.js";

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

// Mon Menu de café

const generateMyCoffeeCard = document.querySelector('.swiper-wrapper');
generateMyCoffeeCard.innerHTML = '';
listCafe.forEach(cafe => { 
    const cardMenu = document.createElement('div');
    cardMenu.className = 'swiper-slide card';
    cardMenu.innerHTML = `
        <div>
            <img src="../Images/${cafe.image}" alt="${cafe.nom}"class="w-full h-auto object-cover">
            <h3 class="font-bold my-2 text-xl text-center">${cafe.nom}</h3>
            <p class="text-sm mb-4">
                ${cafe.description}
            </p>
            <button class="bg-amber-50 text-amber-900 px-4 py-2 rounded-xl text-sm font-bold hover:scale-105 duration-200">
                En Savoir Plus
            </button>
            
        </div>
    `;
    generateMyCoffeeCard.appendChild(cardMenu);
});

// Appel de nos fonctions provenant d'autres fichiers

initSwiper();


