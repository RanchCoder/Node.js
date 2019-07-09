const fs = require('fs');
fs.mkdir('FolderViaCode',(err)=>{if(err){
                                         console.log(err);
                                        }
                                 else{
                                     fs.writeFile('./FolderViaCode/abc.txt','This file is inside folder',(err)=>{
                                                                                                                 if(err){
                                                                                                                          console.log(err);
                                                                                                                        }
                                                                                                                 else{
                                                                                                                     console.log('file Created Inside folder via code');

                                                                                                                 }       
                                                                                                                }
                                                 )
                                    }
                                }
         );