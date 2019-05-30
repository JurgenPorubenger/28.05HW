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

    let greenRoad = document.querySelector(".green_road");
    let redRoad = document.querySelector(".red_road");

    greenRoad.classList.add("red_road");
    console.log(greenRoad);
    greenRoad.classList.remove("green_road");
    // console.log(horizontal);
    redRoad.classList.add("green_road");
    redRoad.classList.remove("red_road");
})