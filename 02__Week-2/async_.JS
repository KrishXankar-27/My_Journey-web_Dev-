
function sum (num1 , num2){
    return num1+num2;
}

// console.log( sum(20,50));

function sum2 (n){
    let ans = 0;
    for (let index = 0; index < n; index++) {
         ans = ans+index

        console.log(ans);
        
        
    }
}
// sum2(19)

const fs = require('fs');

let read1 = fs.readFileSync('test1.txt' , 'utf-8')

let read2 = fs.readFileSync('test2.txt' , 'utf-8')

console.log(read1);
console.log(read2);


