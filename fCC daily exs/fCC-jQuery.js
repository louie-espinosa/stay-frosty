"use strict";

// $(document).ready(function() {
//     $("button").addClass("animated fadeOut");
//     $(".btn").animate("animated shake");
//     $("button").last().animate("blue");
//
// });
let buttons = document.querySelectorAll("button");
    for(let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener("click", function(){
            this.classList.toggle("animate");
        })
    }
let borders = document.querySelectorAll(".border");
    for (let border of borders) {
        border.addEventListener("mouseenter", function () {
            this.classList.toggle("shake");
        })
    }
let btnSix = document.querySelector("#target6");
    btnSix.classList.toggle("fade-out")
//param for deep must be true so that node clones the entire subtree including text
let cloned = document.getElementById("target5").cloneNode(true);
let newHome = document.getElementById("left-well");
console.log(cloned);
newHome.appendChild(cloned);
//jQuery equivalent without vars is $("#target2").clone().appendTo("left-well");

document.getElementById("target1").parentElement.style.backgroundColor = "red";
//$("#target1").parent().css("background-color", "red")

document.getElementById("right-well").firstElementChild.style.color = "orange";
document.getElementById("right-well").firstElementChild.nextElementSibling.style.color = "orange";
document.getElementById("right-well").lastElementChild.style.color = "orange";
//$("#right-well").children().css("color", "orange")