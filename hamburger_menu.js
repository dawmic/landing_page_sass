const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open-nav-menu');
});

navLink.forEach(el => {
    el.addEventListener('click', () => {
        navMenu.classList.remove('open-nav-menu');
    })
})