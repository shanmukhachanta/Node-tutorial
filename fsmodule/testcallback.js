const {readFile} = require('fs')

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data)
            }
        })
    })
}

getText('./fsmodule/first.txt').then((result)=>{console.log(result)}).catch((result)=>{console.log(`THE ERROR IS : ${result}`)})