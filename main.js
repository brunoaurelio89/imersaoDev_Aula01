
function pegaValor() {

    
    var valorDigitado = parseFloat(document.getElementById("valorDigitado").value).toFixed(2);
    
    //faz a conversao de real para dolar
    result = valorDigitado / 5.7;
    
   document.getElementById('result').innerHTML = "Valor em Dolar CAD: " +result.toFixed(2);

    
}




