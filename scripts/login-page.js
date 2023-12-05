
function loginButton() {
    console.log('check login button')
    let userName = document.querySelector('.info-email input').value;
    let password = document.querySelector('.info-password input').value;
    
    // dam bao username, password la kieu string
    userName = userName.toString();
    password = password.toString();
    console.log(document.querySelector('.info-email input'), document.querySelector('.info-password input'));
    console.log(userName, password);

    checkAccount(userName, password);
    
    // if (preCheckAccount(userName, password)) {
    // } else {
    //     //alert('Co gi do sai sai!');
    // }
    
}

// kiem tra account truoc khi goi api
// co dung dinh dang gmail hay khong
// username, password không được trống
// mat khau du 8 ki tu hay khong
// ....
function preCheckAccount(userName, password) {
    if (userName == '' || password == '') {
        alert('Username and Password can\'t be blank');
        return false;
    } else if (!isValidGmail(userName)) {
        alert('Invalid Gmail!');
        return false;
    } else if (!isValidPassword(password)) {
        return false;
    }
    return true;
}

function checkAccount(userName, password) {
    // gọi request tới server
    // var result = true;

    if (userName == '123' && password == 'asd') {
        addToWishList(productList_Bedroom)
        goTo('home-page.html');
    }
    else {
        // thông báo username, password sai
        // alert('There\'s something wrong!');
        show_notification()
    }
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


const productList_Bedroom = {
    
    "1": {
        "id": 2,
        "name": "The Bowery Table",
        "info": "Modern lines meet plush comfort in this beautifully tailored coffee table ottoman. With a movable solid ash table and subtle detailing throughout, The Bowery is a study in elegant yet functional design.",
        "price": 1675,
        "material": "Driftwood",
        "width": 47,
        "height": 30,
        "depth": 16,
        "weight": 47,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0002",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "2": {
        "id": 3,
        "name": "The Morro Table",
        "info": "Artisanal woodworking gives The Morro its shapely form and minimalist design. Handcrafted with solid ash wood, each table harmoniously nests together or stands alone, adding an artful presence to any room.",
        "price": 735,
        "material": "Driftwood",
        "width": 50,
        "height": 30,
        "depth": 30,
        "weight": 40,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0003",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "3": {
        "id": 4,
        "name": "The Reade Console Table",
        "info": "A delicate balance of commanding proportions, The Reade’s handcrafted column legs and intricately designed tabletop create an unforgettable sculptural statement. Expertly crafted of solid ash wood and finished with exquisite artisanship.",
        "price": 2475,
        "material": "Pecan",
        "width": 60,
        "height": 21,
        "depth": 30,
        "weight": 72,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0004",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "4": {
        "id": 5,
        "name": "The Reade Demilune Console Table",
        "info": "A delicate balance of commanding proportions, The Reade’s handcrafted column legs and intricately designed tabletop create an unforgettable sculptural statement. Expertly crafted of solid ash wood and finished with exquisite artisanship.",
        "price": 1950,
        "material": "Pecan",
        "width": 42,
        "height": 21,
        "depth": 30,
        "weight": 50,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0005",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "5": {
        "id": 6,
        "name": "The Vestry Table",
        "info": "Handcrafted of solid oak, The Vestry’s organic shape and soft curvature display an expansive statement of natural materiality. Designed to artfully nest together or stand alone in graceful proportion.",
        "price": 1775,
        "material": "Pecan Oak",
        "width": 40,
        "height": 27,
        "depth": 26,
        "weight": 48,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0006",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "6": {
        "id": 7,
        "name": "The Eldridge Bed",
        "info": "Lushly cushioned and upholstered all around, The Eldridge offers an enveloping experience. Its low, linear silhouette with extended headboard is softened by rounded corners traced with subtle flange seaming.",
        "price": 3885,
        "material": "Agate",
        "width": 100,
        "height": 36.5,
        "depth": 70,
        "weight": 82,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0007",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "7": {
        "id": 8,
        "name": "The Essex Bed",
        "info": "Clean lines, classic proportions, and subtle tailoring–the elegance of The Essex lies in its simplicity. A tapered headboard and sleek legs lend a modern edge to this striking shape.",
        "price": 2225,
        "material": "Pecan",
        "width": 70,
        "height": 50,
        "depth": 80,
        "weight": 76,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0008",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "8": {
        "id": 9,
        "name": "The Kent Bed",
        "info": "Marrying soft curves with tailored understatement, The Kent’s classic profile gives center stage to its meticulous detailing—from the headboard’s inset curvature to its rounded foot rail.",
        "price": 3250,
        "material": "Pecan",
        "width": 70,
        "height": 42,
        "depth": 90,
        "weight": 50,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0009",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    }
};
// [
//     {
//       "img": "http://127.0.0.1:5500//assets/Furniture_Photos/Products_Photos/P0001/1.webp",
//       "productname": "The Bank Console Table",
//       "productprice": "$3150"
//     },
//     {
//       "img": "http://127.0.0.1:5500//assets/Furniture_Photos/Products_Photos/P0006/1.webp",
//       "productname": "The Vestry Table",
//       "productprice": "$1775"
//     }
//   ]
  //get product every load


function addToWishList(productList_Bedroom) {
    let products=[];
    if (localStorage.getItem("WishList")) {
        products.push(...JSON.parse(localStorage.getItem("WishList")));
      }
    
    
    for(let key in productList_Bedroom) {
        let id1= 'bedroom'
        let id2=productList_Bedroom[key].id
        let img="../" + productList_Bedroom[key].imgDirect + "/1.webp"
        let productname=productList_Bedroom[key].name
        let productprice=productList_Bedroom[key].price
        
        
        
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

