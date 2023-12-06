
function createAccount() {
    let userName = document.querySelector('.info-email .input-text').value;
    let password = document.querySelector('.info-password .input-text').value;
    let confirmPassword = document.querySelector('.info-confirm-password .input-text').value;

    console.log(userName)
    console.log(password)
    if (preCheckAccount(userName, password)) {
        if (password != confirmPassword) {
            document.querySelector('.notification').innerHTML = 'Confirm password is not same as password!';
            show_notification();
            return;
        }
        createAccountApi(userName, password);
    }
}

function createAccountApi(userName, password) {
    let formData = new FormData();
    formData.append('UserName', userName)
    formData.append('Password', password)
    
    fetch(`http://localhost:5206/api/Furniture/CreateAccount`, {
        method: 'POST',
        headers: {
            },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}