const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const btnMobile = document.querySelector('.btn-mobile-nav');

btnMobile.addEventListener('click', () =>{
  overlay.classList.toggle('hidden')
  header.classList.toggle('nav-open')
})
overlay.addEventListener('click', () =>{
  overlay.classList.toggle('hidden')
  header.classList.remove('nav-open')
})