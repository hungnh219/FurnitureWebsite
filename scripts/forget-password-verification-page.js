let resend=document.getElementsByClassName('resending-code-text')[0]
//get usr_email from localStorage
let usr_email=JSON.parse(localStorage.getItem('usr_email'))
//create verification code
let code=Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)
//set time the code expired
setTimeout(()=>{
    code='The code is expired'
},60000)

sendMail()

//decrease time
// function decrease_time() {
//     let sendcond=89
//     let id_setIn=setInterval(()=>{
//         if(sendcond!=0){
//             resend.innerHTML=`<p onclick="resendEmail()">Resend the code  ${sendcond}s  </p>`
//         } else{
//             resend.innerHTML=`<p onclick="resendEmail()">Resend the code  </p>`
//         }
//         sendcond=sendcond-1
//     },1000)
//     setTimeout(()=>{
//         clearInterval(id_setIn)
//     },100000)
// }
// decrease_time()

//limit type verification
function limitInputLength(event) {
    var inputElement = document.getElementById('code');
    var inputValue = inputElement.value;
    if (inputValue.length === 6) {
        inputElement.blur();
    }
}
//send email
function sendMail() {
    (function(){
        emailjs.init("21yRG1rAwbPqbPLSq");

    })();

    var params={
        sendername: "FurnitureWebsite",
        to: usr_email,
        subject: "Send your password",
        message: "your verification: "+code,
    };
    var serviceID="service_5yrv10c";
    var templateID="template_lm0r2te";

    emailjs.send(serviceID,templateID,params)
    .then(res=>{
        alert("Email sent to "+usr_email+"successfully!");
    })
    .catch(()=>{
        alert("There's something wrong with email "+usr_email+"!");
    });
}
//check code 
function check_code() {
    let inputElement = document.getElementById('code');
    let inputValue = inputElement.value;
    if(inputValue==code) {
        goTo('forget-password-set-page.html')
    }
    else {
        alert('The verification code is incorrect')
    }
}

//resend code
function resendEmail() {
    if(code!='The code is expired') {
        alert('Please wait')
    }
    else {
        code=Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)
        sendMail()
        setTimeout(()=>{
            code='The code is expired'
        },60000)
        // decrease_time()
    }
}
//delete input
function deleteInput(curr) {
    curr.value=''
}










