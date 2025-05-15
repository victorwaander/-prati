//* Crie um programa que classifica a idade de uma pessoa em categorias ( criança, adolescente, adulto, idoso) com base no valor fornecido,
// utilizando uma estrutura de controle if-else 

const prompt = require('prompt-sync')()

function idade (num) {
    if (num < 14) {
        console.log('Você é uma criança. ')
    } else if (num < 21) {
        console.log('Você é um adolescente')
    } else if (num < 55) {
        console.log('Você é um adulto')
    } else {
        console.log('Você é um idoso')
    }
}

const num = Number(prompt('Digite sua idade: '))

idade(num)