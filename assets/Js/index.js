const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobile = document.querySelector('#mobile');
const navlink = document.querySelectorAll('.nav-link');
const navlinks = Array.from(navlink);

openMenu.addEventListener('click', () => {
  mobile.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobile.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Hide mobile navbar and blurred div
// for desktop on window resize
window.onresize = () => {
  if (window.innerWidth >= 768) {
    mobile.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

navlinks.forEach((n) => {
  n.addEventListener('click', () => {
    mobile.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});
