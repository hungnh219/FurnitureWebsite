console.log(userId);
//let userInfo = {}

fetchApiName()
async function fetchApiName() {
    const responseAPI = await fetch(`http://localhost:5206/api/Furniture/GetUserInfo${userId}`)
    .then(response => response.json())
    .then(data => {
    if (data.length > 0) {
        //userInfo = data;
        fillUserInfo(data);
    } else {
        console.error("No data received from the API");
    }
    })
    .catch(error => console.error("Error fetching data:", error));
}

function fillUserInfo(userInfo) {
    document.querySelector('.first-name .input-text').value = userInfo[0]['firstName'];
    document.querySelector('.last-name .input-text').value = userInfo[0]['lastName'];
    document.querySelector('.email .input-text').value = userInfo[0]['mail'];
    document.querySelector('.phone-number .input-text').value = userInfo[0]['phone'];
    document.querySelector('.address-pass .input-text').value = userInfo[0]['address'];
    document.querySelector('.register-date .input-text').value = userInfo[0]['regDate'];
}