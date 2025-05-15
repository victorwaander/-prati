/*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require('prompt-sync')();

// Solicita peso e altura do usuário
const peso = parseFloat(prompt('Digite seu peso (em kg): '));
const altura = parseFloat(prompt('Digite sua altura: '));

// Calcula o IMC
const imc = peso / (altura * altura);

// Mostra o resultado do IMC
console.log(`Seu IMC é: ${imc.toFixed(2)}`); // toFixed para exibir apenas duas casas decimais

// Classifica o IMC com base nas faixas
if (imc < 18.5) {
    console.log('Categoria: Baixo peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Categoria: Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Categoria: Sobrepeso');
} else {
    console.log('Categoria: Obesidade');
}
