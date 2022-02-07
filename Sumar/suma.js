 function suma(n1, n2){
    return (n1 + n2)
}
module.exports = suma

function sumar(n1, n2) {return n1 + n2}


let sumaArrow = (n1, n2) =>  n1 + n2
console.log(sumaArrow(2, 2));
console.log(sumar(2, 5)); 

//if ternario
/* ( *//* "2"===2)
? "uno de los dos datos no es igual al otro" : "son iguales" */
/* 
let puedePasar = (nombre) => (nombre === "Cosme Fulanito") ? false : true
console.log(puedePasar("cristian moreno")); */
for (let vueltas=1; vueltas<=10; vueltas++) {
    console.log(vueltas);
}