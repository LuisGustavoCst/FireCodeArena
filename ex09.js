// Atividade 09

const readline = require('readline-sync')

let nomes = []
for (let i = 0; i < 5; i++) {
  let nome = readline.question(`${i + 1}º nome: `)
  nomes.push(nome)
}

let busca = readline.question('Digite um nome para buscar: ')
let encontrado = false
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].toLowerCase() === busca.toLowerCase()) {
    encontrado = true
    break
  }
}

if (encontrado) console.log('Nome encontrado!')
else console.log('Nome não encontrado!')
