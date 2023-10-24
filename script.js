// Check email
var isEmailFilled = false; // Trạng thái nhập liệu email
function checkEmail() {
    var email = document.getElementById('email').value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailMessage = document.getElementById('email-message');
    
    if (isEmailFilled) { // Kiểm tra trạng thái nhập liệu email
    if (pattern.test(email) && email.endsWith('@gmail.com')) {
        emailMessage.textContent = 'Valid Email!';
        emailMessage.style.color = 'green';
    } else {
        emailMessage.textContent = 'Invalid Email!';
        emailMessage.style.color = 'red';
    }
    } else {
    emailMessage.textContent = ''; // Xóa nội dung thông báo
    }
}
function onEmailInput() {
isEmailFilled = document.getElementById('email').value.trim() !== ''; // Cập nhật trạng thái nhập liệu email
checkEmail();
}
// Check phone numbers
var isSdtFilled = false; // Trạng thái nhập liệu số điện thoại
function CheckPhoneNumbers() {
    var phoneNumbers = document.getElementById('numbers').value;
    var messageElement = document.getElementById('numbers-message');

    // Xóa khoảng trắng ở đầu và cuối số điện thoại
    phoneNumbers = phoneNumbers.trim();
    
    if (isSdtFilled) { // Kiểm tra trạng thái nhập liệu số điện thoại
    if (phoneNumbers.length === 10 && phoneNumbers.startsWith('0')) {
        messageElement.textContent = 'Valid phone number!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid phone number!';
        messageElement.style.color = 'red';
    }
    } else {
    messageElement.textContent = ''; // Xóa nội dung thông báo
    }
}
function onPhoneNumberInput() {
    isSdtFilled = document.getElementById('numbers').value.trim() !== ''; // Cập nhật trạng thái nhập liệu số điện thoại
    CheckPhoneNumbers();
}