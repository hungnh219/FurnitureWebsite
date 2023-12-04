var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
window.onload = function(){
    console.log(id);
    const address = document.getElementById('address');
    if(id === 'living_room')
    {
        address.innerText = 'LIVING ROOM';
        addProduct();
    } else if(id === 'bedroom'){
        address.innerText = 'BEDROOM';
        addProduct();
    } else if(id === 'dining'){
        address.innerText = 'DINING';
        addProduct();
    }
}

// Demo data
const productList_Bedroom = {
    "0": {
        "id": 1,
        "name": "The Bank Console Table",
        "info": "A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.",
        "price": 3150,
        "material": "Natural Oak",
        "width": 60,
        "height": 20,
        "depth": 30,
        "weight": 60,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0001",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
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
const productListnew = JSON.stringify(productList_Bedroom);
localStorage.setItem("productList_Bedroom", productListnew);

const productList_Livingroom = {
    "7": {
        "id": 14,
        "name": "The Franklin Bench",
        "info": "Tailored in rich texture with a versatile design, The Franklin is beautifully timeless and effortlessly comfortable. Slipcovered in linen for a casual yet elegant addition to any room.",
        "price": 1075,
        "material": "Dew",
        "width": 60,
        "height": 17,
        "depth": 17,
        "weight": 35,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0014",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "8": {
        "id": 15,
        "name": "The Franklin Ottoman",
        "info": "Tailored in rich texture with a versatile design, The Franklin is beautifully timeless and effortlessly comfortable. Slipcovered in linen for a casual yet elegant addition to any room.",
        "price": 450,
        "material": "Chambray",
        "width": 17,
        "height": 17,
        "depth": 17,
        "weight": 20,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0015",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "9": {
        "id": 16,
        "name": "The Mulberry Ottoman",
        "info": "A sculptural pedestal base and plush seat make The Mulberry a versatile design statement. Expertly crafted with a solid ash wood base and tailored detailing.",
        "price": 575,
        "material": "Driftwood",
        "width": 16.5,
        "height": 16.5,
        "depth": 18,
        "weight": 15,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0016",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "10": {
        "id": 17,
        "name": "The Reyes Bench",
        "info": "Modern lines meet mixed materials in this sleek and minimal bench. The Reyes is expertly crafted with solid ash wood and delicate brass inset detailing. An optional seat cushion upholstered in soft nubuck leather adds textural interest.",
        "price": 1150,
        "material": "Sail",
        "width": 60,
        "height": 18,
        "depth": 16.25,
        "weight": 40,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0017",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "11": {
        "id": 37,
        "name": "The Beekman Table",
        "info": "Handcrafted from richly grained oak, The Beekman has the presence of modern sculpture. Distinguished by its freeform shape, beveled edging, and tri-leg design, its organic silhouette is appealing from any angle.",
        "price": 2750,
        "material": "Pecan Oak",
        "width": 68,
        "height": 32,
        "depth": 29,
        "weight": 43,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0037",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "12": {
        "id": 38,
        "name": "The Breuer Modular Sectional",
        "info": "Italian modernist design of the 1960s informs The Breuer. The modular components are low and expansive, creating a vast landscape of inviting luxury and multifunctional design.",
        "price": 6075,
        "material": "Agate",
        "width": 100,
        "height": 60,
        "depth": 50,
        "weight": 100,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0038",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "13": {
        "id": 39,
        "name": "The Carmine Sectional",
        "info": "A fresh update on a beloved classic. The Carmine’s fan-pleated arms bring it understated elegance. The tailored seat and back offer a supportive sit.",
        "price": 4250,
        "material": "Pecan",
        "width": 100,
        "height": 60,
        "depth": 50,
        "weight": 100,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0039",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "14": {
        "id": 40,
        "name": "The Ludlow Sectional",
        "info": "Midcentury style meets classic polish in The Ludlow. Its deep, reclined seat is perfectly suited for lounging (or accidental naps).",
        "price": 4425,
        "material": "Pecan",
        "width": 100,
        "height": 60,
        "depth": 50,
        "weight": 100,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0040",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "15": {
        "id": 41,
        "name": "The Muir Sectional",
        "info": "Artisanal woodworking meets expertly tailored comfort in The Muir Sectional. Its asymmetrical silhouette with built-in side table form a mixed material work of art.",
        "price": 9895,
        "material": "Handwaxed Ash",
        "width": 100,
        "height": 60,
        "depth": 50,
        "weight": 100,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0041",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "16": {
        "id": 42,
        "name": "The Sullivan Sectional",
        "info": "A modern take on classic European forms, The Sullivan mixes gentle curves with tailored lines. The elegant profile and sloped arms nod to tradition; a deep seat and down-filled cushion offer luxurious comfort.",
        "price": 4100,
        "material": "Pecan",
        "width": 100,
        "height": 60,
        "depth": 50,
        "weight": 100,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0042",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "17": {
        "id": 43,
        "name": "The Varick Sectional",
        "info": "Bold proportions and comfort-driven curvature make The Varick a contemporary statement fit for everyday luxury. Its oversized arms and low-slung profile lend a relaxed, casual feel.",
        "price": 6500,
        "material": "Dove",
        "width": 100,
        "height": 60,
        "depth": 50,
        "weight": 100,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0043",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "18": {
        "id": 44,
        "name": "The Bond Settee Sofa",
        "info": "Evocative of postmodern curvature, The Bond’s generous proportions and soft contours inform its contemporary sensibility. Down-filled cushioning define its luxurious comfort.",
        "price": 3225,
        "material": "Sail",
        "width": 77,
        "height": 37,
        "depth": 29,
        "weight": 70,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0044",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    }
}
localStorage.setItem("productList_Livingroom", JSON.stringify(productList_Livingroom));

const productList_Dining = {
    "0": {
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
    "1": {
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
    "2": {
        "id": 30,
        "name": "The Allen Dining Chair",
        "info": "The hand-carved frame and natural materiality give The Allen an organic, refined silhouette. Expertly crafted of solid ash wood and paired with tailored upholstery for casual comfort.",
        "price": 485,
        "material": "Driftwood",
        "width": 19,
        "height": 22,
        "depth": 33,
        "weight": 19.5,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0030",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "3": {
        "id": 31,
        "name": "The Bedford Dining Table",
        "info": "Stunning in its simplicity, The Bedford’s subtle curves and timeless silhouette create a statement of elegance. Expertly crafted of solid ash wood and finished with exquisite artisanship.",
        "price": 2450,
        "material": "Whitewash",
        "width": 80,
        "height": 40,
        "depth": 30,
        "weight": 96,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0031",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "4": {
        "id": 32,
        "name": "The Delancey Stool",
        "info": "Mixed materiality and a beautifully curved frame give The Delancey a handcrafted design inspired by midcentury forms. Expertly crafted from solid ash with a roomy, plush seat for elevated comfort.",
        "price": 865,
        "material": "Charcoal",
        "width": 18,
        "height": 20,
        "depth": 37,
        "weight": 20,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0032",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "5": {
        "id": 33,
        "name": "The Jane Dining Chair",
        "info": "Playful contours and a bold, mixed material aesthetic give The Jane a stylish form that’s designed for lingering. Its elegantly curved back and refined curved legs add sculptural appeal.",
        "price": 755,
        "material": "Pecan",
        "width": 21,
        "height": 22,
        "depth": 29.5,
        "weight": 19.5,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0033",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "6": {
        "id": 34,
        "name": "The Reade Dining Table",
        "info": "A delicate balance of commanding proportions, The Reade’s handcrafted column legs and intricately designed tabletop create an unforgettable sculptural statement. Expertly crafted of solid ash wood and finished with exquisite artisanship.",
        "price": 4275,
        "material": "Whitewash",
        "width": 72,
        "height": 40,
        "depth": 30,
        "weight": 96,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0034",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "7": {
        "id": 35,
        "name": "The Reade Round Dining Table",
        "info": "A delicate balance of commanding proportions, The Reade’s handcrafted column legs and intricately designed tabletop create an unforgettable sculptural statement. Expertly crafted of solid ash wood and refined with exquisite artisanship.",
        "price": 2925,
        "material": "Whitewash",
        "width": 42,
        "height": 40,
        "depth": 30,
        "weight": 48,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0035",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    },
    "8": {
        "id": 36,
        "name": "The Stanton Stool",
        "info": "The hand-carved frame and natural materiality give The Stanton an organic, airy shape that’s effortlessly versatile. Expertly crafted of solid ash wood and paired with tailored upholstery for casual comfort.",
        "price": 525,
        "material": "Driftwood",
        "width": 21,
        "height": 19,
        "depth": 30,
        "weight": 29,
        "imgDirect": "../assets/Furniture_Photos/Products_Photos/P0036",
        "comments": [],
        "likeProducts": [],
        "receiptDetails": [],
        "tags": []
    }
}
localStorage.setItem("productList_Dining", JSON.stringify(productList_Dining));


 function addProduct(){
    var itemList;
    if(id === 'bedroom' ){
        itemList = JSON.parse(localStorage.getItem("productList_Bedroom"));
    } else if(id === 'living_room'){
        itemList = JSON.parse(localStorage.getItem("productList_Livingroom"));
    } else if(id === 'dining'){
        itemList = JSON.parse(localStorage.getItem("productList_Dining"));
    }
    for (let key in itemList) {
        if (itemList.hasOwnProperty(key)) {
            const product = itemList[key];
            var path ="../" + product.imgDirect + "/1.webp";
            document.getElementsByClassName('product-box-detail')[0].innerHTML += `
                <div class="product-1" onclick="goToDetailProduct('product-detail-page.html','${id}',${product.id})">
                    <img src="${path}" alt="${product.name}" class="product-img">
                    <div class="product-intro">
                        <p class="product-name">${product.name}</p>
                        <p class="product-cost">$${product.price}</p>
                    </div>
                </div>`;
        }
    }
 }