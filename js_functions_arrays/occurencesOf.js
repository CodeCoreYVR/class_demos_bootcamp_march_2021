function occuerrencesOf(char,string){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]===char){
            count++; // count = count + 1;
        }
    }
    return count;
}
console.log(occuerrencesOf('l', 'hello world!'))