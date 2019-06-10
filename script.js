// // let alarmButton = document.querySelector(".alarm_button");
// // alarmButton.addEventListener("click", function () {

// //     let redLight = document.querySelector(".red");
// //     let greenLight = document.querySelector(".green");

// //     redLight.classList.add("green");
// //     redLight.classList.remove("red");
// //     greenLight.classList.add("red");
// //     greenLight.classList.remove("green");


// //     let redLightSecond = document.querySelector(".red_second");
// //     let greenLightSecond = document.querySelector(".green_second");

// //     redLightSecond.classList.add("green_second");
// //     redLightSecond.classList.remove("red_second");
// //     greenLightSecond.classList.add("red_second");
// //     greenLightSecond.classList.remove("green_second");

// //     let greenRoad = document.querySelector(".green_road");
// //     let redRoad = document.querySelector(".red_road");

// //     greenRoad.classList.add("red_road");
// //     greenRoad.classList.remove("green_road");
// //     redRoad.classList.add("green_road");
// //     redRoad.classList.remove("red_road");
// // })


// // let alarmButton = document.querySelector(".alarm_button");
// // alarmButton.addEventListener("click", function () {
// //     let redLight = document.querySelector("#redId");
// //     let greenLight = document.querySelector("#greenId");
// //     let redLight2 = document.querySelector("#redId2");
// //     let greenLight2 = document.querySelector("#greenId2");
// //     let greenRoad = document.querySelector(".green_road");
// //     let redRoad = document.querySelector(".red_road");
// //     if (redLight.classList.contains("red")||redLight.classList.contains("green")&&greenLight.classList.contains("green")||greenLight.classList.contains("red")) {
// //         redLight.classList.toggle("green");
// //         redLight.classList.toggle("red");
// //         greenLight.classList.toggle("red");
// //         greenLight.classList.toggle("green");

// //         redLight2.classList.toggle("red");
// //         redLight2.classList.toggle("green");
// //         greenLight2.classList.toggle("red");    
// //         greenLight2.classList.toggle("green");

// //         greenRoad.classList.toggle("red_road");
// //         greenRoad.classList.toggle("green_road");
// //         redRoad.classList.toggle("green_road");
// //         redRoad.classList.toggle("red_road");
        
// //     }

// // })

// let main = document.getElementById('main');
// main.addEventListener("click", function() {
//     // console.log(event.target.tagName);
// })
// let red = document.getElementById('red');
// red.addEventListener("click", function() {
//     console.log("red");
// })
<<<<<<< HEAD
// let p = document.querySelector('p');
// p.addEventListener("click", function() {
//     console.log("P");
// });
// let h = document.querySelector('h1');
// h.addEventListener("click", function() {
//     console.log("H1");
// });
// let u = document.querySelector('ul');
// u.addEventListener("click", function() {
//     console.log("UL");
// });

// let l = document.querySelector("ul>li");
// l.addEventListener("click",function() {
//     console.log("LI");
// });



var Person = function(name) {
    this.name = name;
    this.canTalk = true;
    this.greet = function() {
        if (this.canTalk) {
            console.log('Привет, я ' + this.name);
        }
    };
};

var Employee = function(name, title) {
    this.name = name;
    this.title = title;
    this.greet = function() {
        if (this.canTalk) {
            console.log('Привет, я ' + this.name + ', ' + this.title);
        }
    };
};
Employee.prototype = new Person();

var Customer = function(name) {
    this.name = name;
};
Customer.prototype = new Person();

var Mime = function(name) {
    this.name = name;
    this.canTalk = false;
};
Mime.prototype = new Person();

var bob = new Employee('Боб', 'Строитель');
var joe = new Customer('Джо');
var rg = new Employee('Ред Грин', 'Разнорабочий');
var mike = new Customer('Майк');
var mime = new Mime('Мим');
bob.greet();
joe.greet();
rg.greet();
mike.greet();
mime.greet();
=======

// let main = document.getElementById('main');
// main.addEventListener("click", function() {
//         console.log(event.target.tagName);
// })
// let red = document.getElementById('red');
// red.addEventListener("click", function() {
//     // console.log("red");
// })
// let p = document.querySelector('p');
// p.addEventListener("click", function() {
//     // console.log("P");
// });
// let h = document.querySelector('h1');
// h.addEventListener("click", function() {
//     // console.log("H1");
// });
// let u = document.querySelector('ul');
// u.addEventListener("click", function() {
//     // console.log("UL");
// });
//
// let l = document.querySelector("ul>li");
// l.addEventListener("click",function() {
//     // console.log("LI");
// });

// function f(t) {
//     console.log(t);
// }
// function f1(cb,t) {
//     setTimeout(function () {
//         cb(t);
//     }, 1000);
// }
// f1(f,"ere");


// function f2(a, text) {
//     console.log(a());
//     console.log(text);
// }
//
// function f3() {
//     return "wqq";
// }
//
// f2(f3,"jjjjj");

// function f2(a) {
//     console.log(Math.pow(a,a));
//     console.log(a*a*a);
// }
// function f3(a) {
//     console.log(a*a);
// }
// f2(3);
// f3(4);


// function display(cb) {
//     cb();
// }
// display(function () {
//     console.log("ananistus");
// });

// (function f() {
//      console.log("dwdwd")
//  })();

// let h = document.querySelector('h1');
// let p = document.querySelector('p');
// p.addEventListener("click", red);
// h.addEventListener("mouseover", function () {
//     event.target.style.fontSize=60+"px"
// });


// function red(e) {
//     e.target.style.color="red";
//     e.target.style.border="solid";
//     e.target.style.backgroundColor="yellow";
// }

 // document.querySelector('#first').onmousemove =function(event) {
 //     let X = event.offsetX;
 //     let Y = event.offsetY;
 //     document.querySelector('#second').o;
 //     document.querySelector('#second').event.offsetY=Y;
 //    // console.log(X);
 // }
//
// let first = document.querySelector('#first');
// let point = document.querySelector('#point');
// first.addEventListener("mousemove", function () {
//     let X=event.offsetX;
//     let Y=event.offsetY;
//     if (Y>5&&Y<195) {
//         if (X>5&&X<195) {
//             point.style.top=Y+'px';
//             point.style.left=X+'px';
//             point2.style.bottom=Y+'px';
//             point2.style.right=X+'px';
//     }
//     }
// });

// for (let i=0; i<10; i++) {
//     setTimeout(function aw(q) {
//         return ap(i);
//     }, 1000);
//
//     function ap(qqq) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000)
//     }
// }


// for (let i=0; i<10; i++) {
//     let time = i == 0?1000:1000*(i+1);
//     setTimeout(function () {
//         console.log(time);
//     }, time);
// }

// let a = 5;
// setInterval(function () {
//     if (a===5) {
//         console.log(a);
//     }else {clearInterval()}
// }, 1000);
// setTimeout(function () {
//     a=6;
// }, 5000);


let first = document.querySelector('#first');


<<<<<<< HEAD
let point = document.querySelector('#point');
point.addEventListener("mousedown", function () {
   if (event.which === 1) {
       let rect = point.getBoundingClientRect();
       let X = first.event.offsetX;
       let Y = first.event.offsetY;
       console.log(X);
       console.log(Y);
       // rect.top.x==X;
       // rect.top.y==Y;

       // console.log(X);
    }

    // if (Y > 5 && Y < 195) {
    //     if (X > 5 && X < 195) {
    //         point.style.top = Y + 'px';
    //         point.style.left = X + 'px';
    //         point2.style.bottom = Y + 'px';
    //         point2.style.right = X + 'px';
    //     }
    // }
});
point.addEventListener("mouseup", function () {
    if (event.which === 1) {}
})
=======
>>>>>>> fa61191f1b7789340f47adb3ca5ce7c773ce711f
>>>>>>> a7675b2efc27da91b9485ea03d9d9ff4f8e68743
