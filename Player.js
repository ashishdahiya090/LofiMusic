
var audio = new Audio('Songs/testSong.mp3');
var Volu=100;
var vol=document.getElementById("Vol_Input");
if(vol) {
    vol.oninput = Volume
}
var IsMuted = false;
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
function Mute(){
    if(!IsMuted){
        document.getElementById("Vol_Input").value ="0";
        console.log("audio muted");
        document.getElementById("Mute").src="Mute.png";
        IsMuted=true;
    }
    else {
        document.getElementById("Vol_Input").value=Volu;
        console.log("audio unMuted");
        document.getElementById("Mute").src="Sound.png";
        IsMuted=false;
    }
}

function Volume(){
    audio.volume=vol.value/100 ;
    Volu = vol.value;
    console.log(vol.value/100);
}