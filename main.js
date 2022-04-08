class Juego {

    constructor(nombre, editor, precio, stock) {
        this.nombre = nombre.toUpperCase();
        this.editor = editor.toUpperCase();
        this.precio = precio;
        this.stock = stock;
    }

    detalle() {
        return `
            Detalles del juego ${this.nombre} 
               Editor: ${this.editor}
               Stock Actual: ${this.stock}
               Precio: ${this.precio}
        `;
    }

    iva(porc) {
        return (this.precio * porc / 100);
    }

    vender(cantidad) {

        let stockActual = this.stock;

        if (this.stock == 0) {
            return `No hay stock del juego ${this.nombre}`;

        } else if (this.stock >= cantidad) {

            this.stock -= cantidad;

            return `Se vendieron ${cantidad} unidades del juego`;
        } else if (cantidad > this.stock) {
            this.stock = 0;
            return `Se vendió unicamente ${stockActual} unidades del juego`;
        }
    }
}

class Carrito {

    constructor(id, usuario, juegos) {
        this.id = id;
        this.usuario = usuario;
        this.fecha = new Date();
        this.juegos = juegos;
    }

    agregarProducto(juego) {
        this.juegos.push(juego);
    }

    total() {
        return this.juegos.reduce((acc, juego) => acc + juego.precio, 0);
    }

    detalle() {

        if (this.juegos.length == 0) {
            return `El carrito se encuentra vacío`;
        }

        let msj = `El carrito contiene ${this.juegos.length} juegos:\n`;

        this.juegos.forEach(juego => {
            msj += ` - ${juego.nombre} - $ ${juego.precio}\n`;
        });

        msj += `\nMonto Total: $${this.total()}`;

        return msj;
    }

}

function agregarJuegoACarro() {

    let nombre = '';

    while (nombre != '0') {
        nombre = prompt('Ingrese nombre del juego (0 para finalizar)');

        if (nombre == '0') {
            break;
        }
        let editor = prompt('Ingrese nombre del editor del juego');
        let precio = parseFloat(prompt('Ingrese precio del juego'));
        let stock = parseInt(prompt('Ingrese stock del juego'));

        let juego = new Juego(nombre, editor, precio, stock);
        carro.agregarProducto(juego);
    }


}

/* Creo un carro de ejemplo */
let carro = new Carrito(1, 'pepe2022', []);

agregarJuegoACarro();

alert(carro.detalle());