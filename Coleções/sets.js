const myArray = [30, 30, 40, 6, 221, 2050, 3035, 7];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(valoresUnicos(myArray));