//javascript parte 1ESTRUCTURAS CONDICIONALES //

// const edad = 24
// const nombre = "Tomas Daniel"

// const edad2 = 40
// const nombre2 = "matias"

// const edad3 = 28
// const nombre3 = "esteban"

//IF//

// if (edad > edad3) {
//     console.log(nombre + " es mayor que " + nombre3)
// }
// else {
//     console.log(nombre + " es menor a " + nombre3)
// }

const sueldo = prompt("ingrese su sueldo");

if (sueldo <= 1000000) {
  console.log("es categoria A");
} else if (sueldo >= 1000000 && sueldo <= 2000000) {
  console.log("es categoria B");
} else if (sueldo >= 2000000 && sueldo <= 5000000) {
  console.log("es categoria C");
} else {
  console.log("es categoria D");
}

//switch ejemplo //

let dia = prompt("ingrese un dia de la semana");

switch (dia.toLowerCase()) {
  case 'lunes':
    console.log("es " + dia + " , alto bajon");
    break;
  case 'martes':
    console.log("es " + dia + " , la sube un tok");
    break;
  case 'miercoles':
    console.log("es " + dia + " , peor dia de la semana lejos");
    break;
  case 'jueves':
    console.log("es" + dia + " o juernes?");
    break;
  case 'viernes':
    console.log("es" + dia + "vayanse al pingo todos uraaaaaaaa, vacia.");
    break;
  default:
    console.log("Día no reconocido");
    break;
}

