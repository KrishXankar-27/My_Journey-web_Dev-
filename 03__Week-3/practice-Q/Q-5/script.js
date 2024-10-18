let istatus = document.querySelector("h5");

let addfriend = document.querySelector("#Add_Friend");
let removefriend = document.querySelector("#remove");


addfriend.addEventListener('click' , function(){
    istatus.innerHTML = "Friends";
    istatus.style.color = "Green"
})
removefriend.addEventListener('click', function(){
    istatus.innerHTML = "Stangers";
    istatus.style.color = "Red"
})