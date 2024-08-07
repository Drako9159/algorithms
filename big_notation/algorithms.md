# Big O Notation

- la cantidad de datos
- número de cantidad de pasos
- ignorar constantes O(N)

````typescript
function sumar(n: number[]) {
    let suma = 0;

    for(let i = 0; i < n; i++){
        suma += 1;
    }

    return suma;
}


function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}
````

1- crea un nuevo objeto para almacenar el resultado
2- concatenar la cadena Hola + nombre
3- devolver la cadena

O(1)

# Tipos Notation

1- O(1)constant 1 paso
2- O(log N) logaritmico (busqueda binaria) 10 pasos
3- O(N) linear (bucle) 1000 pasos
4- O(N log N) linealitmico (ordenación rápida) 10000 pasos
5- O(N^2) tiempo cuadratico (bucles anidados) 1000000 pasos
6- O(2^N) tiempo exponencial (algoritmo recursivo) 2^1000 pasos
7- O(N!) factorial 1000! pasos

# no queremos exponencial y factorial

a menos, que estemos seguros que la cantidad de datos que nos proporcionan es muy pequeña

O(1) A
O(log N) B
O(N) C
O(N log N) D
O(N^2) F
O(2^N) F
O(N!) F

## O(1) example:

````typescript
function sayHi(n: string): string{
    return `Hola ${n}`;
}
````
- cantidad constante de trabajo
- el número de pasos necesarios para completar el algoritmo no depende del tamaño

## O(log N) example, tiempo logaritmico, binary search:
````typescript
const arr = [0,1,2,3,4,5];
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];

        if(midValue == target) {
            return mid;
        }

        if(midValue < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
````
por cada interacción del bucle, el espacio de búsqueda se reduce a la mitad
este proceso de división continua se realiza hasta que se reduce todo a un solo elemento
o se encuentra el objetivo dado que el espacio de búsqueda se divide a la mitad en cada iteración,
el número de iteraciones requeridas para alcanzar el elemento crece de forma algoritmica O(log N)

## O(N) linear example:
````typescript
function suma(n: number): number {
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += i;
    }
    return sum;
}
````
el algoritmo itera sobre todo el arreglo
cantidad de trabajo ante cada iteración es constante
a medida que aumenta el tamaño de nuestros elementos, la complejidad aumenta en la misma medida

## O(N log N) tiempo linealitmico example:
````typescript
const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];

    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

} 
````

## O(N^2) cuadratica
````typescript
const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];

function bubbleSort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

````
el ordenamiento buirbuja funciona repasando la lista repetidamente, compara elementos adyacentes y cambiando los que estan en orden diferente, en el pero de los casos, el arreglo está en orden inverso, el burbujeo necesitará N, en cada pasada va a necesitar N - 1 comparaciones e intercambios


## O(2^N) tiempo exponencial
````typescript
function fibonacci(n: number): number {
    if(n <= 1) { 
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
````
en cada llamada recursiva a la funcion fibonacci se realisa una vez dos llamadas adicionales n - 1 y n - 2, eso hace que se haga un crecimiento exponencial, cada nivel de recursion se bifurca en dos llamadas recursivas

## 0(N!)
````typescript
const arr = [1, 2, 3];

function permute(arr: number[]): number[][] {
    if(arr.length <= 1) {
        return [arr];
    }
    const result: number[][] = [];

    for(let i = 0; i < arr.length; i++) {
         const rest = arr.slice(0, 1).concat(arr.slice(i + 1));
         const permutations = permute(rest);
         for(const perm of permutations) {
            result.push([arr[i], ...perm]);
         }
    }
    return result;
}
````
en cada llamada recursiva a la funcion permute, el algoritmo va a generar permutaciones seleccionando cada elemento del arreglo como primer elemento y luego generando recursivamente permutaciones de los elementos restantes, el número de permutaciones crece factorialmente con el tamaño del arreglo entrante, para cada elemento hay (N-1)! permutaciones de los elementos restantes, el número total de permutaciones es N * (N-1) * (N-2)... O(N!)


## Complejidad

Mejor VS Peor VS Promedio

## Complejidad espacial

- Big O Notation es la complejidad basada en la cantidad de pasos según el elemento de entrada

- Espacial es la memoria basada en el tamaño de la entrada para poder ejecutar el algoritmo


