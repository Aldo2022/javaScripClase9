const obtenerUsuarios = async() => {//El ASYNC resume el codigo y lo hace legible
    const user = await fetch("https://jsonplaceholder.typicode.com/users")//el  AWAIT espera que se almacene la info y luego lo guarda en la constante
    return user;                                                                 //Para consultar escribo asi -----https://jsonplaceholder.typicode.com/todos?id=158-----
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