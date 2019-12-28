import '../css/style.scss'

class Cliente {
    constructor(nombre) {
        this.nombre = nombre
    }
}

const cliente = new Cliente('pedro')
console.log(cliente)

console.log('Desde Nosotros');