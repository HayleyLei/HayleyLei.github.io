const addeditem = document.querySelectorAll("#add-to-cart");

for(var i = 0; i < addeditem.length; i++) {
    addeditem[i].addEventListener("click", myFunction1);
}

function myFunction1() {
    console.log("clicked");
    window.event.returnValue=false;
    window.location = 'added.html';
}

const go_product = document.querySelectorAll(".product-link");
for(var i = 0; i < go_product.length; i++) {
    go_product[i].addEventListener("click", function(){
        window.location = 'product.html';
    });
}

function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    updateTotalPrice();
  }
  
function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
    updateTotalPrice();
}
function updateTotalPrice(){
    var quantity = document.querySelectorAll(".quan");
    var price = document.querySelectorAll(".unit-price");
    var q=0;
    var p=0;
    for (var i=0;i<quantity.length;i++) {
        q = q + parseInt(quantity[i].value);
        p = p + parseInt(quantity[i].value) * parseFloat(price[i].textContent.split("£")[1]);
    }
    document.getElementsByClassName("total-quantity")[0].textContent = q;
    document.getElementsByClassName("total-price")[0].textContent = p.toFixed(2);
}

// automatically calculate the total
var quantity = document.querySelectorAll(".quan");
var price = document.querySelectorAll(".unit-price");
var q=0;
var p=0;
for (var i=0;i<quantity.length;i++) {
    q = q + parseInt(quantity[i].value);
    p = p + parseInt(quantity[i].value) * parseFloat(price[i].textContent.split("£")[1]);
}
document.getElementsByClassName("total-quantity")[0].textContent = q;
document.getElementsByClassName("total-price")[0].textContent = p.toFixed(2);


const display = document.getElementsByClassName("fa-xmark");
const item = document.getElementsByClassName("bot-item-icons");
console.log(item);
for(i=0;i<display.length;i++){
    display[i].addEventListener("click", e =>{
        e.target.parentNode.parentNode.parentNode.remove();
        updateTotalPrice();
    });
}

// var quantity = document.querySelectorAll(".quantity");
// var price = document.querySelectorAll(".unit-price");
// var q=0;
// var p=0;
// console.log(quantity);
// for (var i=0;i<quantity.length;i++) {
//     q = q + parseInt(quantity[i].textContent.split(" ")[1]);
//     p = p + parseInt(quantity[i].textContent.split(" ")[1]) * parseFloat(price[i].textContent.split("£")[1]);
// }
// document.getElementsByClassName("total-quantity")[0].textContent = q;
// document.getElementsByClassName("total-price")[0].textContent = p.toFixed(2);