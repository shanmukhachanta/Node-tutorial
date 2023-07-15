const { writeFile, readFile } = require('fs').promises

const letSee = async () => {
  try {
    const first = await readFile('./fsmodule/first.txt', 'utf-8');
    await writeFile('./fsmodule/write.txt', `This is from the write file ${first}`);
    console.log('File write operation complete.');
  } catch (err) {
    console.log('there is an error',err);
  }
};

letSee();



// 1) const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }




// const letSee =  async () => {
//     try{
//         // 1) const first =  await getText('./fsmodule/first.txt')
//         const first = await readFilePromise('./fsmodule/first.txt','utf-8')
//         console.log(first);
//         await writeFile('./fsmodule/write.txt',`This is from the write file ${first}`)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// letSee();