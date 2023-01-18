const genColor = () => {
  return Math.random() * 255
}

const button = document.querySelector('button')

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')

button.addEventListener('click', () => {
  box1.style.backgroundColor = `rgb(${genColor()}, ${genColor()}, ${genColor()})`
  box2.style.backgroundColor = `rgb(${genColor()}, ${genColor()}, ${genColor()})`
  box3.style.backgroundColor = `rgb(${genColor()}, ${genColor()}, ${genColor()})`
  box4.style.backgroundColor = `rgb(${genColor()}, ${genColor()}, ${genColor()})`
  box5.style.backgroundColor = `rgb(${genColor()}, ${genColor()}, ${genColor()})`  
})