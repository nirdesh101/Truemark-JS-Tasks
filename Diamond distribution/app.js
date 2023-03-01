let diamondsArr = [1, 2, 3,3,3,3,3,3];
let sumOfArr = diamondsArr.reduce((a, b)=> a + b);     // sum of numbers in the given array
let numberOfPerson = 7;     // number of person the diamond should be divided

console.log("the sum of the numbers in given array is " + sumOfArr);

if(sumOfArr % numberOfPerson == 0){   //     checking if the sum can be divided for given people or not

  function arraySort(){      // sorting the array in descending order
  diamondsArr.sort((a, b) => b - a);
  console.log(diamondsArr);
    }

  function diamondDivide(){     // creating a function for dividing the diamonds equallly 
    let diamondsArrayCopy = diamondsArr.slice();   // creating a copy of original array for not modyfying prev
    let sumForEachPerson = sumOfArr / numberOfPerson;   // calc of how many total diamonds a person should get

    for(i = 1 ; i <= numberOfPerson; i++){   // for declaring empty array, present number of diamonds before dividing the diamond  and looping for total number of people
      let diamondPerPerson = [];
      let sumOfEachPerson = 0; 
      
      for(let j = 0; j < diamondsArrayCopy.length ; j++){  
        if((sumOfEachPerson + diamondsArrayCopy[j]) <= sumForEachPerson){  // j defines the first index digit of array i.e 5 (it is in descending order)
          sumOfEachPerson = sumOfEachPerson + diamondsArrayCopy[j];
          diamondPerPerson.push(diamondsArrayCopy[j]); // pushing the current index value in the array
          diamondsArrayCopy[j] = undefined; // declaring the current index digit undefined 
        }
        if(sumOfEachPerson == sumForEachPerson){  //   checking if person got the equal share of diamonds or not 
          break;
        }
      }
      console.log("person_"+ i + " " + ":" + " " + diamondPerPerson)
    }

  }
  arraySort();
  diamondDivide();
}
else{
  console.log("diamonds can't be divided into" + numberOfPerson +  "people") 
}