// Atividade 02

const readline = require('readline-sync')

let positivos = []
let negativos = []

for (let i = 0; i < 3; i++) {
  let n = +readline.question(`${i + 1}º número: `)
  if (n >= 0) {
    positivos.push(n)
  } else {
    negativos.push(n)
  }
}

console.log('Positivos:', positivos)
console.log('Negativos:', negativos)
