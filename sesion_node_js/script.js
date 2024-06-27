const os = require('node:os');

function obtenerInfoSistema(){
    return {
        plataforma: os.platform(),
        arquitectura: os.arch(),
        memoria: os.totalmem()
    }
}
function tiempoEncendido(){
    return {
       tiempo: os.uptime() 
    }
}


function suma(a,b){
    return a+b
}
function resta(a,b){
    return a-b
}

module.exports = {
    suma,
    resta,
    obtenerInfoSistema,
    tiempoEncendido
};