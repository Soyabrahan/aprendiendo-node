//Primera app con node.js
//modulo saludo.js
function saludar(nombre){
    return "Holaaa " + nombre;
}

function saludarMundo(){
    return "Hola MUNDOTE";
}


module.exports = {
    saludar : saludar,
    saludarMundo : saludarMundo
};