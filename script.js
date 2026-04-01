const lightButton = document.getElementById('lightButton');
const darkButton = document.getElementById('darkButton');
const body = document.body;

lightButton.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
});

darkButton.addEventListener('click', () => {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
});