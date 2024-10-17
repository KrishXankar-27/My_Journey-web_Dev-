
const from = document.querySelector('form');

from.addEventListener('submit' , function(n){
    n.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value); 
    const result = document.querySelector('#results');
    const bmistatus = document.querySelector('#bmi-status');
    const bmi = (weight/ ((height * height)/ 10000)).toFixed(2);
    
    if (height < 0 || isNaN(height) || height === '') {
        console.log(`please enter a valid height`);
    } else if (weight < 0 || isNaN(weight) || weight === '') {
        console.log(`please enter a valid weight`)
    }
    else{
    
        result.innerHTML = `<span> ${bmi} </span>`;
    }
    
    if (bmi <= 18.6) {
        bmistatus.innerHTML = "Your BMI is " + bmi + " so you are underweight.";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        bmistatus.innerHTML = "Your BMI is " + bmi + " so you have a normal weight.";
    } else if (bmi > 24.9) {
        bmistatus.innerHTML = "Your BMI is " + bmi + " so you are overweight.";
    }
    else {
        return;
    }    
    
})
