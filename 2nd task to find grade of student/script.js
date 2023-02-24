//PROMPT METHOD

let marks = prompt("ENTER YOUR MARKS :")

if(marks >= 80){
    document.write("distinction")
}
else if(marks >= 60 && marks < 80) {
    document.write("first division");
} 
else if (marks >= 50 && marks< 60) {
    document.write("second division");
} 
else if (marks >= 40 && marks <50) {
    document.write("third division");
}
else if(marks<40) {
    document.write("you're failed");
}






//ARRAY METHOD

let scores = [30, 66, 96, 56, 67, 45, 88, 76, 24, 69]

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 80) {
    console.log(" distinction");
  } 
  else if (scores[i] >= 60 && scores[i] < 80) {
    console.log(" firstDivision");
  }
  else if (scores[i] >= 50 && scores[i] < 60) {
    console.log(" secondDivision");
  }
  else if (scores[i] >= 40 && scores[i] < 50) {
    console.log(" thirdDivision");
  }
  else if (scores[i]<40) {
    console.log(" failed")
  }
}






//Function method

function score (marks){

    if(typeof(marks) != 'number'){
        console.log("invalid marks")
    }
    else if(marks >= 80){
        console.log("distinction")
    }
    else if(marks >= 60 && marks < 80) {
        console.log("first division");
    } 
    else if (marks >= 50 && marks< 60) {
        console.log("second division");
    } 
    else if (marks >= 40 && marks <50) {
        console.log("third division");
    }
    else if(marks<40) {
        console.log("you're failed");
    }
}
score(90);







