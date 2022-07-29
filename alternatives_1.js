//Invertir una cadena 1
const word = "Antonio";
const newWord1 = word.split("").reverse().join("")
console.log(newWord1);
//Invertir una cadena 2
let newWord2 = "";
for(let list of word){
    newWord2 = list + newWord2;
}
console.log(newWord2)


