//arrow function o funciones flecha

//pasos para construir un funcion

//1. palabra reservada "function"

//2. poner un nombre que describa el trabajo que realiza la funcion

//3. la funcion puede resivir parametros, pero si o si indicar que tendra parametro
    // () mi funcion no va recibir un parametro
    //(edad) mi funcion va a recibir un parametro
    //(edad, nombre)

//4. DATO IMPORTANTE. una funcion siempre tiene que retornar un tipo de dato
 function saludo(){
    let saludo= 'hola como estas'
    return saludo
 }
 //para usar una funcion, debo usar llamar la funcion
 saludo
 console.log(saludo())

  function saludo1(nombre,  apellido){
    let saludo1 = 'hola como estas '+nombre+' '+apellido
    return saludo1
  }
  console.log(saludo1('Alvaro', 'Toledo'))

