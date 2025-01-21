// Eine Zahl die durch 3 teilbar ist wird durch Fizz
// Eine Zahl die durch 5 teilbar ist wird durch Buzz
// Eine Zahl die durch 3 und 5 teilbar ist wird durch FizzBuzz

// Erstellt eine Aufzählung von 1 bis 100
// es soll für jede Zahl ein console.log() mit der Zahl oder dem Wrt auftauchen

// for (let i = 1; i<=100; i++)
//     {
//         console.log(i)

//         if (i % 3 == 0 && !(i % 5 == 0))
//         {
//             console.log("FIZZ")
//         } else if (i % 5 == 0 && !(i % 3 == 0))
//         {
//             console.log("BUZZ")
//         } else if (i % 3 == 0 && i % 5 == 0)
//         {
//             console.log("FIZZBUZZ")
//         }
//     }

// let number = ""

// console.log("Bitte gib eine Zahl zwischen 1 und 10 ein")

// if (number < 3 ) {
//     console.log("kleiner drei")
// } else if (number == 3 ) {
//     console.log("drei!")
// } else if (number > 3 ){
//     console.log("größer drei")
// } else {
//     console.log("keine richtige zahl")
// }

// let all_limits = [5, 10, 15]
// console.log(fizz_buzz(all_limits))

function fizz_buzz(limit) {
  
  for (let counter = 1; counter <= limit; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (counter % 3 === 0) {
      console.log("Fizz");
    } else if (counter % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(counter);
    }
  }
}


// fizz_buzz(10)



let final_number_1 = 5;
let final_number_2 = 10;
let final_number_3 = 15;

// fizz_buzz(final_number_1);
// console.log("----------------------------")
// fizz_buzz(final_number_2);
// console.log("----------------------------")
// fizz_buzz(final_number_3);



// snake_case return_my_name
// kebab-case return-my-name

// camelCase returnMyName     in JS best practice
// PascalCase ReturnMyName


// Schreibe eine Funktion die einen name annimmt und Hello Name zurückgibt

// function returnMyName(name) {
//   return "hello " + name;
// }

// console.log(returnMyName("Max Mustermann"))

// function logMyName(name) {
//   console.log("hello " + name)
// }
// logMyName("Ali");

////////////////////////////////////////////

function myName(userName) {
  let output = "Hello " + userName
  console.log("Hier!!!!! " + output)
  return output;
}


// function niceToMeetU(helloName) {
//   return helloName + " nice to meet you!";
// }

// let helloUser = myName("Bahram")

// let helloAndNice = niceToMeetU(helloUser)

// console.log("hier der output " + output)
// console.log(helloAndNice)


// let 

// const



// Versucht eine Währungsrechner Funktion zu entwickeln.

// Versucht eine Zinseszins Funktion zu entwickeln.

// Schreibe eine Funktion die prüft ob zwei Arrays gleichlang sind.




// let my_array_1 = [3, 2, 1]
// let my_array_2 = [3, 2, 1, 0]


function array_l(arr_1, arr_2) {
  try {
    return arr_1.length === arr_2.length;
  } catch {
    console.log("falsche daten")
  }

  
  // if (arr_1.length === arr_2.length) {
  //   return true
  // } else {
  //   return false
  // }
}

// console.log(array_l(my_array_1, my_array_2))
// console.log(array_l(3, undefined))



// let word = "2"
// let num = 2

// if (word === num) {
//   console.log("true")
// } else {
//   console.log("false")
// }



// Schreibe eine Funktion die prüft ob zwei Arrays gleich sind.


let my_string = "[3, 2, 4]"

const name = "Bob"
const array_1 = [1, 2, 3]
array_1.push(4)
// console.log(array_1)

// function arrayCompare(arr_1, arr_2) {
//   // console.log(typeof(arr_1));
//   // console.log(typeof(JSON.stringify(arr_1)));
//   return (JSON.stringify(arr_1) === JSON.stringify(arr_2))
// }

// console.log(arrayCompare(my_array_1, my_array_2))


let my_array_1 = [3, 2, 1];
console.log(my_array_1[0]);
console.log(my_array_1[1]);
console.log(my_array_1[2]);
console.log(my_array_1[7]);

let my_array_2 = [3, 2, 4];
let my_array_3 = [3, 2, 4];



function compareArray(arr_1, arr_2) {
  if (arr_1.length !== arr_2.length) {
    return false
  }

  for (let i = 0; i < arr_1.length; i++) {
    if (arr_1[i] !== arr_2[i]) {
      return false
    }
  }

  return true
  
  // let index = 0

  // while (index < arr_1.length) {
  //   if (arr_1[index] == arr_2[index]) {

  //   } else {
  //     return false
  //   }
  //   index++
  // }

  // return true
}

console.log(compareArray(my_array_1, my_array_2))
console.log(compareArray(my_array_3, my_array_2))