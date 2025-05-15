const prompt = require('prompt-sync')()

//* Implemente um programa que recebe uma nota de 0 a 10 e classidica como "aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

function nota (num) {
    if (num < 0 || num > 10) {  // valida se a nota vai ser entre 0 e 10
        return 'Nota inválida! Digite um valor entre 0 e 10.' 
    }

    if(num < 4) {
        return 'Você está REPROVADO.'
    } else if (num >= 4 && num < 6) {
        return 'Você está em RECUPERAÇÃO'
    } else {
        return 'Você está APROVADO'
    }
}

const num = Number(prompt('Digite sua nota: '))
console.log(nota(num))