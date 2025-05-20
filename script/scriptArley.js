//escopo global
 
// function Tabuada(tabuadaUsuario){
//     //escopo específico
//     let contador=0, resultado, saidaTabuada = "", limite;
 
//     while (contador <= 10) {    
//         //Atribuindo valor a variavel resultado
//         resultado = tabuadaUsuario * contador;
//         if (contador === 0) {
//             saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
//         } else {
//             saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String      
//         }
//         contador = contador + 1; //contador++;        
//     }    
//     return saidaTabuada;
// }
function main() {
    //Declarando Variaveis
    let tabuada;
    let limite;
    //Entrada de dados
    //Atribuindo valor a variavel (tabuada)
    tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
    limite = Number(prompt("Até qual número você deseja calcular a tabuada? (0-100)"));
     
    console.log(TabuadaLimite(tabuada, limite));
    alert(TabuadaLimite(tabuada, limite)); 
    
    
}

function TabuadaLimite(tabuadaUsuario, limite){
    //escopo específico
    if (typeof tabuadaUsuario !== 'Number' || typeof limite !== 'Number') {
        alert('Parâmetros devem ser números');
    }
    let contador=0, resultado, saidaTabuada = "";
    
    // REPETIÇÃO COM WHILE
    //Enquanto contador for menor ou igual a 10 for verdade repetir se não falso
    while (contador <= limite) {    
        //Atribuindo valor a variavel resultado
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
        } else {
            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String      
        }
        contador++;        
    }    
    return saidaTabuada;
}

// function TabuadaLimite(tabuadaUsuario, limite){
//     if (typeof tabuadaUsuario !== 'number' || typeof limite !== 'number') {
//         throw new Error('Parâmetros devem ser números');
//     }

//     let contador = 0, resultado, saidaTabuada = [];

//     while (contador <= limite) {    
//         resultado = tabuadaUsuario * contador;
//         saidaTabuada.push(`${tabuadaUsuario} x ${contador} = ${resultado}`);
//         contador++;
//     }    
//     return saidaTabuada.join("\n");
// }


main();

 
// pegar os dados
// faz tabuada
// exibe a saída  
 
 