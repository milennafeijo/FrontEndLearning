const botao = document.getElementById ('botao')

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {
        const pesoNum = parseFloat(peso.replace(',', '.'));
        let alturaNum = parseFloat(altura.replace(',', '.'));

        if (alturaNum > 3) {
            alturaNum = alturaNum / 100;
        }

        if (pesoNum <= 5 || pesoNum > 200 || alturaNum <= 0.9 || alturaNum > 2.8) {
            resultado.textContent = 'Por favor, insira valores válidos!';
            resultado.style.display = 'block';
            resultado.style.color = 'red';
            return;
        }

        const imc = (pesoNum / (alturaNum * alturaNum)).toFixed(1);
    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    let classificacao = '';
    let cor = '';

    if (imc < 18.5) {
        classificacao = 'Magreza';
        cor = 'red';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
        cor = 'green';
    } else if (imc >= 25 && imc < 29.9) { 
        classificacao = 'Sobrepeso';
        cor = 'orange';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau 1';
        cor = 'red';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau 2';
        cor = 'red';
    } else {
        classificacao = 'Obesidade grau 3';
        cor = 'purple';
    }

    resultado.innerHTML = `Olá, ${nomeFormatado}, seu IMC é ${imc}kg/m².<br>Você está classificado(a) com ${classificacao}!`;   
    resultado.style.display = 'block';
    resultado.style.color = cor;

    } else {
        resultado.textContent = 'Por favor, preencha todos os campos.';
        resultado.style.display = 'block';
        resultado.style.color = 'red';
    }
}

botao.addEventListener('click', calcularIMC);
