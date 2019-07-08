// we need to import the readLine module to use it to read input from the user and display it in the output stream
const read = require('readline');
//now we need to invoke the createInterface method of the readline class and use two properties input , output
const rl = read.createInterface({input:process.stdin ,
                                 output:process.stdout
                                });
rl.question('first question using readLine interface module\n',(answer)=>{console.log(`thanks for your valuable answer : ${answer}`);
            rl.close();
            });                                
