const div = document.querySelector('#insert');
const show = document.querySelector('#show');
const body = document.querySelector('body');

body.addEventListener('keydown' , function (e){
   show.innerHTML =  e.key;

    if (e.key == 'ArrowUp') {
        show.innerHTML =  '^';
    } 
    else if(e.key == 'ArrowDown'){
        show.innerHTML =  'v';
        
    }
    else if(e.key ==   'ArrowLeft'){
        show.innerHTML =  '<';
        
    }
    else if(e.key == 'ArrowRight'){
        show.innerHTML =  '>';
        
    }
    else{
        return;
    }
})