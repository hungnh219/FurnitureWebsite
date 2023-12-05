async function getAllProducts() {
    try {
        const responseAPI = await fetch('http://localhost:5206/api/Furniture/GetAllProducts');
        const data = await responseAPI.json();

        if (data.length > 0) {
            productList = data;
            console.log(productList);
        } else {
            console.error("No data received from the API");
        }

        return productList;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

function addProduct() {
    const itemList = JSON.parse(localStorage.getItem("productList")) || [];

    for (let key in itemList) {
        if (itemList.hasOwnProperty(key)) {
            const product = itemList[key];
            var path = product.imgDirect + "/1.webp";
            document.getElementsByClassName('product-box-detail')[0].innerHTML += `
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

document.addEventListener("DOMContentLoaded", function () {
    const storedProductList = localStorage.getItem("productList");

    if (storedProductList) {
        addProduct();
    } else {
        getAllProducts().then(function (productList) {
            const productListString = JSON.stringify(productList);
            localStorage.setItem("productList", productListString);
            addProduct();
        });
    }
});
