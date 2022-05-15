var title = document.querySelector("h1");
var artist = document.querySelector("h2");
var album = document.querySelector("img");
var mp3 = document.querySelector("source");
var progressBar = document.getElementById('progressBar');



var songs = [
    {
        id:0,
        title:"In The End",
        artist:"Linkin Park",
        album:"./imgs/hybrid.jpg",
        mp3: "/music/0.mp3",
    },
    {
        id:1,
        title:"Somewhere I Belong",
        artist:"Linkin Park",
        album:"./imgs/meteora.jpg",
        mp3: "/music/1.mp3",
    }
];
var i = 0;
var song = songs[i];

const play = document.getElementById("play");
const pause = document.getElementById("pause");

var myAudio = document.getElementById("myAudio");
var isPaused = false;

// document.querySelector("h1").textContent= song.title;
// document.querySelector("h2").textContent= song.artist;
// document.querySelector("img").setAttribute("src", song.album);
// document.querySelector("source").setAttribute("src", song.mp3);

function next(){
    var n = myAudio.duration - myAudio.currentTime;
    if(n === 0){
        nextSong();
    }
}
function updateProgressBar(){
    progressBar.max = myAudio.duration;
    progressBar.value = myAudio.currentTime;
}
function changeProgressBar() {
    myAudio.currentTime = progressBar.value;
};

function currentSong(song){
    title.textContent = song.title;
    artist.textContent = song.artist;
    album.setAttribute("src", song.album);
    myAudio.setAttribute("src", song.mp3);
}
function playAudio() {
    isPaused = false;
    myAudio.play();
    if(!isPaused){
        play.style.display = 'none';
        pause.style.display = '';
    }
}
function pauseAudio() {
    isPaused = true;
    myAudio.pause();
    if(isPaused){
        play.style.display = '';
        pause.style.display = 'none';
    }
}
function nextSong(){
    i++;
    if(i < songs.length){
        song = songs[i]
    }else{
        i = 0;
        song = songs[i]
    }
    currentSong(song)
    playAudio(); 
}
function prevSong(){
    i--;
    if(i < 0){
        i = songs.length - 1;
        song = songs[i];
    }else{
        song = songs[i];
    }
    currentSong(song)
    playAudio();

}

window.onload = function(){
    pause.style.display = 'none';
    currentSong(song);
    setInterval(updateProgressBar, 500);
    setInterval(next, 500);

}