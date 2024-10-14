import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

function temperatuurOmzetting(temperatuur, isCelcius) {
    if (isCelcius) {
        return (temperatuur * 9/5) + 32;
    } else {
        return (temperatuur - 32) * 5/9;
    }
}

let tempInCelsius = 20;  
let tempInFahrenheit = 68;  

let fahrenheit = temperatuurOmzetting(tempInCelsius, true);
let celsius = temperatuurOmzetting(tempInFahrenheit, false);

console.log('De temperatuur ' + tempInCelsius + ' graden Celsius is gelijk aan ' + fahrenheit + ' graden Fahrenheit.');
console.log('De temperatuur ' + tempInFahrenheit + ' graden Fahrenheit is gelijk aan ' + celsius + ' graden Celsius.');

process.exit();
