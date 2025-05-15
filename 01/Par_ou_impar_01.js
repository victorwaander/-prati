
//* Escreva um programa que recebe um número inteiro e verifica se ele é par ou impar 
const prompt = require('prompt-sync')()

function par (num) {
    if (num % 2 ===0) {
        return par
    } else {
        return 'impar'
    }
}

const num = prompt('Digite um número: ')

console.log(par(num))
