function button(){
  document.location='home.html';
}
function box() {
   


const box =document.querySelector('.box');
      box.style.width = '240px';
      box.style.height= '240px';
      box.style.fontSize= '20px';
      box.style.transition= '0.5s ease-in-out';
      box.style.justifyContent = 'space-between';
      box.innerHTML = '<strong>Welcome to Z-OS,</strong>this is my attempt at the apple\'s liquid glass effect. Optimised for mobile devices only.<button class="continue" onclick="button()">Continue </button>' ;
  }
function myFun() {
   document.querySelector('.box').style.marginTop= '0px';
}
