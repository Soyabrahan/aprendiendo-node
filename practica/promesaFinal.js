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
//NO ASI NOOO
/*
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
});       */

//ASI  SI
async function realizarPedido(producto) {
    try{
        const respuesta = await ordenarProducto(producto);
        console.log("Respuesta recibida");
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error){
        console.log(error);
    }
    
}

realizarPedido("taza");