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
let wells = document.querySelectorAll(".well");
    for (let well of wells) {
        well.addEventListener("mouseenter", function () {
            this.classList.toggle("shake");
        })
    }
let btnSix = document.querySelector("#target6");
    btnSix.classList.toggle("fade-out")

