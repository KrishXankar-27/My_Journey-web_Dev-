// const date = new Date();
// console.log(date.getDate ());

// const map = new Map();

// map.set('name' , 'krishnendu');
// map.set('age' , 50);

// const firstname = map.get('name');

// console.log(firstname);

// function promisees(resolve){
//     setTimeout(resolve , 3000);
// }

// function manin (){
//     console.log("hello its over");
    
// }
// promisees(manin);

// ** create the promised version of fs.readfile , fs.writefile , cleanfile ** \\

const fs = require('fs');

const readfile1 = fs.readFileSync('test1.txt' , 'utf-8');

console.log(readfile1);

const writefile = fs.writeFileSync('test4.txt', 'Your file content her so not a problem');
console.log(writefile); 

const readfile2 = fs.readFileSync('test4.txt' , 'utf-8');
console.log(readfile2);

