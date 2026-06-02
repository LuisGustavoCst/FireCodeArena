// Atividade 06 

const readline = require('readline-sync')

let notas = []
for (let i = 0; i < 4; i++) {
  let n = +readline.question(`${i + 1}ª nota: `)
  notas.push(n)
}

let soma = 0
for (let i = 0; i < notas.length; i++) soma += notas[i]

let media = soma / notas.length
let situacao = media >= 7 ? 'Aprovado' : 'Reprovado'

console.log(`Média: ${media.toFixed(2)} - ${situacao}`)
