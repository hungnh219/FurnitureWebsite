let resend=document.getElementsByClassName('resending-code-text')[0]
let usr_email=JSON.parse(localStorage.getItem('usr_email'))
let code=Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)
setTimeout(()=>{
    code='The code is expired'
},60000)

sendMail()


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
        document.querySelector('.notification').innerHTML = `Email sent to ${usr_email} successfully!`;
        show_notification();
    })
    .catch(()=>{
        document.querySelector('.notification').innerHTML = `There\'s something wrong with email ${usr_email}!`;
        show_notification();
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
        document.querySelector('.notification').innerHTML = 'The verification code is incorrect';
        show_notification();
    }
}

//resend code
function resendEmail() {
    if(code!='The code is expired') {
        document.querySelector('.notification').innerHTML = 'Please wait';
        show_notification();
    }
    else {
        code=Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)
        sendMail()
        setTimeout(()=>{
            code='The code is expired'
        },60000)
    }
}
//delete input
function deleteInput(curr) {
    curr.value=''
}