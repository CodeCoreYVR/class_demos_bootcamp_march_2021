const arr=["a","b","c"]

if(false){
for (let i=0;i<arr.length;i++){
    console.log(`Inded:${i}-- Value:${arr[i]}`)
}
}

if(true){
for (let value of arr){
    console.log(`Value:${value}`)
}
}