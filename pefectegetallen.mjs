
import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

let userInput = createInterface({ input, output });

let grooteGetallenReeks = parseFloat(await userinput.question ("geef een getal in : "));
perfectnumbercalculator(grootgetallenreeks);





function perfectnumbercalculator(grooteGetallenReeks){
    for(let i = 1; i < grooteGetallenReeks; i ++){
        let som = 0;
        for (let j = 1; j < i; j++){
            if(i % j == 0){
                som += j;
            }
        }

if (som == i){
    console.log(i + "is een pefect getal");
}

}



}


