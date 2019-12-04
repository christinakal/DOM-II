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


// 4.MOUSE ENTER && 5.MOUSE LEAVE

const text = document.querySelector('.text-content:nth-child(2)');

text.addEventListener('mouseenter', (e)=>{
    e.target.style.color = 'red';
});

text.addEventListener('mouseleave', (e)=>{
    e.target.style.color = 'black';
});


//6.CLICK

menuElement.addEventListener('click', (e)=>{
    location.reload();
});


//7.RESIZE

imgAdv.addEventListener('resize', (event) => {
    event.target.style.transform = 'scale(5)';    
});


//8.MOUSEDOWN
const imgFun = document.querySelector('.img-fluid');

imgFun.addEventListener('mousedown', (e)=>{
    e.target.style.visibility = 'hidden';
});



//9.RESIZE
const imgDestination = document.querySelector('.content-destination > img');

window.addEventListener('resize', (e)=>{
    imgDestination.style.borderRadius = '100px';
});


//10.SCROLL

const body = document.querySelector('body');
window.addEventListener('scroll', (e) => {
    body.style.backgroundColor = '#e3c0b2';
});



// GSAP

const btn = document.querySelectorAll('.btn');

btn.forEach( item => {
    item.addEventListener('mouseenter', (e)=>{
        //TweenMax.to(btn, .2, {scaleX:1, scaleY:1});
        TweenMax.to(item, 1.5,{scale:1.5, yoyo:true});
    });

    item.addEventListener('mouseleave', (e)=>{
        //TweenMax.to(btn, .2, {scaleX:1, scaleY:1});
        TweenMax.to(item, 1.5,{scale:1, yoyo:true});
    });
})