
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
    
    // if (preCheckAccount(userName, password)) {
    // } else {
    //     //alert('Co gi do sai sai!');
    // }
    
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
    // gọi request tới server
    // var result = true;

    if (userName == '123' && password == 'asd') {
        goTo('home-page.html');
    }
    else {
        // thông báo username, password sai
        alert('There\'s something wrong!');
    }
}




var productList = {
    0: {id: 1, name: 'The Bank Console Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 3150, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0001'},
    1: {id: 2, name: 'The Bowery Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 1675, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0002'},
    2: {id: 3, name: 'The Morro Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 735, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0003'},
    3: {id: 4, name: 'The Reade Console Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 2475, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0004'},
    4: {id: 5, name: 'The Reade Demilune Console Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 1950, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0005'},
    5: {id: 6, name: 'The Vestry Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 1775, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0006'},
    6: {id: 7, name: 'The Eldridge Bed', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 3885, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0007'},
    7: {id: 8, name: 'The Essex Bed', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 2225, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0008'},
    8: {id: 9, name: 'The Kent Bed', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 3250, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0009'},
    9: {id: 10, name: 'The Smith Bed', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 3675, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0010'},
}
// [
//     {
//       "img": "http://127.0.0.1:5500//assets/Furniture_Photos/Products_Photos/P0001/1.webp",
//       "productname": "The Bank Console Table",
//       "productprice": "$3150"
//     },
//     {
//       "img": "http://127.0.0.1:5500//assets/Furniture_Photos/Products_Photos/P0006/1.webp",
//       "productname": "The Vestry Table",
//       "productprice": "$1775"
//     }
//   ]
  //get product every load
window.addEventListener('load', function() {
    // for (let key in productList) {
    //     console.log(productList[key])
    // }
    let key=this.location.href;
    key=key.slice(key.indexOf('-')).slice(1)
    console.log(key)
});

