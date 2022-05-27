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