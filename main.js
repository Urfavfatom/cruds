var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");
var productList=[];
function addProduct(){
    var product = {
        name : productNameInput.value ,
        price : productPriceInput.value ,
        category :productCategoryInput.value ,
        disc : productDescriptionInput.value
    };
    productList.push(product);
    displayData();
    clearInput();
    
    console.log(product)
}
function clearInput(){
    productNameInput.value = "" ;
    productPriceInput.value = "" ;
    productCategoryInput.value = "";
    productDescriptionInput.value ="";
}

function displayData(){
    var cartona = "";
    for(var i =0; i<productList.length ; i++){
        cartona+=`<tr>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].disc}</td>
    </tr> `
    }
    document.getElementById("tableBody").innerHTML=cartona;
}
