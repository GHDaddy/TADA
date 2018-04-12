"use strict";

let audio = document.getElementById("myAudio");
document.getElementById("header1").addEventListener("click", playSound);

function playSound(){
    console.log("PLAYING SOUND");
    audio.play();
}


