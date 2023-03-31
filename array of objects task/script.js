import products from './data.json' assert {type: 'json'}

// listing the categories
const select = document.getElementById("select-options");
const productDiv = document.getElementById("productDiv");


// Dropdown items
products.map((product) =>{
    const newOption = document.createElement("option");
    newOption.innerHTML = product.Category;
    select.appendChild(newOption);
    newOption.setAttribute('value', product.Category)

    select.style.paddingLeft = "3.9rem";
    select.style.paddingRight = "3.9rem";
    select.style.marginTop = "1rem";
})

//displaying products of the category selected on dropdown
const optionSelect = document.getElementById("select-options");
optionSelect.addEventListener("change", showProducts);

let selectedProduct;

function showProducts(event) {
    showDetailsDiv.innerHTML =  " ";
    price.innerHTML = " ";
    productName.innerHTML = " ";
    productDiv.innerHTML =" ";
    const currentValue = event.target.value;
    const productsLists = products.filter(item => 
        item.Category == currentValue);
        productsLists[0].product.map(item =>{
            const Button = document.createElement("button");
            Button.innerHTML = item.name;
            productDiv.appendChild(Button);
            selectedProduct = item.name;
            Button.addEventListener("click",() => showDetails(item))
        })
}

const showDetailsDiv = document.getElementById("showDetails");
const price = document.getElementById("price");
const productName = document.getElementById("productName");

function showDetails(item) {
    showDetailsDiv.innerHTML = " "
    const image = document.createElement("img");
    image.src = item.imageUrl
    console.log(item);
    showDetailsDiv.appendChild(image)
    price.innerHTML = "PRICE : RS " + item.price;
    productName.innerHTML = item.name;
}