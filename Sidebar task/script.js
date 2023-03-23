function openBar(){
    document.getElementById("sidebar").style.width = "22.5rem";
    document.getElementById("main").style.marginLeft = "22.5rem";
    document.getElementById("btn").style.display ="none";
}

function closeBar(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("btn").style.display ="block";
}