// Atividade 05 

const readline = require('readline-sync')

let numeros = []
for (let i = 0; i < 5; i++) {
  let n = +readline.question(`${i + 1}º número: `)
  numeros.push(n)
}

let menor = numeros[0]
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) menor = numeros[i]
}

console.log('O menor número é:', menor)
