// existen 3
// averiguar su concepto aplicacion y ejercicios.aplicacion
// for
for(let i=2;i<=10;i+=2){
    console.log(i)
}
// while
let eval =true
let eval2='salir'
while(eval==true){
    if(eval2=='salir'){
        console.log('adios')
        eval=false
    }
    console.log('hola')
}


//con la estrutura de ciclo for
//mostrar los numeros pares entre 1 y 20
//ejercicio N1
for(let inicial=2; inicial <=20; inicial++){
    console.log(inicial++)
}
//ejercicio N2
for (let inicial=2; inicial<=20;inicial+=2){
    console.log(inicial)
}
//ejercicio N3
for(let i=1; i <=20; i++){
    if(i%2==0){
        console.log(i)
    }else{
        console.log(i)
    }
}
//ejecicio N4
let vocales='aeiou'
console.log(vocales.length)
console.log(vocales[2])
for(let i=0; vocales.length; i++){
    console.log(vocales[i])
}
//ejercicio N5
let texto='hola como te llamas'
let contador=0
for(let i=0; i<texto.length;i++){
    if (texto[i]=='a'){
        contador+=1
    }
}
console.log('tienes', contador, 'vocales a')
//ejercicio N6
let t='hola como estas'
console.log(t.length)
let cont=0
for (let i=0; i<=t.length;i++){
   switch(t[i]){
    case 'a': case 'e':case 'i':case 'o':case 'u':
        cont+=1
   }
}
console.log('tienes',cont,'vocales')