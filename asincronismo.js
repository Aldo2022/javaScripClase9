// CallBacks

const mostrarBienvenida = (nombre) => {
    return'Bienvenid@ al servidor ' + nombre
}

function mostrarMensaje(nombre,apellido){
    return `Bienvenido ${nombre} ${apellido}`//ternario
}

//Funcion de ordem Superior tiene como arg Objeto Datos y una funcion

const saludar = function(datos,fnMostrarMensaje){//
    const {nombre,apellido}=datos//desestructura el objeto datos en donde nombre y apellido queda como variables independientes
    console.log(fnMostrarMensaje(nombre,apellido))//luego esta funcion toma los argumentos para mostrarlos 
}

const user = { nombre: "Jhon", apellido: "Wicks"}

saludar(user,mostrarMensaje);
saludar(user,mostrarBienvenida);
//--------------------------------------------------------------------------------------------------------------------------

const modales = function (nombre) {
    return nombre + `es de boca Junior`
}

function tratar(nombre, apellido) {
    return nombre + ` ` + apellido + ` es una persona amable`;
}

const empezamos = (obj, des) => {
    const { nombre, apellido } = obj;
    console.log(des(nombre, apellido));
}

const objnew = { nombre: "aldo", apellido: "perez" };

empezamos(objnew, modales);
empezamos(objnew, tratar);
//----------------------------------------------------
const a = function(nombre){
    return nombre+' es el mejor '
}
function b( nombre, apellido){
    return `El programador ${nombre} ${apellido}`
}

const fnPrincipal =  (Obje,FnIntenrna)=>{
    const{nombre,apellido}=Obje;
    console.log(FnIntenrna(nombre,apellido))
}

const persona ={nombre:"gabriel",apellido:"vargas"}

fnPrincipal(persona,a);
fnPrincipal(persona,b);

//--------------------------------------------------------------------------------------------------------------------------
//PROMESA

const obtenerUsuario = ()=>{//Esta funcion no toma argumentos pero devuelve una promesa
    const usuarios = new Promise((resolve, reject) => {
        if(true===true){
            resolve({username: "aldo", rol: "admin"})//si la consulta es exitosa se devuelve con un objeto
            return
        }else{
            reject('Error en la consulta')//si la promesa es falsa se devuelve con un error
        }
    })
    return usuarios
}

obtenerUsuario()//para manejar el resultado de la promesa se llama al metoddo  .then  .catch   .fianlly
    .then((data) => {//el argumento data contiene un objeto
        console.log(data)//aca se imprime el objeto data
    })
    .catch((err) => {//el arguemnto err es un menaje de error
        console.log(err)//se imprime el mensaje
    })
    .finally(() => {//Este metoo se ejecuta siempre en este caso imprime un mensaje
        console.log("Limpiando variables.....")
    })