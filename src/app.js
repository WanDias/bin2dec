// o campo só deve aceitar os caracteres 0 ou 1
function caracteres(e) {
    let tecla = e.keyCode
    tecla = String.fromCharCode(tecla)

    if ( tecla == 0 || tecla == 1 ) {
        return true
    } else {
        return false
    }
}

// calcula o valor decimal
function calcular() {
    let resultado = 0;
    let numero = document.getElementById("binario").value
    let invertido = numero.split('').map(Number).reverse()

    for (let i = 0; i < invertido.length; i++) {
        resultado += invertido[i] * Math.pow(2,i)
    }

    let frase = `O valor binário ${numero} em decimal é ${resultado}.`

    console.log(frase)
    document.getElementById('binario').value = ''
    document.getElementById('frase').innerText = frase
}