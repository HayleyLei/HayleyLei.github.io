const display = document.getElementsByClassName("fa-xmark");
const item = document.getElementsByClassName("bot-item-icons");
console.log(item);
for(i=0;i<display.length;i++){
    display[i].addEventListener("click", e =>{
        e.target.parentNode.parentNode.parentNode.remove();
        updateTotalPrice();
    });
}
function updateTotalPrice(){
    var quantity = document.querySelectorAll(".quantity");
    var price = document.querySelectorAll(".unit-price");
    var q=0;
    var p=0;
    console.log(quantity);
    for (var i=0;i<quantity.length;i++) {
        q = q + parseInt(quantity[i].textContent.split(":")[1]);
        p = p + parseInt(quantity[i].textContent.split(":")[1]) * parseFloat(price[i].textContent.split("£")[1]);
    }
    document.getElementsByClassName("total-quantity")[0].textContent = q;
    document.getElementsByClassName("total-price")[0].textContent = p.toFixed(2);
    document.getElementsByClassName("total-quantity")[1].textContent = q;
    document.getElementsByClassName("total-price")[1].textContent = p.toFixed(2);
}

var quantity = document.querySelectorAll(".quantity");
var price = document.querySelectorAll(".unit-price");
var q=0;
var p=0;
console.log(quantity);
for (var i=0;i<quantity.length;i++) {
    q = q + parseInt(quantity[i].textContent.split(":")[1]);
    p = p + parseInt(quantity[i].textContent.split(":")[1]) * parseFloat(price[i].textContent.split("£")[1]);
}
document.getElementsByClassName("total-quantity")[0].textContent = q;
document.getElementsByClassName("total-price")[0].textContent = p.toFixed(2);
document.getElementsByClassName("total-quantity")[1].textContent = q;
document.getElementsByClassName("total-price")[1].textContent = p.toFixed(2);