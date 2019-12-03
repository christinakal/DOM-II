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
