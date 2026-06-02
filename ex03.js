// Atividade 03

const readline = require('readline-sync')

let idades = []
for (let i = 0; i < 5; i++) {
  let idade = +readline.question(`${i + 1}ª idade: `)
  idades.push(idade)
}

let maiores = 0
let menores = 0
for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) maiores++
  else menores++
}

console.log(`Quantas pessoas são maiores de idade: ${maiores}`)
console.log(`Quantas pessoas são menores de idade: ${menores}`)
