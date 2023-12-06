 let userList = {
	"0": {
        "address":"Ta Quang Buu, Khu Pho 6, Linh Trung, Thu Duc,TPHCM",
        "birthYear": 2003,
        "firstName": "Hung1",
        "id":"1",
        "lastName":"Nguyen Hoang",
        "mail": "21520895@gm.uit.edu.vn",
        "phone":"948582732",
        "regDate":"2023-11-01T00:00:00",
        "userName": "hungnh219@gmail.com"
    },
    "1": {
        "address":"Ta Quang Buu, Khu Pho 6, Linh Trung, Thu Duc,TPHCM",
        "birthYear": 2003,
        "firstName": "Hung2",
        "id":"2",
        "lastName":"Nguyen Hoang",
        "mail": "21520895@gm.uit.edu.vn",
        "phone":"948582732",
        "regDate":"2023-11-01T00:00:00",
        "userName": "hungnh219@gmail.com"
    },
    "2": {
        "address":"Ta Quang Buu, Khu Pho 6, Linh Trung, Thu Duc,TPHCM",
        "birthYear": 2003,
        "firstName": "Hung3",
        "id":"3",
        "lastName":"Nguyen Hoang",
        "mail": "21520895@gm.uit.edu.vn",
        "phone":"948582732",
        "regDate":"2023-11-01T00:00:00",
        "userName": "hungnh219@gmail.com"
    },
	
}

//add userlist into localStorage
function addUserList(userlist) {
    localStorage.setItem('userList',JSON.stringify(userlist))
}

addUserList(userList)

function getUserList() {
    let userList=JSON.parse(localStorage.getItem('userList'))
    document.getElementsByClassName('detail-info')[0].children[1].innerHTML=``
    for(let x in userList) {
        
        document.getElementsByClassName('detail-info')[0].children[1].innerHTML+=` 
                            <tr class="user-info-row">
                                <td class="ID">${userList[x].id}</td>  
                                <td class="User name">${userList[x].userName}</td>
                                <td class="First name">${userList[x].firstName}</td>
                                <td class="Last name">${userList[x].lastName}</td>
                                <td class="Email">${userList[x].mail}</td>
                                <td class="Phone">${0+userList[x].phone}</td>
                                <td class="Birthday">${userList[x].birthYear}</td>
                                <td class="Register date">${userList[x].regDate.slice(0,10)}</td>
                                <td class="product-actions">
                                    <button class="delete-button" onclick="deleteUser(this)">Delete</button>
                                    <button class="changes-button" onclick="toggleModalStaff()">Changes</button>
                            </td>
                            </tr>
    `
    }
}
getUserList()



//remove user
function deleteUser(curr) {
    let id_user=curr.parentElement.parentElement.children[0].textContent
    console.log(id_user)
    let userList=JSON.parse(localStorage.getItem('userList'))
    for (let x in userList) {
        if(userList[x].id==id_user) {
            delete  userList[x]
        }
    }
    addUserList(userList)
    getUserList()
}
