// Função para calcular o IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    const imc = peso / (altura * altura);
    const resultado = exibirResultadoIMC(imc);
    
    document.getElementById("resultado").textContent = `${imc.toFixed(2)} - ${resultado}`;
}

// Função para exibir o resultado do IMC
function exibirResultadoIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}
