const hamburger = document.querySelector('.nav-toggle');
const navigator = document.querySelectorAll('.nav-list > a');
hamburger.addEventListener('click', () => {
  document.body.classList.toggle('active');
});

navigator.forEach((links) => {
  links.addEventListener('click', () => {
    document.body.classList.remove('');
  });
});