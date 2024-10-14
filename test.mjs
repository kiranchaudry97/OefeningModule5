
import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const userInput = createInterface({ input, output });




function maalDrie(nummer) {
    let resultaat = nummer * 3;
    console.log("Het resultaat van" + nummer + "vermenigvuldigd met 3 is" + resultaat)
}

maalDrie(5); 


process.exit()
