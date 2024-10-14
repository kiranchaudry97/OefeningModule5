import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



function persoonlijkebegroeting (naam){
    console.log( 'hallo'  + naam +  'welkom' )
    
}

persoonlijkebegroeting('Kiran');






