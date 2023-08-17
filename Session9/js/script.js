// //creat div (parent)
// let element = document.createElement('div')
// document.body.appendChild(element)
// element.setAttribute('id' , 'con')
// element.classList.add('box')

// ///creat h1 (child)
// let title = document.createElement('h1')
// element.appendChild(title)
// title.innerHTML = "Welcome"

let proName = document.getElementById("productname");
let proPrice = document.getElementById("productprice");
let proCat = document.getElementById("productcatogry");
let proDes = document.getElementById("produtdescription");
let addbtn = document.getElementById("addBtn");
let updateBtn = document.getElementById("updateBtn");
let arrayOfPro = [];
if (localStorage.getItem("products") !== null) {
  arrayOfPro = JSON.parse(localStorage.getItem("products"));
  loopData();
}

addbtn.addEventListener("click", () => {
  let objectOfPro = {
    pname: proName.value,
    pprice: proPrice.value,
    pCat: proCat.value,
    pDesc: proDes.value,
  };
  arrayOfPro.push(objectOfPro);
  loopData();
  localStorage.setItem("products", JSON.stringify(arrayOfPro));
  clearData();
});
function loopData() {
    let tableData = "";
  let x = 0;
  for (let i = 0; i < arrayOfPro.length; i++) {
    tableData += `
            <tr>
                <td>${++x}</td>
                <td>${arrayOfPro[i].pname}</td>
                <td>${arrayOfPro[i].pprice}</td>
                <td>${arrayOfPro[i].pCat}</td>
                <td>${arrayOfPro[i].pDesc}</td>
                <td><button class="delBtn" onclick="deleteData(${i})">Delete</button></td>
                <td><button class="upBtn" onclick="updateData(${i})" >Update</button></td>
            </tr>
         `;
        }
        document.getElementById('info').innerHTML = "Welcome"
    }

function deleteData(element) {
  arrayOfPro.splice(element, 1);
  loopData();
  localStorage.setItem("products", JSON.stringify(arrayOfPro));
}
let y;
function updateData(indexElment) {
  y = indexElment;
  proName.value = arrayOfPro[indexElment].pname;
  proPrice.value = arrayOfPro[indexElment].pprice;
  proCat.value = arrayOfPro[indexElment].pCat;
  proDes.value = arrayOfPro[indexElment].pDesc;
  addbtn.classList.toggle("show");
  updateBtn.classList.toggle("show");
}
updateBtn.addEventListener("click", () => {
  arrayOfPro[y].pname = proName.value;
  arrayOfPro[y].pprice = proPrice.value;
  arrayOfPro[y].pCat = proCat.value;
  arrayOfPro[y].pDesc = proDes.value;
  addbtn.classList.toggle("show");
  updateBtn.classList.toggle("show");
  loopData();
  localStorage.setItem("products", JSON.stringify(arrayOfPro));
  clearData();
});

function clearData() {
  proName.value = "";
  proPrice.value = "";
  proCat.value = "";
  proDes.value = "";
}
