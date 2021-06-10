var status="";
var video="";
function setup(){
canvas=createCanvas(400,300)
canvas.position(560,300)
}
function draw(){
image(video,0,0,400,300)
}
function preload(){
    video=createVideo("video.mp4");
    video.hide();

}
function cs(){
objectDetector=ml5.objectDetector("cocossd",modeloaded)
}
function modeloaded(){
    console.log("Your model has been loaded")
    document.getElementById("Status").innerHTML="Detecting objects"
    status=true
    video.loop();
    video.speed(1);
    video.volume(0)
}