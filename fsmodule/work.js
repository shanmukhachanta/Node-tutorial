const {readFile,writeFile} = require('fs');
const path = require('path');



readFile('./fsmodule/first.txt', 'utf-8',(err,result)=>{
    if(err){
    console.log(err);
    }
    const first = result;
    readFile('./fsmodule/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second = result;
        writeFile('./fsmodule/final.txt',`final result iss ${first} ${second}`)
    })
});

