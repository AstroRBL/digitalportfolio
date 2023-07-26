const rotateImage = document.getElementById('rotateImage');
const navBar = document.querySelector('.nav');
const rotateButton = document.getElementById('rotateButton');
const contact = document.getElementById('contactForm');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.querySelector('.contact .close');

let navIsOpen = false;

rotateImage.addEventListener('click', function() {
    rotateImage.classList.toggle('clicked');
    if (!navIsOpen) {
        navBar.classList.add('show');
        rotateButton.style.marginLeft = '10px';
    } else {
        navBar.classList.remove('show');
        rotateButton.style.marginLeft = '10px';
    }
    navIsOpen = !navIsOpen;
});

openBtn.addEventListener('click', function () {
    contact.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    contact.classList.remove('show');
});

