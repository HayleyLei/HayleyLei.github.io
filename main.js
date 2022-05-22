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
