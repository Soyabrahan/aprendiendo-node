//Primera app con node.js
//modulo saludo.js
function saludar(nombre){
    return "Holaaa " + nombre;
}

function saludarMundo(){
    return "Hola MUNDOTE";
}

//exportar la funcion saludar
module.exports.saludar = saludar;

//exportando hola mundo
module.exports.saludarMundo = saludarMundo();