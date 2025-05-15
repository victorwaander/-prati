/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require('prompt-sync') ()

const quantidade = parseInt(prompt("quantas maças deseja?"))

function calculoValor (qtd){
    if (qtd >= 12) {
        return qtd * 0.25
    } else{
        return qtd * 0.30
    }
}
const total = calculoValor(quantidade)
console.log(`O valor das maças foi R$${total}`)