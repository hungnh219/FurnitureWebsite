// load Product
window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    const itemList = JSON.parse(localStorage.getItem("productList"));
    for (let key in itemList) {
        if (itemList.hasOwnProperty(key)) {
            const product = itemList[key];
            
            if(product.id == id) {
            var path1 = product.imgDirect + "/1.webp";
            var path2 = product.imgDirect + "/2.webp";
            var path3 = product.imgDirect + "/3.webp";
            var path4 = product.imgDirect + "/4.webp";
            var path5 = product.imgDirect + "/5.webp";
            document.getElementsByClassName('item-detail')[0].innerHTML += `
            <div class="navigation-product-detail">
            <div class="navigation-bar">
                <i class="ti-arrow-left" onclick="goBack()"></i>
                <br>
                <br>
                <div class="image-number">
                    <div class="big-number">
                        01
                    </div>
                    <div class="small-number">
                        / 05
                    </div>

                </div>
                <br>
                <div class="text-nav">
                    <div class="blur-text">Sofa</div>
                    <p>/</p>
                    <div class="normal-text">${product.name}</div>
                </div>
            </div>
            <div class="move-left-right">
                <i class="ti-angle-left" onclick="prevImg()"></i>
                <i class="ti-angle-right" onclick="nextImg()"></i>
            </div>
            </div>
 
            <div class="product-name">
                ${product.name}
            </div>

            <div class="product-image">
                <img class="big-image" src="${path1}" alt="">
            </div>

            <div class="price-rate">
                <div class="product-price">
                $${product.price}
                </div>
                <div class="product-rate">
                    <div class="yellow-star">
                        <i class="ti-star"></i>
                        <i class="ti-star"></i>
                        <i class="ti-star"></i>
                        <i class="ti-star"></i>
                    </div>
                    <div class="white-star">
                        <i class="ti-star"></i>
                    </div>
                    <div class="rate">
                        <div class="number-rate">4.0 / 5.0</div>
                        <div class="blur-number-rate">(221)</div>
                    </div>
                </div>
            </div>

            <div class="about-product" >
                ${product.info}
            </div>

            <div class="quantity-add-product">
                <div class="add-minus-button">
                    <button class="ti-minus" onclick="decreasequan(this)"></button>
                    <div class="quantity">1</div>
                    <button class="ti-plus" onclick="increasequan(this)"></button>
                </div>
                <div class="add-product" onclick="addtocart(this)">
                    <button class="add-product-button" >
                        Add to Cart
                    </button>
                    <div class="notification" >This product has been added to cart</div>
                </div>
                
            </div>

            <div class="product-notes">
                •  Ready for delivery in 8–9 weeks. <br>
                •  Free shipping in HCM city. <br>
                •  Tool-free assembly .
            </div>

            <div class="content-detail-image">
                <i class="ti-heart" onclick="addToWishList(this)"></i> Add to wishlist 
                <div class="notification_wishlist" >This product has been added to wishlist</div>
                <i class="ti-reload"></i> Add to Compare 
                <div class="share">Share Product: 
                    <i class="ti-share"></i>
                    <i class="ti-twitter"></i>
                    <i class="ti-pinterest"></i>
                    <i class="ti-instagram"></i>
                </div>

                <div class="detail-image">
                    <div class="border-others-img">
                        <img class="first-img" onclick = "switchImg(event,'${path1}')" src="${path1}" alt="${product.name}">
                    </div>
                    <div class="border-others-img">
                        <img class="others-img" onclick = "switchImg(event,'${path2}')" src="${path2}" alt="${product.name}">
                    </div>
                    <div class="border-others-img">
                        <img class="others-img" onclick = "switchImg(event,'${path3}')" src="${path3}" alt="${product.name}">
                    </div>
                    <div class="border-others-img">
                        <img class="others-img" onclick = "switchImg(event,'${path4}')" src="${path4}" alt="${product.name}">
                    </div>
                    <div class="border-others-img">
                        <img class="others-img" onclick = "switchImg(event,'${path5}')" src="${path5}" alt="${product.name}">
                    </div>
                </div>
            </div>

            <div class="warranty">
                <div class="blur-text-wh">Warranty</div>
                <div class="normal-text-wh">
                    The product comes with a 12 month warranty against any manufacturing defects and <br>
                    any other issues with the materials that have been used.
                </div>
            </div>

            <div class="highlights">
                <div class="blur-text-wh">Highlights</div>
                <div class="highlights-details">
                    <div class="details">
                        <i class="ti-control-record"></i>
                        <div class="normal-text-wh">
                            Material: Engineered Wood
                        </div>
                    </div>
                    <div class="details">
                        <i class="ti-control-record"></i>
                        <div class="normal-text-wh">
                            Upholstery Included
                        </div>
                    </div>
                    <div class="details">
                        <i class="ti-control-record"></i>
                        <div class="normal-text-wh">
                            W x H x D: ${product.width}” x ${product.height}” x ${product.depth}” 
                        </div>
                    </div>
                    <div class="details">
                        <i class="ti-control-record"></i>
                        <div class="normal-text-wh">
                            Weight: ${product.weight} kg
                        </div>
                    </div>
                    <div class="details">
                        <i class="ti-control-record"></i>
                        <div class="normal-text-wh">
                            Knock Down - Delivered in non-assembled pieces, installation by service partner
                        </div>
                    </div>
                </div>
            </div>`
            break;
        }
    }
   }
};



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
    if (localStorage.getItem("products")) {
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
    else show_notification()
     
    localStorage.setItem("products", JSON.stringify(products));
    
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

// go back
function goBack() {
    window.history.back();
}

// Change image
function switchImg(event,source) {
    document.querySelector('.big-image').src = source;
    var borderImgs = document.querySelectorAll('.border-others-img');
    var bigNumberDiv = document.querySelector('.big-number');
    borderImgs.forEach(function(borderImg) {
        borderImg.style.border = '2px solid grey';
        borderImg.style.boxShadow = 'none';
    });

    var selectedImg = event.target;
    selectedImg.parentElement.style.border = '2px solid #3AA39F';
    selectedImg.parentElement.style.boxShadow ='10px 10px 20px grey';
    selectedImg.parentElement.style.transition = '0.3s';
    var newNumber;
    var clickedDiv = selectedImg.parentNode;
    newNumber = (Array.from(borderImgs).indexOf(clickedDiv) + 1).toString().padStart(2, '0');
    bigNumberDiv.textContent = newNumber;
}
var currentImage = 1;
var totalImages = 5;
function prevImg() {
    currentImage--;
    if (currentImage < 1) {
        currentImage = totalImages;
    }
    var prevImg = document.querySelector(`.border-others-img:nth-child(${currentImage}) img`);
    switchImg({ target: prevImg }, prevImg.getAttribute('src'));
        
}
function nextImg() {
    currentImage++;
    if (currentImage > totalImages) {
        currentImage = 1;
    }
    var nextImg = document.querySelector(`.border-others-img:nth-child(${currentImage}) img`);
    switchImg({ target: nextImg }, nextImg.getAttribute('src'));
}
//add to wishlist
function addToWishList(curr) {
    let products=[];
    let img=curr.parentElement.parentElement.children[2].children[0].src;

    let productname=curr.parentElement.parentElement.children[1].textContent.trim();
    let productprice=curr.parentElement.parentElement.children[3].children[0].textContent.trim();
    
    if (localStorage.getItem("WishList")) {
        products.push(...JSON.parse(localStorage.getItem("WishList")));
      }
    
    let product={
    img:img,
    productname:productname,
    productprice:productprice,
    };
    let isExist=products.some(x=>x.img==product.img&&x.productname==product.productname&&x.productprice==product.productprice);
    if(!isExist) {
        products.push(product);  
    }
    else show_notification_wishlist()
     
    localStorage.setItem("WishList", JSON.stringify(products));
    
}

//show notification
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

//show notification wishlist
function show_notification_wishlist() {
    notification=document.getElementsByClassName('notification_wishlist')[0]
    notification.style.display='flex'
    setTimeout(() => {
        close_notification_wishlist()
    }, 2000);
}

//close notification wishlist
function close_notification_wishlist() {
    notification=document.getElementsByClassName('notification_wishlist')[0]
    notification.style.display='none'
//    location.reload()
}