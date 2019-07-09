const fs = require('fs');
const readS = fs.createReadStream('FolderViaCode/example.txt','utf8');
const writeStream = fs.createWriteStream('FolderViaCode/example2.txt');
readS.on('data',(chunck)=>{
    writeStream.write(chunck,(err)=>{if(err){console.log(err);}
                                     else{console.log('writing successfully');}  
                                    });
});