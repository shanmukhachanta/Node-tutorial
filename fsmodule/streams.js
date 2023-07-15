
const {createReadStream} = require('fs')

const stream = createReadStream('./fsmodule/big.txt','utf-8')

stream.on('data',(result)=>{
    console.log("new data chunk");
    console.log(result);
})

stream.on('error',(result)=>{
    console.log(result);
})