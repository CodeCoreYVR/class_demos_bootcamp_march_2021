function sum(arr){
    let total=0;
    for(let val of arr){
        if(typeof val === 'number' ){
            total += val; // total= total+val
        } 
    }
    return total;
}

console.log(sum([1,2,3,4,5]));
console.log(sum([1,2,'A',4,5]));