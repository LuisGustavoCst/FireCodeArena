// Atividade 10

const readline = require('readline-sync')

let notas = []
for (let i = 0; i < 5; i++) {
  let n = +readline.question(`${i + 1}ª nota: `)
  notas.push(n)
}

let aprovados = []
let reprovados = []
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) aprovados.push(notas[i])
  else reprovados.push(notas[i])
}

console.log('Aprovados:', aprovados)
console.log('Reprovados:', reprovados)
