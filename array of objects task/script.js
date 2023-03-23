const products = [
    {
    "id": 1,
    "Category": "Electronics",
    "product": [
      {
        "id": 1.1,
        "name": "Mobile",
        "price": 10000,
        "imageUrl": "https://mobile.jpeg"
      },
      {
        "id" : 1.2,
        "name" : "Ipad",
        "price" : 110000,
        "imageUrl" : "https://ipad.jpeg" 
      },
      {
        "id" : 1.3,
        "name" : "Laptop",
        "price" : 150000,
        "imageUrl" : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray-wifi_AV1?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1670865949566"
      },
      {
        "id" : 1.4,
        "name" : "Kindle",
        "price" : 25000,
        "imageUrl" : "https://kindle.jpeg"
      },
      {
        "id" : 1.5,
        "name" : "Monitor",
        "price" : 65000,
        "imageUrl" : "https://monitor.jpeg"
      },
    ]
},

{
    "id": 2,
    "Category": "Clothing",
    "product": [
      {
        "id": 2.1,
        "name": "Pants",
        "price": 2500,
        "imageUrl": "https://mobile.jpeg"
      },
      {
        "id" : 2.2,
        "name" : "T-shirt",
        "price" : 1600,
        "imageUrl" : "https://ipad.jpeg" 
      },
      {
        "id" : 2.3,
        "name" : "Swatshirt",
        "price" : 2000,
        "imageUrl" : "https://laptop.jpeg"
      },
      {
        "id" : 2.4,
        "name" : "Joggers",
        "price" : 2200,
        "imageUrl" : "https://kindle.jpeg"
      },
      {
        "id" : 2.5,
        "name" : "Shoes",
        "price" : 4000,
        "imageUrl" : "https://monitor.jpeg"
      },
    ],
},

{    
    "id": 3,
    "Category": "Furniture",
    "product": [
      {
        "id": 3.1,
        "name": "Table",
        "price": 12000,
        "imageUrl": "https://mobile.jpeg"
      },
      {
        "id" : 3.2,
        "name" : "Chair",
        "price" : 3200,
        "imageUrl" : "https://ipad.jpeg" 
      },
      {
        "id" : 3.3,
        "name" : "Cupboard",
        "price" : 25000,
        "imageUrl" : "https://laptop.jpeg"
      },
      {
        "id" : 3.4,
        "name" : "Bed",
        "price" : 35000,
        "imageUrl" : "https://kindle.jpeg"
      },
      {
        "id" : 3.5,
        "name" : "Dressing Table",
        "price" : 65000,
        "imageUrl" : "https://monitor.jpeg"
      },
    ]
},

{
    "id": 4,
    "Category": "Food",
    "product": [
      {
        "id": 4.1,
        "name": "Momo",
        "price": 230,
        "imageUrl": "https://mobile.jpeg"
      },
      {
        "id" : 4.2,
        "name" : "Burger",
        "price" : 350,
        "imageUrl" : "https://ipad.jpeg" 
      },
      {
        "id" : 4.3,
        "name" : "Sekuwa",
        "price" : 450,
        "imageUrl" : "https://laptop.jpeg"
      },
      {
        "id" : 4.4,
        "name" : "Pizza",
        "price" : 650,
        "imageUrl" : "https://kindle.jpeg"
      },
      {
        "id" : 4.5,
        "name" : "Wraps",
        "price" : 65000,
        "imageUrl" : "https://monitor.jpeg"
      },
    ]
},

{
    "id": 5,
    "Category": "Cars",
    "product": [
      {
        "id": 5.1,
        "name": "Mercedes G-class",
        "price": 40000000,
        "imageUrl": "https://mobile.jpeg"
      },
      {
        "id" : 5.2,
        "name" : "Ford Raptor",
        "price" : 15000000,
        "imageUrl" : "https://ipad.jpeg" 
      },
      {
        "id" : 5.3,
        "name" : "Jeep Wrangler",
        "price" : 28000000,
        "imageUrl" : "https://laptop.jpeg"
      },
      {
        "id" : 5.4,
        "name" : "Range Rover Discovery",
        "price" : 43000000,
        "imageUrl" : "https://kindle.jpeg"
      },
      {
        "id" : 5.5,
        "name" : "Rolls Royce Phantom",
        "price" : 20000000,
        "imageUrl" : "https://monitor.jpeg"
      },
    ],
}
]

//PRODUCTS
let product1 = document.getElementById("product-1");
let product2 = document.getElementById("product-2");
let product3 = document.getElementById("product-3");
let product4 = document.getElementById("product-4");
let product5 = document.getElementById("product-5");

// listing the categories
for (let i = 0; i < products.length; i++) {
    const categoryElement = document.getElementById(`category-${i+1}`);
    categoryElement.innerHTML = products[i].Category;
    categoryElement.addEventListener("click", function(){
        if(categoryElement[i] = "Electronics"){
            product1.innerHTML = products[i].product[0].name;
            product2.innerHTML = products[i].product[1].name;
            product3.innerHTML = products[i].product[2].name;
            product4.innerHTML = products[i].product[3].name;
            product5.innerHTML = products[i].product[4].name;
        }
        else{
            product1.innerHTML = "";
            product2.innerHTML = "";
            product3.innerHTML = "";
            product4.innerHTML = "";
            product5.innerHTML = "";
        }
    })
  }

// Showing the selected item of DROPDOWN
let dropdownCategory = document.getElementById('dropdown-category');
let category = document.querySelectorAll('.category');
category.forEach(item => {   
    item.addEventListener("click", function() {
        dropdownCategory.innerHTML = item.text;
        dropdownCategory.value = item.dataset.value;
        // console.log(`innerHTML: ${dropdownCategory.innerHTML}, value: ${dropdownCategory.value}`);
    });
});

function categoryProducts(data){
    console.log(data.value);
    if(data.value = 1){
        console.log("heelloo");
    }
}

console.log(products[0].product[2].imageUrl);