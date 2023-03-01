function openBar(){
    document.getElementById("sidebar").style.width = "360px";
    document.getElementById("main").style.marginLeft = "360px";
    document.getElementById("btn").style.display ="none";
}

function closeBar(){
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("btn").style.display ="block";
}