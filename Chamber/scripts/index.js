
const hamburger = document.getElementById('hamburgerChamber');
const menu = document.querySelector('.mainMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
