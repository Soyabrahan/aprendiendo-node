//concatenar promesas
function ordenarProducto(producto){
    return new Promise((resolve, reject) =>{
        console.log("Ordenando:" + producto + " de PESCALO.C.A");
        setTimeout(() => {
            if (producto === "taza"){
                resolve ("Ordenando una taza con el logo de PESCALO....");
            } else {
                reject ("NO HAY PRESUPUESTOOOOO");
            }

        },2000);
    })
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log("procesando respuesta....");
        console.log("RESPUESTAAAAAAAA: (" + respuesta );
        setTimeout(() => {
            resolve("Graciaaaaas por compraaaaar");
        },4000);
    })
}

ordenarProducto("taza")
.then(respuesta =>{
    console.log("Respuesta recibida");
    console.log("respuesta");
    return procesarPedido(respuesta);
})
.then(respuestaProcesada => {
    console.log(respuestaProcesada)
})
.catch(error =>{
    console.log("ERRORRRRRRR")
});