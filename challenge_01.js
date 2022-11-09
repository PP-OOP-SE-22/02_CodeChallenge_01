
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Ideale Lösung

// let ZahlA = parseInt(prompt("erste Zahl:"));
// let ZahlB = parseInt(prompt("zweite Zahl:"));
// let summe = ZahlA + ZahlB

// console.log("Die Summe der Zahlen ist: " + summe);


/************ Variante 1 *************/

// Deklaration
let zifferA, zifferB
let ZahlA, ZahlB
let summe

ziffer1 = prompt("Zahl 1:");
ziffer2 = prompt("Zahl 2:");
console.log(typeof ziffer1);
console.log(typeof ziffer2);

// Eingabe - Wertzuweisung :: Ziffern
ZahlA = parseInt(ziffer1);
ZahlB = parseInt(ziffer2);
console.log(typeof ZahlA);
console.log(typeof ZahlB);


// Berechnung :: Summe / Addition
summe = ZahlA + ZahlB;

// Ausgabe
console.log("Die Summe der Zahlen ist: " + summe);
