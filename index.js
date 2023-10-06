// Constants

let shown = false
let block = document.querySelectorAll('.block')
let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
let block3 = document.querySelector('.block3')
let block4 = document.querySelector('.block4')
let block5 = document.querySelector('.block5')
let block6 = document.querySelector('.block6')
let block7 = document.querySelector('.block7')
let block8 = document.querySelector('.block8')
let block9 = document.querySelector('.block9')

//Nav Link Display

document.querySelectorAll('.nav-link').forEach((elem) => {
    elem.addEventListener('click', ()=> {
        elem.style.borderBottom = '1px solid black'
        if (elem.innerHTML === 'Home'){
            document.querySelector('.get-demo').style.borderBottom = 'none'
        } else if (elem.innerHTML !== 'Home'){
            document.querySelector('.home').style.borderBottom = 'none'
        }
    })
})

const appear = () => {
    block1.style.animation = 'appear 3s 1s 1 forwards'
    block2.style.animation = 'appear 3s 3s 1 forwards'
    block3.style.animation = 'appear 3s 1.5s 1 forwards'
    block4.style.animation = 'appear 3s 4.5s 1 forwards'
    block5.style.animation = 'appear 3s 2.5s 1 forwards'
    block6.style.animation = 'appear 3s 4s 1 forwards'
    block7.style.animation = 'appear 3s 3.5s 1 forwards'
    block8.style.animation = 'appear 3s 2s 1 forwards'
    block9.style.animation = 'appear 3s 5s 1 forwards'
}

const disappear = () => {
    block1.style.animation = 'disappear 3s 1s 1 forwards'
    block2.style.animation = 'disappear 3s 3s 1 forwards'
    block3.style.animation = 'disappear 3s 1.5s 1 forwards'
    block4.style.animation = 'disappear 3s 4.5s 1 forwards'
    block5.style.animation = 'disappear 3s 2.5s 1 forwards'
    block6.style.animation = 'disappear 3s 4s 1 forwards'
    block7.style.animation = 'disappear 3s 3.5s 1 forwards'
    block8.style.animation = 'disappear 3s 2s 1 forwards'
    block9.style.animation = 'disappear 3s 5s 1 forwards'
}

const blockAnimation = () => {
    if (!shown){
        appear()
        shown = true
        setTimeout(()=>block.forEach((elem)=>{elem.style.opacity = 1}),5000)
    } else if (shown === true){
        shown = false
        disappear()
        setTimeout(()=>block.forEach((elem)=>{elem.style.opacity = 0}),5000)
    }
}
setTimeout(blockAnimation,1000)

setInterval(blockAnimation,7000)