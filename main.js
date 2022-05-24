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
  }
  
function decreaseCount(a, b) {
var input = b.nextElementSibling;
var value = parseInt(input.value, 10);
if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
}
}

// var quantity = document.querySelectorAll(".quan");
// var price = document.querySelectorAll(".unit-price");
// // var total_q = document.getElementsByClassName("total-quantity");
// // var tatol_p = document.getElementsByClassName("total-price");
// var q=0;
// var p=0;
// for (var i=0;i<quantity.length;i++) {
//     q = q + parseInt(quantity[i].value);
//     p = p + parseInt(quantity[i].value) * parseFloat(price[i].text);
// }
// document.getElementsByClassName("total-quantity").text = q;
// document.getElementsByClassName("total-price").text = p;
// console.log(price[0]);
