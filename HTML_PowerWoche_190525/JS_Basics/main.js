// Einzeiliger Kommentar
/*
    Mehrzeilliger
    Kommentar
*/

// Konsolenausgabe
console.log("Hallo");

// Zugriff aufs DOM
document.writeln("Hallo Welt!");

// Variablen
var zahl1 = 10;
let zahl2 = 20;
const Hallo = 'Hallo';
var bool = true;

// function

function greeter() {
    console.log("Das ist eine Funktion!");
}

greeter();

// Funktion mit Parameter
function multiplier(numOne, numTwo) {
    return numOne * numTwo
}

console.log(multiplier(10, 5));

// Kontrollstrukturen
// if, if-else, if-elseif-else, Konditionaloperator
var numberOne = 50;
var numberTwo = 100;

if(numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
    // console.WriteLine($"Hallo das ist die variable {var}")
}

if(numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
    // console.WriteLine($"Hallo das ist die variable {var}")
}
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}

// Konditional operator
// (Bedingung) ? True-Wert : False-Wert
let ergebnis = (numberOne < numberTwo) ? "Nummer 1 ist kleiner" : "Das ganze war falsch";
console.log(ergebnis);

// Noch kürzer
function isEven(number) {
    return (number % 2 === 0) ? true : false;
}

// Switch
switch(numberOne) {
    case 10:
        console.log("Zahl ist 10");
        break;
    case 30:
        console.log("Zahl ist 30");
        break;
    case 50: 
        console.log("Zahl ist 50");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
}

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 als auch durch 5 teilbar sind werden mit 
// FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben

// function FizzBuzz {
//     var erg = "";

// }

// Funktioniert garned
// function FizzBuzz(Zahl){
//     var Ergbnis;
//     switch(Zahl){
//         case (Zahl % 3 === 0):
//         Ergbnis = "Fizz";
//         return Ergbnis;
//     case (Zahl % 5 === 0):
//         Ergbnis = "Buzz";
//         return Ergbnis;
//     case (Zahl % 3 === 0 && Zahl % 5 === 0):
//         Ergbnis = "FizzBuzz";
//         return Ergbnis;          
//     default:
//         Ergbnis = "Irgenwas stimmt nicht";
//         return Ergbnis;
//     }
// }

// console.log(FizzBuzz(10));

function FizzBuzz2(Zahl) {
    var Ergebnis = "";
    if(Zahl % 3 === 0 && Zahl % 5 === 0) {
        Ergebnis = "FizzBuzz";
    }
    else if(Zahl % 5 === 0) {
        Ergebnis = "Buzz";
    }
    else if (Zahl % 3 === 0){
        Ergebnis = "Fizz";
    } else {
        Ergebnis = "Das ist seltsam...";
    }
    return Ergebnis;
}

console.log(FizzBuzz2(3));

// for
for(var i = 0; i < 10; i++) {
    console.log(`i: ${i}`);
}

// while
var a = 0;
while(a < 10) {
    console.log(`a: ${a}`);
    console.log("A:" + a);
    a++;
}
// do While
var b = 0;
do {
    console.log(`b: ${b}`);
    b++;
} while(b < 10);