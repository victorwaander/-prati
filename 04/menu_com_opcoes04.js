//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")() //importa o módulo sync para o usuário digite no console
//plota as textos do menu explicando cada opção
console.log("=== MENU INTERATIVO ===")
console.log("1 - Verificar se um número é par")
console.log("2 - Somar dois números")
console.log("3 - Sair")
// pergunta para usuario qual opção ele deseja
let opcao = prompt("Escolha uma opção (1-3): ")
// vai pegar a let opcao conforme o cliente digitar e executar o comando
switch (opcao) {
    case '1':
       let numero = Number(prompt("Digite um número: ")) // convertendo o texto que o cliente digitar mesmo sendo número convertendo para number
       if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número") // verificação caso o cliente digite algum valor invalido
       } else {
        if (numero % 2 === 0) {
            console.log("O número é PAR")
        } else {
            console.log("o número é IMPAR")
        }
       }
       break // para encerrar após concluir o comando 
    
    case '2':
        let  num1 = Number(prompt("Digite o primeiro número: "))
        let num2 = Number(prompt("Digite o segundo número: "))
        console.log(`A soma é: ${num1 + num2}`)
        break;
    
    case '3':
        console.log("Saindo do programa...")
        break;
    default:
        console.log("Opção inválida. Tente novamente.") // se o cliente não digitar um número entre 1 e 3 vai informar opção invalida
}