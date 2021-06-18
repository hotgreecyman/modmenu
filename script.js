let menu = document.querySelector('.menu');
let subs = document.querySelector('.subs');
let prompt = document.querySelector('.prompt');
let subname = document.querySelector('.subname')

let sub1 = document.querySelector('.sub1');
let sub2 = document.querySelector('.sub2');
let sub3 = document.querySelector('.sub3');
let sub4 = document.querySelector('.sub4');
let sub5 = document.querySelector('.sub5');
let sub6 = document.querySelector('.sub6');

let sub11 = document.querySelector('.sub11');
window.addEventListener("keydown", function (event )
{  
    let key = event.keyCode;
    if (key == 107) //open key
    {
        menu.style.display = menu.style.display === "none" ? "block" : "none"
        prompt.style.display = prompt.style.display === "block" ? "none" : "block"
        menu.style.animation = "appear .75s ease";
    }
    
    if (key == 8) //back
    {
        subs.style.display = "block"; 
        sub11.style.display = "none";
        subname.innerHTML = "Home";
    }      
})

sub1.onclick = function ()
{
    subs.style.display = "none";
    sub11.style.display = "block";
    subname.innerHTML = "Player";
}

document.querySelector('.op1').onclick = function ()
{
    document.querySelector('.toggle').checked = document.querySelector('.toggle').checked === true ? false : true;
}
