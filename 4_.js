//Se crea un arbolito con un tronco definido y la altura entra como parametro


function createXmasTree(height) {
const tree = [];
const undercode = "_";
const asterisk = "*";
  const tronco = 2 * height - 1;
  for(let i=1; i<=height;i +=1){
    const repeatUndercode = height - i
    const repeatAsteristik = tronco - 2 * repeatUndercode
    const underScore = undercode.repeat(repeatUndercode)
    const asteriskScore = asterisk.repeat(repeatAsteristik)
    tree.push(`${underScore}${asteriskScore}${underScore}\n`)

  }
  const underScore = undercode.repeat(height - 1);
  tree.push(`${underScore}#${underScore}\n`)
  tree.push(`${underScore}#${underScore}`)
   return tree.join("")
}

console.log(createXmasTree(5));