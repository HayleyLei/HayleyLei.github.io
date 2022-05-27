const display = document.getElementsByClassName("fa-xmark");
const item = document.getElementsByClassName("bot-item-icons");

for(i=0;i<display.length;i++){
    display[i].addEventListener("click", e =>{
        e.target.parentNode.parentNode.parentNode.remove();
        updateTotalPrice();
    });
}