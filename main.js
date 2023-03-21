function setup(){
    video = createCapture(VIDEO);
    video.size(600, 600);

    canvas = createCanvas(550, 550);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#F3A8BC');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}