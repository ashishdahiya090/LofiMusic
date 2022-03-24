var Volu=100;
var IsMuted = false;
var audio ;
var IsPaused = false
function SelectSong(SongNo) {
    const SongArray = ['Songs/testSong.mp3','Songs/LofiHindi.m4a','Songs/SadHindi.m4a','Songs/SoftHindi.m4a','Songs/LofiEnglish.m4a','Songs/SadEnglish.m4a'];
    console.log("Select Song function open");
    audio = new Audio(SongArray[SongNo]);
    console.log(SongNo);
}

function Play() {
    if (!IsPaused)
    {
        audio.play();
        console.log("Song started");
        document.getElementById("PlayPaused").src="Pause.png";
        IsPaused=true;
    }
    else{
        audio.pause();
        console.log("Song paused");
        document.getElementById("PlayPaused").src="Play.png";
        IsPaused=false;

    }
}
function Pause(){

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