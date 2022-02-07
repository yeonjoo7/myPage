const toggle = document.querySelector(".navbar__toggle")
const menu = document.querySelector(".navbar__menu")
const links = document.querySelector(".navbar__links")

const carousel = document.querySelector(".carousel")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")


toggle.addEventListener("click", ()=>{
    menu.classList.toggle('active');
    links.classList.toggle('active');
})


btn2.addEventListener('click', () => {
    carousel.style.transform = "translate(-50vw)";
})

btn3.addEventListener('click', () => {
    carousel.style.transform = "translate(-100vw)";
})

btn1.addEventListener('click', () => {
    carousel.style.transform = "translate(0vw)";
})