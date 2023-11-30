




//add product to localStorage

function addtocart(curr) {
    let products=[];
    let img=curr.parentElement.parentElement.children[2].children[0].src;
    let productname=curr.parentElement.parentElement.children[1].textContent.trim();
    let productprice=curr.parentElement.parentElement.children[3].children[0].textContent.trim();
    let productquan=curr.parentElement.parentElement.children[5].children[0].children[1].textContent.trim();
    productprice=productprice.slice(1);
    productprice=productprice.replace(',','.');
    let producttotal=parseFloat(productquan)*parseFloat(productprice);
    if (localStorage.length!=0 ) {
        products.push(...JSON.parse(localStorage.getItem("products")));
      }
    
    let product={
    img:img,
    productname:productname,
    productprice:productprice,
    productquan:productquan,
    producttotal:producttotal
    };
    let isExist=products.some(x=>x.img==product.img&&x.productname==product.productname&&x.productprice==product.productprice);
    if(!isExist) {
        products.push(product);  
    }
    else alert("This product has been added to cart")
     
    localStorage.setItem("products", JSON.stringify(products));
    
    getProducts()
}


//get product from localStorage
function getProducts() {
    document.getElementsByClassName('cart-products')[0].innerHTML='';
    if(localStorage.length==0 || JSON.parse(localStorage.getItem('products')).length==0) {
        document.getElementsByClassName('cart-products')[0].innerHTML+=`
        
        <div class="cart">
        <img class="empty-cart" src="./img/Cart empty/cart-empty.png" alt="Empty Cart image">
        <p>Your cart is empty</p>
        </div>
        `
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
                                <div class="product-item">
                                    <p class="product-name">${product.productname}</p>
                                </div>
                            </div>

                            <div class="product-total">
                                <div class="product-price">${product.productprice}</div>
                                <div class="cart-add-minus-button">
                                <button class="ti-minus" onclick="decreaseproduct('${product.productname}')"></button>
                                <div class="quantity" data-productname="${product.productname}">${product.productquan}</div>
                                <button class="ti-plus" onclick="increaseproduct('${product.productname}')"></button>
                                </div>
            
                                <div class="product-total-price">$${product.producttotal}</div>

                                <button class="trash-icon" onclick="removeCart('${product.productname}')">
                                <img src="./img/Cart empty/delete.png" alt="trash icon">
                                </button>
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
    console.log(JSON.parse(localStorage.getItem('products')).length)
}

function removeProduct(curr) {
    products=[];
    products=JSON.parse(localStorage.getItem("products"))
    products=products.filter(product=>product.img!=curr.parentElement.parentElement.children[0].src);
    localStorage.setItem('products',JSON.stringify(products))
    getProducts();
}
function removeCart(productt){
    products=[];
    products=JSON.parse(localStorage.getItem("products"))
    products=products.filter(product=>product.productname!=productt);
    localStorage.setItem('products',JSON.stringify(products))
    getProducts();
}

//increase quantity
function increasequan(curr) {
    quantity=curr.parentElement.children[1];
    quantity.innerHTML=Number(quantity.textContent)+1;
}
//decrease quantity
function decreasequan(curr) {
    quantity=curr.parentElement.children[1];
    if(Number(quantity.textContent)>1) {
        quantity.innerHTML=Number(quantity.textContent)-1;
    }
}
function increaseproduct(curr) {
    const cartList = JSON.parse(localStorage.getItem("products"));
    const quantityElement = document.querySelector(".quantity");
    const currentQuantity = parseInt(quantityElement.textContent);
    const updatedQuantity = currentQuantity + 1;
    quantityElement.textContent = updatedQuantity;

    const productToUpdate = cartList.find(product => product.productname === curr);
    productToUpdate.productquan = updatedQuantity;
    productToUpdate.producttotal = (updatedQuantity*parseFloat(productToUpdate.productprice));
    quantityElement.innerHTML.textContent = updatedQuantity;
    localStorage.setItem("products", JSON.stringify(cartList));
    console.log(productToUpdate.productprice);
    getProducts();
    
}
//decrease quantity
function decreaseproduct(curr) {
    const cartList = JSON.parse(localStorage.getItem("products"));
    const quantityElement = document.querySelector(".quantity");
    const currentQuantity = parseInt(quantityElement.textContent);
    const updatedQuantity = currentQuantity - 1;
    if(updatedQuantity <= 0 )
    {
        removeCart(curr);
    } else{
        quantityElement.textContent = updatedQuantity;
        const productToUpdate = cartList.find(product => product.productname === curr);
        productToUpdate.productquan = updatedQuantity;
        productToUpdate.producttotal = (updatedQuantity*parseFloat(productToUpdate.productprice));
        quantityElement.innerHTML.textContent = updatedQuantity;
        localStorage.setItem("products", JSON.stringify(cartList));
        getProducts();
    }
    
}
// Check email
var isEmailFilled = false; // Trạng thái nhập liệu email
function checkEmail() {
    var email = document.getElementById('email-field').value;
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
isEmailFilled = document.getElementById('email-field').value.trim() !== ''; // Cập nhật trạng thái nhập liệu email
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

window.addEventListener('load', function() {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== 'home-page') {
            sections[i].style.display = 'none';
        }
    }
});


// Add products 

// Demo data
const productList = {
    "1": { "name": 'Product A', "image": './assets/Furniture_Photos/Products_Photos/P0004/1.webp', "price": 1.223},
    "2": { "name": 'Product B', "image": './assets/Furniture_Photos/Products_Photos/P0005/1.webp', "price": 3.111 },
    "3": { "name": 'Product C', "image": './assets/Furniture_Photos/Products_Photos/P0006/1.webp', "price": 2.509 },
    /// n products
};
const productListnew = JSON.stringify(productList);
localStorage.setItem("productList", productListnew);
document.addEventListener("DOMContentLoaded", function() {
    addProduct();
 });
 function addProduct(){
    const itemList = JSON.parse(localStorage.getItem("productList"));
    for (let key in itemList) {
        if (itemList.hasOwnProperty(key)) {
            const product = itemList[key];
            document.getElementsByClassName('product-bed')[0].innerHTML += `
                <div class="product-1" onclick="CheckSectionDisplay(2)">
                    <img src="${product.image}" alt="The Eldridge Bed" class="product-img">
                    <div class="product-intro">
                        <p class="product-name">${product.name}</p>
                        <p class="product-cost">$${product.price}</p>
                    </div>
                </div>`;
        }
    }
 }

 // Create Bill PDF document
 function generatePDF(){
    if (document.getElementById("first-name-input").value == "") {
        alert("Please enter first name");
      } else {
        var doc = new jsPDF();
    
        // Set font size and style for "Bill Details"
        doc.setFontSize(18);
        doc.setFontStyle("bold");
    
        // Calculate the width of the text
        var textWidth = doc.getStringUnitWidth("Bill Details") * doc.internal.getFontSize();
    
        // Calculate the center position of the page with an offset
        var pageWidth = doc.internal.pageSize.getWidth();
        var offsetX = 32; // Adjust the value to move the text to the right
        var centerX = (pageWidth - textWidth) / 2 + offsetX;
    
        // Center the "Bill Details" text
        doc.text(centerX, 20, "Bill Details");
    
        // Reset font size and style for other text
        doc.setFontSize(11);
        doc.setFontStyle("normal");
    
        var fullName = document.getElementById("last-name-input").value + " " + document.getElementById("first-name-input").value;

    // Display
        doc.text(pageWidth - 60, 40, "Brand: " + "Furnishity Store");
        doc.text(pageWidth - 75, 45, "University of Information and Technology");
        doc.text(pageWidth - 60, 50, "Phone Number: " + "0987654321");
        doc.text(pageWidth - 60, 55, "Website: " + "www.furnishity.com");
        doc.text(10, 60, "Full Name: " + fullName);
        doc.text(10, 65, "Address: " + document.getElementById("address-input").value);
        doc.text(10, 70, "Apartment: "+ document.getElementById("info-apartment-input").value);
        doc.text(10, 75, "Town/City: "+ document.getElementById("info-city-input").value);
        doc.text(10, 80, "Phone Number: "+ document.getElementById("numbers").value);
        doc.text(10, 85, "Email: "+ document.getElementById("email").value);
        doc.text(10, 95, "Product Name");
        doc.text(100, 95, "Quantity")
        doc.text(190, 95, "Price");
        var productName = document.querySelector('.shipment-product-name').textContent;
        var productPrice = document.querySelector('.shipment-product-price').textContent;
        doc.text(10, 105, productName);
        doc.text(105, 105, "1");
        doc.text(190, 105, productPrice);
        // Draw a line below the labels
        var lineY = 97; // Adjust the value to position the line
        var lineWidth = 190; // Adjust the value to set the width of the line
        doc.line(10, lineY, 10 + lineWidth, lineY);
        doc.save("invoice.pdf");
      }
}
// Change Header color
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-web');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll button

window.addEventListener("scroll", function() {
    const toTop = document.querySelector(".to-top");
    var scrollTop = window.scrollY;
    if(scrollTop > 0) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

//Slider 
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};