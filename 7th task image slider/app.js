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


// 1 OOP FORMAT

// class Slideshow {
//     constructor() {
//       this.photo = 0;
//       this.slides = document.getElementsByClassName('slide');
//     }
  
//     showSlide(num) {
//       if(num === this.slides.length){
//         this.photo = 0;
//         num = 0;
//       }
//       if(num < 0){
//         this.photo = this.slides.length - 1;
//         num = this.photo;
//       }
  
//       for(let i = 0; i < this.slides.length; i++){
//         this.slides[i].style.display = "none";
//       }
  
//       this.slides[num].style.display = "block";
//       this.photo = num;
//     }
  
//     nextSlide() {
//       this.showSlide(this.photo + 1);
//     }
  
//     prevSlide() {
//       this.showSlide(this.photo - 1);
//     }
//   }
  
//   const slideshow = new Slideshow();
  
//   // Attach event listeners to arrow buttons
//   const arrowLeft = document.getElementById('arrow-left');
//   const arrowRight = document.getElementById('arrow-right');
  
//   arrowLeft.addEventListener('click', () => {
//     slideshow.prevSlide();
//   });
  
//   arrowRight.addEventListener('click', () => {
//     slideshow.nextSlide();
//   });
  