function updateInfo() {
    let userName = localStorage.getItem('usr_email');
    let newPassword = document.getElementById('new-password').value;
    userName = userName.replace(/"/g, '');

    console.log(typeof userName);
    console.log(userName);
    console.log(typeof newPassword);
    console.log(newPassword);
    let dataToSend = {
        userName: userName,
        newPassword: newPassword
    };

    let jsonData = JSON.stringify(dataToSend);

    fetch(`http://localhost:5206/api/Furniture/UpdatePassword`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            show_notification();
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            //console.error('Error:', error);
        });
}

function show_notification() {
    notification=document.getElementsByClassName('notification')[0]
    notification.style.display='flex'
    setTimeout(() => {
        close_notification()
    }, 2000);
}
//close notification
function close_notification() {
    notification=document.getElementsByClassName('notification')[0]
    notification.style.display='none'
//    location.reload()
}

