const fs = require('fs');
fs.writeFile('example.txt',"This is going to be the text of the created file",(err)=>

{
    if(err){console.log(err);}
    else{console.log('file creation with input successful');
         fs.readFile('example.txt','utf8',(err,file)=>{
             if(err)console.log(err);
             else console.log(file);
            }); 
        }
}
);