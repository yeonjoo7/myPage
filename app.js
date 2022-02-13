const toggle = document.querySelector(".navbar__toggle")
const menu = document.querySelector(".navbar__menu")
const links = document.querySelector(".navbar__links")

const canvas = document.querySelector("canvas")
let draw = canvas.getContext("2d")

const carousel = document.querySelector(".carousel")
const btnPrev = document.querySelector(".btn__previous")
const btnNext = document.querySelector(".btn__next")
let btnCnt = 1
const lastInner = 3

toggle.addEventListener("click", ()=>{
    menu.classList.toggle('active');
    links.classList.toggle('active');
})

canvas.width = 70/100 * window.innerWidth
canvas.height = 3/5 * canvas.width




btnNext.addEventListener('click', () => {
    if (btnCnt >= lastInner) {
        carousel.style.transform = "translate(0vw)";
        btnCnt = 1
    } else {
        const vwMove = btnCnt * 60
        carousel.style.transform = `translate(-${vwMove}vw)`;
        btnCnt += 1
    }
})

btnPrev.addEventListener('click', () => {
    if (btnCnt <= 1) {
        carousel.style.transform = `translate(-${(lastInner-1)*60}vw)`;
        btnCnt = lastInner
    } else {
        const vwMove = (btnCnt-2) * 60
        carousel.style.transform = `translate(-${vwMove}vw)`;
        btnCnt -= 1
    }
})


function copyEmail(whichone) {
    console.log("주소가 localhost: 로 시작해야 복사가 가능합니다!")
    let email = ""

    if (whichone === "naverMail") {
        email = "rladuswn7@naver.com"
    } else if (whichone === "gmail") {
        email = "jenny.likes.breeze@gmail.com"
    }

    navigator.clipboard.writeText(email)
    alert("Copied the email address!")
}
