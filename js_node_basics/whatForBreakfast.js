const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin, //'process.stdin' is an object that represents iput from a terminal
    output:process.stdout // 'process.stdout' is an object that represents the output to the termina
})

rl.question('What did you have for breakfast? \n', (answer)=>{
    console.log(`Ewww! I hate ${answer} `);
    rl.close();
})