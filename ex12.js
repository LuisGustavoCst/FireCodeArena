// Atividade 12 

const readline = require('readline-sync')

let numeros = []
for (let i = 0; i < 5; i++) {
  let n = +readline.question(`${i + 1}º número: `)
  numeros.push(n)
}

let soma = 0
for (let i = 0; i < numeros.length; i++) soma += numeros[i]
let media = soma / numeros.length

console.log('Média:', media)
console.log('Números acima da média:')
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > media) console.log(numeros[i])
}
