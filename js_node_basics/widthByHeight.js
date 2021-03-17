const fs=require('fs');

const width=process.argv[2] || 2;
const height=process.argv[3] || 3;

let output='';

for(let i=0; i<width;i++){
    for(let j=0;j<height;j++){
        output+= '*';
    }
    output += '\n'
}

const fileName= `${width}_by_${height}`

fs.writeFile(`${fileName}.txt`, output, err=>{
    if(err){
    console.error(err);
    }
    console.log(`wrote "${fileName}" to disk`);
})




