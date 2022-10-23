 var status1="";
function setup(){
    canvas=createCanvas(480,360);
    
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modeloaded);
    document.getElementById("status").innerHTML="Detecting objects";
}
function draw(){
    image(video,0,0,480,360)
}
function modeloaded(){
    console.log("Model is loaded");
    status1=true;
}