function validation(){

let firstName = document.getElementById('firstname').value;
let lastName = document.getElementById('lastname').value;
let number = document.getElementById('phone').value;
let zip = document.getElementById('zip').value;
let email = document.getElementById('email').value;
let middleName = document.getElementById('middlename').value;

let nameCheck = /^[A-Za-z]+$/;
let numberCheck = /^\+977[- ]?\d{10}$/;
let zipCheck = /^\d{5}$/;
let emailCheck = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(nameCheck.test(firstName)){
    document.getElementById('firsterror').innerHTML = "";
}
else{
    document.getElementById('firsterror').innerHTML = " ** Enter a valid first name";
    return false
}


if(nameCheck.test(middleName)){
    document.getElementById('middleerror').innerHTML = "";
}
else{
    document.getElementById('middleerror').innerHTML = " ** Enter a valid middle name";
    return false
}


if(nameCheck.test(lastName)){
document.getElementById('lasterror').innerHTML = "";
}
else{
document.getElementById('lasterror').innerHTML = " ** Enter a valid last name";
return false
}



if(emailCheck.test(email)){
    document.getElementById('emailerror').innerHTML = "";
}
else{
    document.getElementById('emailerror').innerHTML = " ** Enter a valid email";
    return false
}


if(numberCheck.test(number)){
    document.getElementById('phoneerror').innerHTML = "";
}
else{
    document.getElementById('phoneerror').innerHTML = " ** Enter a valid contact number";
    return false
}



if(zipCheck.test(zip)){
    document.getElementById('ziperror').innerHTML = "";
}
else{
    document.getElementById('ziperror').innerHTML = " ** Enter a valid zip code";
    return false
}

}

