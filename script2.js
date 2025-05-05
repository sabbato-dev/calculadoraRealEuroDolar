// function main() {
//     let tabuada, contador, resultado, opcao;
//     let saidaTabuada

//     contador = 0;

//     tabuada = Number(prompt('qual tabuada deseja resolver?'));
//     alert(" a tabuada do" + tabuada + " é:");
//     while (contador <= 10) {
//         resultado = tabuada * contador;
//         if (contador === 0) {
//             saidaTabuada = tabuada + "x" + contador + "=" + resultado;
//         } else {

//             saidaTabuada = `${saidaTabuada}\n${tabuada}x${contador}=${resultado}`

//         }
//         contador++;
//     }

//     alert(saidaTabuada);


//     opcao = Number(prompt('Gostaria de refazer a tabuada? 1 - Sim // 2 - Não'));
//     while (opcao == 1) {
//         contador = 0;
//         saidaTabuada = "";
//         tabuada = Number(prompt('Qual tabuada você deseja resolver?'));
//         while (contador <= 10) {
//             resultado = tabuada * contador;
//             alert(tabuada + " X " + contador + " = " + resultado);
//             contador++;
//             if (contador === 0) {
//                 saidaTabuada = tabuada + "x" + contador + "=" + resultado;
//             } else {

//                 saidaTabuada = `${saidaTabuada}\n${tabuada}x${contador}=${resultado}`

//             }
//             contador++;
//         }

//         alert(saidaTabuada);
//         }
//         opcao = Number(prompt('Gostaria de refazer a tabuada? 1 - Sim // 2 - Não'));
//     }
//     alert("Programa Finalizado");


// main();

function main() {
    let tabuada, contador, resultado, resposta;

    let saidaTabuada = "";

    resposta = true;

        while (resposta === true) {
    tabuada = Number(prompt('Enter a value for tabuada'));
    saidaTabuada = "";
    for (contador = 0; contador <= 10; contador++) {
        resultado = tabuada * contador;
        saidaTabuada += tabuada + " X " + contador + " = " + resultado + "\n";
    }

    alert(saidaTabuada);
    resposta = confirm('Enter a value for resposta');
}
}

main();
