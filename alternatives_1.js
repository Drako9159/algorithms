//Invertir una cadena 1
const word = "Antonio";
const newWord1 = word.split("").reverse().join("")
//split crea un array//reverse lo pone en reversa//join vuelve a una cadena
console.log(newWord1);
//Invertir una cadena 2
let newWord2 = "";
for(let list of word){
    //recorre la cadena
    newWord2 = list + newWord2;
    //suma una nueva letra a la siguiente
}
console.log(newWord2)


//Contar elementos repetidos 1
const numbers = [1,1,5,2,6,100,100,2,5,5,5,100];
const result1 = [...new Set(numbers)].map(e => {
    //Set no permite duplicados y recive un array
    //[...]covierte a un array
    //map transforma por cada elemento 
    return {element: e, count: numbers.filter(n => n === e).length}
    //map retorna un nuevo objeto con los elementos
    //count hace la suma con un filter
})
console.log(result1);
//Contar elementos repetidos 2
const result2 = [];
for(let num of numbers){
    //recorre la cadena de numeros
    let newElement = true;
    //bandera si el elemento es nuevo
    for (const res of result2) {
        //for para buscar si existe ya existe y entonces sumarlo
        if(res.element == num){
            //Si ya existe, lo suma
            res.count++;
            newElement = false;
            //Como no era nueva, se vuelve a false
        }
    }
    if(newElement){
        //Cuando no es nuevo
        result2[result2.length] = {
            //Se toma la posición del elemento
            element: num,
            count: 1
            //Se toma el objeto
        }
    }
}
console.log(result2);



//Crea aaray de elementos separados por espacios 1
const words = "pato perro  aguila   oso  gato";
const array1 = words.replace(/\s+/gi, " ").split(" ");
//Se remplazan los espacios con uno solo y split crea un nuevo array con los espacios
console.log(array1);


//Crea aaray de elementos separados por espacios 1
const arraySi = [];
let w = "";
//Acumula las variables distintas a espacios
for(let c of words){
    if(c !== " "){
        //Cuando c sea diferente a espacio, se acumula
        w += c;
    } else if(w.length > 0) {
        //Si w tiene algo
        arraySi[arraySi.length] = w;
        w = "";
        //resetea la w
    }
}
if(w.length > 0){
    //Si w se quedó con algo
    arraySi[arraySi.length] = w;

}
console.log(arraySi)