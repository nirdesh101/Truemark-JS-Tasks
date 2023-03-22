const prevbtn = document.getElementById("prevBtn");
const nextbtn = document.getElementById("nextBtn");

class Image {
    constructor(image, title, description) {
        this.image = image;
        this.title = title;
        this.description = description;
    }
}

function validateForm(event) {
    event.preventDefault();
    const newSlider = new Image(image, getTitle(), getDescription());
    if (slider.slide.length == 0) {
        slider.addImage(newSlider);
        slider.addSlider();
    } else {
        slider.addImage(newSlider);
    }
}

const impFile = document.getElementById("imageFile");
let image;
impFile.addEventListener("change", (e) => {
    image = URL.createObjectURL(e.target.files[0]);
});

function getTitle() {
    return document.getElementById("title").value;
}

function getDescription() {
    return document.getElementById("description").value;
}

class Slider {
    constructor() {
        this.slide = [];
        this.index = 0;
    }

    addImage = (addSlider) => {
        this.slide.push(addSlider);
    }

    nextSlider = () => {
        this.index++;

        console.log(this.index);
        if (this.index >= this.slide.length ) {
            this.index = 0;
        }
        // console.log(this.index);
        this.replaceImage(this.slide[this.index]);
    }


    prevSlider = () => {
        this.index--;
        if (this.index < 0) {
            this.index = this.slide.length - 1;
        }
        this.replaceImage(this.slide[this.index]);
    }

    replaceImage = (slide) => {
        document.getElementById("output").src = slide.image;
        document.getElementById("titleId").innerHTML = slide.title;
        document.getElementById("descriptionId").innerHTML = slide.description;
    }


    button = () => {
        prevbtn.addEventListener("click", this.prevSlider);
        nextbtn.addEventListener("click", this.nextSlider);
    }

    addSlider = () => {
        const slide = this.slide[this.index];
        this.replaceImage(slide);
        if (this.slide.length >= 1) {
            this.button();
        }
    }
}


// function showControls(){
//     const controls = document.getElementById("controls");
//     controls.style.display = "block";
// }

const slider = new Slider();

