 function converterMoeda() {
      const valor = parseFloat(document.getElementById("valor").value);
      const tipo = document.getElementById("moeda").value;
      const resultado = document.getElementById("resultado");

      if (isNaN(valor) || valor <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        return;
      }

      let convertido;
      const taxaEuro = 5.30; 
      const taxaDolar = 4.95;

      if (tipo === "real-euro") {
        convertido = valor / taxaEuro;
        resultado.innerText = `R$ ${valor.toFixed(2)} = € ${convertido.toFixed(2)}`;
      } else if (tipo === "euro-real") {
        convertido = valor * taxaEuro;
        resultado.innerText = `€ ${valor.toFixed(2)} = R$ ${convertido.toFixed(2)}`;
      } else if (tipo === "real-dolar") {
        convertido = valor / taxaDolar;
        resultado.innerText = `R$ ${valor.toFixed(2)} = US$ ${convertido.toFixed(2)}`;
      } else if (tipo === "dolar-real") {
        convertido = valor * taxaDolar;
        resultado.innerText = `US$ ${valor.toFixed(2)} = R$ ${convertido.toFixed(2)}`;
      } else {
        resultado.innerText = "Conversão inválida.";
      }
    }
