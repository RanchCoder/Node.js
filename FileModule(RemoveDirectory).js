const fs = require('fs');
//rmdir('folder Name',callback()) to remove folder
fs.rmdir('ThisFolderIsCreatedViaCoding',(err)=>{if(err){console.log(err);}
                                                else{console.log('FOlder deleted successfully');}
                                               }
        );
