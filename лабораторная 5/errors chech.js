let inputs = document.querySelectorAll(".regForm .valid");

let errLog = document.querySelectorAll(".Errors_log>div");
let errPassoword1 = document.querySelectorAll(".Errors_pas>div");
let errPassoword2 = document.querySelectorAll(".Errors_pas1>div");

let OK = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4.5L6.75 12.75L3 9" stroke="#3CA255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

let Not = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 4.5L4.5 13.5" stroke="#FF4400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 4.5L13.5 13.5" stroke="#FF4400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

inputs[0].addEventListener("keyup", function(){
   if(inputs[0].value.length <= 150){
    addIcon(errLog, 1, "ok");}
   else{addIcon(errLog, 1, "no");} 
    
    if(inputs[0].value.match(/[a-zA-Z@+-_]+/)){
        addIcon(errLog, 0, "ok");}
    else{addIcon(errLog, 0, "no");}    
});

inputs[1].addEventListener("keyup", function(){
    if(inputs[1].value.length >= 8){
        addIcon(errPassoword1, 0, "ok");}
    else{addIcon(errPassoword1, 0, "no");} 

    if(inputs[1].value.match(/^([a-zA-Zа-яёА-ЯЁ])+$/)){
        addIcon(errPassoword1, 1, "ok");}
    else{addIcon(errPassoword1, 1, "no");}    

    if(inputs[1].value !== inputs[0].value){
        addIcon(errPassoword1, 2, "ok");}
    else{addIcon(errPassoword1, 2, "no");}  
 });

 inputs[2].addEventListener("keyup", function(){
    if(inputs[1].value == inputs[2].value && inputs[1].value.length == inputs[2].value.length){
    addIcon(errPassoword2, 0, "ok");
    inputs[2].style.color = "rgba(60, 162, 85, 0.9)"; 
    inputs[2].style.borderColor = "rgba(60, 162, 85, 0.9)"}

    else{addIcon(errPassoword2, 0, "no");
    inputs[2].style.color = "rgba(238, 34, 34, 0.9)"; 
    inputs[2].style.borderColor = "rgba(238, 34, 34, 0.9)";}     
 });



function addIcon(err, id, result){
    if(result === "ok"){
        err[id].firstChild.innerHTML = OK;
        err[id].style.color = "rgba(60, 162, 85, 0.9)"
    }else{
        err[id].firstChild.innerHTML = Not;
        err[id].style.color = "rgba(238, 34, 34, 0.9)"
    }
}

let CheckBoxIteam = document.querySelector("input[type=checkbox]");
let InviteForm = document.querySelector("button[type=submit]");

if(CheckBoxIteam.checked){
    InviteForm.disabled = false;
}else{
    InviteForm.disabled = true;
}

CheckBoxIteam.addEventListener("change", function(){
    if(CheckBoxIteam.checked){
        InviteForm.disabled = false;
    }else{
        InviteForm.disabled = true;
    }
});