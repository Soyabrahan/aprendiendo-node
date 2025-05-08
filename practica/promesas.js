const promesaCumplida = false;

const promesa = new Promise((resolve, reject) => { 
    setTimeout(() => {
        if(promesaCumplida) {
            resolve("La promesa se ha cumplido");
        } else {
            reject("La promesa rechazada");
        }

  }, 3000);
});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

promesa
.then(manejarPromesaCumplida,manejarPromesaRechazada);