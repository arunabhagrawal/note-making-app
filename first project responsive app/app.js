var burger = document.querySelector(".burger")
var navbar = document.querySelector(".navbar")
var rightNav = document.querySelector(".rightnav")
var navList = document.querySelector(".navlist")
burger.addEventListener('click',()=>{
  rightNav.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
  navbar.classList.toggle('h-nav')
})