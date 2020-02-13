const { encontraFatoresPrimos } = require('./fatores_primos')

test('Testa se um número primo retorna ele mesmo', () => {
    const primo = 5
    expect(encontraFatoresPrimos(primo)).toEqual(primo)
})
