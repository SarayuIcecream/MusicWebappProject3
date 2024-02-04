song1="";
song2="";
leftWrist_x=0;
leftWrist_y=0;
rightWrist_x=0;
rightWrist_y=0;


function preload() {
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
    }
    
    function draw() {
    image(video,0,0,600,500);
    }



function setup() {
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotPoses);
}

function gotPoses(results) {
if (results.length>0) {
console.log(results); 

leftWrist_x=results[0].pose.leftWrist.x;
leftWrist_y=results[0].pose.leftWrist.y;
rightWrist_x=results[0].pose.rightWrist.x;
rightWrist_y=results[0].pose.rightWrist.x;
}

}

function modelLoaded() {
console.log("modelIsLoaded");
}



