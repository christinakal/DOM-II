// Your code goes here

// MOUSEOVER - MOUSEOUT
const menuElement = document.querySelector('h1')

menuElement.addEventListener('mouseover', (e)=> {
    e.target.style.color = '#d6c31b';
});

menuElement.addEventListener('mouseout', (e)=> {
    e.target.style.color = 'black';
});


// WHEEL
let img = document.querySelector('header > img');

let rotation = 0;
img.addEventListener('wheel', (e) => {
     img.style.transform = 'rotate(180deg)';
});


//DOUBLE CLICK
let imgAdv = document.querySelector('.img-content > img:first-child');

imgAdv.addEventListener('dblclick', (e) => {
     e.target.style.opacity = "0.6";
});


// MOUSE ENTER

const text = document.querySelector('.text-content:nth-child(2)');

text.addEventListener('mouseenter', (e)=>{
    e.target.style.color = 'red';
});


//CLICK

menuElement.addEventListener('click', (e)=>{
    location.reload();
});