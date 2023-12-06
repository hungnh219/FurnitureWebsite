//get product from localStorage
function getProducts() {
    document.getElementsByClassName('wishlist')[0].innerHTML='';
    try {
        a=JSON.parse(localStorage.getItem('WishList')).length==0
    }
    catch(err) {
        a=true
    }
    if( a) { 
        document.getElementsByClassName('wishlist')[0].innerHTML+=`
        
        <div class="cart">
        <img class="empty-cart" src="../assets/Cart empty/cart-empty.png" alt="Empty Cart image">
        <p>Your wishlist is empty</p>
        </div>
        `
    }
    else {
        document.getElementsByClassName('wishlist')[0].innerHTML+=`
        <div class="wishlist-heading">
        <div class="wishlist-product-name">Product name</div>
        <div class="wishlis-product-price">Price</div>
        </div>
        `
        let products=JSON.parse(localStorage.getItem("WishList"));
        products.forEach(product => {
            
            document.getElementsByClassName('wishlist')[0].innerHTML+=`
            <div class="wishlist-product">
                    <i class="ti-close" onclick="removeProduct('${product.productname}')"></i>
                    <img src="${product.img}" alt="The Chelsea" onclick="goToDetailProduct('product-detail-page.html','${product.id1}','${product.id2}')">
                    <p class="wishlish-name-product" onclick="goToDetailProduct('product-detail-page.html','${product.id1}','${product.id2}')">${product.productname}</p>
                    <p class="wistlish-price">${product.productprice}</p>
                    <p class="wishlist-to-cart" onclick="addtocart(this,'${product.id1}','${product.id2}','${product.img}','${product.productname}','${product.productprice}')">Add to cart</p>
                    <div class="notification" >This product has been added to cart</div>
            </div>
            `
        })
        
        
    }
    
}

//remove product
function removeProduct(productt) {
    let products=[];
    products=JSON.parse(localStorage.getItem("WishList"))
    products=products.filter(product=>product.productname!=productt);
    localStorage.setItem('WishList',JSON.stringify(products))
    getProducts();
}

//get product every load
window.addEventListener('load', function() {
    getProducts();
});


//add to cart
function addtocart(curr,id1,id2,img,productname,productprice) {
    let products=[];
    
    let productquan=1
    productquan.toString();
    productprice=productprice.slice(1);
    productprice=productprice.replace(',','.');
    let producttotal=parseFloat(productquan)*parseFloat(productprice);
    if (localStorage.getItem("products")) {
        products.push(...JSON.parse(localStorage.getItem("products")));
      }
    
    let product={
        id1:id1,
        id2:id2,
        img:img,
        productname:productname,
        productprice:productprice,
        productquan:productquan.toString(),
        producttotal:producttotal.toString()
    };
    let isExist=products.some(x=>x.id2==product.id2);
    if(!isExist) {
        products.push(product);  
    }
    else show_notification(curr)
     
    localStorage.setItem("products", JSON.stringify(products));
    
}

//show notification
function show_notification(curr) {
    curr=curr.parentElement.children[5]

    // notification=document.getElementsByClassName('notification')[0]
    // notification.style.display='flex'
    curr.style.display='flex'
    setTimeout(() => {
        close_notification(curr)
    }, 2000);
}

//close notification
function close_notification(curr) {
    curr=curr.parentElement.children[5]
    curr.style.display='none'
    // notification=document.getElementsByClassName('notification')[0]
    // notification.style.display='none'
//    location.reload()
}