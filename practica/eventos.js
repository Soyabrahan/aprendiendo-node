console.log('El archivo se está ejecutando.');

const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total,numProductos) => {
    console.log('Se ha realizado una compra por $' + total);
    console.log('Número de productos comprados: ' + numProductos);  
});

emisorProductos.emit('compra',500,5);