/*Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
1º Almacenar todos los números en un array
2º Almacenar en otro array los números comprendidos entre el 1 y 250
3º Almacenar en otro array los números comprendidos entre el 251 y 500*/


let numerosArray = [];
let numerosPeques = [];
let numerosGrandes = [];

function solicitarNumeros(numeros) {

    for (let i = 0; i < 10; i++) {
        let numeros;
        do {
            numeros = parseInt(prompt(`Ingresa un numero comprendido entre 0 y 500`));
            if (numeros < 0 || numeros > 500) {
                console.log(`Ingresa un numero valido...`)
            }
        }
        while (numeros < 0 || numeros > 500) 
            numerosArray.push(numeros);
            if (numeros < 250) {
                numerosPeques.push(numeros);
            } else {
                numerosGrandes.push(numeros);
            }
        
        
    }
    console.log(numerosArray);
    console.log(numerosGrandes);
    console.log(numerosPeques);
}
solicitarNumeros();