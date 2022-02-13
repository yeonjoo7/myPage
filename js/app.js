const toggle = document.querySelector(".navbar__toggle")
const menu = document.querySelector(".navbar__menu")
const links = document.querySelector(".navbar__links")

const canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

const carousel = document.querySelector(".carousel")
const btnPrev = document.querySelector("#btn__previous")
const btnNext = document.querySelector("#btn__next")
let btnCnt = 1
const lastInner = 3

const btnTop = document.querySelector("#btn__top")


toggle.addEventListener("click", ()=>{
    menu.classList.toggle('active');
    links.classList.toggle('active');
})


canvas.width = 70/100 * window.innerWidth
canvas.height = 3/5 * canvas.width
canvas.addEventListener("mousemove",
    function(event) {
        console.log(event)
})
function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'orchid'
        c.stroke()
    }

    this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}

let circleArray = []
for (let i = 0; i < 100; i++) {
    let radius = 30
    let x = Math.random() * (canvas.width - radius * 2) + radius
    let y = Math.random() * (canvas.height - radius * 2) + radius
    let dx = (Math.random() - 0.5) * 8
    let dy = (Math.random() - 0.5) * 8
    circleArray.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width, canvas.height)
    for (let i=0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}
animate()


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


btnTop.addEventListener("click", () => {
    window.scrollTo({left:0, top:0, behavior:"smooth"})
})