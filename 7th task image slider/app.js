// total images = 6 [0,1,2,3,4,5]

let photo = 0;

function controller(x){   //ARROW LEFT AND RIGHT FUNCTIONS
    photo = photo + x;
    slideshow(photo)
}

slideshow(photo)

function slideshow(num) {
    let slides = document.getElementsByClassName('slide')

    if(num === slides.length){
        photo = 0;
        num = 0;
    }
    if(num < 0){
        photo = 5;
        num = 5
    }

    for(let y = 0; y < slides.length; y++){
        slides[y].style.display = "none"
    }

    slides[num].style.display = "block"; 
}