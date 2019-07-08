const fileStream = require('fs');
fileStream.rename('example.txt','NewName.txt',(err)=>{
                                                            if(err){
                                                               console.log(err);
                                                            }
                                                            else console.log('File created successfully');
                                                        }
                                                        
                 );