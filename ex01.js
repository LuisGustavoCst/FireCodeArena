// Atividade 01

const readline = require('readline-sync')

let pares = []
let impares = []

for (let i = 0; i < 3; i++) {
	let numero = +readline.question(`${i + 1}º número: `)
	if (numero % 2 === 0) {
		pares.push(numero)
	} else {
		impares.push(numero)
	}
}

console.log('Lista de números pares:', pares)
console.log('Lista de números ímpares:', impares)

