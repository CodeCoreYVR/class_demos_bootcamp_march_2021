const fs=require('fs');

const readline=require('readline');

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('How wide is the rectangle?\n',(width)=>{
    console.log('width:',width);
    rl.question('How high is the rectangle?\n',(height)=>{
        console.log('height:',height);
        rl.question('What is the output filename?\n',(fileName)=>{
            console.log('file name:',fileName);
            createFileWithStars(width, height, fileName);
            rl.close();
        })
    })

})

function createFileWithStars(width, height, fileName) {
    let output = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            output += '* ';
        }
        output += '\n';
        // `\n` is the new line character
    }
    fs.writeFile(`${fileName}.txt`, output, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`wrote "${fileName}" to disk`);
    });
}



