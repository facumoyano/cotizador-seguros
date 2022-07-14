export const marcas = [
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'},
]

const yearMax = new Date().getFullYear();
export const years = Array.from(new Array(20), (valor, index) => yearMax - index)

export const planes = [
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'}
]