const fs = require('fs');
fs.readdir('FolderViaCode',(err,files)=>{
                                   if(err){console.log(err);
                                  }
                                  else{console.log(files);}
                                  });

                                  //in this code we will access the files of the folder and delete it
fs.readdir('FolderViaCode',(err,files)=>{if(err)console.log(err);
                                         else{
                                               for(file of files){
                                                   fs.unlink('./FolderViaCode/'+file,(err)=>{
                                                       if(err){console.log(err);}
                                                       else{console.log('file deleted succesfully');}
                                                   })
                                               }     
                                             }
                                        }
          );                                  