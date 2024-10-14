import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let cirkelOppervlakte = 0;
let driehoekOppervlakte = 0;
let rechthoekOppervlakte = 0;
let vierkantOppervlakte = 0;

function oppervlakteCirkel(straal) {
    cirkelOppervlakte = Math.PI * straal * straal;
}

function oppervlakteDriehoek(basis, hoogte) {
    driehoekOppervlakte = (basis * hoogte) / 2;
}

function oppervlakteRechthoek(zijde1, zijde2) {
    rechthoekOppervlakte = zijde1 * zijde2;
}

function oppervlakteVierkant(zijde) {
    oppervlakteRechthoek(zijde, zijde);
    vierkantOppervlakte = rechthoekOppervlakte;
}

let straal = 2;
let basis = 3;
let hoogte = 5;
let zijde1 = 2;
let zijde2 = 4;
let zijde = 4;

oppervlakteCirkel(straal);
oppervlakteDriehoek(basis, hoogte);
oppervlakteRechthoek(zijde1, zijde2);
oppervlakteVierkant(zijde);

console.log('De oppervlakte van een cirkel met straal ' + straal + ' is ' + cirkelOppervlakte);
console.log('De oppervlakte van een driehoek met basis ' + basis + ' en hoogte ' + hoogte + ' is ' + driehoekOppervlakte);
console.log('De oppervlakte van een rechthoek met zijde1 ' + zijde1 + ' en zijde2 ' + zijde2 + ' is ' + rechthoekOppervlakte);
console.log('De oppervlakte van een vierkant met zijde ' + zijde + ' is ' + vierkantOppervlakte);

process.exit();
