const fs=require('fs');

const fileName=process.argv[2];

fs.readFile(fileName,(err,data)=>{
    const fileContent=data.toString();
    const linesArray=fileContent.split('\n');
    linesArray.forEach((line,index)=>{
        console.log(`${index} | ${line}`)
    })
})