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
                    <img src="${product.img}" alt="The Chelsea">
                    <p class="wishlish-name-product">${product.productname}</p>
                    <p class="wistlish-price">${product.productprice}</p>
                    <p class="wishlist-to-cart" onclick="addtocart('${product.img}','${product.productname}','${product.productprice}')">Add to cart</p>
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
function addtocart(p_img,p_name,p_price) {
    let products=[];
    let img=p_img
    let productname=p_name
    let productprice=p_price
    let productquan=1
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
    else alert("This product has been added to cart")
     
    localStorage.setItem("products", JSON.stringify(products));
    
}