/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/


const prompt = require ('prompt-sync')()

let num1 = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))

if (num1 === num2) {
    console.log('Os valores não podem ser iguais.')
} else {
    if (num1 < num2) {
        console.log(`Ordem crescente: ${num1}, ${num2}`)

    } else {
        console.log (`Ordem crescente: ${num2}, ${num1}`)
    }
}