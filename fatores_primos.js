const encontraFatoresPrimos = (numero) => {

    if (numero == 0 || numero == 1) {
        return numero + " = " + numero
    }

    let fatores = []
    let dividendo = numero
    let divisor = 2

    while (dividendo != 1) {

        if (dividendo % divisor == 0) {
            fatores.push(divisor)
            dividendo = dividendo / divisor
        } else {
            divisor = proximoPrimo(divisor)
        }
    }

    resposta = numero.toString() + " = " + fatores.join(" x ")

    return resposta
}

function proximoPrimo(atual) {
    let proximo = atual + 1
    
    while (!verificaPrimo(proximo)) {
        proximo++
    }

    return proximo
}

function verificaPrimo(numero) {
    let contador = 0
    
    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            contador++
            if (contador > 1) {
                return false
            }
        }
    }

    return true
}

module.exports = {
    encontraFatoresPrimos
}
