let n = 4;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {        
  for (let j = 1; j <= n - i; j++) {      // printing spaces
    string = string + " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {     // printing star
    string = string + "*";
  }
  string = string + "\n";
}

// console.log(string);

// External loop
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {      // printing spaces
    string += " ";
  }
  for (let k = 0; k < 2 * (n-i) - 1; k++) {      // printing star
    string += "*";
  }
  string += "\n";
}
console.log(string);