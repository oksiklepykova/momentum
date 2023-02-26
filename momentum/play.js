
const previous = document.querySelector('#pre');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const title = document.querySelector('#title');
const autoPlay = document.querySelector('#auto');
const present = document.querySelector('#present');
const total = document.querySelector('#total');
const artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index = 0;
let playingSong = false;

//create a audio Element
let track = document.createElement('audio');

const playList = [
{
   name: "fool me once",
   path: "../assets/music/song1.mp3",
   singer: "Olivia Addams"
},
{
   name: "Crazy land",
   path: "../assets/music/song2.mp3",
   singer: "Christos Stylianou"
},
{
   name: "asereje",
   path: "../assets/music/song3.mp3",
   singer: "dj quba"
},
{
   name: "up",
   path: "../assets/music/song4.mp3",
   singer: "inna"
},
{
   name: "I'm good",
   path: "../assets/music/song5.mp3",
   singer: "david guetta"
}
];

//function load the music

function loadTrack(index) {
    clearInterval(timer);
    resetSlider();

    track.src = playList[index].path;
    title.textContent = playList[index].name;
    artist.textContent = playList[index].singer;
    track.load();

    timer = setInterval(rangeSlider, 1000);
    total.textContent = playList.length;
    present.textContent = index + 1;
    
}

loadTrack(index);


//mute sound


//reset song slider
function resetSlider() {
    slider.value = 0;
}


// checking.. the song is playing or not
function justPlay() {
    if (playingSong == false) {
        playsong();
    } else {
        pausesong();
    }
}

//play song

function playsong() {
    track.play();
    playingSong = true;
    play.innerHTML = '<i class="bx bx-pause" ></i>';
}

//pause song
function pausesong() {
    track.pause();
    playingSong =false;
    play.innerHTML = '<i class="bx bx-play"></i>'
}

// next song
function nextSong() {
    if (index < playList.length - 1) {
       index += 1;
       loadTrack(index);
       playsong();
    } else {
        index = 0;
        loadTrack(index);
        playsong()
    }
}

// previous song
function previousSong() {
    if (index > 0) {
        index -= 1;
        loadTrack(index);
        playsong();
    } else {
        index = playList.length;
        loadTrack(index);
        playsong();
    }
}

// change slider position
function changeDuration() {
    sliderPosition = track.duration * (slider.value / 100);
    track.currentTime = sliderPosition;
}

// autoplay function 
function autoplaySwitch() {
    if (autoplay == 1) {
        autoplay = 0;
        autoPlay.style.background = "rgba(255,255,255,0.2)";
    } else {
        autoplay = 1;
        autoPlay.style.background =  "#FF8A65";
    }
}




function rangeSlider() {
    let position = 0;

    //update slider position
    if(!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    //function will run when the song is over
    if(track.ended) {
        play.innerHTML = '<i class="bx bx-play"></i>'
        if (autoplay == 1) {
            index += 1;
            loadTrack(index);
            playsong();
        }
    }
}