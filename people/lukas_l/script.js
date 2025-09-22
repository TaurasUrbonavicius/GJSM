let house = document.getElementById("house")
let car = document.getElementById("car")
house.addEventListener("click", () =>  {
    house.style.backgroundImage = "url('img/pngimg.com - explosion_PNG15352.png')"

    setTimeout(idk, 2000)
});

function idk(){
    house.style.backgroundImage = "url('img/orange-color-solid-background-1920x1080.png')"
}
function idk2(){
    car.style.backgroundImage = "url('img/orange-color-solid-background-1920x1080.png')"
}
car.addEventListener("click", () =>  {
    car.style.backgroundImage = "url('img/pngimg.com - explosion_PNG15352.png')"

    setTimeout(idk2, 2000)
});