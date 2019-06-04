// let alarmButton = document.querySelector(".alarm_button");
// alarmButton.addEventListener("click", function () {

//     let redLight = document.querySelector(".red");
//     let greenLight = document.querySelector(".green");

//     redLight.classList.add("green");
//     redLight.classList.remove("red");
//     greenLight.classList.add("red");
//     greenLight.classList.remove("green");


//     let redLightSecond = document.querySelector(".red_second");
//     let greenLightSecond = document.querySelector(".green_second");

//     redLightSecond.classList.add("green_second");
//     redLightSecond.classList.remove("red_second");
//     greenLightSecond.classList.add("red_second");
//     greenLightSecond.classList.remove("green_second");

//     let greenRoad = document.querySelector(".green_road");
//     let redRoad = document.querySelector(".red_road");

//     greenRoad.classList.add("red_road");
//     greenRoad.classList.remove("green_road");
//     redRoad.classList.add("green_road");
//     redRoad.classList.remove("red_road");
// })


// let alarmButton = document.querySelector(".alarm_button");
// alarmButton.addEventListener("click", function () {
//     let redLight = document.querySelector("#redId");
//     let greenLight = document.querySelector("#greenId");
//     let redLight2 = document.querySelector("#redId2");
//     let greenLight2 = document.querySelector("#greenId2");
//     let greenRoad = document.querySelector(".green_road");
//     let redRoad = document.querySelector(".red_road");
//     if (redLight.classList.contains("red")||redLight.classList.contains("green")&&greenLight.classList.contains("green")||greenLight.classList.contains("red")) {
//         redLight.classList.toggle("green");
//         redLight.classList.toggle("red");
//         greenLight.classList.toggle("red");
//         greenLight.classList.toggle("green");

//         redLight2.classList.toggle("red");
//         redLight2.classList.toggle("green");
//         greenLight2.classList.toggle("red");    
//         greenLight2.classList.toggle("green");

//         greenRoad.classList.toggle("red_road");
//         greenRoad.classList.toggle("green_road");
//         redRoad.classList.toggle("green_road");
//         redRoad.classList.toggle("red_road");
        
//     }

// })

let main = document.getElementById('main');
main.addEventListener("click", function() {
    // console.log(event.target.tagName);
})
let red = document.getElementById('red');
red.addEventListener("click", function() {
    console.log("red");
})
let p = document.querySelector('p');
p.addEventListener("click", function() {
    console.log("P");
});
let h = document.querySelector('h1');
h.addEventListener("click", function() {
    console.log("H1");
});
let u = document.querySelector('ul');
u.addEventListener("click", function() {
    console.log("UL");
});

let l = document.querySelector("ul>li");
l.addEventListener("click",function() {
    console.log("LI");
});


