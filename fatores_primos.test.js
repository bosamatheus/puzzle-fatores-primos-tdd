const { encontraFatoresPrimos } = require('./fatores_primos')

test("Testa se 0 retorna ele mesmo", () => {
    expect(encontraFatoresPrimos(0)).toEqual("0 = 0")
})

test("Testa se 1 retorna ele mesmo", () => {
    expect(encontraFatoresPrimos(1)).toEqual("1 = 1")
})

test("Testa se o número primo 5 retorna ele mesmo", () => {
    expect(encontraFatoresPrimos(5)).toEqual("5 = 5")
})

test("Testa se o número primo 997 retorna ele mesmo", () => {
    expect(encontraFatoresPrimos(997)).toEqual("997 = 997")
})

test("Testa se um número não primo qualquer retorna seus fatores", () => {
    expect(encontraFatoresPrimos(4)).toEqual("4 = 2 x 2")
})

test("Testa se retorna os fatores primos de 100", () => {
    expect(encontraFatoresPrimos(100)).toEqual("100 = 2 x 2 x 5 x 5")
})

test("Testa se retorna os fatores primos de 198", () => {
    expect(encontraFatoresPrimos(198)).toEqual("198 = 2 x 3 x 3 x 11")
})

test("Testa se retorna os fatores primos de 276", () => {
    expect(encontraFatoresPrimos(276)).toEqual("276 = 2 x 2 x 3 x 23")
})
