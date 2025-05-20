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




function Tabuada(nomeUsuario) {
    let tabuada, limite;
    let mensagem = "";
    let resposta = true;
   
    while (resposta) {
      tabuada = Number(prompt(`${nomeUsuario}, qual tabuada você deseja resolver?`));
      limite = Number(prompt(`${nomeUsuario}, até qual limite deseja a tabuada?`));
   
      for (let contador = 0; contador <= limite; contador++) {
        const resultado = tabuada * contador;
        mensagem += `${tabuada} x ${contador} = ${resultado}\n`;
      }
   
      alert(`${nomeUsuario}, a tabuada do ${tabuada} até o ${limite} é:\n${mensagem}`);
   
      resposta = confirm("Deseja fazer outra tabuada?");
    }
    return tabuada
  }
   
  function main() {
    const nome = prompt("Qual o seu nome");
    Tabuada(nome);
    alert("Programa finalizado!");
  }
   
  main();
   
  console.log(nome);


// o que faz essa funçãozona
// pegar os dados
// faz tabuada
// exibe a saída

main();
