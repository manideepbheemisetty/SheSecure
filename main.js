import './style.css';
import { renderNavbar } from './src/components/Navbar.js';
import { renderHero } from './src/components/Hero.js';
import { renderFeatures } from './src/components/Features.js';
import { renderFooter } from './src/components/Footer.js';
import { renderProductCard } from './src/components/ProductCard.js';
import { renderAbout } from './src/components/About.js';
import { renderServices } from './src/components/Services.js';
import { renderTeam } from './src/components/Team.js';
import { renderContact } from './src/components/Contact.js';
import { products } from './src/data/products.js';

document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderHero()}
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    ${renderProductCard(products[0])}
  </div>
  ${renderAbout()}
  ${renderServices()}
  ${renderFeatures()}
  ${renderTeam()}
  ${renderContact()}
  ${renderFooter()}
`;

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});