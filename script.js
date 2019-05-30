let alarmButton = document.querySelector(".alarm_button");
alarmButton.addEventListener("click", function () {

    let redLight = document.querySelector(".red");
    let greenLight = document.querySelector(".green");

    redLight.classList.add("green");
    redLight.classList.remove("red");
    greenLight.classList.add("red");
    greenLight.classList.remove("green");

    let redLightSecond = document.querySelector(".red_second");
    let greenLightSecond = document.querySelector(".green_second");

    redLightSecond.classList.add("green_second");
    redLightSecond.classList.remove("red_second");
    greenLightSecond.classList.add("red_second");
    greenLightSecond.classList.remove("green_second");

    let horizontal = document.querySelector(".horizontal_road");
    let vertical = document.querySelector(".vertical_road");

    horizontal.classList.add("red_road");
    horizontal.classList.remove(".horizontal_road");
    vertical.classList.add("green_road");
    vertical.classList.remove("vertical_road");
    console.log(horizontal)
})