// Your code goes here

// 1.MOUSEOVER - MOUSEOUT
const menuElement = document.querySelector('h1')

menuElement.addEventListener('mouseover', (e)=> {
    e.target.style.color = '#d6c31b';
});

menuElement.addEventListener('mouseout', (e)=> {
    e.target.style.color = 'black';
});


// 2.WHEEL
let img = document.querySelector('header > img');

let rotation = 0;
img.addEventListener('wheel', (e) => {
     img.style.transform = 'rotate(180deg)';
});


//3.DOUBLE CLICK
let imgAdv = document.querySelector('.img-content > img:first-child');

imgAdv.addEventListener('dblclick', (e) => {
     e.target.style.opacity = "0.6";
});


// 4.MOUSE ENTER

const text = document.querySelector('.text-content:nth-child(2)');

text.addEventListener('mouseenter', (e)=>{
    e.target.style.color = 'red';
});


//5.CLICK

menuElement.addEventListener('click', (e)=>{
    location.reload();
});


//6.RESIZE

imgAdv.addEventListener('resize', (event) => {
    event.target.style.transform = 'scale(5)';    
});


//7.MOUSEDOWN
const imgFun = document.querySelector('.img-fluid');

imgFun.addEventListener('mousedown', (e)=>{
    e.target.style.visibility = 'hidden';
});



//8.RESIZE
const imgDestination = document.querySelector('.content-destination > img');

window.addEventListener('resize', (e)=>{
    imgDestination.style.borderRadius = '100px';
});