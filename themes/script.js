const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    sideMenu.classList.toggle('open');

    if (sideMenu.classList.contains('open')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

hamburgerBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);