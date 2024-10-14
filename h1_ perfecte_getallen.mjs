
import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const userInput = createInterface({ input, output });

let vindJouwGetal = parseFloat(await userinput.question ("geef een getal in : "));
bereken(jouwGetal);




function bereken(jouwGetal) {
    let som = 0;
    for (let i = 1; i < jouwGetal; i++) {
        if (jouwGetal % i === 0) {
            som += i;
        }
    }
    return som;
}

function vindJouwGetal(max) {
    const jouwGetal = [];
    for (let num = 1; num <= max; num++) {
        const somDelers = bereken(num);
        if (somDelers === num) {
            jouwPerfecteGetallen.push(num);
        }
    }
    return jouwPerfecteGetallen;
}

const jouwGetal = vindJouwGetal(100);
console.log("Perfecte getallen tussen 1 en 100:" + jouwPerfecteGetallen);






for(let i = 1; i < 100; i++){
 let som = 0;
 for (let j = 1; j < i; j++){
    if(i % j == 0){
        som += j;
 }
}

 if(som == i){
    console.log ; + (" is een perfect getal");
 
}

}

userInput.close();