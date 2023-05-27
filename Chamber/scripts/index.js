window.addEventListener('DOMContentLoaded', (event) => {
  const banner = document.getElementById('banner');
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  if (currentDay === 1 || currentDay === 2) {
    banner.style.display = 'block';
  }
});


const hamburger = document.getElementById('hamburgerChamber');
const menu = document.querySelector('.toggleMenu');

 hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  });

  const viewsButton = document.getElementById('viewsButton');
  const totalVisitorsContainer = document.getElementById('totalVisitorsContainer');
  
  viewsButton.addEventListener('click', function() {
    totalVisitorsContainer.classList.toggle('active');
    
    if (totalVisitorsContainer.classList.contains('active')) {
      viewsButton.innerHTML='<i class="fas fa-eye"></i>'
      totalVisitorsContainer.style.display = 'block';
      document.body.style.overflow = 'hidden'; 
    } else {
      viewsButton.innerHTML='<i class="fas fa-eye-slash"></i>'
      totalVisitorsContainer.style.display = 'none';
      document.body.style.overflow = ''; 
    }
  });
  