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

const { promises } = require('dns');
const fs = require('fs');
const { setTimeout } = require('timers');

const readfile1 = fs.readFileSync('test1.txt' , 'utf-8');

console.log(readfile1);

const writefile = fs.writeFileSync('test4.txt', 'Your file content her so not a problem');
console.log(writefile); 

const readfile2 = fs.readFileSync('test4.txt' , 'utf-8');
console.log(readfile2);

function step3Done() {
    console.log("hello there");
  }
  
  function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
  }
  
  function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
  }
  
  setTimeout(step1Done, 1000);
  

  function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function solve() {
      await setTimeoutPromisified(1000);
      console.log("hi");
      await setTimeoutPromisified(3000);
      console.log("hello");
      await setTimeoutPromisified(5000);
      console.log("hi there");
  }
  
  solve();