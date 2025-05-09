console.log('El archivo se está ejecutando.');
const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
}; 

const miPedidoDePizza = new Promise((resolve,reject) => {
    setTimeout(() =>{
        if (estatusPedido()){
            resolve("Pedido Exitoso ! Su pizza esta en camino")
        } else {
            reject("ocurrio un error.intente nuevamente");
        }
    }, 3000)
}) ;
/*
const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError)
}; */

miPedidoDePizza
.then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
})
.catch((mensajeDeError) => {
    console.log(mensajeDeError)
});