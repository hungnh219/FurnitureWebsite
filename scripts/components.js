//add header
function addHeader() {
    document.write(`
    <header>
        <section id="navigation">
            <div class="logo-navigation">
                <a href="#" onclick="goTo('home-page.html')">Furnishity.</a>
            </div>

            <div class="list-navigation">
                <ul>
                    <li class="navigation-attribute">
                        <div class="text-navigation">
                            <a href="#" onclick="goTo('home-page.html')">Home</a>
                            <a href="#" onclick="goTo('shop-all.html')">Products</a>
                            <a href="#" onclick="goTo('blog.html')">Blog</a>
                            <a href="#" onclick="goTo('about-us-page.html')">About us</a>
                        </div>

                        <div class="icon-navigation"> 

                            <div class="menu">
                                <i class="fa-solid fa-bars" style="color: #000000;"></i>
                            </div>

                            <div class="search-box">
                                <input type="text" id="search" placeholder="Search">
                                <button class="search-button-navigation">
                                    <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
                                </button>
                            </div>  
                            
                            <div class="cart-box"> 
                                <button class="cart-button-navigation" onclick= "goTo('cart-page.html')" >
                                    <i class="fa-solid fa-cart-shopping" style="color: #000000;"></i>
                                    <span class = "quantity">0</span>
                                </button>
                            </div>

                            <div class="heart-box">
                                <button class="heart-button-navigation" onclick= "goTo('wishlist-page.html')" >
                                    <i class="fa-regular fa-heart" style="color: #000000;"></i>
                                </button>
                            </div>

                            <div class="user-box">
                                <button class="user-button-navigation">
                                    <i class="fa-regular fa-user" style="color: #000000;"></i>
                                </button>
                                <ul class="ti-user-attribute">
                                    <li class="profile-page">
                                        <a href="">My profile</a>
                                    </li>
                                    <li class="my-order">
                                        <a href="">My order</a>
                                    </li>
                                    <li class="log-out">
                                        <button onclick="logOut()">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </header>
    `)

    // Open Search Box
const searchBtn = document.querySelector('.search-button-navigation');
const searchInput = document.querySelector('.search-box #search');

searchBtn.addEventListener('click', () => {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
})
/////
$(document).ready(function() {
    $('.fa-solid.fa-bars').click(function() {
        $('.text-navigation').slideToggle();
    })
})

}

// add footer
function addFooter() {
    document.write(`
    <footer>
        <div class="footer-furnishity">
            <h3>Furnishity.</h3>
            <p>
                Worldwide furniture store since 2020. 
                We sell over 1000+ branded products on our website
            </p>
            <div class="footer-phone-number">
                <i class="fa-solid fa-phone" style="color: #000000;"></i>
                0987654321
            </div>
            <div class="footer-address" onclick="goTo('https://uit.edu.vn')">
                <i class="fa-solid fa-location-dot" style="color: #000000;"></i>
                University of Information and Technology
            </div>
            <div class="footer-web-site">
                <i class="fa-solid fa-globe" style="color: #000000;"></i>
                www.furnishity.com
            </div>
        </div>

        <div class="footer-menu">
            <h3>Menu</h3>
            <p onclick="goTo('shop-all.html')">Products</p>
            <p onclick="goTo('blog.html')">Blog</p>
            <p onclick="goTo('about-us-page.html')">About us</p>
        </div>

        <div class="footer-connect">
            <h3>Stay Connected</h3>
            <div class="footer-fb" onclick="goTo('https://facebook.com')">
                <i class="fa-brands fa-facebook" style="color: #000000;"></i>
                Facebook
            </div>
            <div class="footer-ig" onclick="goTo('https://instagram.com')">
                <i class="fa-brands fa-square-instagram" style="color: #000000;"></i>
                Instagram
            </div>
            <div class="fotter-tw" onclick="goTo('https://twitter.com')">
                <i class="fa-brands fa-twitter" style="color: #000000;"></i>
                Twitter
            </div>
        </div>

        <div class="footer-update">
            <h3>Stay update</h3>
            <div class="footer-mail">
                <input type="text" placeholder="Email">
                <i class="fa-solid fa-paper-plane" style="color: #000000;"></i>
            </div>
        </div>
    </footer>
    `)
}

//Change Header color
window.addEventListener('scroll', function() {
    var header = document.querySelector('#navigation');
    // var header = document.querySelector('#navigation');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// add to top
function addToTop() {
    document.write(`
    <a href="#" class="to-top">
        <i class="ti-angle-up"></i>
    </a>
    `)
}

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

//Change Header color
window.addEventListener('scroll', function() {
    var header = document.querySelector('#navigation');
    // var header = document.querySelector('#navigation');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//change page
function goTo(x) {
    location.href=x;   
   }
// go to Product page
// function goToProduct(x, id1, id2) {
//     location.href=x+ "?id1=" + id1 +"&id2=" + id2;
// }
function goToProduct(x, id) {
    location.href=x+ "?id=" + id;
}
// go to detailProduct   
function goToDetailProduct(x, id1, id2) {
    location.href=x+ "?id1=" + id1 +"&id2=" + id2;
}

// check valid gmail
function isValidGmail(gmail) {
    if (!gmail.endsWith('@gmail.com')) {
        return false;
    } else if (gmail.startsWith('@')) {
        return false;
    }

    return true;
}

// check valid password
function isValidPassword(password) {
    if (password.length < 8) {
        alert('Password must be at least 8 characters!');
        return false;
    }

    if (!/[a-zA-Z]/.test(password)) {
        alert('Password must contain at least one letter!');
        return false;
    }

    if (!/\d/.test(password)) {
        alert('Password must contain at least one digit!');
        return false;
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
        alert('Password can\'t contain special characters!');
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        alert('Password must contain at least one uppercase letter!');
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    // Cập nhật số lượng ban đầu
    updateQuantity();

    // Lắng nghe sự kiện storage khi có thay đổi trong localStorage
    window.addEventListener('click', function(event) {
    if (event.key === 'products') {
        // Cập nhật số lượng khi có thay đổi trong danh sách sản phẩm
        updateQuantity();
    }
    });

    function updateQuantity() {
    const listItem = JSON.parse(localStorage.getItem('products'));
    var count = listItem ? listItem.length : 0;
    console.log(count);
    document.querySelector('.quantity').innerHTML = count;
    }
});

// function removeProduct(curr) {
//     products=[];
//     products=JSON.parse(localStorage.getItem("products"))
//     products=products.filter(product=>product.img!=curr.parentElement.parentElement.children[0].src);
//     localStorage.setItem('products',JSON.stringify(products))
//     getProducts();
// }

// Check email
// var isEmailFilled = false; // Trạng thái nhập liệu email
// function checkEmail() {
//     var email = document.getElementById('email-field').value;
//     var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     var emailMessage = document.getElementById('email-message');
    
//     if (isEmailFilled) { // Kiểm tra trạng thái nhập liệu email
//     if (pattern.test(email) && email.endsWith('@gmail.com')) {
//         emailMessage.textContent = 'Valid Email!';
//         emailMessage.style.color = 'green';
//     } else {
//         emailMessage.textContent = 'Invalid Email!';
//         emailMessage.style.color = 'red';
//     }
//     } else {
//     emailMessage.textContent = ''; // Xóa nội dung thông báo
//     }
// }
// function onEmailInput() {
//     isEmailFilled = document.getElementById('email-field').value.trim() !== ''; // Cập nhật trạng thái nhập liệu email
//     checkEmail();
// }

// // Check phone numbers
// var isSdtFilled = false; // Trạng thái nhập liệu số điện thoại
// function CheckPhoneNumbers() {
//     var phoneNumbers = document.getElementById('numbers').value;
//     var messageElement = document.getElementById('numbers-message');

//     // Xóa khoảng trắng ở đầu và cuối số điện thoại
//     phoneNumbers = phoneNumbers.trim();
    
//     if (isSdtFilled) { // Kiểm tra trạng thái nhập liệu số điện thoại
//     if (phoneNumbers.length === 10 && phoneNumbers.startsWith('0')) {
//         messageElement.textContent = 'Valid phone number!';
//         messageElement.style.color = 'green';
//     } else {
//         messageElement.textContent = 'Invalid phone number!';
//         messageElement.style.color = 'red';
//     }
//     } else {
//     messageElement.textContent = ''; // Xóa nội dung thông báo
//     }
// }
// function onPhoneNumberInput() {
//     isSdtFilled = document.getElementById('numbers').value.trim() !== ''; // Cập nhật trạng thái nhập liệu số điện thoại
//     CheckPhoneNumbers();
// }

// // function CheckSectionDisplay(num) {
// //     var array = ['home-page', 'products-page', 'product-detail-page', 'about-us-page', 'cart-page', 'billing-detail-page', 'shop-all'];
    
// //     for (var i = 0; i < array.length; i++) {
// //         if (i === num) {
// //             if(num==4) { getProducts()};
// //             document.getElementById(array[i]).style.display = 'block';
// //             document.getElementById(array[i]).scrollIntoView({ behavior: 'smooth', block: 'start' });
// //         } else {
// //             document.getElementById(array[i]).style.display = 'none';
// //         }
// //     }
// // }

// // Hide all sections except for homepage section

// // window.addEventListener('load', function() {
// //     var sections = document.getElementsByTagName('section');
// //     for (var i = 0; i < sections.length; i++) {
// //         if (sections[i].id !== 'home-page') {
// //             sections[i].style.display = 'none';
// //         }
// //     }
// // });



// // Add products 

// // Demo data
// const productList = {
//     "1": { "name": 'Product A', "image": './assets/Furniture_Photos/Products_Photos/P0004/1.webp', "price": 1.223},
//     "2": { "name": 'Product B', "image": './assets/Furniture_Photos/Products_Photos/P0005/1.webp', "price": 3.111 },
//     "3": { "name": 'Product C', "image": './assets/Furniture_Photos/Products_Photos/P0006/1.webp', "price": 2.509 },
//     /// n products
// };
// const productListnew = JSON.stringify(productList);
// localStorage.setItem("productList", productListnew);
// document.addEventListener("DOMContentLoaded", function() {
//     addProduct();
//  });
//  function addProduct(){
//     const itemList = JSON.parse(localStorage.getItem("productList"));
//     for (let key in itemList) {
//         if (itemList.hasOwnProperty(key)) {
//             const product = itemList[key];
//             document.getElementsByClassName('product-bed')[0].innerHTML += `
//                 <div class="product-1" onclick="CheckSectionDisplay(2)">
//                     <img src="${product.image}" alt="The Eldridge Bed" class="product-img">
//                     <div class="product-intro">
//                         <p class="product-name">${product.name}</p>
//                         <p class="product-cost">$${product.price}</p>
//                     </div>
//                 </div>`;
//         }
//     }
//  }

//  // Create Bill PDF document
//  function generatePDF(){
//     if (document.getElementById("first-name-input").value == "") {
//         alert("Please enter first name");
//       } else {
//         var doc = new jsPDF();
    
//         // Set font size and style for "Bill Details"
//         doc.setFontSize(18);
//         doc.setFontStyle("bold");
    
//         // Calculate the width of the text
//         var textWidth = doc.getStringUnitWidth("Bill Details") * doc.internal.getFontSize();
    
//         // Calculate the center position of the page with an offset
//         var pageWidth = doc.internal.pageSize.getWidth();
//         var offsetX = 32; // Adjust the value to move the text to the right
//         var centerX = (pageWidth - textWidth) / 2 + offsetX;
    
//         // Center the "Bill Details" text
//         doc.text(centerX, 30, "Bill Details");
//         doc.setFontSize(25);
//         var textWidthLogo = doc.getStringUnitWidth("Furnishity.") * doc.internal.getFontSize();
//         doc.text(10, 10,"Furnishity.");
//         // Reset font size and style for other text
//         doc.setFontSize(11);
//         doc.setFontStyle("normal");
        
//         var fullName = document.getElementById("last-name-input").value + " " + document.getElementById("first-name-input").value;

//     // Display
        
//         doc.text(pageWidth - 60, 40, "Brand: " + "Furnishity Store");
//         doc.text(pageWidth - 75, 45, "University of Information and Technology");
//         doc.text(pageWidth - 60, 50, "Phone Number: " + "0987654321");
//         doc.text(pageWidth - 60, 55, "Website: " + "www.furnishity.com");
//         doc.text(10, 60, "Full Name: " + fullName);
//         doc.text(10, 65, "Address: " + document.getElementById("address-input").value);
//         doc.text(10, 70, "Apartment: "+ document.getElementById("info-apartment-input").value);
//         doc.text(10, 75, "Town/City: "+ document.getElementById("info-city-input").value);
//         doc.text(10, 80, "Phone Number: "+ document.getElementById("numbers").value);
//         doc.text(10, 85, "Email: "+ document.getElementById("email-field").value);
//         doc.text(10, 95, "Product Name");
//         doc.text(100, 95, "Quantity")
//         doc.text(190, 95, "Price");
//         var productName = document.querySelector('.shipment-product-name').textContent;
//         var productPrice = document.querySelector('.shipment-product-price').textContent;
//         doc.text(10, 105, productName);
//         doc.text(105, 105, "1");
//         doc.text(190, 105, productPrice);
//         // Draw a line below the labels
//         var lineY = 97; // Adjust the value to position the line
//         var lineWidth = 190; // Adjust the value to set the width of the line
//         doc.line(10, lineY, 10 + lineWidth, lineY);
//         doc.save("invoice.pdf");
//       }
// }


//logout
function logOut() {
    goTo('login-page.html')
    localStorage.removeItem('user')
}

//check log in

function checkLogIn() {
    if(localStorage.getItem('user')) {
        console.log('đã đăng nhập')
    }
    else {
        console.log('chưa đăng nhập')
        document.getElementsByClassName('cart-box')[0].style.display='none'
        document.getElementsByClassName('heart-box')[0].style.display='none'
        document.getElementsByClassName('profile-page')[0].style.display='none'
        document.getElementsByClassName('my-order')[0].style.display='none'
        document.getElementsByClassName('log-out')[0].innerHTML=`<button onclick="logOut()">Login</button>`
    }
}



