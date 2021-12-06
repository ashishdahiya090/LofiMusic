
var audio = new Audio('Songs/testSong.mp3');

var vol=document.getElementById("Vol_Input");
if(vol) {
    vol.oninput = Volume
}
function random(min,max){
   return  Math.floor(Math.random()*(max-min+1)+min);
}
function Play() {
    audio.play();
    console.log("Song started");
}
function Pause(){
    audio.pause();
    console.log("Song paused");
}

function Volume(){
    audio.volume=vol.value/100 ;
    console.log(vol.value/100);
}