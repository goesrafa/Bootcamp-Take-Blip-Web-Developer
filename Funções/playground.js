const alunos = [
  {
    nome: 'João',
    nota: 10,
    turma: '1B'
  },
  {
    nome: 'Leticia',
    nota: 8,
    turma: '1C'
  },
  {
    nome: 'Carla',
    nota: 5,
    turma: '2B'
  },
  {
    nome: 'Pedro',
    nota: 2,
    turma: '2B'
  },
];



function alunosAprovados(arr, media){
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const {nota, nome} = arr [i];

    if(nota >= media){
      aprovados.push(nome);
    }
  }
  return aprovados;
}
console.log(alunosAprovados(alunos, 5));