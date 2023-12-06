function loginButton() {
    let userName = document.querySelector('.info-email input').value;
    let password = document.querySelector('.info-password input').value;
    
    // dam bao username, password la kieu string
    userName = userName.toString();
    password = password.toString();

    localStorage.clear()

    if (preCheckAccount(userName, password)) {
        checkAccount(userName, password)
    }
}

function checkAccount(userName, password) {
    async function checkLogin(username, password) {
        const apiUrl = 'http://localhost:5206/api/Furniture/login'; // Thay thế bằng URL thực tế của API

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            Username: username,
            Password: password,
            }),
        });

        if (response.ok) {
            let responseData = await response.json();
            responseData = responseData.toString();
            localStorage.setItem('userId', responseData);
            return true; 
        } else {
            return false;
        }
    }

    checkLogin(userName, password)
    .then((isLoggedIn) => {
        if (isLoggedIn){
            getInfoApi(function() {
            addToWishList(JSON.parse(localStorage.getItem('wishlistProducts')))
            addToCartList(JSON.parse(localStorage.getItem('cartProducts')))
            localStorage.setItem('user',JSON.stringify('is login'))
            goTo('home-page.html');
            });
        }
        else {
            document.querySelector('.notification').innerHTML = 'Check Your Email or Password!';
            show_notification()
        }
            
    });    
}

const productList_Bedroom = JSON.parse(localStorage.getItem('wishlistProducts'));

function addToWishList(productList_Bedroom) {
    let products=[];
    if (localStorage.getItem("WishList")) {
        products.push(...JSON.parse(localStorage.getItem("WishList")));
      }
    
    
    for(let key in productList_Bedroom) {
        let id1= 'bedroom'
        let id2=productList_Bedroom[key]['id']
        let img=productList_Bedroom[key]['imgDirect'] + "/1.webp"
        let productname=productList_Bedroom[key]['name']
        let productprice=productList_Bedroom[key]['price']
        
        
        
        let product={
        id1:id1,
        id2:id2,
        img:img,
        productname:productname,
        productprice:productprice,
        };
        let isExist=products.some(x=>x.id2==product.id2);
        if(!isExist) {
            products.push(product);  
        }
    }
    
     
    localStorage.setItem("WishList", JSON.stringify(products));
}

function addToCartList(productList) {
    let products=[];
    if (localStorage.getItem("products")) {
        products.push(...JSON.parse(localStorage.getItem("products")));
      }
    
    
    for(let key in productList) {
        console.log('check 1');
        let id1= 'bedroom'
        let id2=productList[key]['id']
        let img=productList[key]['imgDirect'] + "/1.webp"
        let productname=productList[key]['name']
        let productprice =productList[key]['price']
        let productquan = Math.floor(Mproductpriceath.random() * 5) + 1;
        let producttotal = productquan * productprice;
        
        let product={
        id1:id1,
        id2:id2,
        img:img,
        productquan:productquan,
        productname:productname,
        productprice:productprice,
        producttotal: producttotal,
        };
        let isExist=products.some(x=>x.id2==product.id2);
        if(!isExist) {
            products.push(product);  
        }
    }
    
     
    localStorage.setItem("products", JSON.stringify(products));
}


function getInfoApi(callback) {
    let userId = localStorage.getItem('userId');

    fetchApiCartlist()
    async function fetchApiCartlist() {
        const responseAPI = await fetch(`http://localhost:5206/api/Furniture/GetCartlistUserById${userId}`)
        .then(response => {
            if (!response.ok) {
                console.log('lay api that bai');
            }

            return response.json();
        })
        .then(data => {
            console.log('cartlist products info:');
            localStorage.setItem('cartProducts', JSON.stringify(data));
        })  
        .catch(error => console.error("Error fetching data:", error));
    }

    // get by name
    fetchApiWishlist()
    async function fetchApiWishlist() {
        const responseAPI = await fetch(`http://localhost:5206/api/Furniture/GetWishlistUserById${userId}`)
        .then(response => response.json())
        .then(data => {
        if (data.length > 0) {
            console.log('wishlist products info:');

            localStorage.setItem('wishlistProducts', JSON.stringify(data));
        } else {
            console.error("No data received from the API");
        }
    })
    .catch(error => console.error("Error fetching data:", error));
    }

    setTimeout(() => {
        console.log('API call completed');
        callback();
    }, 500);
}

function changeTypePassword() {
    let password = document.getElementById('password');
    let eyeIcon = document.querySelector('.fa-regular.fa-eye');
    let eyeSlashIcon = document.querySelector('.fa-regular.fa-eye-slash');

    if (password.type == 'password') {
        password.type = 'text';
        eyeIcon.style.display = 'inline-block';
        eyeSlashIcon.style.display = 'none';
    } else {
        password.type = 'password';
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'inline-block';
    }
}

function logOut() {
    goTo('login-page.html')
    localStorage.removeItem('user')
}


