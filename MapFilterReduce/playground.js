/*Com this*/
// const maca = {
//   value: 2,
// }
// const laranja = {
//   value: 3,
// }

// function mapComThis(arr, thisArg){
//   return arr.map(function(item){
//     return item * this.value;
//   }, thisArg);
// }

// const nums = [1, 2];


// console.log('this -> maçã', mapComThis(nums, maca));
// console.log('this -> laranja', mapComThis(nums, laranja));

//===========================
/*Sem o this*/
// function mapSemThis(arr){
//   return arr.map(function(item) {
//     return item * 2;
//   })
// }
// const nums = [2, 4, 6, 8, 10];

// console.log(mapSemThis(nums));
//================================

/*filter*/
// function filterPares(arr){
//   return arr.filter(callback);
// }

// function callback(item){
//   return item % 2 === 0;
// }

// const meuArray = [1, 23, 55, 67, 30, 2, 4];

// console.log(filterPares(meuArray));

/*reduce - 1*/
// function somaNum(arr){
//   return arr.reduce(function(prev, current){
//     console.log({prev});
//     console.log({current});
//     return prev + current;
//   })
// }
// const arr = [1, 2];

// console.log(somaNum(arr));

/*reduce - 2*/
const lista = [
  {
    name: 'Detergente',
    preco: 6.99
  },

  {
    name: 'Cap. Café',
    preco: 17.00
  },

  {
    name: 'Leite',
    preco: 3.75
  },


];

const saldoDisponivel = 100;

function calcSaldo(saldoDisponivel, lista){
  return lista.reduce(function(prev, current){
    console.log({prev});
    console.log({current});
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calcSaldo(saldoDisponivel, lista));
