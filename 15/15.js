/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

const prompt = require("prompt-sync")()

for (let i = 0, a = 0, b = 1; i < 10; i++) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}