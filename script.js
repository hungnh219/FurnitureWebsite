//script for slider homepage
const imgPosition = document.querySelectorAll(".slider-image img")
    const imgContainer = document.querySelector('.slider-image')
    let index = 0;
    let imgNumber = imgPosition.length
    let space = 100
    imgPosition.forEach(function(image, index) {
        image.style.left = index*space + "%"
    })
    function imgSlide() {
        index++;
        console.log(index)
        if(index >= imgNumber)
        {
            index = 0;
            imgPosition.forEach(function(image, index) {
            image.style.left = index*space + "%"})
    }
    imgContainer.style.left = "-" + index*space + "%"
    
}

    setInterval(imgSlide, 5000)





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
                                    <button onclick="removeProduct(this)"><p class="product-status">Remove</p></button>
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
    console.log(JSON.parse(localStorage.getItem('products')).length)
}

function removeProduct(curr) {
    products=[];
    products=JSON.parse(localStorage.getItem("products"))
    products=products.filter(product=>product.img!=curr.parentElement.parentElement.children[0].src);
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

window.addEventListener('load', function() {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== 'home-page') {
            sections[i].style.display = 'none';
        }
    }
});


// Add products 
function addProduct(productlist){
    var newProduct = document.createElement("div");
    newProduct.classList.add("product-1");
    newProduct.addEventListener("click", function(e){
        CheckSectionDisplay(2);
    });
    // Tạo phần tử img
    var img_Product = document.createElement("img");
    img_Product.src = productlist.image;
    img_Product.alt = productlist.name;
    img_Product.classList.add("product-img");

    // Tạo phần tử div mới cho product-intro
    var productIntro = document.createElement("div");
    productIntro.classList.add("product-intro");

    // Tạo phần tử p cho product name
    var productName = document.createElement("p");
    productName.classList.add("product-name");
    productName.textContent = productlist.name;

    // Tạo phần tử p cho product cost
    var productCost = document.createElement("p");
    productCost.classList.add("product-cost");
    productCost.textContent ="$"+productlist.price;

    // Gắn các phần tử con vào phần tử cha
    productIntro.appendChild(productName);
    productIntro.appendChild(productCost);
    newProduct.appendChild(img_Product);
    newProduct.appendChild(productIntro);

    // Tìm phần tử cha có lớp "product-bed"
    var productBed = document.querySelector(".product-bed");

    // Thêm phần tử mới vào phần tử cha
    if (productBed) {
    productBed.appendChild(newProduct);
    } else {
    console.error("Element with class 'product-bed' not found.");
    }
}
// Demo data
const productList = {
    "1": { "name": 'Product A', "image": './assets/Furniture_Photos/Products_Photos/P0004/1.webp', "price": 1.223},
    "2": { "name": 'Product B', "image": './assets/Furniture_Photos/Products_Photos/P0005/1.webp', "price": 3.111 },
    "3": { "name": 'Product C', "image": './assets/Furniture_Photos/Products_Photos/P0006/1.webp', "price": 2.509 },
    /// n products
};
document.addEventListener("DOMContentLoaded", function() {
    // Gọi hàm addProductToBed trong sự kiện "DOMContentLoaded"
   for (let key in productList) {
       if (productList.hasOwnProperty(key)) {
         const product = productList[key];
         addProduct(product);
       }
     }
 });

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