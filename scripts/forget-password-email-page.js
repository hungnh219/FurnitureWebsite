let usr_email=document.getElementById('email')
let values=usr_email.value
function saveEmail() {
    
    localStorage.setItem('usr_email',JSON.stringify(usr_email.value)) 
    
}



