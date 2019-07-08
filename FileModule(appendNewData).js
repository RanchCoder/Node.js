const file = require('fs');
file.appendFile('NewName.txt','\nI had forgot this line',(err)=>{if(err) console.log(err);
                                                               console.log('\nFile updated and appended successfully');
                                                              });