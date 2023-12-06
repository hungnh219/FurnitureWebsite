let product_manage={
    '0': {
        'product_name':'The Chelsea',
        'quantity':'10',
        'Category': '100',
        'price': '$3,725'
    },
    '1': {
        'product_name':'The Arsena',
        'quantity':'20',
        'Category': '200',
        'price': '$4,725'
    },
    '2': {
        'product_name':'The Arsnal',
        'quantity':'20',
        'Category': '200',
        'price': '$4,725'
    },
    '3': {
        'product_name':'The Arsenal',
        'quantity':'20',
        'Category': '200',
        'price': '$4,725'
    }
}
//add product to localStorage 
function addProductManage(product_manage) {
    localStorage.setItem('product_manage',JSON.stringify(product_manage))
}
addProductManage(product_manage)




function getProductManage() {
    let product_manage=JSON.parse(localStorage.getItem('product_manage'))
    document.getElementsByClassName('detail-info')[0].children[1].innerHTML=``
    for(let x in product_manage) {

        document.getElementsByClassName('detail-info')[0].children[1].innerHTML+=` 
        <tr class="product-info">
            <td class="Product name">${product_manage[x].product_name}</td>
            <td class="Quantity">${product_manage[x].quantity}</td>
            <td class="Category">${product_manage[x].Category}</td>
            <td class="Price">${product_manage[x].price}</td>
            <td class="product-actions">
                <button class="delete-button" onclick="deleteProduct(this)">Delete</button>
                <button class="changes-button" onclick="toggleModalStaff()">Changes</button>                                </td>
        </tr>
        
    `
    }
}
getProductManage()



//remove product
function deleteProduct(curr) {
    let name=curr.parentElement.parentElement.children[0].textContent

    let product_manage=JSON.parse(localStorage.getItem('product_manage'))
    for (let x in product_manage) {
        if(product_manage[x].product_name==name) {
            delete  product_manage[x]
        }
    }
    addProductManage(product_manage)
    getProductManage()
}