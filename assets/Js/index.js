// ============ Mobile Pop up Menu ==========================
function toggleMenu() {
  const menuIcon = document.querySelector('.nav-icon');
  const menu = document.querySelector('.nav-links-container');

  menuIcon.classList.toggle('open');
  menu.classList.toggle('open');

  if (menuIcon.classList.contains('open')) {
    menuIcon.innerHTML = '<i class="fa fa-times fa-2xl"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa fa-bars fa-2xl"></i>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.nav-links-container a');
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener('click', () => {
      toggleMenu();
    });
  }
});