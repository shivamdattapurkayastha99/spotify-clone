let audioElement=new Audio('1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songs=[
    {songName:"alvida1",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida2",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida3",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida4",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida5",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida6",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida7",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida8",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida9",filepath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"alvida10",filepath:"1.mp3",coverPath:"cover1.jpg"},
    
]
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log("timeupdate");

})