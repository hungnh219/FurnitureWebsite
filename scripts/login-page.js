function loginButton() {
    console.log('check login button')
    let userName = document.querySelector('.info-email input').value;
    let password = document.querySelector('.info-password input').value;
    
    // dam bao username, password la kieu string
    userName = userName.toString();
    password = password.toString();
    console.log(userName, password);

    // acc nay de test
    if (userName == '123' && password == 'asd') {
        goTo('home-page.html');
        return;
    }

    checkAccount(userName, password)
}

// kiem tra account truoc khi goi api
// co dung dinh dang gmail hay khong
// username, password không được trống
// mat khau du 8 ki tu hay khong
// ....
function preCheckAccount(userName, password) {
    if (userName == '' || password == '') {
        alert('Username and Password can\'t be blank');
        return false;
    } else if (!isValidGmail(userName)) {
        alert('Invalid Gmail!');
        return false;
    } else if (!isValidPassword(password)) {
        return false;
    }
    return true;
}

function checkAccount(userName, password) {
    async function checkLogin(username, password) {
        const apiUrl = 'http://localhost:5206/api/Furniture/login'; // Thay thế bằng URL thực tế của API

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            Username: username,
            Password: password,
            }),
        });

        if (response.ok) {
            let responseData = await response.json();
            responseData = responseData.toString();
            console.log(typeof responseData);
            console.log(responseData);

            localStorage.setItem('userId', responseData);
            return true; // Đăng nhập thành công
        } else {
            return false; // Đăng nhập thất bại
        }
    }

    checkLogin(userName, password)
    .then((isLoggedIn) => {
        if (isLoggedIn){
            console.log('get api start');
            getInfoApi(function() {
            console.log('get api end');
            goTo('home-page.html');
            });
        }
        else
            console.log('sai rui')
    });    
}
