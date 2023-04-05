let blueCar = document.getElementById("blueCar");
let redCar = document.getElementById("redCar");
let result = document.getElementById("result");
let score = document.getElementById("score");
let game = document.getElementById("game");
let counter = 0;

blueCar.addEventListener("animationiteration", function(){
    let random = ((Math.floor(Math.random()*3))*130);
    blueCar.style.left = random+"px";
    counter++;
})

window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){
        let redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if(redCarLeft<260){
            redCar.style.left = (redCarLeft+130)+"px"
        }
    };

    if(e.keyCode == "37"){
        let redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if(redCarLeft>0){
            redCar.style.left = (redCarLeft-130)+"px"
        }
    }
})

setInterval(function gameOver(){
    let blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    let redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));

    if((blueCarLeft === redCarLeft) && (blueCarTop>250) && (blueCarTop<450)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = "Your score is : " + counter;

        counter = 0;
    }
}, 10)