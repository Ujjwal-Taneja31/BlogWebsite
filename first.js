const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle("active");
});
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",()=>{ 
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
})) 
const searchinput = document.querySelector('.search');
const searchIcon = document.querySelector('.searchIcon');
searchIcon.addEventListener('click',()=>{
  searchIcon.classList.toggle('active');
  searchinput.classList.toggle('active');
})