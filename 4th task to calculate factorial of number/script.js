function fact(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  console.log(fact(3))

//to calculate the sum of all numbers till the given number
  function sum(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sum(n - 1);
    }
  }

 console.log(sum(20))
  