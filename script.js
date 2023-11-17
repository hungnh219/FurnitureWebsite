//add product to localStorage
function addtocart(curr) {
    let products=[];
    let img=curr.parentElement.children[5].children[0].src;
    let productname=curr.parentElement.children[2].textContent;
    let productprice=curr.parentElement.children[3].textContent;
    let productquan=curr.parentElement.children[10].children[1].textContent;
    let producttotal=parseFloat(productquan)*parseFloat(productprice.slice(1));
    
    if (localStorage.length!=0 ) {
        products.push(...JSON.parse(localStorage.getItem("products")));
      }
      products.push({
        img:img,
        productname:productname,
        productprice:productprice,
        productquan:productquan,
        producttotal:producttotal
      });
      localStorage.setItem("products", JSON.stringify(products));
      getProducts()
}


//get product from localStorage
function getProducts() {
    document.getElementsByClassName('cart-products')[0].innerHTML='';
    if(localStorage.length==0) {
        document.getElementsByClassName('cart-products')[0].innerHTML+='<div style="font-size: 48px;text-align: center;padding: 75px 0px;">Empty</div>'
    }
    else {
        let total=0;
        document.getElementsByClassName('cart-products')[0].innerHTML+=`
                <div class="cart-headings">
                    <div class="product-detail-heading">Product</div>
                    <div class="product-total-headings">
                        <div class="product-price-heading">Price</div>
                        <div class="product-quantity-heading">Quantity</div>
                        <div class="product-total-heading">Total</div>
                    </div>
                </div>
        `
        let products=JSON.parse(localStorage.getItem("products"));
        products.forEach(product => {
            total+=product.producttotal;
            document.getElementsByClassName('cart-products')[0].innerHTML+=`
            <div class="cart-product">
                            <div class="product-detail">
                                <img src=${product.img} alt="" class="product-image">
                                <div>
                                    <p class="product-name">${product.productname}</p>
                                    <p class="product-status">Remove</p>
                                </div>
                            </div>

                            <div class="product-total">
                                <div class="product-price">${product.productprice}</div>
                                <div class="product-quantity">${product.productquan}</div>
                                <div class="product-total-price">$${product.producttotal}</div>
                            </div>
            </div>`
        })
        
        document.getElementsByClassName('cart-products')[0].innerHTML+=`
        <div class="cart-sub-total">
                        <div class="sub-total">
                            <div class="sub-total-title">Sub-total</div>
                            <div class="sub-total-price">$${total}</div>
                            <div class="sub-total-note">Tax and shipping will be calculated later</div>
                        </div>

                        <div class="check-out-button" >
                            <button onclick="CheckSectionDisplay(5)"><span></span>Check-out</button>
                        </div>
        </div>
        `
    }
}

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

function CheckSectionDisplay(num) {
    var array = ['home-page', 'products-page', 'product-detail-page', 'about-us-page', 'cart-page', 'billing-detail-page', 'shop-all'];
    
    for (var i = 0; i < array.length; i++) {
        if (i === num) {
            if(num==4) { getProducts()};
            document.getElementById(array[i]).style.display = 'block';
            document.getElementById(array[i]).scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            document.getElementById(array[i]).style.display = 'none';
        }
    }
}




// Hide all sections except for homepage section
/*
window.addEventListener('load', function() {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== 'home-page') {
            sections[i].style.display = 'none';
        }
    }
});
*/
