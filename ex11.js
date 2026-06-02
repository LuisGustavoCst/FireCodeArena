// Atividade 11

const readline = require('readline-sync')

let numeros = []
for (let i = 0; i < 5; i++) {
  let n = +readline.question(`${i + 1}º número: `)
  numeros.push(n)
}

let dobro = []
for (let i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2)
}

console.log('Números:', numeros)
console.log('Dobro:', dobro)
