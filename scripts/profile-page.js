fetchApiName()
async function fetchApiName() {
    const responseAPI = await fetch(`http://localhost:5206/api/Furniture/GetUserInfo${userId}`)
    .then(response => response.json())
    .then(data => {
    if (data.length > 0) {
        //userInfo = data;
        console.log(data)

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

var isEditMode = false;

function toggleEditMode() {
    var updateButton = document.querySelector('.button-profile');

    if (!isEditMode) {
        // Enable editing for input fields
        var inputFields = document.querySelectorAll('.input-text');
        inputFields.forEach(function (input) {
            input.removeAttribute('disabled');
        });

        // Change button text to "Save"
        updateButton.textContent = 'Save';

        isEditMode = true;
    } else {
        // Place your logic here to handle the save
        show_notification();
        // Disable editing after save
        var inputFields = document.querySelectorAll('.input-text');
        inputFields.forEach(function (input) {
            input.setAttribute('disabled', true);
        });

        // Change button text back to "Update Your Profile"
        updateButton.textContent = 'Update Your Profile';

        isEditMode = false;
    }

    const dataToSend = getFormData();
    let userId = localStorage.getItem('userId');
    fetch(`http://localhost:5206/api/Furniture/UpdateUser/${userId}`, {
        method: 'PUT',
        body: dataToSend
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getFormData() {
    // Chọn các phần tử input từ form
    const firstName = document.querySelector('.first-name .input-text').value;
    const lastName = document.querySelector('.last-name .input-text').value;
    const email = document.querySelector('.email .input-text').value;
    const phoneNumber = document.querySelector('.phone-number .input-text').value;
    const address = document.querySelector('.address .input-text').value;
    const registerDate = document.querySelector('.register-date .input-text').value;

    // Tạo đối tượng FormData và thêm dữ liệu vào đó
    let formData = new FormData();
    formData.append("FirstName", firstName);
    formData.append("LastName", lastName);
    formData.append("Mail", email);
    formData.append("Phone", phoneNumber);
    formData.append("Address", address);
    formData.append("RegDate", registerDate);

    return formData;
}

