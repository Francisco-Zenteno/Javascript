
function fibonacciGenerator(n) {

  res = [];

  for (var i = 0; i < n; i++) {

    if (i === 0) {
      res.push(0);
    } else if (i === 1) {
      res.push(1);
    } else {
      res.push(res[i - 2] + res[i - 1]);
    }

  }


  return res;
}

console.log("My fibonacci");
fibonacciGenerator(10);
