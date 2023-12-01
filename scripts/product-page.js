// Add products 

// Demo data
const productList = {
    0: {id: 1, name: 'The Bank Console Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 3150, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0001'},
            1: {id: 2, name: 'The Bowery Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 1675, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0002'},
            2: {id: 3, name: 'The Morro Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 735, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0003'},
            3: {id: 4, name: 'The Reade Console Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 2475, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0004'},
            4: {id: 5, name: 'The Reade Demilune Console Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 1950, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0005'},
            5: {id: 6, name: 'The Vestry Table', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 1775, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0006'},
            6: {id: 7, name: 'The Eldridge Bed', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 3885, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0007'},
            7: {id: 8, name: 'The Essex Bed', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 2225, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0008'},
            8: {id: 9, name: 'The Kent Bed', info: 'A striking design statement, The Bank is handcrafted of solid American white oak. Designed with a distinctive overlap, the faceted, conical legs add sculptural sensibility, supporting a white oak veneer top with carved beveled edging.', price: 3250, material: '', width: 60, height: 20, depth: 30, weight: 60, imgDirect: '/assets/Furniture_Photos/Products_Photos/P0009'},
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
            var path = product.imgDirect + "/1.webp";
            document.getElementsByClassName('product-bed')[0].innerHTML += `
                <div class="product-1" onclick="goToDetailProduct('product-detail-page.html',${product.id})">
                    <img src="${path}" alt="${product.name}" class="product-img">
                    <div class="product-intro">
                        <p class="product-name">${product.name}</p>
                        <p class="product-cost">$${product.price}</p>
                    </div>
                </div>`;
        }
    }
 }