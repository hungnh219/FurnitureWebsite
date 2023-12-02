function loginButton() {
    console.log('check login button')
    let userName = document.querySelector('.info-email input').value;
    let password = document.querySelector('.info-password input').value;
    
    // dam bao username, password la kieu string
    userName = userName.toString();
    password = password.toString();
    console.log(document.querySelector('.info-email input'), document.querySelector('.info-password input'));
    console.log(userName, password);

    checkAccount(userName, password);
}

// kiem tra account truoc khi goi api
// co dung dinh dang gmail hay khong
// username, password không được trống
// mat khau du 8 ki tu hay khong
// ....
function preCheckAccount(userName, password) {
    return true;
}

function checkAccount(userName, password) {
    // gọi request tới server
    // var result = true;

    if (userName == '123' && password == 'asd') {
        goTo('home-page.html');
    }
    else {
        // thông báo username, password sai
        alert('Co gi do sai sai!');
    }
}