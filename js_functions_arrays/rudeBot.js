function insult(name){
    let randomNumber= Math.floor(Math.random()*3);
    if(randomNumber === 1){
        return `${name}, you doofus`
    }else if (randomNumber === 2){
        return `${name},your father smelt of elderberries! `
    }else{ 
        return `your mother was a hamster, ${name}`
    }

}
console.log(insult('Bob'));