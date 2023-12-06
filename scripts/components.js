// start Create data for cart and wishlist
let userId = localStorage.getItem('userId') || '';
let wishlistProducts = JSON.parse(localStorage.getItem('wishlistProducts')) || {};
let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || {};

{/* <div class="search-box">
    <input type="text" id="search" placeholder="Search">
    <button class="search-button-navigation">
        <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
    </button>
</div>   */}

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
                                        <a href="#" onclick="goTo('profile-page.html')">My profile</a>
                                    </li>
                                    <li class="my-order">
                                        <a href="#" onclick="goTo('my-order-page.html')">My order</a>
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

function goToProduct(x, id) {
    location.href=x+ "?id=" + id;
}
// go to detailProduct   
function goToDetailProduct(x, id1, id2) {
    location.href=x+ "?id1=" + id1 +"&id2=" + id2;
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
    if (document.querySelector('.quantity') != null)
        document.querySelector('.quantity').innerHTML = count;
    }
});

function logOut() {
    goTo('login-page.html')
    localStorage.removeItem('user')
}

//check log in

function checkLogIn() {
    if(localStorage.getItem('user')) {
    }
    else {
        document.getElementsByClassName('cart-box')[0].style.display='none'
        document.getElementsByClassName('heart-box')[0].style.display='none'
        document.getElementsByClassName('profile-page')[0].style.display='none'
        document.getElementsByClassName('my-order')[0].style.display='none'
        document.getElementsByClassName('log-out')[0].innerHTML=`<button onclick="logOut()">Login</button>`
    }
}


// get products api
function getProductInfoApi(callback) {
    fetchApiBedroomProducts()
    async function fetchApiBedroomProducts() {
        let tagName = 'Bedroom';
        const responseAPI = await fetch(`http://localhost:5206/api/Furniture/GetProductByTagName${tagName}`)
        .then(response => {
            if (!response.ok) {
                console.log('lay api that bai');
            }

            return response.json();
        })
        .then(data => {
            localStorage.setItem('productList_Bedroom', JSON.stringify(data));
        })  
        .catch(error => console.error("Error fetching data:", error));
    }

    // get by name
    fetchApiLivingroomProducts()
    async function fetchApiLivingroomProducts() {
        let tagName = 'Livingroom';
        const responseAPI = await fetch(`http://localhost:5206/api/Furniture/GetProductByTagName${tagName}`)
        .then(response => {
            if (!response.ok) {
                console.log('lay api that bai');
            }

            return response.json();
        })
        .then(data => {
            localStorage.setItem('productList_Livingroom', JSON.stringify(data));
        })  
        .catch(error => console.error("Error fetching data:", error));
    }

    // get by name
    fetchApiDiningroomProducts()
    async function fetchApiDiningroomProducts() {
        let tagName = 'Diningroom';
        const responseAPI = await fetch(`http://localhost:5206/api/Furniture/GetProductByTagName${tagName}`)
        .then(response => {
            if (!response.ok) {
                console.log('lay api that bai');
            }

            return response.json();
        })
        .then(data => {
            localStorage.setItem('productList_Dining', JSON.stringify(data));
        })  
        .catch(error => console.error("Error fetching data:", error));
    }

    setTimeout(() => {
        console.log('API call completed');
        callback();
    }, 500);
}

function show_notification() {
    notification=document.getElementsByClassName('notification')[0]
    notification.style.display='flex'
    setTimeout(() => {
        close_notification()
    }, 2000);
}
//close notification
function close_notification() {
    notification=document.getElementsByClassName('notification')[0]
    notification.style.display='none'
//    location.reload()
}

function preCheckAccount(userName, password) {
    if (userName == '' || password == '') {
        document.querySelector('.notification').innerHTML = 'Email or Password can\'t be blank!';
        show_notification();
        return false;
    } else if (!isValidGmail(userName)) {
        document.querySelector('.notification').innerHTML = 'Invalid Email!';
        show_notification();
        return false;
    } else if (!isValidPassword(password)) {
        return false;
    }
    return true;
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
        document.querySelector('.notification').innerHTML = 'Password must be at least 8 characters!';
        show_notification();
        return false;
    }

    if (!/[a-zA-Z]/.test(password)) {
        document.querySelector('.notification').innerHTML = 'Password must contain at least one letter!';
        show_notification();
        return false;
    }

    if (!/\d/.test(password)) {
        document.querySelector('.notification').innerHTML = 'Password must contain at least one digit!';
        show_notification();
        return false;
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
        document.querySelector('.notification').innerHTML = 'Password can\'t contain special characters!';
        show_notification();
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        document.querySelector('.notification').innerHTML = 'Password must contain at least one uppercase letter!';
        show_notification();
        return false;
    }

    return true;
}





