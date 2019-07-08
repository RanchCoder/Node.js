const fis = require('fs');
fis.unlink('NewName.txt',(err)=>{if(err){console.log(err);}
                                 else{console.log('data file deleted');}
                                });