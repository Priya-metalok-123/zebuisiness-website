let burger=document.querySelector('.burger');
let nav_link1=document.querySelector('#nav-link1');
let nav_link2=document.querySelector('#nav-link2');
let nav_link3=document.querySelector('#nav-link3');
let nav_link4=document.querySelector('#nav-link4');
let nav_link5=document.querySelector('#nav-link5');
burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    document.querySelector(".menu-links").classList.toggle("link-active");
})
nav_link1.addEventListener('click',()=>{
    burger.classList.toggle('active');
    document.querySelector(".menu-links").classList.remove("link-active");
})
nav_link2.addEventListener('click',()=>{
    burger.classList.toggle('active');
    document.querySelector(".menu-links").classList.remove("link-active");
})
nav_link3.addEventListener('click',()=>{
    burger.classList.toggle('active');
    document.querySelector(".menu-links").classList.remove("link-active");
})
nav_link4.addEventListener('click',()=>{
    burger.classList.toggle('active');
    document.querySelector(".menu-links").classList.remove("link-active");
})
nav_link5.addEventListener('click',()=>{
    burger.classList.toggle('active');
    document.querySelector(".menu-links").classList.remove("link-active");
})