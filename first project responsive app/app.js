var burger = document.querySelector(".burger")
var navbar = document.querySelector(".navbar")

var navList = document.querySelector(".navlist")
burger.addEventListener('click',()=>{
  navList.classList.toggle('v-class-resp')
  navbar.classList.toggle('h-nav')
  burger.classList.toggle('')
})