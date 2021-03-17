const fs=require('fs');

fs.readdir('./',(err,data)=>{
    console.log(data);
})

const text = "This file will be the content of myFile.txt"

fs.writeFile("myFile.txt",text,err=>{
    console.log('File created!')
})

fs.stat("myFile.txt",(err,stat)=>{
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
})