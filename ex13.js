// Atividade 13

const readline = require('readline-sync')

let multiplosDe3 = []
let outrosNumeros = []

for (let i = 0; i < 3; i++) {
  let n = +readline.question(`${i + 1}º número: `)
  if (n % 3 === 0) multiplosDe3.push(n)
  else outrosNumeros.push(n)
}

console.log('Múltiplos de 3:', multiplosDe3)
console.log('Outros números:', outrosNumeros)
