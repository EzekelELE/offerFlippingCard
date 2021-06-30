var main = document.querySelector(".main");
var button = document.querySelectorAll(".press");

button.forEach(element => {
    element.addEventListener("click",function(){
        main.classList.toggle("rotate");
        });
});
