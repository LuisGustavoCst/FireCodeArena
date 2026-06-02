// Atividade 07

const readline = require('readline-sync')

let numeros = []
for (let i = 0; i < 5; i++) {
  let n = +readline.question(`${i + 1}º número: `)
  numeros.push(n)
}

let totalPares = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) totalPares++
}

console.log('Quantidade de números pares:', totalPares)
