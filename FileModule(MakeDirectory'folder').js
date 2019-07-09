const fs = require('fs');
// mkdir('folderName',callback()) to create folder
fs.mkdir('ThisFolderIsCreatedViaCoding',(err)=>{if(err){
                                                        console.log(err);
                                                        }
                                                else{console.log('Folder created successfully');}        
                                                }
        );