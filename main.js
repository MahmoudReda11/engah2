let menu = document.querySelector('#menu');
let header = document.querySelector('header');

let navbar = document.querySelector('.navbar');
let liMenu = document.querySelectorAll('.navbar ul li');

menu.onclick = function (){
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  liMenu.forEach(li => {
    li.onclick= function (){
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
    }
  });
}

window.onscroll = function (){
  if(this.scrollY >= 120){
    header.style.background = '#44444488'
  }else{
    header.style.background = 'transparent'
  }
}

