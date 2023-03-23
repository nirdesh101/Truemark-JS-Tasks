let button = document.getElementById('btn');
button.addEventListener("click", function click(){

if(button.style.display != 'none'){
    button.style.display = 'none';
}
else{
    button.style.display = 'block'
}
drops();
}
)

function drops(){
    let amount = 50;
    let body = document.querySelector('body');
    let i = 0;
    while(i < amount){
        let drop = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -10;

        drop.style.width = 0.2 + size+'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay+'s';
        body.appendChild(drop);
        i++
    }
}