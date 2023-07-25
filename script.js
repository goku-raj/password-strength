var pass = document.getElementById('password');
var msg = document.getElementById('message');
var str = document.getElementById('strength');

pass.addEventListener('input', ()=>{
    if(pass.value.length > 0){
        msg.style.display ='block';
    }else{
        msg.style.display ='none';
    }
    if(pass.value.length < 6){
        str.innerHTML = "WEAK!!";
        pass.style.borderColor = 'red';
        msg.style.color = 'red';
    } 
    else if(pass.value.length >= 6 && pass.value.length < 8){
        str.innerHTML = "MEDIUM!!";
        pass.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
    } 
    else if(pass.value.length >= 8){
        str.innerHTML = "STRONG!";
        pass.style.borderColor = 'green';
        msg.style.color = 'green';
    }
})