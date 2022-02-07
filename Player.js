
var audio = new Audio('Songs/testSong.mp3');
var Volu=100;
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
        document.getElementById("Mute").src="Mute.png";
        Volume(0);
        IsMuted=true;
        console.log("audio muted");

    }
    else {
        document.getElementById("Vol_Input").value=Volu;
        document.getElementById("Mute").src="Sound.png";
        Volume(Volu/100);
        IsMuted=false;
        console.log("audio unMuted");

    }
}
function VolumeRange(){
    var vol=document.getElementById("Vol_Input").value;
        console.log(vol);
        Volu=vol;
        Volume(vol/100);

}
function Volume(volume){
    audio.volume=volume ;
    console.log(volume);
}