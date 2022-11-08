//function contarVocales(texto){return contidadVocales}
//contarVocales('eucalipto') //5
//funcion calculadora(num1,num2,peracion){return total}
//calculadora(45,12,resta)//33
function cotarVocales(palabra){
    let cont=0
    for (let i=0; i<=palabra.length;i++){
        switch(palabra[i]){
            case 'a': case 'e':case 'i':case 'o':case 'u':
        cont+=1
        }
    }
    let contarVocales='tienes ' + cont
        return contarVocales
}
console.log(cotarVocales('hola'))


// function calcular(num1,o,num2){
// }
// console.log(12,12)
