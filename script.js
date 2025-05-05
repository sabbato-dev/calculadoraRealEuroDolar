// function main() {

//     let valorConverter, cotacaoMoeda, valorConvertido
//     let opcaoMoeda
//     let simboloMoeda

//     opcaoMoeda = prompt('Olá, qual conversão quer fazer hoje? 1-Dólar ou 2-Euro');
//     if (opcaoMoeda != 1 && opcaoMoeda != 2) {
//         alert("opção Inválida");
//     } else {
//         valorConverter = prompt("Digite o valor que deseja converter em R$:");

//         if (opcaoMoeda == 1) {
//             cotacaoMoeda = prompt("Digite a cotação do Dólar");
//             simboloMoeda = "U$";
//         } else {
//             cotacaoMoeda = prompt("Digite a cotação do Euro")
//             simboloMoeda = '€'
//         }

//         valorConvertido = (valorConverter / cotacaoMoeda).toFixed(2);

//         alert("O valor convertido para "+ simboloMoeda +" resultou em "+ simboloMoeda + valorConvertido)
//     }

// }
// main()


function main() {
    let denominador, unidade, resultado;
    let nome;
    let saidaTabuada="0";
    // atribuindo valor a variável
    unidade = 0;
    // entrada de dados
    // atribuindo valor a variável
    nome = prompt('Qual o seu nome?');
    // atribuindo valor a variável
    denominador = Number(prompt('Qual tabuada você quer resolver?'));
    alert(nome + " a tabuada do" + denominador + " é:");
    while (unidade <= 10) {
        resultado = denominador * unidade;
        if (unidade === 0) {
            saidaTabuada = denominador + "x" + unidade + "=" + resultado;
        } else {
            // saidaTabuada = saidaTabuada + "\n" + denominador + "x" + unidade + "=" + resultado;
// template string
            saidaTabuada = `${saidaTabuada}\n${denominador}x${unidade}=${resultado}`

        }
unidade++; 
    }

    alert(saidaTabuada);

}


main()




    // for (unidade = 0; unidade <= 10; unidade++) {
    //     resultado = denominador * unidade;
    //     alert(denominador + "x" + unidade + "=" + resultado 
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado
    //         + denominador + "x" + unidade + "=" + resultado);
    // }










// function main() {
//     var valorConverter, cotacaoMoeda, valorConvertido;
//     var opcaoMoeda;
//     var simboloMoeda;

//     window.alert("Olá! Qual conversão você deseja realizar hoje? 1 - Dólar 2 - Euro");
//     opcaoMoeda = Number(window.prompt('Enter a value for opcaoMoeda'));
//     if (opcaoMoeda != 1 && opcaoMoeda != 2) {
//         window.alert("Opção inválida!!!");
//     } else {
//         window.alert("Digite o valor que deseja converter: (em R$)");
//         valorConverter = Number(window.prompt('Enter a value for valorConverter'));
//         if (opcaoMoeda == 1) {
//             window.alert("Digite a cotação do dolar:");
//             cotacaoMoeda = Number(window.prompt('Enter a value for cotacaoMoeda'));
//             simboloMoeda = "U$";
//         } else {
//             window.alert("Digite a cotação do euro:");
//             cotacaoMoeda = Number(window.prompt('Enter a value for cotacaoMoeda'));
//             simboloMoeda = "€$";
//         }
//         valorConvertido = valorConverter / cotacaoMoeda;
//         window.alert("O valor convertido para dolár resultou em " + simboloMoeda + valorConvertido);
//     }
// }
// main()
