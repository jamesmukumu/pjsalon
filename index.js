const bars = document.querySelector('.fa-bars')
const xmarks = document.querySelector('.fa-xmark')
const ul = document.querySelector('ul')
bars.onclick=()=>{
    ul.classList.toggle('menu')
}

xmarks.onclick=()=>{
    ul.classList.toggle('menu')
}


