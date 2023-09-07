/*Desde la linea 3 hasta la 21 es una forma erronea 

const obtenerUsuario = ()=>{
    const usuarios = new Promise(function(resolve,reject){
        fetch('https://jsonplaceholder.typicode.com/users')//fectch es una funcion y devuelve una promesa
            .them((data)=>{//esta promesa viene en formato json
                return data.json()//retornamos data en un objeto de js
            })//Aca cerramos  .then
            .then((user)=>{
                return usuarios //una vez q tengo los datos retorno
            })
    })
//El problema como manejo los datos me impide volver a regresar este punto
}
obtenerUsuario()
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })*/
// !---------------------------------------CONSULTA A UNA API como tendria que hacerse----------- 

async function obtenerUsuarios() {
    const user = await fetch("https://jsonplaceholder.typicode.com/users"); //el  AWAIT espera que se almacene la info y luego lo guarda en la constante
    return user; //Para consultar escribo asi -----https://jsonplaceholder.typicode.com/todos?id=158-----
}
obtenerUsuarios()
/*    .then((data) => {
        console.log(data)
        return data.json()//retorno explicito
    })*/
  .then(data => data.json())
/*    .then((user)=>{
        console.log(user)
        return user; //una vez q tengo los datos retorno
    })*/
  .then((user) => console.log(user))        
/*    .catch((err)=>{
        console.log(err)
    })*/
  .catch(console.log("Error al consultar datos"))