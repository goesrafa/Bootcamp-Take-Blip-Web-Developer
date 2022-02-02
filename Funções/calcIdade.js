function calculaIdade(anos){
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade. `;
}

const pessoa1 = {
  nome: 'Rafaela',
  idade: 24,
};

const pessoa2 = {
  nome: 'Luciana',
  idade: 42,
};

const animal = {
  nome: 'Mel',
  idade: 6,
  raca: 'Yorkshire'
};
console.log(calculaIdade(animal, [30]));