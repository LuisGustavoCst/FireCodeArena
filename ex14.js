// Atividade 14

const readline = require('readline-sync')

let notas = []
for (let i = 0; i < 5; i++) {
  let n = +readline.question(`${i + 1}ª nota: `)
  notas.push(n)
}

let maior = notas[0]
let menor = notas[0]
let soma = 0
let aprovados = 0
let reprovados = 0

for (let i = 0; i < notas.length; i++) {
  let n = notas[i]
  soma += n
  if (n > maior) maior = n
  if (n < menor) menor = n
  if (n >= 7) aprovados++
  else reprovados++
}

let media = soma / notas.length

console.log('Maior nota:', maior)
console.log('Menor nota:', menor)
console.log('Média da turma:', media)
console.log('Quantidade de aprovados:', aprovados)
console.log('Quantidade de reprovados:', reprovados)
