const fs=require('fs');

function writeFile(fileName,data){
    return new Promise((res,rej)=>{
        fs.writeFile(fileName,data,(err)=>{
            if (err){
                rej(err)
            }
            res('The file has been saved')
        })
    })
}

writeFile("file.txt", "The contents of my file")
.then((success)=>{console.log(success) })
.catch((error)=>{ console.error(error) })




// writeFile('file.txt','The Content')