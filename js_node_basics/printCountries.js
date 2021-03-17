const countries=require('./countries');

console.log('I want to visit:');

for (let country of countries){
    console.log(`${country}- ${country.length}`)
}