// console.log("Hello World!");

// let my_text = "Hello World!";

// console.log(my_text);

// let first_name = "Mete";
// let last_name = "Ardic";

// let full_name = first_name + " " + last_name;

// function welcome() {
//   console.log("Hello:");
//   console.log(full_name);
//   console.log("Du bist spitze!");
// }

// welcome()

// console.log("neue Runde")

// welcome()

//
// hier ist super code
//

// function hello(name){
//     return "Hello " + name
// }

// // parameter def in der Funktion
// // argument echter Wert beim Aufruf

// let welcome_player = hello("Aaron")

// console.log(welcome_player)

// function add(a, b) {
//   return a + b;
// }

// let summe_2 = add(2, 2)
// let summe_3 = add(3, 3)

// console.log(add(3,3));
// console.log(6)

// function multi(zahl_1, zahl_2){
//     return zahl_1*zahl_2;
// }

// console.log(multi(2,5))

/////////////////////////////////////////


// Variablen in und auserhalb von funktionen


// Wertübergabe und Referenz

function logName(my_name) {
    my_name = "Hello " + my_name
    return my_name
}

let userName = "Mete"

console.log(logName(userName))
console.log("variable: " + userName)


let car = {
  name: "Pegasus",
  ps: 1000,
  marke: "olymp"
}

function updatePs(vehicle) {
    vehicle.ps = 2000;
}

console.log(car.ps)
updatePs(car)
console.log(car.ps)