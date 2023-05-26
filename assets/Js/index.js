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

function validateEmail(event) {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  if (emailInput.checkValidity()) {
    const email = emailInput.value.trim();
    const isLowerCase = email === email.toLowerCase();

    if (isLowerCase) {
      errorMessage.style.display = 'none';
    } else {
      errorMessage.textContent = 'Please enter the email in lowercase.';
      errorMessage.style.display = 'block';
      event.preventDefault();
    }
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', validateEmail);