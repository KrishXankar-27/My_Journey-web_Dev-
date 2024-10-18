let start = document.querySelector('#start');

let stop = document.querySelector('#stop');


const colorchanger = function () {
    
    let hex = '0123456789ABCDEF'
    
    for (let i = 0; i < 6; i++) {
        
    let color = '#';

    color += hex[Math.floor(Math.random()*16)]
        
    }
    return color;
} 

let inetervel;

if (!inetervel) {
    inetervel =  setInterval(changebgcolor , 1000);
} 
function changebgcolor(){
    document.body.style.backgroundColor = colorchanger
}