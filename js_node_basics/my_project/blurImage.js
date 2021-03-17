const jimp=require('jimp');
const fileName='./qrcode.png'

jimp.read(fileName, (err,image)=>{
    if(err){
        console.error(err);
    }
    image.blur(2).write(fileName);
});

// for installing package
// npm install <package-name>
// npm i <package-name>

// Install locally or just for project
// npm i --save <package-name>
// Install globally
// npm i -g <package-name>

// Installing multiple package in one command 

// npm i <package-name> <package-name> <package-name> <package-name>

// To remove package from project
// npm remove <package-name>