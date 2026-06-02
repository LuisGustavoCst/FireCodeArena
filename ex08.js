// Atividade 08

const readline = require('readline-sync')

let numeros = []
for (let i = 0; i < 5; i++) {
  let n = +readline.question(`${i + 1}º número: `)
  numeros.push(n)
}

let positivos = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) positivos++
}

console.log('Quantidade de números positivos:', positivos)
