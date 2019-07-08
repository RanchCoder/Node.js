const readline = require('readline');
const rl = readline.createInterface({input:process.stdin , output:process.stdout});

num1 = 4;
num2 = 5;
answer = num1 + num2;

// here we ask question to the user , to input the sum of two number
rl.question(`what is the sum of ${num1} + ${num2}\n`,
             (userInput)=> { //this is a callback function , which will verify the userInput with the answer variable
                 if(userInput.trim() == answer) {rl.close();}
                 else{//if not equal then it will inform the user
                     rl.setPrompt('Incorrect response , Please enter valid answer\n');
                     rl.prompt(); // this will set the prompt with the given text
                     rl.on('line',(userInput)=>{ // now we asked the user to input again ,  
                         if(userInput.trim() == answer){ // callback function to reverify the answer
                             rl.close();
                         }
                         else{ // we again set the prompt to recieve the user input and loop this to verify again and again
                             rl.setPrompt(`your answer of ${userInput} is incorrect, Try Again\n`);
                             rl.prompt();
                         }
                     });
                 }
                
                }
            
             );
 rl.on('close',()=>{console.log('You got the correct Answer mate!!!!')});            