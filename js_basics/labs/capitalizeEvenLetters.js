let string=process.argv[2].toLowerCase();
let i=0
let result=''
while(i<string.length){
    if(i%2 ===0){
        result+=string[i].toUpperCase();
    }else{
        result+=string[i].toLowerCase();
    }
    i++;
}
console.log(result)