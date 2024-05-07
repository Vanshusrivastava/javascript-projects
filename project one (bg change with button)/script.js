const button =document.querySelector('button');
const body =document.querySelector('body');
const color= ['blue', 'red', 'green' , 'yellow' , 'orange']

function clr(){
    const index=parseInt(Math.random()* color.length);
    body.style.backgroundColor=color[index]
}
body.style.backgroundColor='blue';
button.addEventListener('click',clr)