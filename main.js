object=[];
var status="";
var video="";
function setup(){
canvas=createCanvas(400,300)
canvas.position(560,300)
}
function draw(){
image(video,0,0,400,300)
if(status!=""){
    objectDetector.detect(video,gotResult)
document.getElementById("Status").innerHTML="Objects Detected"
document.getElementById("noo").innerHTML=object.length;
    for(i=0;i<object.length;i++){
        fill(255,0,0)
        textSize(23)
        text(object[i].label,object[i].x,object[i].y)
        noFill()
        stroke("red")
        rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }
}
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
function gotResult(error,result){
if(error){
    console.log(error)
}
else{
    console.log(result)
    object=result;
}
}