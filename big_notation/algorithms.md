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

## O(log N) example, tiempo logaritmico:
````typescript

````



## O(N) example:
````typescript

````

````typescript

````

````typescript

````