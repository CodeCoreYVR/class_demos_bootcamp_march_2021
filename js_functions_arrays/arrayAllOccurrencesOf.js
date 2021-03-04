function allOccurencessOf(char,arr){
    countArr=[];
    for(let val of arr){
        let count=0;
        for(let i=0;i<val.length;i++){
            if(val[i]===char){
                count++
            }
        }
        countArr.push(count);
    } 
    
    return countArr;
}
console.log(allOccurencessOf('l', ['hello', 'world']))
console.log(allOccurencessOf('o', ['bob', 'likes', 'tea']))