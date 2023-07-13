difference = 0;
leftWristx = 0;
rightWristx = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(550, 350);
    canvas.position(560, 200);
    video = createCapture(VIDEO);
    video.size(550, 550);

    posenet = ml5.poseNet(video, ml);
    posenet.on('pose', gotposes);
}

function ml() {
    console.log("Posenet is on");
}

function gotposes(results) {
    if (results.length > 0) {
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}