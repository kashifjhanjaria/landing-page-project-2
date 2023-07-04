// console.log('working');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const sun = document.querySelector('.fa-sun');

console.log(sun);
console.log(number1);
const num = document.querySelectorAll('.num');
console.log(num);
let numlength = num.length;
console.log(numlength);
const light = document.querySelector('#light');

const html=document.querySelector('html');
console.log(html);
html.setAttribute('class' ,'light')

let lightchange = 0;
console.log(lightchange);
light.addEventListener('click' , ()=>{
    // console.log(lightchange);
  
   if (lightchange === 0) {
    html.setAttribute('class' ,'dark');
    sun.classList.add('fa-moon');
    sun.style.color="white";
    lightchange = 1;
    console.log(lightchange    );
   }else{
    html.setAttribute('class' ,'light')
    sun.classList.add('fa-sun');
    sun.style.color="black";
    lightchange = 0;
    console.log(lightchange);
   }
   


})



for(let i = 0 ; i < numlength ; i++){
    console.log(num[i]);
    console.log( number2.style.transform= `translateY(-${numlength + 81}px)`);
    number2.style.transform= `translateY(-${0}px)`;
   setTimeout(()=>{
    // number1.style.transform= `translateY(-${numlength + 81}px)`;
    // number2.style.transform= `translateY(-${numlength + 81}px)`;
   } , 2000)
}

// setInterval(()=>{
    
// } , 2000)