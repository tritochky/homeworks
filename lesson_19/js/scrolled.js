window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('header--scrolled', window.scrollY > 10);
});